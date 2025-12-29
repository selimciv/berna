import json
import pandas as pd
from datetime import datetime

# Öğrenci verileri (settings.js'den)
student_data = {
    "9-B": [
        { "no": 375, "name": "KÜBRANUR ÇİFTÇİ" },
        { "no": 420, "name": "ZEKİ HAN EKMEKÇİ" },
        { "no": 438, "name": "SÜMEYRA TORUN" },
        { "no": 519, "name": "SUDE TOKTAŞ" },
        { "no": 529, "name": "SACİDE KILIÇASLAN" },
        { "no": 534, "name": "RAMAZAN ALİ" },
        { "no": 562, "name": "FEYZA TOPAL" },
        { "no": 563, "name": "TALHA AKŞEKER" },
        { "no": 585, "name": "NEHİR AKIN" },
        { "no": 615, "name": "BERAT KILIÇ" },
        { "no": 737, "name": "ZEHRA OBUZ" },
        { "no": 743, "name": "MÜZEFFER MERDELİ" },
        { "no": 748, "name": "GÖKHAN ÖZCAN" },
        { "no": 752, "name": "MURAT VATAN" },
        { "no": 755, "name": "MUHAMMED ALİ DUYĞU" },
        { "no": 760, "name": "MUSTAFA KARABACAK" },
        { "no": 776, "name": "ERDEM ALTUN" },
        { "no": 835, "name": "EDA ZEREN" },
        { "no": 888, "name": "BAHADIR ULUTAŞ" },
        { "no": 962, "name": "MUHAMMET EMİN TIRPANCİ" },
        { "no": 976, "name": "KUMSAL AKA" },
        { "no": 1000, "name": "BURAK TAŞDEMİR" },
        { "no": 1037, "name": "ECRİN ÖZTÜRK" },
        { "no": 1039, "name": "YAĞMUR ÖNDER" },
        { "no": 1040, "name": "FATMA DEMİR" },
        { "no": 1048, "name": "EMİR KAYRA BİLİCAN" },
        { "no": 1049, "name": "HATİCE ZEHRA YILDIRIM" },
        { "no": 1053, "name": "HAMZA ALİ DUYĞU" }
    ],
    "9-E": [
        { "no": 121, "name": "YASEMİN ÖZTÜRK" },
        { "no": 169, "name": "EMİN ÇAVDAR" },
        { "no": 180, "name": "TİMUÇİN SAMET BALCİ" },
        { "no": 306, "name": "FURKAN DUMANLAR" },
        { "no": 325, "name": "ESMA KUZKAYA" },
        { "no": 353, "name": "ŞAKİR ALİ" },
        { "no": 471, "name": "NUMAN ÜZÜLMEZ" },
        { "no": 532, "name": "YAKUP İSKENDER" },
        { "no": 549, "name": "ASLAN SHASHUYEV" },
        { "no": 591, "name": "MİKAİL KARAKAŞ" },
        { "no": 733, "name": "MUHAMMED EMİN ALPSOY" },
        { "no": 774, "name": "ZEHRA GÜNDÜZ" },
        { "no": 845, "name": "KÜBRA DEMİR" },
        { "no": 853, "name": "GAMZE YILMAZ" },
        { "no": 859, "name": "AZRA YILDIZ" },
        { "no": 879, "name": "NİRA NUR KESKİN" },
        { "no": 914, "name": "MURAT TURANOĞLU" },
        { "no": 919, "name": "EMRE ARDAHANLI" },
        { "no": 924, "name": "ASYA NİL DEMİR" },
        { "no": 957, "name": "ECRİN DURU ÖZTOPÇU" },
        { "no": 974, "name": "EYLÜL DEMİR" },
        { "no": 975, "name": "BEYZANUR BAHAR DEMİR" },
        { "no": 1002, "name": "EBRAR KOCAMAN" },
        { "no": 1035, "name": "MUHAMMED EMİN ALĞAN" },
        { "no": 1044, "name": "MEHTAP KORKMAZ" },
        { "no": 1050, "name": "SUNA AKÇİMEN" },
        { "no": 1051, "name": "ZEYNEP AKALAN" },
        { "no": 1072, "name": "AYSİMA SEL" }
    ],
    "11-C": [
        { "no": 112, "name": "MUSTAFA EGE HATAY" },
        { "no": 405, "name": "ALPEREN AYKAÇ" },
        { "no": 423, "name": "MUHAMMET ALİ ÖZKAN" },
        { "no": 440, "name": "BİLGE DİLMAÇ" },
        { "no": 557, "name": "ROBIIA MALIKZHONOVA" },
        { "no": 764, "name": "NEFİSE ALİ" },
        { "no": 788, "name": "MEDINA SHASHUYEVA" },
        { "no": 862, "name": "KAYRA EFE KORKMAZ" },
        { "no": 935, "name": "NAZLI YİLMAZ" },
        { "no": 1022, "name": "YUSUF KAYĞISIZ" },
        { "no": 1034, "name": "FIRAT DURDENİZ" }
    ]
}

# JSON dosyasını oku
with open('odev_backup_2025-12-28.json', 'r', encoding='utf-8') as f:
    homework_data = json.load(f)

# Excel için veri listesi
excel_data = []

# Status mapping
status_map = {
    'done': 'Yaptı',
    'pending': 'Kontrol Edilemedi',
    'missing': 'Yapmadı',
    'half': 'Yarım Yaptı'
}

