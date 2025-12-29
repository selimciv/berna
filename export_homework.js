// Firebase Homework Export Script
// Node.js ile çalışır: node export_homework.js

const https = require('https');
const fs = require('fs');

const firebaseConfig = {
    databaseURL: "https://bernavocab-default-rtdb.europe-west1.firebasedatabase.app"
};

// Firebase'den veri çek
function fetchFirebaseData(path) {
    return new Promise((resolve, reject) => {
        const url = `${firebaseConfig.databaseURL}/${path}.json`;

        https.get(url, (res) => {
            let data = '';

            res.on('data', (chunk) => {
                data += chunk;
            });

            res.on('end', () => {
                try {
                    resolve(JSON.parse(data));
                } catch (e) {
                    reject(e);
                }
            });
        }).on('error', reject);
    });
}

// Excel CSV formatına çevir
function convertToCSV(data) {
    if (!data) {
        console.log('Veri bulunamadı.');
        return null;
    }

    const rows = [];

    // Header
    rows.push(['Sınıf', 'No', 'Ad Soyad', 'Ödev Konusu', 'Tarih', 'Durum', 'Toplam Yapmadı', 'Toplam Yaptı', 'Toplam Yarım', 'Toplam Kontrol Edilemedi']);

    // Her sınıf için
    for (const className in data) {
        const classData = data[className];

        if (!classData.homeworks) continue;

        // Student map oluştur
        const studentStats = {};

        for (const hwKey in classData.homeworks) {
            const homework = classData.homeworks[hwKey];
            const hwName = homework.name || 'İsimsiz Ödev';
            const hwDate = homework.date || '';

            if (homework.students) {
                for (const studentId in homework.students) {
                    const student = homework.students[studentId];
                    const studentName = student.name || 'İsimsiz';
                    const studentNo = student.no || '';
                    const status = student.status || 'yapilmadi';

                    // Student stat initialize
                    if (!studentStats[studentId]) {
                        studentStats[studentId] = {
                            name: studentName,
                            no: studentNo,
                            homeworks: [],
                            yapilmadi: 0,
                            yapildi: 0,
                            yarim: 0,
                            kontrol_edilemedi: 0,
                            total: 0
                        };
                    }

                    studentStats[studentId].homeworks.push({
                        name: hwName,
                        date: hwDate,
                        status: status
                    });

                    // İstatistikler
                    studentStats[studentId][status]++;
                    studentStats[studentId].total++;
                }
            }
        }

        // Her öğrenci ve her ödev için satır ekle
        for (const studentId in studentStats) {
            const stats = studentStats[studentId];

            stats.homeworks.forEach(hw => {
                const statusText = {
                    'yapildi': 'Yaptı',
                    'yapilmadi': 'Yapmadı',
                    'yarim': 'Yarım Yaptı',
                    'kontrol_edilemedi': 'Kontrol Edilemedi'
                }[hw.status] || hw.status;

                rows.push([
                    className,
                    stats.no,
                    stats.name,
                    hw.name,
                    hw.date,
                    statusText,
                    stats.yapilmadi,
                    stats.yapildi,
                    stats.yarim,
                    stats.kontrol_edilemedi
                ]);
            });
        }
    }

    // CSV formatına çevir
    return rows.map(row => row.map(cell => `"${cell}"`).join(',')).join('\n');
}

// Ana fonksiyon
async function exportHomework() {
    try {
        console.log('Firebase\'den ödev verileri çekiliyor...');
        const data = await fetchFirebaseData('homeworks');

        console.log('Veriler işleniyor...');
        const csv = convertToCSV(data);

        if (!csv) {
            console.log('Export edilecek veri yok.');
            return;
        }

        const filename = `odev_raporu_${new Date().toISOString().split('T')[0]}.csv`;
        fs.writeFileSync(filename, '\ufeff' + csv, 'utf8'); // BOM for Excel Turkish character support

        console.log(`✅ Rapor oluşturuldu: ${filename}`);
        console.log('Excel\'de açabilirsiniz!');

        // JSON backup
        const jsonFilename = `odev_backup_${new Date().toISOString().split('T')[0]}.json`;
        fs.writeFileSync(jsonFilename, JSON.stringify(data, null, 2));
        console.log(`✅ JSON yedek oluşturuldu: ${jsonFilename}`);

    } catch (error) {
        console.error('Hata:', error);
    }
}

exportHomework();