# Öğrenci ID'lerinden ad-soyad bul
def get_student_info(class_name, student_id):
    """settings.js'deki öğrenci verilerinden bilgi al"""
    if class_name not in student_data:
        return student_id, "Bilinmiyor"
    
    # Class içindeki öğrencileri ara
    for student in student_data[class_name]:
        if str(student.get('no', '')) == str(student_id):
            return student['no'], student['name']
    
    return student_id, "Bilinmiyor"

# Her sınıf için
for class_name, class_data in homework_data.items():
    # Öğrenci ID'lerini topla
    student_ids = set()
    for hw_id, homework in class_data.items():
        if 'results' in homework:
            student_ids.update(homework['results'].keys())
    
    # Her öğrenci için istatistik
    for student_id in sorted(student_ids, key=lambda x: int(x)):
        student_no, student_name = get_student_info(class_name, student_id)
        
        stats = {
            'yapildi': 0,
            'yapilmadi': 0,
            'yarim': 0,
            'kontrol_edilemedi': 0,
            'toplam': 0
        }
        
        # Her ödev için bu öğrencinin durumunu kontrol et
        for hw_id, homework in class_data.items():
            hw_name = homework.get('name', 'İsimsiz')
            hw_date = homework.get('date', '')
            
            if 'results' in homework and student_id in homework['results']:
                status = homework['results'][student_id]
                status_tr = status_map.get(status, status)
                
                # İstatistikleri güncelle
                if status == 'done':
                    stats['yapildi'] += 1
                elif status == 'missing':
                    stats['yapilmadi'] += 1
                elif status == 'half':
                    stats['yarim'] += 1
                elif status == 'pending':
                    stats['kontrol_edilemedi'] += 1
                
                stats['toplam'] += 1
                
                # Excel'e ekle
                excel_data.append({
                    'Sınıf': class_name,
                    'Öğrenci No': student_no,
                    'Ad Soyad': student_name,
                    'Ödev Konusu': hw_name,
                    'Tarih': hw_date,
                    'Durum': status_tr,
                    'Toplam Ödev': stats['toplam'],
                    'Yaptı': stats['yapildi'],
                    'Yapmadı': stats['yapilmadi'],
                    'Yarım': stats['yarim'],
                    'K. Edilemedi': stats['kontrol_edilemedi']
                })

# DataFrame oluştur
df = pd.DataFrame(excel_data)

# Excel'e kaydet
excel_filename = f'odev_raporu_detayli_{datetime.now().strftime("%Y-%m-%d_%H-%M")}.xlsx'

with pd.ExcelWriter(excel_filename, engine='openpyxl') as writer:
    # Tüm veriler
    df.to_excel(writer, sheet_name='Tüm Ödevler', index=False)
    
    # Özet rapor (öğrenci bazlı)
    summary_data = []
    for class_name in sorted(df['Sınıf'].unique()):
        class_df = df[df['Sınıf'] == class_name]
        for student_no in sorted(class_df['Öğrenci No'].unique()):
            student_df = class_df[class_df['Öğrenci No'] == student_no]
            last_row = student_df.iloc[-1]  # Son satırda toplam istatistikler var
            
            summary_data.append({
                'Sınıf': class_name,
                'Öğrenci No': last_row['Öğrenci No'],
                'Ad Soyad': last_row['Ad Soyad'],
                'Toplam Ödev': last_row['Toplam Ödev'],
                'Yaptı': last_row['Yaptı'],
                'Yapmadı': last_row['Yapmadı'],
                'Yarım': last_row['Yarım'],
                'Kontrol Edilemedi': last_row['K. Edilemedi'],
                'Başarı Oranı %': round((last_row['Yaptı'] / last_row['Toplam Ödev'] * 100) if last_row['Toplam Ödev'] > 0 else 0, 1)
            })
    
    summary_df = pd.DataFrame(summary_data)
    summary_df = summary_df.sort_values(['Sınıf', 'Öğrenci No'], ascending=[True, True])
    summary_df.to_excel(writer, sheet_name='Özet Rapor', index=False)
    
    # Sınıf bazlı özet
    class_summary = []
    for class_name in sorted(df['Sınıf'].unique()):
        class_df = summary_df[summary_df['Sınıf'] == class_name]
        class_summary.append({
            'Sınıf': class_name,
            'Öğrenci Sayısı': len(class_df),
            'Ortalama Ödev': round(class_df['Toplam Ödev'].mean(), 1),
            'Ortalama Başarı %': round(class_df['Başarı Oranı %'].mean(), 1),
            'En Yüksek Başarı %': class_df['Başarı Oranı %'].max(),
            'En Düşük Başarı %': class_df['Başarı Oranı %'].min()
        })
    
    class_summary_df = pd.DataFrame(class_summary)
    class_summary_df.to_excel(writer, sheet_name='Sınıf Bazlı Özet', index=False)

print(f"✅ Excel raporu oluşturuldu: {excel_filename}")
print(f"\n📊 Özet:")
print(f"- Toplam Sınıf: {len(df['Sınıf'].unique())}")
print(f"- Toplam Öğrenci: {summary_df.shape[0]}")
print(f"- Toplam Ödev Kaydı: {len(df)}")
print(f"\nDosyalar:")
print(f"1. {excel_filename} (Excel - 3 sayfa, İsim ve Numara ile)")
print(f"2. odev_backup_2025-12-28.json (JSON yedek)")
