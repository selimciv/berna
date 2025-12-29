var gameData = {
    title: "English Vocabulary Challenge",
    preparedBy: "Demet Hoca",
    answerTime: 25,
    defaultGroup: 2,
    groupNames: ["Team A", "Team B", "Team C", "Team D"],
    levelData: {
        A1: [
            {
                name: "Family",
                pool: [
                    { answer: "Mother", pronunciation: "Madır", question: "Anne", example: "My mother is a teacher.", exampleTR: "Annem bir öğretmendir." },
                    { answer: "Father", pronunciation: "Fadır", question: "Baba", example: "His father works at a bank.", exampleTR: "Babası bir bankada çalışıyor." },
                    { answer: "Sister", pronunciation: "Sistır", question: "Kız kardeş", example: "I have one sister.", exampleTR: "Bir kız kardeşim var." },
                    { answer: "Brother", pronunciation: "Bradır", question: "Erkek kardeş", example: "My brother plays football.", exampleTR: "Erkek kardeşim futbol oynar." },
                    { answer: "Baby", pronunciation: "Beybi", question: "Bebek", example: "The baby is sleeping.", exampleTR: "Bebek uyuyor." },
                    { answer: "Grandmother", pronunciation: "Grendmadır", question: "Büyükanne", example: "My grandmother makes great cakes.", exampleTR: "Büyükannem harika kekler yapar." },
                    { answer: "Grandfather", pronunciation: "Grendfadır", question: "Büyükbaba", example: "My grandfather is 80 years old.", exampleTR: "Büyükbabam 80 yaşında." },
                    { answer: "Uncle", pronunciation: "Ankıl", question: "Amca/Dayı", example: "My uncle lives in London.", exampleTR: "Amcam Londra'da yaşıyor." },
                    { answer: "Aunt", pronunciation: "Ant", question: "Hala/Teyze", example: "My aunt is visiting us.", exampleTR: "Halam bizi ziyaret ediyor." },
                    { answer: "Cousin", pronunciation: "Kazın", question: "Kuzen", example: "My cousin is my best friend.", exampleTR: "Kuzenim benim en iyi arkadaşımdır." }
                ]
            },
            {
                name: "Numbers",
                pool: [
                    { answer: "One", pronunciation: "Wan", question: "Bir", example: "I have one apple.", exampleTR: "Bir elmam var." },
                    { answer: "Two", pronunciation: "Tu", question: "İki", example: "She has two cats.", exampleTR: "Onun iki kedisi var." },
                    { answer: "Three", pronunciation: "Tri", question: "Üç", example: "There are three books on the table.", exampleTR: "Masada üç kitap var." },
                    { answer: "Four", pronunciation: "For", question: "Dört", example: "A car has four wheels.", exampleTR: "Bir arabanın dört tekerleği vardır." },
                    { answer: "Five", pronunciation: "Fayv", question: "Beş", example: "Give me five minutes.", exampleTR: "Bana beş dakika ver." },
                    { answer: "Ten", pronunciation: "Ten", question: "On", example: "I have ten fingers.", exampleTR: "On parmağım var." },
                    { answer: "Twenty", pronunciation: "Twenti", question: "Yirmi", example: "He is twenty years old.", exampleTR: "O yirmi yaşında." },
                    { answer: "Hundred", pronunciation: "Handrıd", question: "Yüz", example: "This costs one hundred dollars.", exampleTR: "Bu yüz dolar tutuyor." },
                    { answer: "First", pronunciation: "Fırst", question: "Birinci", example: "She won the first prize.", exampleTR: "Birincilik ödülünü kazandı." },
                    { answer: "Second", pronunciation: "Sekınd", question: "İkinci", example: "This is my second visit.", exampleTR: "Bu benim ikinci ziyaretim." }
                ]
            },
            {
                name: "Colors",
                pool: [
                    { answer: "Red", pronunciation: "Red", question: "Kırmızı", example: "The apple is red.", exampleTR: "Elma kırmızıdır." },
                    { answer: "Blue", pronunciation: "Blu", question: "Mavi", example: "The sky is blue.", exampleTR: "Gökyüzü mavidir." },
                    { answer: "Green", pronunciation: "Grin", question: "Yeşil", example: "Grass is green.", exampleTR: "Çimen yeşildir." },
                    { answer: "Yellow", pronunciation: "Yelo", question: "Sarı", example: "The sun is yellow.", exampleTR: "Güneş sarıdır." },
                    { answer: "Black", pronunciation: "Blek", question: "Siyah", example: "I have a black cat.", exampleTR: "Siyah bir kedim var." },
                    { answer: "White", pronunciation: "Wayt", question: "Beyaz", example: "Snow is white.", exampleTR: "Kar beyazdır." },
                    { answer: "Orange", pronunciation: "Orınc", question: "Turuncu", example: "Oranges are orange.", exampleTR: "Portakallar turuncudur." },
                    { answer: "Purple", pronunciation: "Pörpıl", question: "Mor", example: "She likes purple flowers.", exampleTR: "O mor çiçekleri sever." },
                    { answer: "Pink", pronunciation: "Pink", question: "Pembe", example: "The dress is pink.", exampleTR: "Elbise pembedir." },
                    { answer: "Brown", pronunciation: "Brawn", question: "Kahverengi", example: "My eyes are brown.", exampleTR: "Gözlerim kahverengidir." }
                ]
            },
            {
                name: "Animals",
                pool: [
                    { answer: "Cat", pronunciation: "Ket", question: "Kedi", example: "The cat is sleeping on the sofa.", exampleTR: "Kedi kanepede uyuyor." },
                    { answer: "Dog", pronunciation: "Dog", question: "Köpek", example: "My dog loves to play.", exampleTR: "Köpeğim oynamayı sever." },
                    { answer: "Bird", pronunciation: "Börd", question: "Kuş", example: "The bird is singing.", exampleTR: "Kuş ötüyor." },
                    { answer: "Fish", pronunciation: "Fiş", question: "Balık", example: "Fish live in water.", exampleTR: "Balıklar suda yaşar." },
                    { answer: "Horse", pronunciation: "Hors", question: "At", example: "I can ride a horse.", exampleTR: "Ata binebilirim." },
                    { answer: "Cow", pronunciation: "Kaw", question: "İnek", example: "Cows give us milk.", exampleTR: "İnekler bize süt verir." },
                    { answer: "Sheep", pronunciation: "Şip", question: "Koyun", example: "Sheep have white wool.", exampleTR: "Koyunların beyaz yünü vardır." },
                    { answer: "Lion", pronunciation: "Layın", question: "Aslan", example: "The lion is the king of the jungle.", exampleTR: "Aslan ormanın kralıdır." },
                    { answer: "Monkey", pronunciation: "Manki", question: "Maymun", example: "Monkeys like bananas.", exampleTR: "Maymunlar muz sever." },
                    { answer: "Elephant", pronunciation: "Elıfınt", question: "Fil", example: "The elephant is very big.", exampleTR: "Fil çok büyüktür." }
                ]
            },
            {
                name: "Food",
                pool: [
                    { answer: "Apple", pronunciation: "Epıl", question: "Elma", example: "I eat an apple every day.", exampleTR: "Her gün bir elma yerim." },
                    { answer: "Banana", pronunciation: "Bınana", question: "Muz", example: "Bananas are yellow.", exampleTR: "Muzlar sarıdır." },
                    { answer: "Bread", pronunciation: "Bred", question: "Ekmek", example: "We need to buy bread.", exampleTR: "Ekmek almamız lazım." },
                    { answer: "Water", pronunciation: "Wotır", question: "Su", example: "Please give me some water.", exampleTR: "Lütfen bana biraz su ver." },
                    { answer: "Milk", pronunciation: "Milk", question: "Süt", example: "I drink milk for breakfast.", exampleTR: "Kahvaltıda süt içerim." },
                    { answer: "Egg", pronunciation: "Eg", question: "Yumurta", example: "I like boiled eggs.", exampleTR: "Haşlanmış yumurta severim." },
                    { answer: "Cheese", pronunciation: "Çiz", question: "Peynir", example: "This cheese is delicious.", exampleTR: "Bu peynir lezzetli." },
                    { answer: "Chicken", pronunciation: "Çikın", question: "Tavuk", example: "We are having chicken for dinner.", exampleTR: "Akşam yemeğinde tavuk yiyoruz." },
                    { answer: "Rice", pronunciation: "Rays", question: "Pirinç", example: "Rice is popular in Asia.", exampleTR: "Pirinç Asya'da popülerdir." },
                    { answer: "Cake", pronunciation: "Keyk", question: "Kek", example: "Happy birthday! Here is your cake.", exampleTR: "Doğum günün kutlu olsun! İşte pastan." }
                ]
            },
            {
                name: "Home",
                pool: [
                    { answer: "House", pronunciation: "Haus", question: "Ev", example: "My house is big.", exampleTR: "Evim büyüktür." },
                    { answer: "Room", pronunciation: "Rum", question: "Oda", example: "This room is very clean.", exampleTR: "Bu oda çok temiz." },
                    { answer: "Door", pronunciation: "Dor", question: "Kapı", example: "Please close the door.", exampleTR: "Lütfen kapıyı kapat." },
                    { answer: "Window", pronunciation: "Windo", question: "Pencere", example: "Open the window, please.", exampleTR: "Pencereyi aç lütfen." },
                    { answer: "Table", pronunciation: "Teybıl", question: "Masa", example: "The book is on the table.", exampleTR: "Kitap masanın üzerinde." },
                    { answer: "Chair", pronunciation: "Çer", question: "Sandalye", example: "Sit on this chair.", exampleTR: "Bu sandalyeye otur." },
                    { answer: "Bed", pronunciation: "Bed", question: "Yatak", example: "I go to bed at 10 PM.", exampleTR: "Saat 10'da yatağa giderim." },
                    { answer: "Kitchen", pronunciation: "Kiçın", question: "Mutfak", example: "My mom is in the kitchen.", exampleTR: "Annem mutfakta." },
                    { answer: "Garden", pronunciation: "Gardın", question: "Bahçe", example: "We have a beautiful garden.", exampleTR: "Güzel bir bahçemiz var." },
                    { answer: "Key", pronunciation: "Ki", question: "Anahtar", example: "I lost my key.", exampleTR: "Anahtarımı kaybettim." }
                ]
            },
            {
                name: "Clothes",
                pool: [
                    { answer: "Shirt", pronunciation: "Şört", question: "Gömlek", example: "I like your blue shirt.", exampleTR: "Mavi gömleğini beğendim." },
                    { answer: "Shoes", pronunciation: "Şuz", question: "Ayakkabı", example: "These shoes are comfortable.", exampleTR: "Bu ayakkabılar rahat." },
                    { answer: "Dress", pronunciation: "Dres", question: "Elbise", example: "She is wearing a red dress.", exampleTR: "O kırmızı bir elbise giyiyor." },
                    { answer: "Hat", pronunciation: "Het", question: "Şapka", example: "Put on your hat.", exampleTR: "Şapkanı tak." },
                    { answer: "Coat", pronunciation: "Kot", question: "Mont", example: "It is cold, wear a coat.", exampleTR: "Hava soğuk, mont giy." },
                    { answer: "Pants", pronunciation: "Pents", question: "Pantolon", example: "I need new pants.", exampleTR: "Yeni pantolona ihtiyacım var." },
                    { answer: "Skirt", pronunciation: "Skört", question: "Etek", example: "The skirt is too short.", exampleTR: "Etek çok kısa." },
                    { answer: "Socks", pronunciation: "Saks", question: "Çorap", example: "Where are my socks?", exampleTR: "Çoraplarım nerede?" },
                    { answer: "Jacket", pronunciation: "Cekıt", question: "Ceket", example: "Take your jacket.", exampleTR: "Ceketini al." },
                    { answer: "Boots", pronunciation: "Buts", question: "Bot", example: "I wear boots in winter.", exampleTR: "Kışın bot giyerim." }
                ]
            },
            {
                name: "Body",
                pool: [
                    { answer: "Head", pronunciation: "Hed", question: "Baş", example: "My head hurts.", exampleTR: "Başım ağrıyor." },
                    { answer: "Eye", pronunciation: "Ay", question: "Göz", example: "Close your eyes.", exampleTR: "Gözlerini kapat." },
                    { answer: "Ear", pronunciation: "İır", question: "Kulak", example: "I have two ears.", exampleTR: "İki kulağım var." },
                    { answer: "Nose", pronunciation: "Noz", question: "Burun", example: "Touch your nose.", exampleTR: "Burnuna dokun." },
                    { answer: "Mouth", pronunciation: "Mauth", question: "Ağız", example: "Open your mouth.", exampleTR: "Ağzını aç." },
                    { answer: "Hand", pronunciation: "Hend", question: "El", example: "Wash your hands.", exampleTR: "Ellerini yıka." },
                    { answer: "Foot", pronunciation: "Fut", question: "Ayak", example: "My foot is big.", exampleTR: "Ayağım büyük." },
                    { answer: "Arm", pronunciation: "Arm", question: "Kol", example: "He broke his arm.", exampleTR: "Kolunu kırdı." },
                    { answer: "Leg", pronunciation: "Leg", question: "Bacak", example: "My legs are tired.", exampleTR: "Bacaklarım yorgun." },
                    { answer: "Hair", pronunciation: "Heyr", question: "Saç", example: "She has long hair.", exampleTR: "Onun uzun saçları var." }
                ]
            },
            {
                name: "Time",
                pool: [
                    { answer: "Day", pronunciation: "Dey", question: "Gün", example: "Have a nice day.", exampleTR: "İyi günler." },
                    { answer: "Night", pronunciation: "Nayt", question: "Gece", example: "Good night.", exampleTR: "İyi geceler." },
                    { answer: "Week", pronunciation: "Wik", question: "Hafta", example: "I will see you next week.", exampleTR: "Haftaya görüşürüz." },
                    { answer: "Month", pronunciation: "Manth", question: "Ay", example: "This month is June.", exampleTR: "Bu ay Haziran." },
                    { answer: "Year", pronunciation: "Yir", question: "Yıl", example: "Happy new year!", exampleTR: "Mutlu yıllar!" },
                    { answer: "Hour", pronunciation: "Aur", question: "Saat (Süre)", example: "I waited for one hour.", exampleTR: "Bir saat bekledim." },
                    { answer: "Minute", pronunciation: "Minıt", question: "Dakika", example: "Wait a minute.", exampleTR: "Bir dakika bekle." },
                    { answer: "Morning", pronunciation: "Morning", question: "Sabah", example: "Good morning.", exampleTR: "Günaydın." },
                    { answer: "Evening", pronunciation: "Ivning", question: "Akşam", example: "See you in the evening.", exampleTR: "Akşam görüşürüz." },
                    { answer: "Today", pronunciation: "Tudey", question: "Bugün", example: "Today is Monday.", exampleTR: "Bugün Pazartesi." }
                ]
            },
            {
                name: "Jobs",
                pool: [
                    { answer: "Doctor", pronunciation: "Daktır", question: "Doktor", example: "The doctor helped me.", exampleTR: "Doktor bana yardım etti." },
                    { answer: "Teacher", pronunciation: "Tiçır", question: "Öğretmen", example: "My teacher is very kind.", exampleTR: "Öğretmenim çok nazik." },
                    { answer: "Student", pronunciation: "Sityudınt", question: "Öğrenci", example: "I am a student.", exampleTR: "Ben bir öğrenciyim." },
                    { answer: "Driver", pronunciation: "Drayvır", question: "Şoför", example: "The bus driver is fast.", exampleTR: "Otobüs şoförü hızlı." },
                    { answer: "Cook", pronunciation: "Kuk", question: "Aşçı", example: "He is a good cook.", exampleTR: "O iyi bir aşçı." },
                    { answer: "Farmer", pronunciation: "Farmır", question: "Çiftçi", example: "The farmer has cows.", exampleTR: "Çiftçinin inekleri var." },
                    { answer: "Nurse", pronunciation: "Nörs", question: "Hemşire", example: "The nurse is working.", exampleTR: "Hemşire çalışıyor." },
                    { answer: "Worker", pronunciation: "Vörkır", question: "İşçi", example: "The worker is tired.", exampleTR: "İşçi yorgun." },
                    { answer: "Police", pronunciation: "Polis", question: "Polis", example: "Call the police!", exampleTR: "Polisi ara!" },
                    { answer: "Artist", pronunciation: "Artist", question: "Sanatçı", example: "She is a great artist.", exampleTR: "O harika bir sanatçı." }
                ]
            },
            {
                name: "Transport",
                pool: [
                    { answer: "Car", pronunciation: "Kar", question: "Araba", example: "My car is red.", exampleTR: "Arabam kırmızı." },
                    { answer: "Bus", pronunciation: "Bas", question: "Otobüs", example: "I take the bus to school.", exampleTR: "Okula otobüsle giderim." },
                    { answer: "Train", pronunciation: "Treyn", question: "Tren", example: "The train is coming.", exampleTR: "Tren geliyor." },
                    { answer: "Plane", pronunciation: "Pleyn", question: "Uçak", example: "The plane is flying high.", exampleTR: "Uçak yüksekten uçuyor." },
                    { answer: "Bike", pronunciation: "Bayk", question: "Bisiklet", example: "I ride my bike every day.", exampleTR: "Her gün bisiklet sürerim." },
                    { answer: "Taxi", pronunciation: "Taksi", question: "Taksi", example: "We need a taxi.", exampleTR: "Bir taksiye ihtiyacımız var." },
                    { answer: "Ship", pronunciation: "Şip", question: "Gemi", example: "The ship is big.", exampleTR: "Gemi büyük." },
                    { answer: "Boat", pronunciation: "Bot", question: "Tekne", example: "We went fishing on a boat.", exampleTR: "Tekneyle balık tutmaya gittik." },
                    { answer: "Road", pronunciation: "Rod", question: "Yol", example: "The road is long.", exampleTR: "Yol uzun." },
                    { answer: "Ticket", pronunciation: "Tikıt", question: "Bilet", example: "I have a ticket.", exampleTR: "Biletin var." }
                ]
            },
            {
                name: "Weather",
                pool: [
                    { answer: "Sun", pronunciation: "San", question: "Güneş", example: "The sun is hot.", exampleTR: "Güneş sıcak." },
                    { answer: "Rain", pronunciation: "Reyn", question: "Yağmur", example: "I like the rain.", exampleTR: "Yağmuru severim." },
                    { answer: "Snow", pronunciation: "Sno", question: "Kar", example: "Do you like snow?", exampleTR: "Karı sever misin?" },
                    { answer: "Wind", pronunciation: "Vind", question: "Rüzgar", example: "The wind is strong.", exampleTR: "Rüzgar güçlü." },
                    { answer: "Cloud", pronunciation: "Klaud", question: "Bulut", example: "Look at that white cloud.", exampleTR: "Şu beyaz buluta bak." },
                    { answer: "Hot", pronunciation: "Hat", question: "Sıcak", example: "It is very hot today.", exampleTR: "Bugün hava çok sıcak." },
                    { answer: "Cold", pronunciation: "Kold", question: "Soğuk", example: "Winter is cold.", exampleTR: "Kış soğuktur." },
                    { answer: "Storm", pronunciation: "Storm", question: "Fırtına", example: "There is a storm coming.", exampleTR: "Fırtına geliyor." },
                    { answer: "Sky", pronunciation: "Skay", question: "Gökyüzü", example: "The sky is blue.", exampleTR: "Gökyüzü mavi." },
                    { answer: "Ice", pronunciation: "Ays", question: "Buz", example: "The water turned to ice.", exampleTR: "Su buza dönüştü." }
                ]
            }
        ],
        A2: [
            {
                name: "Daily Routine",
                pool: [
                    { answer: "Wake up", pronunciation: "Weyk ap", question: "Uyanmak", example: "I wake up at 7 AM.", exampleTR: "Sabah 7'de uyanırım." },
                    { answer: "Breakfast", pronunciation: "Brekfıst", question: "Kahvaltı", example: "I eat eggs for breakfast.", exampleTR: "Kahvaltıda yumurta yerim." },
                    { answer: "Shower", pronunciation: "Şawır", question: "Duş", example: "I take a shower every morning.", exampleTR: "Her sabah duş alırım." },
                    { answer: "Work", pronunciation: "Wörk", question: "Çalışmak", example: "I go to work by bus.", exampleTR: "İşe otobüsle giderim." },
                    { answer: "School", pronunciation: "Skul", question: "Okul", example: "School starts at 8 AM.", exampleTR: "Okul sabah 8'de başlar." },
                    { answer: "Lunch", pronunciation: "Lanç", question: "Öğle yemeği", example: "We have lunch at noon.", exampleTR: "Öğlen öğle yemeği yeriz." },
                    { answer: "Dinner", pronunciation: "Dinır", question: "Akşam yemeği", example: "Dinner is ready.", exampleTR: "Akşam yemeği hazır." },
                    { answer: "Sleep", pronunciation: "Slip", question: "Uyumak", example: "I sleep 8 hours a day.", exampleTR: "Günde 8 saat uyurum." },
                    { answer: "Brush", pronunciation: "Braş", question: "Fırçalamak", example: "Brush your teeth.", exampleTR: "Dişlerini fırçala." },
                    { answer: "Dress", pronunciation: "Dres", question: "Giyinmek", example: "I dress quickly.", exampleTR: "Hızlıca giyinirim." }
                ]
            },
            {
                name: "Clothes",
                pool: [
                    { answer: "Shirt", pronunciation: "Şört", question: "Gömlek", example: "He is wearing a white shirt.", exampleTR: "O beyaz bir gömlek giyiyor." },
                    { answer: "Shoes", pronunciation: "Şuz", question: "Ayakkabı", example: "My shoes are dirty.", exampleTR: "Ayakkabılarım kirli." },
                    { answer: "Dress", pronunciation: "Dres", question: "Elbise", example: "She bought a new dress.", exampleTR: "Yeni bir elbise aldı." },
                    { answer: "Hat", pronunciation: "Het", question: "Şapka", example: "The hat protects you from the sun.", exampleTR: "Şapka seni güneşten korur." },
                    { answer: "Coat", pronunciation: "Kot", question: "Mont", example: "Put on your coat, it's cold.", exampleTR: "Montunu giy, hava soğuk." },
                    { answer: "Pants", pronunciation: "Pents", question: "Pantolon", example: "These pants are too tight.", exampleTR: "Bu pantolon çok dar." },
                    { answer: "Skirt", pronunciation: "Skört", question: "Etek", example: "She likes wearing skirts.", exampleTR: "Etek giymeyi sever." },
                    { answer: "Socks", pronunciation: "Saks", question: "Çorap", example: "I need warm socks.", exampleTR: "Sıcak tutan çoraplara ihtiyacım var." },
                    { answer: "Jacket", pronunciation: "Cekıt", question: "Ceket", example: "Your jacket is cool.", exampleTR: "Ceketin havalı." },
                    { answer: "Boots", pronunciation: "Buts", question: "Bot", example: "These boots are for hiking.", exampleTR: "Bu botlar yürüyüş için." }
                ]
            },
            {
                name: "Weather",
                pool: [
                    { answer: "Sunny", pronunciation: "Sani", question: "Güneşli", example: "It is sunny today.", exampleTR: "Bugün hava güneşli." },
                    { answer: "Rainy", pronunciation: "Reyni", question: "Yağmurlu", example: "It was a rainy day.", exampleTR: "Yağmurlu bir gündü." },
                    { answer: "Cloudy", pronunciation: "Klaudi", question: "Bulutlu", example: "The sky is cloudy.", exampleTR: "Gökyüzü bulutlu." },
                    { answer: "Snowy", pronunciation: "Snowi", question: "Karlı", example: "It is snowy in the mountains.", exampleTR: "Dağlarda hava karlı." },
                    { answer: "Windy", pronunciation: "Windi", question: "Rüzgarlı", example: "It is very windy outside.", exampleTR: "Dışarısı çok rüzgarlı." },
                    { answer: "Hot", pronunciation: "Hat", question: "Sıcak", example: "Summer is hot.", exampleTR: "Yaz mevsimi sıcaktır." },
                    { answer: "Cold", pronunciation: "Kold", question: "Soğuk", example: "I feel cold.", exampleTR: "Üşüyorum." },
                    { answer: "Storm", pronunciation: "Storm", question: "Fırtına", example: "The storm destroyed the house.", exampleTR: "Fırtına evi yıktı." },
                    { answer: "Foggy", pronunciation: "Fogi", question: "Sisli", example: "Be careful, it is foggy.", exampleTR: "Dikkatli ol, hava sisli." },
                    { answer: "Warm", pronunciation: "Worm", question: "Ilık", example: "The water is warm.", exampleTR: "Su ılık." }
                ]
            },
            {
                name: "Jobs",
                pool: [
                    { answer: "Doctor", pronunciation: "Daktır", question: "Doktor", example: "The doctor is in the hospital.", exampleTR: "Doktor hastanede." },
                    { answer: "Teacher", pronunciation: "Tiçır", question: "Öğretmen", example: "The teacher explains the lesson.", exampleTR: "Öğretmen dersi anlatıyor." },
                    { answer: "Driver", pronunciation: "Drayvır", question: "Şoför", example: "My father is a driver.", exampleTR: "Babam şoför." },
                    { answer: "Cook", pronunciation: "Kuk", question: "Aşçı", example: "The cook makes delicious food.", exampleTR: "Aşçı lezzetli yemekler yapar." },
                    { answer: "Nurse", pronunciation: "Nörs", question: "Hemşire", example: "The nurse helps the patients.", exampleTR: "Hemşire hastalara yardım eder." },
                    { answer: "Farmer", pronunciation: "Farmır", question: "Çiftçi", example: "The farmer grows vegetables.", exampleTR: "Çiftçi sebze yetiştirir." },
                    { answer: "Artist", pronunciation: "Artist", question: "Sanatçı", example: "The artist paints a picture.", exampleTR: "Sanatçı resim yapıyor." },
                    { answer: "Pilot", pronunciation: "Paylıt", question: "Pilot", example: "The pilot flies the plane.", exampleTR: "Pilot uçağı uçurur." },
                    { answer: "Actor", pronunciation: "Ektır", question: "Oyuncu", example: "He is a famous actor.", exampleTR: "O ünlü bir oyuncu." },
                    { answer: "Worker", pronunciation: "Wörkır", question: "İşçi", example: "The worker builds houses.", exampleTR: "İşçi evler inşa eder." }
                ]
            },
            {
                name: "Places",
                pool: [
                    { answer: "Park", pronunciation: "Park", question: "Park", example: "Let's go to the park.", exampleTR: "Hadi parka gidelim." },
                    { answer: "Hospital", pronunciation: "Haspıtıl", question: "Hastane", example: "She works at the hospital.", exampleTR: "O hastanede çalışıyor." },
                    { answer: "Bank", pronunciation: "Benk", question: "Banka", example: "I need to go to the bank.", exampleTR: "Bankaya gitmem lazım." },
                    { answer: "Market", pronunciation: "Markıt", question: "Market", example: "The market is open.", exampleTR: "Market açık." },
                    { answer: "Cinema", pronunciation: "Sinıma", question: "Sinema", example: "We watched a movie at the cinema.", exampleTR: "Sinemada film izledik." },
                    { answer: "Library", pronunciation: "Laybrıri", question: "Kütüphane", example: "Quiet please, this is a library.", exampleTR: "Sessiz olun lütfen, burası kütüphane." },
                    { answer: "Street", pronunciation: "Strit", question: "Cadde/Sokak", example: "Don't play on the street.", exampleTR: "Caddede oynama." },
                    { answer: "Bridge", pronunciation: "Bric", question: "Köprü", example: "We crossed the bridge.", exampleTR: "Köprüyü geçtik." },
                    { answer: "Beach", pronunciation: "Biç", question: "Plaj", example: "The beach is beautiful.", exampleTR: "Plaj çok güzel." },
                    { answer: "Farm", pronunciation: "Farm", question: "Çiftlik", example: "Animals live on the farm.", exampleTR: "Hayvanlar çiftlikte yaşar." }
                ]
            },
            {
                name: "Transport",
                pool: [
                    { answer: "Car", pronunciation: "Kar", question: "Araba", example: "He drives a fast car.", exampleTR: "O hızlı bir araba kullanır." },
                    { answer: "Bus", pronunciation: "Bas", question: "Otobüs", example: "The bus is late.", exampleTR: "Otobüs gecikti." },
                    { answer: "Train", pronunciation: "Treyn", question: "Tren", example: "I prefer traveling by train.", exampleTR: "Trenle seyahat etmeyi tercih ederim." },
                    { answer: "Plane", pronunciation: "Pleyn", question: "Uçak", example: "The plane landed safely.", exampleTR: "Uçak güvenli bir şekilde indi." },
                    { answer: "Bike", pronunciation: "Bayk", question: "Bisiklet", example: "Can you ride a bike?", exampleTR: "Bisiklet sürebilir misin?" },
                    { answer: "Ship", pronunciation: "Şip", question: "Gemi", example: "The ship sails on the sea.", exampleTR: "Gemi denizde yüzer." },
                    { answer: "Taxi", pronunciation: "Taksi", question: "Taksi", example: "Call a taxi for me.", exampleTR: "Benim için bir taksi çağır." },
                    { answer: "Truck", pronunciation: "Trak", question: "Kamyon", example: "The truck carries goods.", exampleTR: "Kamyon mal taşır." },
                    { answer: "Boat", pronunciation: "Bot", question: "Tekne", example: "We rented a small boat.", exampleTR: "Küçük bir tekne kiraladık." },
                    { answer: "Metro", pronunciation: "Metro", question: "Metro", example: "The metro is very fast.", exampleTR: "Metro çok hızlıdır." }
                ]
            }
        ],
        B1: [
            {
                name: "Travel",
                pool: [
                    { answer: "Luggage", pronunciation: "Lagıç", question: "Bagaj", example: "I lost my luggage.", exampleTR: "Bagajımı kaybettim." },
                    { answer: "Passport", pronunciation: "Pasport", question: "Pasaport", example: "Show me your passport.", exampleTR: "Pasaportunu göster." },
                    { answer: "Ticket", pronunciation: "Tikit", question: "Bilet", example: "I booked a ticket online.", exampleTR: "İnternetten bilet aldım." },
                    { answer: "Airport", pronunciation: "Eyrport", question: "Havalimanı", example: "We arrived at the airport.", exampleTR: "Havalimanına vardık." },
                    { answer: "Passenger", pronunciation: "Pesıncır", question: "Yolcu", example: "The passenger is sleeping.", exampleTR: "Yolcu uyuyor." },
                    { answer: "Arrival", pronunciation: "Erayvıl", question: "Varış", example: "The arrival time is 5 PM.", exampleTR: "Varış saati akşam 5." },
                    { answer: "Departure", pronunciation: "Diparçır", question: "Kalkış", example: "The departure was delayed.", exampleTR: "Kalkış gecikti." },
                    { answer: "Customs", pronunciation: "Kastıms", question: "Gümrük", example: "We went through customs.", exampleTR: "Gümrükten geçtik." },
                    { answer: "Delay", pronunciation: "Diley", question: "Gecikme", example: "Sorry for the delay.", exampleTR: "Gecikme için özür dilerim." },
                    { answer: "Booking", pronunciation: "Buking", question: "Rezervasyon", example: "I have a hotel booking.", exampleTR: "Otel rezervasyonum var." }
                ]
            },
            {
                name: "Health",
                pool: [
                    { answer: "Medicine", pronunciation: "Medısın", question: "İlaç", example: "Take this medicine daily.", exampleTR: "Bu ilacı her gün al." },
                    { answer: "Doctor", pronunciation: "Daktır", question: "Doktor", example: "See a doctor if you feel sick.", exampleTR: "Hasta hissedersen doktora görün." },
                    { answer: "Pain", pronunciation: "Peyn", question: "Ağrı", example: "I have a pain in my back.", exampleTR: "Sırtımda ağrı var." },
                    { answer: "Flu", pronunciation: "Flu", question: "Grip", example: "He caught the flu.", exampleTR: "Gripe yakalandı." },
                    { answer: "Fever", pronunciation: "Fivır", question: "Ateş", example: "She has a high fever.", exampleTR: "Yüksek ateşi var." },
                    { answer: "Cough", pronunciation: "Kof", question: "Öksürük", example: "That is a bad cough.", exampleTR: "Bu kötü bir öksürük." },
                    { answer: "Healthy", pronunciation: "Helthi", question: "Sağlıklı", example: "Eat healthy food.", exampleTR: "Sağlıklı yiyecekler ye." },
                    { answer: "Sick", pronunciation: "Sik", question: "Hasta", example: "I feel sick today.", exampleTR: "Bugün hasta hissediyorum." },
                    { answer: "Emergency", pronunciation: "İmörcınsi", question: "Acil Durum", example: "Call 911 in an emergency.", exampleTR: "Acil durumda 911'i ara." },
                    { answer: "Diet", pronunciation: "Dayıt", question: "Diyet", example: "She is on a diet.", exampleTR: "O diyette." }
                ]
            },
            {
                name: "Education",
                pool: [
                    { answer: "Degree", pronunciation: "Digri", question: "Derece/Diploma", example: "He has a degree in law.", exampleTR: "Hukuk diploması var." },
                    { answer: "Exam", pronunciation: "Igzam", question: "Sınav", example: "The exam was hard.", exampleTR: "Sınav zordu." },
                    { answer: "Lesson", pronunciation: "Lesın", question: "Ders", example: "The lesson starts now.", exampleTR: "Ders şimdi başlıyor." },
                    { answer: "Subject", pronunciation: "Sabcıkt", question: "Konu/Ders", example: "Math is my favorite subject.", exampleTR: "Matematik en sevdiğim derstir." },
                    { answer: "Grade", pronunciation: "Greyd", question: "Not/Sınıf", example: "I got a good grade.", exampleTR: "İyi bir not aldım." },
                    { answer: "Homework", pronunciation: "Homwörk", question: "Ödev", example: "Finish your homework.", exampleTR: "Ödevini bitir." },
                    { answer: "Library", pronunciation: "Laybrıri", question: "Kütüphane", example: "I study in the library.", exampleTR: "Kütüphanede çalışırım." },
                    { answer: "University", pronunciation: "Yünivörsiti", question: "Üniversite", example: "She goes to university.", exampleTR: "O üniversiteye gidiyor." },
                    { answer: "Teacher", pronunciation: "Tiçır", question: "Öğretmen", example: "Listen to your teacher.", exampleTR: "Öğretmenini dinle." },
                    { answer: "Student", pronunciation: "Sityudınt", question: "Öğrenci", example: "Every student must learn.", exampleTR: "Her öğrenci öğrenmelidir." }
                ]
            },
            {
                name: "Environment",
                pool: [
                    { answer: "Nature", pronunciation: "Neyçır", question: "Doğa", example: "We must protect nature.", exampleTR: "Doğayı korumalıyız." },
                    { answer: "Pollution", pronunciation: "Poluşın", question: "Kirlilik", example: "Air pollution is a problem.", exampleTR: "Hava kirliliği bir sorundur." },
                    { answer: "Recycle", pronunciation: "Risaykıl", question: "Geri Dönüşüm", example: "Please recycle plastic.", exampleTR: "Lütfen plastiği geri dönüştürün." },
                    { answer: "Climate", pronunciation: "Klaymıt", question: "İklim", example: "The climate is changing.", exampleTR: "İklim değişiyor." },
                    { answer: "Global", pronunciation: "Globıl", question: "Küresel", example: "Global warming is real.", exampleTR: "Küresel ısınma gerçektir." },
                    { answer: "Energy", pronunciation: "Enırci", question: "Enerji", example: "Save energy.", exampleTR: "Enerji tasarrufu yap." },
                    { answer: "Waste", pronunciation: "Weyst", question: "Atık/İsraf", example: "Do not waste water.", exampleTR: "Suyu israf etme." },
                    { answer: "Forest", pronunciation: "Forıst", question: "Orman", example: "The forest is green.", exampleTR: "Orman yeşildir." },
                    { answer: "Ocean", pronunciation: "Oşın", question: "Okyanus", example: "The ocean is deep.", exampleTR: "Okyanus derindir." },
                    { answer: "Planet", pronunciation: "Plenıt", question: "Gezegen", example: "Earth is our planet.", exampleTR: "Dünya bizim gezegenimizdir." }
                ]
            },
            {
                name: "Technology",
                pool: [
                    { answer: "Computer", pronunciation: "Kımpyutır", question: "Bilgisayar", example: "I use a computer for work.", exampleTR: "İş için bilgisayar kullanırım." },
                    { answer: "Software", pronunciation: "Softweyr", question: "Yazılım", example: "This software is new.", exampleTR: "Bu yazılım yeni." },
                    { answer: "Internet", pronunciation: "İntırnet", question: "İnternet", example: "The internet is fast.", exampleTR: "İnternet hızlı." },
                    { answer: "Website", pronunciation: "Websayt", question: "Web Sitesi", example: "Visit our website.", exampleTR: "Web sitemizi ziyaret edin." },
                    { answer: "Device", pronunciation: "Divays", question: "Cihaz", example: "Turn off your device.", exampleTR: "Cihazını kapat." },
                    { answer: "Screen", pronunciation: "Skrin", question: "Ekran", example: "The screen is broken.", exampleTR: "Ekran kırık." },
                    { answer: "Data", pronunciation: "Deyta", question: "Veri", example: "Save your data.", exampleTR: "Verilerini kaydet." },
                    { answer: "Network", pronunciation: "Netwörk", question: "Ağ", example: "The network is down.", exampleTR: "Ağ çöktü." },
                    { answer: "Digital", pronunciation: "Dicıtıl", question: "Dijital", example: "We live in a digital age.", exampleTR: "Dijital bir çağda yaşıyoruz." },
                    { answer: "App", pronunciation: "Ep", question: "Uygulama", example: "Download this app.", exampleTR: "Bu uygulamayı indir." }
                ]
            },
            {
                name: "Culture",
                pool: [
                    { answer: "Art", pronunciation: "Art", question: "Sanat", example: "She loves modern art.", exampleTR: "Modern sanatı sever." },
                    { answer: "Music", pronunciation: "Müzik", question: "Müzik", example: "Music makes me happy.", exampleTR: "Müzik beni mutlu eder." },
                    { answer: "History", pronunciation: "Histıri", question: "Tarih", example: "History is interesting.", exampleTR: "Tarih ilginçtir." },
                    { answer: "Tradition", pronunciation: "Trıdişın", question: "Gelenek", example: "It is a family tradition.", exampleTR: "Bu bir aile geleneğidir." },
                    { answer: "Language", pronunciation: "Lengwiç", question: "Dil", example: "Learning a language is fun.", exampleTR: "Dil öğrenmek eğlencelidir." },
                    { answer: "Festival", pronunciation: "Festivıl", question: "Festival", example: "We went to a music festival.", exampleTR: "Bir müzik festivaline gittik." },
                    { answer: "Museum", pronunciation: "Müziyım", question: "Müze", example: "The museum is closed.", exampleTR: "Müze kapalı." },
                    { answer: "Literature", pronunciation: "Litıraçır", question: "Edebiyat", example: "He studies literature.", exampleTR: "Edebiyat okuyor." },
                    { answer: "Custom", pronunciation: "Kastım", question: "Adet/Gelenek", example: "It is a local custom.", exampleTR: "Bu yerel bir adettir." },
                    { answer: "Religion", pronunciation: "Rilicın", question: "Din", example: "Respect every religion.", exampleTR: "Her dine saygı duy." }
                ]
            }
        ],
        B2: [
            {
                name: "Environment",
                pool: [
                    { answer: "Pollution", pronunciation: "Poluşın", question: "Kirlilik", example: "Pollution harms the environment.", exampleTR: "Kirlilik çevreye zarar verir." },
                    { answer: "Climate", pronunciation: "Klaymıt", question: "İklim", example: "The climate is changing rapidly.", exampleTR: "İklim hızla değişiyor." },
                    { answer: "Recycle", pronunciation: "Risaykıl", question: "Geri dönüşüm", example: "We should recycle paper and plastic.", exampleTR: "Kağıt ve plastiği geri dönüştürmeliyiz." },
                    { answer: "Global Warming", pronunciation: "Globıl Worming", question: "Küresel Isınma", example: "Global warming causes melting ice.", exampleTR: "Küresel ısınma buzların erimesine neden olur." },
                    { answer: "Energy", pronunciation: "Enırci", question: "Enerji", example: "Solar energy is clean.", exampleTR: "Güneş enerjisi temizdir." },
                    { answer: "Protect", pronunciation: "Protekt", question: "Korumak", example: "We must protect wildlife.", exampleTR: "Vahşi yaşamı korumalıyız." },
                    { answer: "Waste", pronunciation: "Weyst", question: "Atık", example: "Do not throw waste in the river.", exampleTR: "Nehre atık atmayın." },
                    { answer: "Nature", pronunciation: "Neyçır", question: "Doğa", example: "I love spending time in nature.", exampleTR: "Doğada vakit geçirmeyi severim." },
                    { answer: "Species", pronunciation: "Spişiz", question: "Türler", example: "Some species are in danger.", exampleTR: "Bazı türler tehlikede." },
                    { answer: "Damage", pronunciation: "Demıc", question: "Hasar", example: "The storm caused a lot of damage.", exampleTR: "Fırtına çok hasara neden oldu." }
                ]
            },
            {
                name: "Media",
                pool: [
                    { answer: "News", pronunciation: "Nyuz", question: "Haberler", example: "I watch the news every evening.", exampleTR: "Her akşam haberleri izlerim." },
                    { answer: "Article", pronunciation: "Artıkıl", question: "Makale", example: "I read an interesting article.", exampleTR: "İlginç bir makale okudum." },
                    { answer: "Social Media", pronunciation: "Soşıl Midya", question: "Sosyal Medya", example: "Social media connects people.", exampleTR: "Sosyal medya insanları birbirine bağlar." },
                    { answer: "Broadcast", pronunciation: "Brodkest", question: "Yayın", example: "The match will be broadcast live.", exampleTR: "Maç canlı yayınlanacak." },
                    { answer: "News", pronunciation: "Nyuz", question: "Haberler", example: "Did you watch the news?", exampleTR: "Haberleri izledin mi?" },
                    { answer: "Article", pronunciation: "Artıkıl", question: "Makale", example: "Read this article.", exampleTR: "Bu makaleyi oku." },
                    { answer: "Social Media", pronunciation: "Soşıl Midya", question: "Sosyal Medya", example: "Social media is popular.", exampleTR: "Sosyal medya popülerdir." },
                    { answer: "Broadcast", pronunciation: "Brodkest", question: "Yayın", example: "The broadcast starts at 8.", exampleTR: "Yayın 8'de başlıyor." },
                    { answer: "Journalist", pronunciation: "Cörnılist", question: "Gazeteci", example: "The journalist wrote a report.", exampleTR: "Gazeteci bir rapor yazdı." },
                    { answer: "Interview", pronunciation: "İntırvyu", question: "Röportaj", example: "She had an interview for the job.", exampleTR: "İş için bir röportajı vardı." },
                    { answer: "Headline", pronunciation: "Hedlayn", question: "Manşet", example: "The headline caught my eye.", exampleTR: "Manşet dikkatimi çekti." },
                    { answer: "Channel", pronunciation: "Çenıl", question: "Kanal", example: "What channel is the game on?", exampleTR: "Maç hangi kanalda?" },
                    { answer: "Audience", pronunciation: "Odiyıns", question: "Seyirci/Kitle", example: "The audience applauded.", exampleTR: "Seyirci alkışladı." },
                    { answer: "Advertisement", pronunciation: "Edvırtayzmınt", question: "Reklam", example: "I saw an advertisement for a new car.", exampleTR: "Yeni bir araba reklamı gördüm." }
                ]
            },
            {
                name: "Business",
                pool: [
                    { answer: "Market", pronunciation: "Markıt", question: "Pazar/Piyasa", example: "The market is growing.", exampleTR: "Piyasa büyüyor." },
                    { answer: "Profit", pronunciation: "Profit", question: "Kâr", example: "We made a good profit.", exampleTR: "İyi bir kâr elde ettik." },
                    { answer: "Loss", pronunciation: "Los", question: "Zarar", example: "The company reported a loss.", exampleTR: "Şirket zarar bildirdi." },
                    { answer: "Strategy", pronunciation: "Strateci", question: "Strateji", example: "We need a new strategy.", exampleTR: "Yeni bir stratejiye ihtiyacımız var." },
                    { answer: "Management", pronunciation: "Menıcmınt", question: "Yönetim", example: "Good management is key.", exampleTR: "İyi yönetim anahtardır." },
                    { answer: "Investment", pronunciation: "İnvestmınt", question: "Yatırım", example: "It is a safe investment.", exampleTR: "Bu güvenli bir yatırım." },
                    { answer: "Budget", pronunciation: "Bacıt", question: "Bütçe", example: "We are over budget.", exampleTR: "Bütçeyi aştık." },
                    { answer: "Client", pronunciation: "Klayınt", question: "Müşteri", example: "The client is happy.", exampleTR: "Müşteri mutlu." },
                    { answer: "Contract", pronunciation: "Kantrekt", question: "Sözleşme", example: "Sign the contract.", exampleTR: "Sözleşmeyi imzala." },
                    { answer: "Meeting", pronunciation: "Miting", question: "Toplantı", example: "The meeting starts at 9.", exampleTR: "Toplantı 9'da başlıyor." }
                ]
            },
            {
                name: "Politics",
                pool: [
                    { answer: "Government", pronunciation: "Gavırnmınt", question: "Hükümet", example: "The government passed a law.", exampleTR: "Hükümet bir yasa geçirdi." },
                    { answer: "Election", pronunciation: "İlekşın", question: "Seçim", example: "The election is next month.", exampleTR: "Seçim gelecek ay." },
                    { answer: "Vote", pronunciation: "Vot", question: "Oy", example: "Every vote counts.", exampleTR: "Her oy sayılır." },
                    { answer: "Policy", pronunciation: "Palısi", question: "Politika", example: "They changed the policy.", exampleTR: "Politikayı değiştirdiler." },
                    { answer: "Leader", pronunciation: "Lidır", question: "Lider", example: "He is a strong leader.", exampleTR: "O güçlü bir lider." },
                    { answer: "Democracy", pronunciation: "Dimakrısi", question: "Demokrasi", example: "We believe in democracy.", exampleTR: "Demokrasiye inanıyoruz." },
                    { answer: "Candidate", pronunciation: "Kendideyt", question: "Aday", example: "Who is the best candidate?", exampleTR: "En iyi aday kim?" },
                    { answer: "Campaign", pronunciation: "Kempeyn", question: "Kampanya", example: "The campaign was successful.", exampleTR: "Kampanya başarılıydı." },
                    { answer: "Citizen", pronunciation: "Sitizın", question: "Vatandaş", example: "She is a US citizen.", exampleTR: "O bir ABD vatandaşı." },
                    { answer: "Rights", pronunciation: "Rayts", question: "Haklar", example: "Human rights are important.", exampleTR: "İnsan hakları önemlidir." }
                ]
            },
            {
                name: "Science",
                pool: [
                    { answer: "Theory", pronunciation: "Thiyori", question: "Teori", example: "It is just a theory.", exampleTR: "Bu sadece bir teori." },
                    { answer: "Experiment", pronunciation: "İksperimınt", question: "Deney", example: "The experiment failed.", exampleTR: "Deney başarısız oldu." },
                    { answer: "Research", pronunciation: "Risörç", question: "Araştırma", example: "More research is needed.", exampleTR: "Daha fazla araştırma gerekli." },
                    { answer: "Evidence", pronunciation: "Evidıns", question: "Kanıt", example: "There is no evidence.", exampleTR: "Hiçbir kanıt yok." },
                    { answer: "Analysis", pronunciation: "Enalısis", question: "Analiz", example: "The analysis is complete.", exampleTR: "Analiz tamamlandı." },
                    { answer: "Method", pronunciation: "Methıd", question: "Yöntem", example: "This is a new method.", exampleTR: "Bu yeni bir yöntem." },
                    { answer: "Result", pronunciation: "Rizalt", question: "Sonuç", example: "The result was good.", exampleTR: "Sonuç iyiydi." },
                    { answer: "Data", pronunciation: "Deyta", question: "Veri", example: "Collect the data.", exampleTR: "Verileri topla." },
                    { answer: "Sample", pronunciation: "Sempıl", question: "Örnek/Numune", example: "Take a blood sample.", exampleTR: "Kan örneği al." },
                    { answer: "Lab", pronunciation: "Leb", question: "Laboratuvar", example: "He works in a lab.", exampleTR: "O bir laboratuvarda çalışıyor." }
                ]
            },
            {
                name: "Media",
                pool: [
                    { answer: "News", pronunciation: "Nyuz", question: "Haber", example: "Did you watch the news?", exampleTR: "Haberleri izledin mi?" },
                    { answer: "Article", pronunciation: "Artıkıl", question: "Makale", example: "Read this article.", exampleTR: "Bu makaleyi oku." },
                    { answer: "Channel", pronunciation: "Çenıl", question: "Kanal", example: "Change the channel.", exampleTR: "Kanalı değiştir." },
                    { answer: "Broadcast", pronunciation: "Brodkest", question: "Yayın", example: "The broadcast starts at 8.", exampleTR: "Yayın 8'de başlıyor." },
                    { answer: "Social", pronunciation: "Soşıl", question: "Sosyal", example: "Social media is popular.", exampleTR: "Sosyal medya popülerdir." },
                    { answer: "Network", pronunciation: "Netwörk", question: "Ağ", example: "Join our network.", exampleTR: "Ağımıza katıl." },
                    { answer: "Online", pronunciation: "Onlayn", question: "Çevrimiçi", example: "I am always online.", exampleTR: "Ben her zaman çevrimiçiyim." },
                    { answer: "Content", pronunciation: "Kantent", question: "İçerik", example: "The content is good.", exampleTR: "İçerik iyi." },
                    { answer: "Source", pronunciation: "Sors", question: "Kaynak", example: "Check your source.", exampleTR: "Kaynağını kontrol et." },
                    { answer: "Report", pronunciation: "Riport", question: "Rapor/Haber", example: "The report is ready.", exampleTR: "Rapor hazır." }
                ]
            },
            {
                name: "Law",
                pool: [
                    { answer: "Court", pronunciation: "Kort", question: "Mahkeme", example: "See you in court.", exampleTR: "Mahkemede görüşürüz." },
                    { answer: "Judge", pronunciation: "Cac", question: "Hakim", example: "The judge decided.", exampleTR: "Hakim karar verdi." },
                    { answer: "Lawyer", pronunciation: "Loyır", question: "Avukat", example: "Call my lawyer.", exampleTR: "Avukatımı ara." },
                    { answer: "Crime", pronunciation: "Kraym", question: "Suç", example: "Crime is rising.", exampleTR: "Suç artıyor." },
                    { answer: "Justice", pronunciation: "Castıs", question: "Adalet", example: "We want justice.", exampleTR: "Adalet istiyoruz." },
                    { answer: "Legal", pronunciation: "Ligıl", question: "Yasal", example: "Is this legal?", exampleTR: "Bu yasal mı?" },
                    { answer: "Rule", pronunciation: "Rul", question: "Kural", example: "Follow the rules.", exampleTR: "Kurallara uy." },
                    { answer: "Case", pronunciation: "Keys", question: "Dava", example: "The case is closed.", exampleTR: "Dava kapandı." },
                    { answer: "Evidence", pronunciation: "Evidıns", question: "Kanıt", example: "We need evidence.", exampleTR: "Kanıta ihtiyacımız var." },
                    { answer: "Guilty", pronunciation: "Gilti", example: "He is guilty.", question: "Suçlu", exampleTR: "O suçlu." }
                ]
            },
            {
                name: "Psychology",
                pool: [
                    { answer: "Mind", pronunciation: "Maynd", question: "Zihin", example: "Open your mind.", exampleTR: "Zihnini aç." },
                    { answer: "Behavior", pronunciation: "Biheyvyır", question: "Davranış", example: "His behavior is strange.", exampleTR: "Davranışları garip." },
                    { answer: "Emotion", pronunciation: "İmoşın", question: "Duygu", example: "Control your emotions.", exampleTR: "Duygularını kontrol et." },
                    { answer: "Stress", pronunciation: "Stres", question: "Stres", example: "I have too much stress.", exampleTR: "Çok fazla stresim var." },
                    { answer: "Memory", pronunciation: "Memıri", question: "Hafıza", example: "I have a bad memory.", exampleTR: "Hafızam kötü." },
                    { answer: "Dream", pronunciation: "Drim", question: "Rüya", example: "I had a bad dream.", exampleTR: "Kötü bir rüya gördüm." },
                    { answer: "Fear", pronunciation: "Fiır", question: "Korku", example: "Face your fear.", exampleTR: "Korkunla yüzleş." },
                    { answer: "Habit", pronunciation: "Hebıt", question: "Alışkanlık", example: "It is a bad habit.", exampleTR: "Bu kötü bir alışkanlık." },
                    { answer: "Mental", pronunciation: "Mentıl", question: "Zihinsel", example: "Mental health is important.", exampleTR: "Zihinsel sağlık önemlidir." },
                    { answer: "Thought", pronunciation: "Thot", question: "Düşünce", example: "That is a good thought.", exampleTR: "Bu iyi bir düşünce." }
                ]
            }
        ],
        C1: [
            {
                name: "Abstract",
                pool: [
                    { answer: "Concept", pronunciation: "Konsept", question: "Kavram", example: "It is a difficult concept.", exampleTR: "Bu zor bir kavram." },
                    { answer: "Perspective", pronunciation: "Pörspektiv", question: "Bakış açısı", example: "From my perspective, it is wrong.", exampleTR: "Benim bakış açıma göre bu yanlış." },
                    { answer: "Assumption", pronunciation: "Esampşın", question: "Varsayım", example: "That is a big assumption.", exampleTR: "Bu büyük bir varsayım." },
                    { answer: "Implication", pronunciation: "İmplikeyşın", question: "İma/Sonuç", example: "What are the implications?", exampleTR: "Sonuçları nelerdir?" },
                    { answer: "Context", pronunciation: "Kontekst", question: "Bağlam", example: "In this context, it makes sense.", exampleTR: "Bu bağlamda mantıklı." },
                    { answer: "Framework", pronunciation: "Freymwörk", question: "Çerçeve", example: "We need a legal framework.", exampleTR: "Yasal bir çerçeveye ihtiyacımız var." },
                    { answer: "Hypothesis", pronunciation: "Haypathısis", question: "Hipotez", example: "Test the hypothesis.", exampleTR: "Hipotezi test et." },
                    { answer: "Phenomenon", pronunciation: "Finamınan", question: "Olgu/Fenomen", example: "It is a natural phenomenon.", exampleTR: "Bu doğal bir olgudur." },
                    { answer: "Strategy", pronunciation: "Stretıci", question: "Strateji", example: "We have a long-term strategy.", exampleTR: "Uzun vadeli bir stratejimiz var." },
                    { answer: "Analysis", pronunciation: "Enelısis", question: "Analiz", example: "The analysis is detailed.", exampleTR: "Analiz detaylı." }
                ]
            },
            {
                name: "Economy",
                pool: [
                    { answer: "Inflation", pronunciation: "İnfleyşın", question: "Enflasyon", example: "Inflation is rising.", exampleTR: "Enflasyon artıyor." },
                    { answer: "Investment", pronunciation: "İnvestmınt", question: "Yatırım", example: "Foreign investment is important.", exampleTR: "Yabancı yatırım önemlidir." },
                    { answer: "Revenue", pronunciation: "Revınyu", question: "Gelir", example: "The company's revenue increased.", exampleTR: "Şirketin geliri arttı." },
                    { answer: "Debt", pronunciation: "Det", question: "Borç", example: "They are in debt.", exampleTR: "Borç içindeler." },
                    { answer: "Currency", pronunciation: "Körınsi", question: "Para birimi", example: "The currency is weak.", exampleTR: "Para birimi zayıf." },
                    { answer: "Stock", pronunciation: "Stak", question: "Hisse senedi", example: "Stock prices fell.", exampleTR: "Hisse senedi fiyatları düştü." },
                    { answer: "Trade", pronunciation: "Treyd", question: "Ticaret", example: "International trade is vital.", exampleTR: "Uluslararası ticaret hayatidir." },
                    { answer: "Budget", pronunciation: "Bacıt", question: "Bütçe", example: "We have a tight budget.", exampleTR: "Sıkı bir bütçemiz var." },
                    { answer: "Recession", pronunciation: "Riseşın", question: "Durgunluk", example: "The economy is in recession.", exampleTR: "Ekonomi durgunlukta." },
                    { answer: "Growth", pronunciation: "Grolth", question: "Büyüme", example: "Economic growth is slow.", exampleTR: "Ekonomik büyüme yavaş." }
                ]
            },
            {
                name: "Psychology",
                pool: [
                    { answer: "Behavior", pronunciation: "Biheyvyır", question: "Davranış", example: "Study human behavior.", exampleTR: "İnsan davranışını incele." },
                    { answer: "Cognitive", pronunciation: "Kagnıtiv", question: "Bilişsel", example: "Cognitive skills are important.", exampleTR: "Bilişsel beceriler önemlidir." },
                    { answer: "Emotion", pronunciation: "İmoşın", question: "Duygu", example: "She showed no emotion.", exampleTR: "Hiç duygu göstermedi." },
                    { answer: "Mental", pronunciation: "Mentıl", question: "Zihinsel", example: "Mental health matters.", exampleTR: "Zihinsel sağlık önemlidir." },
                    { answer: "Therapy", pronunciation: "Therıpi", question: "Terapi", example: "He is in therapy.", exampleTR: "O terapide." },
                    { answer: "Stress", pronunciation: "Stres", question: "Stres", example: "Reduce your stress.", exampleTR: "Stresini azalt." },
                    { answer: "Memory", pronunciation: "Memıri", question: "Hafıza", example: "I have a vivid memory.", exampleTR: "Canlı bir hatıram var." },
                    { answer: "Perception", pronunciation: "Pörsepşın", question: "Algı", example: "Perception is reality.", exampleTR: "Algı gerçekliktir." },
                    { answer: "Conscious", pronunciation: "Kanşıs", question: "Bilinçli", example: "It was a conscious decision.", exampleTR: "Bu bilinçli bir karardı." },
                    { answer: "Personality", pronunciation: "Pörsınelıti", question: "Kişilik", example: "She has a nice personality.", exampleTR: "Hoş bir kişiliği var." }
                ]
            },
            {
                name: "Law",
                pool: [
                    { answer: "Justice", pronunciation: "Castıs", question: "Adalet", example: "Justice was served.", exampleTR: "Adalet yerini buldu." },
                    { answer: "Regulation", pronunciation: "Regyuleyşın", question: "Düzenleme", example: "New regulations are in place.", exampleTR: "Yeni düzenlemeler yürürlükte." },
                    { answer: "Contract", pronunciation: "Kontrekt", question: "Sözleşme", example: "Read the contract carefully.", exampleTR: "Sözleşmeyi dikkatlice oku." },
                    { answer: "Legal", pronunciation: "Ligıl", question: "Yasal", example: "Seek legal advice.", exampleTR: "Yasal tavsiye al." },
                    { answer: "Court", pronunciation: "Kort", question: "Mahkeme", example: "The court is in session.", exampleTR: "Mahkeme oturumda." },
                    { answer: "Crime", pronunciation: "Kraym", question: "Suç", example: "Report the crime.", exampleTR: "Suçu bildir." },
                    { answer: "Evidence", pronunciation: "Evidıns", question: "Kanıt", example: "The evidence is clear.", exampleTR: "Kanıt açık." },
                    { answer: "Guilty", pronunciation: "Gilti", question: "Suçlu", example: "The jury found him guilty.", exampleTR: "Jüri onu suçlu buldu." },
                    { answer: "Judge", pronunciation: "Cac", question: "Hakim", example: "The judge spoke.", exampleTR: "Hakim konuştu." },
                    { answer: "Lawyer", pronunciation: "Loyır", question: "Avukat", example: "I need a lawyer.", exampleTR: "Bir avukata ihtiyacım var." }
                ]
            },
            {
                name: "Innovation",
                pool: [
                    { answer: "Breakthrough", pronunciation: "Breykthru", question: "Büyük buluş", example: "A scientific breakthrough.", exampleTR: "Bilimsel bir büyük buluş." },
                    { answer: "Prototype", pronunciation: "Protıtayp", question: "Prototip", example: "They built a prototype.", exampleTR: "Bir prototip inşa ettiler." },
                    { answer: "Evolution", pronunciation: "Ivıluşın", question: "Evrim", example: "The evolution of technology.", exampleTR: "Teknolojinin evrimi." },
                    { answer: "Digital", pronunciation: "Dicıtıl", question: "Dijital", example: "The digital revolution.", exampleTR: "Dijital devrim." },
                    { answer: "Virtual", pronunciation: "Vörçuıl", question: "Sanal", example: "Virtual reality is cool.", exampleTR: "Sanal gerçeklik havalı." },
                    { answer: "Network", pronunciation: "Netwörk", question: "Ağ", example: "Expand your network.", exampleTR: "Ağını genişlet." },
                    { answer: "Automation", pronunciation: "Otımeyşın", question: "Otomasyon", example: "Automation saves time.", exampleTR: "Otomasyon zaman kazandırır." },
                    { answer: "Device", pronunciation: "Divays", question: "Cihaz", example: "A smart device.", exampleTR: "Akıllı bir cihaz." },
                    { answer: "System", pronunciation: "Sistım", question: "Sistem", example: "The system crashed.", exampleTR: "Sistem çöktü." },
                    { answer: "Method", pronunciation: "Methıd", question: "Yöntem", example: "A new method of teaching.", exampleTR: "Yeni bir öğretim yöntemi." }
                ]
            },
            {
                name: "Society",
                pool: [
                    { answer: "Community", pronunciation: "Kımyuniti", question: "Topluluk", example: "Help your community.", exampleTR: "Topluluğuna yardım et." },
                    { answer: "Population", pronunciation: "Papyuleyşın", question: "Nüfus", example: "The population is growing.", exampleTR: "Nüfus artıyor." },
                    { answer: "Diversity", pronunciation: "Dayvörsıti", question: "Çeşitlilik", example: "Diversity is a strength.", exampleTR: "Çeşitlilik bir güçtür." },
                    { answer: "Equality", pronunciation: "İkwalıti", question: "Eşitlik", example: "We fight for equality.", exampleTR: "Eşitlik için savaşıyoruz." },
                    { answer: "Welfare", pronunciation: "Welfeyr", question: "Refah", example: "Social welfare programs.", exampleTR: "Sosyal refah programları." },
                    { answer: "Poverty", pronunciation: "Pavırti", question: "Yoksulluk", example: "End poverty now.", exampleTR: "Yoksulluğu şimdi bitir." },
                    { answer: "Migration", pronunciation: "Maygreyşın", question: "Göç", example: "Mass migration.", exampleTR: "Kitlesel göç." },
                    { answer: "Urban", pronunciation: "Örbın", question: "Kentsel", example: "Urban planning.", exampleTR: "Kentsel planlama." },
                    { answer: "Rural", pronunciation: "Rurıl", question: "Kırsal", example: "Rural areas.", exampleTR: "Kırsal alanlar." },
                    { answer: "Development", pronunciation: "Divelıpmınt", question: "Gelişim", example: "Sustainable development.", exampleTR: "Sürdürülebilir kalkınma." }
                ]
            }
        ],
        C2: [
            {
                name: "Philosophy",
                pool: [
                    { answer: "Existence", pronunciation: "Egzistıns", question: "Varoluş", example: "The nature of existence.", exampleTR: "Varoluşun doğası." },
                    { answer: "Ethics", pronunciation: "Ethiks", question: "Etik", example: "Ethics deals with morality.", exampleTR: "Etik ahlakla ilgilenir." },
                    { answer: "Logic", pronunciation: "Lacik", question: "Mantık", example: "Use logic to solve it.", exampleTR: "Çözmek için mantık kullan." },
                    { answer: "Metaphysics", pronunciation: "Metafiziks", question: "Metafizik", example: "Metaphysics is complex.", exampleTR: "Metafizik karmaşıktır." },
                    { answer: "Consciousness", pronunciation: "Kanşisnıs", question: "Bilinç", example: "The mystery of consciousness.", exampleTR: "Bilinç gizemi." },
                    { answer: "Epistemology", pronunciation: "Epistımalaci", question: "Epistemoloji", example: "Epistemology studies knowledge.", exampleTR: "Epistemoloji bilgiyi inceler." },
                    { answer: "Paradox", pronunciation: "Perıdaks", question: "Paradoks", example: "This is a paradox.", exampleTR: "Bu bir paradoks." },
                    { answer: "Rational", pronunciation: "Reşınıl", question: "Rasyonel", example: "Be rational.", exampleTR: "Rasyonel ol." },
                    { answer: "Moral", pronunciation: "Morıl", question: "Ahlaki", example: "A moral dilemma.", exampleTR: "Ahlaki bir ikilem." },
                    { answer: "Wisdom", pronunciation: "Wizdım", question: "Bilgelik", example: "Age brings wisdom.", exampleTR: "Yaş bilgelik getirir." }
                ]
            },
            {
                name: "Literature",
                pool: [
                    { answer: "Metaphor", pronunciation: "Metıfor", question: "Metafor", example: "Life is a metaphor.", exampleTR: "Hayat bir metafordur." },
                    { answer: "Narrative", pronunciation: "Nerıtiv", question: "Anlatı", example: "A compelling narrative.", exampleTR: "Sürükleyici bir anlatı." },
                    { answer: "Genre", pronunciation: "Janra", question: "Tür", example: "What is your favorite genre?", exampleTR: "En sevdiğin tür nedir?" },
                    { answer: "Irony", pronunciation: "Ayrıni", question: "İroni", example: "The irony of the situation.", exampleTR: "Durumun ironisi." },
                    { answer: "Protagonist", pronunciation: "Protegınist", question: "Başkahraman", example: "The protagonist wins.", exampleTR: "Başkahraman kazanır." },
                    { answer: "Antagonist", pronunciation: "Entegınist", question: "Antagonist", example: "The villain is the antagonist.", exampleTR: "Kötü adam antagonisttir." },
                    { answer: "Theme", pronunciation: "Thim", question: "Tema", example: "The main theme is love.", exampleTR: "Ana tema aşktır." },
                    { answer: "Symbolism", pronunciation: "Simbolizm", question: "Sembolizm", example: "The use of symbolism.", exampleTR: "Sembolizmin kullanımı." },
                    { answer: "Rhetoric", pronunciation: "Retırik", question: "Retorik", example: "Political rhetoric.", exampleTR: "Siyasi retorik." },
                    { answer: "Allegory", pronunciation: "Elıgori", question: "Alegori", example: "The story is an allegory.", exampleTR: "Hikaye bir alegoridir." }
                ]
            },
            {
                name: "Science",
                pool: [
                    { answer: "Quantum", pronunciation: "Kwantım", question: "Kuantum", example: "Quantum physics.", exampleTR: "Kuantum fiziği." },
                    { answer: "Relativity", pronunciation: "Relıtivıti", question: "Görelilik", example: "Theory of relativity.", exampleTR: "Görelilik teorisi." },
                    { answer: "Organism", pronunciation: "Orgınizm", question: "Organizma", example: "A living organism.", exampleTR: "Yaşayan bir organizma." },
                    { answer: "Photosynthesis", pronunciation: "Fotosinthısis", question: "Fotosentez", example: "Plants use photosynthesis.", exampleTR: "Bitkiler fotosentez kullanır." },
                    { answer: "Molecule", pronunciation: "Malıkyul", question: "Molekül", example: "Water molecule.", exampleTR: "Su molekülü." },
                    { answer: "Gravity", pronunciation: "Grevıti", question: "Yerçekimi", example: "Zero gravity.", exampleTR: "Sıfır yerçekimi." },
                    { answer: "Radiation", pronunciation: "Reydieyşın", question: "Radyasyon", example: "Nuclear radiation.", exampleTR: "Nükleer radyasyon." },
                    { answer: "Evolutionary", pronunciation: "Ivıluşınery", question: "Evrimsel", example: "Evolutionary biology.", exampleTR: "Evrimsel biyoloji." },
                    { answer: "Genetic", pronunciation: "Cınetik", question: "Genetik", example: "Genetic engineering.", exampleTR: "Genetik mühendisliği." },
                    { answer: "Neurology", pronunciation: "Nurolıci", question: "Nöroloji", example: "He studies neurology.", exampleTR: "Nöroloji okuyor." }
                ]
            },
            {
                name: "Politics",
                pool: [
                    { answer: "Sovereignty", pronunciation: "Savrınti", question: "Egemenlik", example: "National sovereignty.", exampleTR: "Ulusal egemenlik." },
                    { answer: "Diplomacy", pronunciation: "Diplomısi", question: "Diplomasi", example: "International diplomacy.", exampleTR: "Uluslararası diplomasi." },
                    { answer: "Bureaucracy", pronunciation: "Byurakrısi", question: "Bürokrasi", example: "Too much bureaucracy.", exampleTR: "Çok fazla bürokrasi." },
                    { answer: "Legislature", pronunciation: "Cecısleyçır", question: "Yasama organı", example: "The legislature meets today.", exampleTR: "Yasama organı bugün toplanıyor." },
                    { answer: "Constitution", pronunciation: "Konstıtuşın", question: "Anayasa", example: "The US Constitution.", exampleTR: "ABD Anayasası." },
                    { answer: "Amendment", pronunciation: "Emendmınt", question: "Yasa değişikliği", example: "First Amendment.", exampleTR: "Birinci Değişiklik." },
                    { answer: "Coalition", pronunciation: "Koılişın", question: "Koalisyon", example: "A coalition government.", exampleTR: "Koalisyon hükümeti." },
                    { answer: "Referendum", pronunciation: "Refırendım", question: "Referandum", example: "Hold a referendum.", exampleTR: "Referandum yap." },
                    { answer: "Autonomy", pronunciation: "Otanımi", question: "Özerklik", example: "Regional autonomy.", exampleTR: "Bölgesel özerklik." },
                    { answer: "Ideology", pronunciation: "Aydialıci", question: "İdeoloji", example: "Political ideology.", exampleTR: "Siyasi ideoloji." }
                ]
            },
            {
                name: "Economics",
                pool: [
                    { answer: "Fiscal", pronunciation: "Fiskıl", question: "Mali", example: "Fiscal policy.", exampleTR: "Mali politika." },
                    { answer: "Monetary", pronunciation: "Manıteri", question: "Parasal", example: "Monetary system.", exampleTR: "Parasal sistem." },
                    { answer: "Subsidy", pronunciation: "Sabsıdi", question: "Sübvansiyon", example: "Government subsidy.", exampleTR: "Hükümet sübvansiyonu." },
                    { answer: "Tariff", pronunciation: "Terif", question: "Gümrük vergisi", example: "Import tariffs.", exampleTR: "İthalat gümrük vergileri." },
                    { answer: "Deficit", pronunciation: "Defisit", question: "Açık (Bütçe)", example: "Budget deficit.", exampleTR: "Bütçe açığı." },
                    { answer: "Asset", pronunciation: "Eset", question: "Varlık", example: "Liquid assets.", exampleTR: "Likit varlıklar." },
                    { answer: "Liability", pronunciation: "Laybiliti", question: "Yükümlülük", example: "Assets and liabilities.", exampleTR: "Varlıklar ve yükümlülükler." },
                    { answer: "Equity", pronunciation: "Ekwıti", question: "Özkaynak", example: "Private equity.", exampleTR: "Özel sermaye." },
                    { answer: "Derivative", pronunciation: "Dirivıtiv", question: "Türev", example: "Financial derivatives.", exampleTR: "Finansal türevler." },
                    { answer: "Macroeconomics", pronunciation: "Mekroikanamiks", question: "Makroekonomi", example: "Study macroeconomics.", exampleTR: "Makroekonomi çalış." }
                ]
            },
            {
                name: "Advanced",
                pool: [
                    { answer: "Ubiquitous", pronunciation: "Yubikwıtıs", question: "Her yerde bulunan", example: "Smartphones are ubiquitous.", exampleTR: "Akıllı telefonlar her yerde bulunur." },
                    { answer: "Ephemeral", pronunciation: "Ifemırıl", question: "Geçici", example: "Beauty is ephemeral.", exampleTR: "Güzellik geçicidir." },
                    { answer: "Serendipity", pronunciation: "Serındipıti", question: "Mutlu tesadüf", example: "It was pure serendipity.", exampleTR: "Tamamen mutlu bir tesadüftü." },
                    { answer: "Resilience", pronunciation: "Rizilyıns", question: "Direnç/Esneklik", example: "Building resilience.", exampleTR: "Direnç oluşturma." },
                    { answer: "Ambiguity", pronunciation: "Embigyuıti", question: "Belirsizlik", example: "Avoid ambiguity.", exampleTR: "Belirsizlikten kaçın." },
                    { answer: "Paradigm", pronunciation: "Perıdaym", question: "Paradigma", example: "A paradigm shift.", exampleTR: "Bir paradigma değişimi." },
                    { answer: "Nuance", pronunciation: "Nuans", question: "Nüans", example: "Understand the nuance.", exampleTR: "Nüansı anla." },
                    { answer: "Aesthetic", pronunciation: "Esthetik", question: "Estetik", example: "Aesthetic appeal.", exampleTR: "Estetik çekicilik." },
                    { answer: "Pragmatic", pronunciation: "Pregmetik", question: "Pragmatik", example: "A pragmatic approach.", exampleTR: "Pragmatik bir yaklaşım." },
                    { answer: "Cognizant", pronunciation: "Kagnizınt", question: "Farkında olan", example: "Be cognizant of the risks.", exampleTR: "Risklerin farkında ol." }
                ]
            }
        ],
        Grade9_Unit1: [
            {
                name: "Countries & Languages",
                fixedPoints: 1,
                pool: [
                    { answer: "Azerbaijan", pronunciation: "Azırbaycan", question: "Azerbaycan", example: "Baku is the capital of Azerbaijan.", exampleTR: "Bakü, Azerbaycan'ın başkentidir." },
                    { answer: "Poland", pronunciation: "Polınd", question: "Polonya", example: "We visited Poland last summer.", exampleTR: "Geçen yaz Polonya'yı ziyaret ettik." },
                    { answer: "Hungary", pronunciation: "Hangeri", question: "Macaristan", example: "Hungary is in Central Europe.", exampleTR: "Macaristan Orta Avrupa'dadır." },
                    { answer: "Bulgaria", pronunciation: "Bulgeriya", question: "Bulgaristan", example: "Bulgaria has beautiful beaches.", exampleTR: "Bulgaristan'ın güzel plajları vardır." },
                    { answer: "Norway", pronunciation: "Norvey", question: "Norveç", example: "It is very cold in Norway in winter.", exampleTR: "Kışın Norveç çok soğuktur." },
                    { answer: "Türkiye", pronunciation: "Türkiye", question: "Türkiye", example: "Türkiye connects Europe and Asia.", exampleTR: "Türkiye Avrupa ve Asya'yı birbirine bağlar." },
                    { answer: "South Korea", pronunciation: "Sauth Koriya", question: "Güney Kore", example: "Seoul is a big city in South Korea.", exampleTR: "Seul, Güney Kore'de büyük bir şehirdir." },
                    { answer: "Italy", pronunciation: "İtaly", question: "İtalya", example: "Pizza comes from Italy.", exampleTR: "Pizza İtalya'dan gelir." },
                    { answer: "Spain", pronunciation: "Sapeyn", question: "İspanya", example: "They speak Spanish in Spain.", exampleTR: "İspanya'da İspanyolca konuşurlar." },
                    { answer: "Germany", pronunciation: "Cörmıny", question: "Almanya", example: "Berlin is the capital of Germany.", exampleTR: "Berlin Almanya'nın başkentidir." },
                    { answer: "Turkish", pronunciation: "Törkiş", question: "Türk/Türkçe", example: "He speaks Turkish fluently.", exampleTR: "O akıcı bir şekilde Türkçe konuşur." },
                    { answer: "German", pronunciation: "Cörmın", question: "Alman/Almanca", example: "German is a difficult language.", exampleTR: "Almanca zor bir dildir." },
                    { answer: "Spanish", pronunciation: "Speniş", question: "İspanyol/İspanyolca", example: "She is learning Spanish.", exampleTR: "O İspanyolca öğreniyor." },
                    { answer: "Country", pronunciation: "Kantri", question: "Ülke", example: "Which country are you from?", exampleTR: "Hangi ülkedensin?" },
                    { answer: "Capital", pronunciation: "Kepitıl", question: "Başkent", example: "Ankara is the capital of Türkiye.", exampleTR: "Ankara Türkiye'nin başkentidir." },
                    { answer: "Language", pronunciation: "Lengwıc", question: "Dil", example: "English is a global language.", exampleTR: "İngilizce küresel bir dildir." },
                    { answer: "Native language", pronunciation: "Neytiv lengwıc", question: "Ana dil", example: "My native language is Turkish.", exampleTR: "Ana dilim Türkçe." },
                    { answer: "Official language", pronunciation: "Ofişıl lengwıc", question: "Resmi dil", example: "The official language of Brazil is Portuguese.", exampleTR: "Brezilya'nın resmi dili Portekizcedir." },
                    { answer: "Nationality", pronunciation: "Neşıneliti", question: "Milliyet", example: "What is your nationality?", exampleTR: "Milliyetin nedir?" },
                    { answer: "Citizen", pronunciation: "Sitizın", question: "Vatandaş", example: "He is a Turkish citizen.", exampleTR: "O bir Türk vatandaşı." },
                    { answer: "Turkic states", pronunciation: "Törkik steyts", question: "Türkî devletler", example: "The Turkic states share similar cultures.", exampleTR: "Türkî devletler benzer kültürleri paylaşır." }
                ]
            },
            {
                name: "Tourist Spots",
                pool: [
                    { answer: "Sightseeing", pronunciation: "Saytsiiing", question: "Gezi/Gezme", example: "We went sightseeing in Paris.", exampleTR: "Paris'te geziye çıktık." },
                    { answer: "Castle", pronunciation: "Kasıl", question: "Kale", example: "The castle is very old.", exampleTR: "Kale çok eski." },
                    { answer: "Monument", pronunciation: "Monyumınt", question: "Anıt", example: "This monument honors heroes.", exampleTR: "Bu anıt kahramanları onurlandırır." },
                    { answer: "Tower", pronunciation: "Tawır", question: "Kule", example: "The Eiffel Tower is tall.", exampleTR: "Eyfel Kulesi uzundur." },
                    { answer: "Palace", pronunciation: "Pelıs", question: "Saray", example: "The queen lives in a palace.", exampleTR: "Kraliçe bir sarayda yaşıyor." },
                    { answer: "Ancient ruin", pronunciation: "Eynşınt ruin", question: "Antik kalıntı", example: "We visited ancient ruins.", exampleTR: "Antik kalıntıları ziyaret ettik." },
                    { answer: "Square", pronunciation: "Skueyr", question: "Meydan", example: "Let's meet at the square.", exampleTR: "Meydanda buluşalım." },
                    { answer: "Trip", pronunciation: "Trip", question: "Gezi", example: "We had a nice trip.", exampleTR: "Güzel bir gezi yaptık." },
                    { answer: "Hike", pronunciation: "Hayk", question: "Doğa yürüyüşü", example: "I like to hike in nature.", exampleTR: "Doğada yürüyüş yapmayı severim." },
                    { answer: "Journey", pronunciation: "Cörni", question: "Yolculuk", example: "Life is a long journey.", exampleTR: "Hayat uzun bir yolculuktur." },
                    { answer: "Travel", pronunciation: "Trevıl", question: "Seyahat etmek", example: "I love to travel.", exampleTR: "Seyahat etmeyi severim." },
                    { answer: "Explore", pronunciation: "Eksplor", question: "Keşfetmek", example: "Let's explore the city.", exampleTR: "Şehri keşfedelim." },
                    { answer: "Boat ride", pronunciation: "Bot rayd", question: "Tekne gezisi", example: "We went on a boat ride.", exampleTR: "Tekne gezisine çıktık." },
                    { answer: "Take a trip", pronunciation: "Teyk e trip", question: "Geziye çıkmak", example: "We took a trip to Spain.", exampleTR: "İspanya'ya geziye çıktık." },
                    { answer: "Stroll through", pronunciation: "Strol thru", question: "Dolaşmak", example: "We strolled through the park.", exampleTR: "Parkta dolaştık." },
                    { answer: "Museum", pronunciation: "Myuziyım", question: "Müze", example: "The museum has ancient artifacts.", exampleTR: "Müzede antik eserler var." },
                    { answer: "Art museum", pronunciation: "Art myuziyım", question: "Sanat müzesi", example: "The art museum displays famous paintings.", exampleTR: "Sanat müzesi ünlü tabloları sergiliyor." },
                    { answer: "Historical site", pronunciation: "Histörikıl sayt", question: "Tarihi yer", example: "Ephesus is a famous historical site.", exampleTR: "Efes ünlü bir tarihi yerdir." },
                    { answer: "Tourist attraction", pronunciation: "Turist ıtrekşın", question: "Turistik cazibe", example: "The Blue Mosque is a popular tourist attraction.", exampleTR: "Sultanahmet Camii popüler bir turistik cazibedir." },
                    { answer: "Tourist spots", pronunciation: "Turist spots", question: "Turistik yerler", example: "Istanbul has many tourist spots.", exampleTR: "İstanbul'da birçok turistik yer var." },
                    { answer: "Destination", pronunciation: "Destıneyşın", question: "Gidilecek yer", example: "Paris is a popular destination.", exampleTR: "Paris popüler bir gidilecek yerdir." },
                    { answer: "Day trip", pronunciation: "Dey trip", question: "Günlük gezi", example: "We took a day trip to the countryside.", exampleTR: "Kırsal bölgeye günlük bir gezi yaptık." },
                    { answer: "Go sightseeing", pronunciation: "Go saytsiiing", question: "Geziye çıkmak", example: "We want to go sightseeing tomorrow.", exampleTR: "Yarın geziye çıkmak istiyoruz." },
                    { answer: "Go for a hike", pronunciation: "Go for e hayk", question: "Yürüyüşe çıkmak", example: "Let's go for a hike in the mountains.", exampleTR: "Dağlarda yürüyüşe çıkalım." },
                    { answer: "Bike around", pronunciation: "Bayk ıraund", question: "Bisikletle dolaşmak", example: "We biked around the island.", exampleTR: "Adanın etrafında bisikletle dolaştık." },
                    { answer: "Take photos", pronunciation: "Teyk fotos", question: "Fotoğraf çekmek", example: "I love to take photos of nature.", exampleTR: "Doğa fotoğrafı çekmeyi severim." },
                    { answer: "Thermal bath", pronunciation: "Thörmıl bath", question: "Kaplıca", example: "We relaxed in the thermal bath.", exampleTR: "Kaplıcada dinlendik." },
                    { answer: "Entrance", pronunciation: "Entrıns", question: "Giriş", example: "The entrance to the museum is free.", exampleTR: "Müze girişi ücretsiz." },
                    { answer: "Location", pronunciation: "Lokeyşın", question: "Konum", example: "The location of the hotel is perfect.", exampleTR: "Otelin konumu mükemmel." },
                    { answer: "Close to", pronunciation: "Klos tu", question: "Yakınında", example: "The hotel is close to the beach.", exampleTR: "Otel plaja yakındır." },
                    { answer: "Skyscraper", pronunciation: "Skayskraypır", question: "Gökdelen", example: "Dubai has many skyscrapers.", exampleTR: "Dubai'de birçok gökdelen var." },
                    { answer: "Silk Road", pronunciation: "Silk Rod", question: "İpek Yolu", example: "The Silk Road connected Asia and Europe.", exampleTR: "İpek Yolu Asya ve Avrupa'yı birbirine bağladı." }
                ]
            },
            {
                name: "Geography & Nature",
                pool: [
                    { answer: "Forest", pronunciation: "Forıst", question: "Orman", example: "The forest is green and beautiful.", exampleTR: "Orman yeşil ve güzeldir." },
                    { answer: "River", pronunciation: "Rivır", question: "Nehir", example: "The river flows through the city.", exampleTR: "Nehir şehrin içinden akıyor." },
                    { answer: "Lake", pronunciation: "Leyk", question: "Göl", example: "The lake is calm and peaceful.", exampleTR: "Göl sakin ve huzurlu." },
                    { answer: "Mountain", pronunciation: "Mauntın", question: "Dağ", example: "The mountain is covered with snow.", exampleTR: "Dağ karla kaplı." },
                    { answer: "Desert", pronunciation: "Dezırt", question: "Çöl", example: "The Sahara is the largest desert.", exampleTR: "Sahra en büyük çöldür." },
                    { answer: "Valley", pronunciation: "Veli", question: "Vadi", example: "The valley is surrounded by mountains.", exampleTR: "Vadi dağlarla çevrili." },
                    { answer: "Climate", pronunciation: "Klaymıt", question: "İklim", example: "The climate here is mild.", exampleTR: "Buranın iklimi ılıman." },
                    { answer: "Temperature", pronunciation: "Temprıçır", question: "Sıcaklık", example: "The temperature is 25 degrees today.", exampleTR: "Bugün sıcaklık 25 derece." },
                    { answer: "Landscape", pronunciation: "Lendskeip", question: "Manzara", example: "The landscape of Cappadocia is unique.", exampleTR: "Kapadokya'nın manzarası eşsiz." },
                    { answer: "Natural beauty", pronunciation: "Neçırıl byuti", question: "Doğal güzellik", example: "This area is known for its natural beauty.", exampleTR: "Bu bölge doğal güzelliğiyle tanınır." },
                    { answer: "Natural wonder", pronunciation: "Neçırıl wandır", question: "Doğal harika", example: "Pamukkale is a natural wonder.", exampleTR: "Pamukkale doğal bir harikadır." },
                    { answer: "National park", pronunciation: "Neşınıl park", question: "Milli park", example: "We visited a national park last weekend.", exampleTR: "Geçen hafta sonu milli park ziyaret ettik." },
                    { answer: "Sunset view", pronunciation: "Sanset vyu", question: "Gün batımı manzarası", example: "The sunset view from here is amazing.", exampleTR: "Buradan gün batımı manzarası harika." },
                    { answer: "Paradise", pronunciation: "Perıdays", question: "Cennet", example: "This beach is like a paradise.", exampleTR: "Bu plaj cennet gibi." }
                ]
            },
            {
                name: "Culture & Heritage",
                pool: [
                    { answer: "Ancient", pronunciation: "Eynşınt", question: "Antik/Eski", example: "This is an ancient city.", exampleTR: "Bu antik bir şehirdir." },
                    { answer: "History", pronunciation: "Histıri", question: "Tarih", example: "I like learning history.", exampleTR: "Tarih öğrenmeyi severim." },
                    { answer: "Rich history", pronunciation: "Riç histıri", question: "Zengin tarih", example: "İzmir has a rich history.", exampleTR: "İzmir'in zengin bir tarihi var." },
                    { answer: "Carpet art", pronunciation: "Karpıt art", question: "Halı sanatı", example: "Carpet art is traditional in Türkiye.", exampleTR: "Halı sanatı Türkiye'de gelenekseldir." },
                    { answer: "Rock art", pronunciation: "Rok art", question: "Kaya sanatı", example: "Rock art shows ancient life.", exampleTR: "Kaya sanatı eski yaşamı gösterir." },
                    { answer: "Cultural heritage", pronunciation: "Kalçırıl herıtıc", question: "Kültürel miras", example: "Protect our cultural heritage.", exampleTR: "Kültürel mirasımızı koruyalım." },
                    { answer: "Traditional", pronunciation: "Trıdişınıl", question: "Geleneksel", example: "It is a traditional dance.", exampleTR: "Bu geleneksel bir danstır." },
                    { answer: "Culture", pronunciation: "Kalçır", question: "Kültür", example: "Every country has its own culture.", exampleTR: "Her ülkenin kendi kültürü vardır." },
                    { answer: "Architecture", pronunciation: "Arkitekçır", question: "Mimari", example: "Ottoman architecture is beautiful.", exampleTR: "Osmanlı mimarisi güzeldir." },
                    { answer: "Ancestor", pronunciation: "Ensestır", question: "Ata", example: "Our ancestors lived here.", exampleTR: "Atalarımız burada yaşadı." },
                    { answer: "Indigenous", pronunciation: "Indicınıs", question: "Yerli", example: "The indigenous people have rich traditions.", exampleTR: "Yerli halkın zengin gelenekleri var." },
                    { answer: "Modern era", pronunciation: "Madırn erı", question: "Modern çağ", example: "We live in the modern era.", exampleTR: "Modern çağda yaşıyoruz." },
                    { answer: "Chopsticks", pronunciation: "Çapstiks", question: "Yemek çubukları", example: "People in Japan use chopsticks.", exampleTR: "Japonya'da insanlar yemek çubuğu kullanır." }
                ]
            },
            {
                name: "Adjectives & Opinions",
                pool: [
                    { answer: "Amazing", pronunciation: "Imeyzing", question: "Şaşırtıcı/Harika", example: "The view is amazing.", exampleTR: "Manzara harika." },
                    { answer: "Unique", pronunciation: "Yunik", question: "Eşsiz", example: "This place is unique.", exampleTR: "Burası eşsiz." },
                    { answer: "Worth seeing", pronunciation: "Wörth siing", question: "Görülmeye değer", example: "The museum is worth seeing.", exampleTR: "Müze görülmeye değer." },
                    { answer: "Unexplored", pronunciation: "Aneksplord", question: "Keşfedilmemiş", example: "It is an unexplored island.", exampleTR: "Bu keşfedilmemiş bir ada." },
                    { answer: "Peaceful", pronunciation: "Piisful", question: "Huzurlu", example: "The village is very peaceful.", exampleTR: "Köy çok huzurlu." },
                    { answer: "Fascinating", pronunciation: "Fesıneyting", question: "Büyüleyici", example: "The old town is fascinating.", exampleTR: "Eski şehir büyüleyici." },
                    { answer: "Incredible", pronunciation: "İnkredibıl", question: "İnanılmaz", example: "The scenery is incredible.", exampleTR: "Manzara inanılmaz." },
                    { answer: "Magnificent", pronunciation: "Megnifisınt", question: "Muhteşem", example: "The palace is magnificent.", exampleTR: "Saray muhteşem." },
                    { answer: "Enormous", pronunciation: "İnormıs", question: "Devasa", example: "The castle is enormous.", exampleTR: "Kale devasa." },
                    { answer: "Delicious", pronunciation: "Dilişıs", question: "Lezzetli", example: "Turkish food is delicious.", exampleTR: "Türk yemekleri lezzetli." },
                    { answer: "Memorable", pronunciation: "Memırıbıl", question: "Unutulmaz", example: "It was a memorable trip.", exampleTR: "Unutulmaz bir geziydi." },
                    { answer: "Unusual", pronunciation: "Anyujuıl", question: "Alışılmadık", example: "This is an unusual building.", exampleTR: "Bu alışılmadık bir bina." },
                    { answer: "Friendly", pronunciation: "Frendli", question: "Arkadaş canlısı", example: "The local people are very friendly.", exampleTR: "Yerel halk çok arkadaş canlısı." },
                    { answer: "Welcoming", pronunciation: "Welkaming", question: "Misafirperver", example: "Turkish people are welcoming.", exampleTR: "Türk insanları misafirperver." },
                    { answer: "Kind", pronunciation: "Kaynd", question: "Nazik", example: "The guide was very kind.", exampleTR: "Rehber çok nazikti." },
                    { answer: "Famous for", pronunciation: "Feymıs for", question: "... ile ünlü", example: "Italy is famous for pizza.", exampleTR: "İtalya pizza ile ünlü." },
                    { answer: "Curious about", pronunciation: "Kyuriıs ıbaut", question: "Meraklı", example: "I am curious about Japanese culture.", exampleTR: "Japon kültürü hakkında meraklıyım." },
                    { answer: "Interested in", pronunciation: "İntrestid in", question: "İlgilenmek", example: "She is interested in history.", exampleTR: "O tarihle ilgileniyor." }
                ]
            },
            {
                name: "Digital Life & Technology",
                pool: [
                    { answer: "Prevent", pronunciation: "Privent", question: "Önlemek", example: "We must prevent data theft.", exampleTR: "Veri hırsızlığını önlemeliyiz." },
                    { answer: "Cybersecurity", pronunciation: "Saybırsıkyurıti", question: "Siber güvenlik", example: "Cybersecurity is important for everyone.", exampleTR: "Siber güvenlik herkes için önemlidir." },
                    { answer: "Data theft", pronunciation: "Deyta theft", question: "Veri hırsızlığı", example: "Watch out for data theft online.", exampleTR: "İnternette veri hırsızlığına dikkat et." },
                    { answer: "Cyberattack", pronunciation: "Saybıratek", question: "Siber saldırı", example: "The company faced a cyberattack.", exampleTR: "Şirket bir siber saldırıyla karşılaştı." },
                    { answer: "Personal information", pronunciation: "Pörsınıl informeyşın", question: "Kişisel bilgi", example: "Never share your personal information.", exampleTR: "Asla kişisel bilgilerini paylaşma." },
                    { answer: "Damage", pronunciation: "Demıc", question: "Zarar vermek", example: "Viruses can damage your computer.", exampleTR: "Virüsler bilgisayarına zarar verebilir." },
                    { answer: "Steal", pronunciation: "Stiil", question: "Çalmak", example: "Hackers try to steal passwords.", exampleTR: "Hackerlar şifre çalmaya çalışır." },
                    { answer: "Save time", pronunciation: "Seyv taym", question: "Zaman kazanmak", example: "Technology helps us save time.", exampleTR: "Teknoloji zaman kazanmamıza yardımcı olur." },
                    { answer: "Pay bill", pronunciation: "Pey bil", question: "Fatura ödemek", example: "You can pay bills online.", exampleTR: "Faturaları çevrimiçi ödeyebilirsin." },
                    { answer: "Work from home", pronunciation: "Wörk from hom", question: "Evden çalışmak", example: "Many people work from home now.", exampleTR: "Artık birçok insan evden çalışıyor." }
                ]
            },
            {
                name: "Food & Local Life",
                pool: [
                    { answer: "Local food", pronunciation: "Lokıl fud", question: "Yerel yemek", example: "Try the local food when you travel.", exampleTR: "Seyahat ettiğinde yerel yemekleri dene." },
                    { answer: "Local market", pronunciation: "Lokıl markıt", question: "Yerel pazar", example: "We bought souvenirs from the local market.", exampleTR: "Yerel pazardan hediyelik eşya aldık." },
                    { answer: "Taste", pronunciation: "Teyst", question: "Tatmak", example: "I want to taste traditional food.", exampleTR: "Geleneksel yemekleri tatmak istiyorum." },
                    { answer: "Enjoy", pronunciation: "Encoy", question: "Keyif almak", example: "I enjoy traveling to new places.", exampleTR: "Yeni yerler gezmeye keyif alıyorum." },
                    { answer: "Experience", pronunciation: "İkspiıriyıns", question: "Deneyim", example: "It was a great experience.", exampleTR: "Harika bir deneyimdi." },
                    { answer: "Order", pronunciation: "Ordır", question: "Sipariş vermek", example: "I ordered coffee at the café.", exampleTR: "Kafede kahve sipariş ettim." }
                ]
            },
            {
                name: "Work & Business",
                pool: [
                    { answer: "Ability", pronunciation: "Ibiliti", question: "Yetenek", example: "She has the ability to speak five languages.", exampleTR: "O beş dil konuşma yeteneğine sahip." },
                    { answer: "Firm", pronunciation: "Förm", question: "Firma", example: "He works for a big firm.", exampleTR: "O büyük bir firmada çalışıyor." },
                    { answer: "Private company", pronunciation: "Prayvıt kampıni", question: "Özel şirket", example: "She founded a private company.", exampleTR: "O bir özel şirket kurdu." },
                    { answer: "Government office", pronunciation: "Gavırnmınt ofis", question: "Devlet dairesi", example: "He works at a government office.", exampleTR: "O bir devlet dairesinde çalışıyor." },
                    { answer: "Get a promotion", pronunciation: "Get e promoşın", question: "Terfi almak", example: "She got a promotion at work.", exampleTR: "İşte terfi aldı." },
                    { answer: "Run business", pronunciation: "Ran biznıs", question: "İş yürütmek", example: "My father runs his own business.", exampleTR: "Babam kendi işini yürütüyor." },
                    { answer: "Task", pronunciation: "Task", question: "Görev", example: "I have many tasks to complete.", exampleTR: "Tamamlamam gereken birçok görev var." },
                    { answer: "Responsible", pronunciation: "Rispansıbıl", question: "Sorumlu", example: "He is responsible for the project.", exampleTR: "O projeden sorumlu." },
                    { answer: "Provide", pronunciation: "Provayd", question: "Sağlamak", example: "The hotel provides free breakfast.", exampleTR: "Otel ücretsiz kahvaltı sağlıyor." },
                    { answer: "Vocational schools", pronunciation: "Vokeyşınıl skulz", question: "Meslek okulları", example: "Vocational schools teach practical skills.", exampleTR: "Meslek okulları pratik beceriler öğretir." }
                ]
            },
            {
                name: "People & Society",
                pool: [
                    { answer: "Meet", pronunciation: "Miit", question: "Tanışmak/Buluşmak", example: "I met new friends on the trip.", exampleTR: "Gezide yeni arkadaşlarla tanıştım." },
                    { answer: "Attend", pronunciation: "Itend", question: "Katılmak", example: "I will attend the meeting tomorrow.", exampleTR: "Yarın toplantıya katılacağım." },
                    { answer: "Join", pronunciation: "Coyn", question: "Katılmak", example: "Would you like to join us?", exampleTR: "Bize katılmak ister misin?" },
                    { answer: "Visit", pronunciation: "Vizit", question: "Ziyaret etmek", example: "I want to visit my grandparents.", exampleTR: "Büyükannemi ve büyükbabamı ziyaret etmek istiyorum." },
                    { answer: "Create", pronunciation: "Kriyet", question: "Yaratmak", example: "Artists create beautiful things.", exampleTR: "Sanatçılar güzel şeyler yaratır." },
                    { answer: "Newcomer", pronunciation: "Nyukamır", question: "Yeni gelen", example: "The newcomer joined our class.", exampleTR: "Yeni gelen sınıfımıza katıldı." },
                    { answer: "Importance", pronunciation: "İmportıns", question: "Önem", example: "Education has great importance.", exampleTR: "Eğitim büyük öneme sahiptir." },
                    { answer: "Opportunity", pronunciation: "Opırtuniti", question: "Fırsat", example: "This is a great opportunity.", exampleTR: "Bu harika bir fırsat." },
                    { answer: "Necessity", pronunciation: "Nesisiti", question: "Gereklilik", example: "Water is a necessity for life.", exampleTR: "Su yaşam için bir gerekliliktir." },
                    { answer: "Obligation", pronunciation: "Obligeyşın", question: "Zorunluluk", example: "We have an obligation to help.", exampleTR: "Yardım etme zorunluluğumuz var." },
                    { answer: "Possibility", pronunciation: "Pasibiliti", question: "Olasılık", example: "There is a possibility of rain.", exampleTR: "Yağmur olasılığı var." }
                ]
            }
        ],
        Grade9_Unit2: [
            {
                name: "Daily Routines & Activities",
                pool: [
                    { answer: "Wake up", pronunciation: "Weyk ap", question: "Uyanmak", example: "I wake up at 7 AM every day.", exampleTR: "Her gün sabah 7'de uyanırım." },
                    { answer: "Get out of bed", pronunciation: "Get aut ov bed", question: "Yataktan kalkmak", example: "I get out of bed at 6:30.", exampleTR: "6:30'da yataktan kalkarım." },
                    { answer: "Have a lie-in", pronunciation: "Hev e lay-in", question: "Geç uyanmak", example: "I have a lie-in on Sundays.", exampleTR: "Pazar günleri geç uyanırım." },
                    { answer: "Clean face", pronunciation: "Klin feys", question: "Yüzünü yıkamak", example: "I clean my face every morning.", exampleTR: "Her sabah yüzümü yıkarım." },
                    { answer: "Comb hair", pronunciation: "Kom heyr", question: "Saçını taramak", example: "She combs her hair before school.", exampleTR: "Okuldan önce saçını tarar." },
                    { answer: "Get dressed", pronunciation: "Get drest", question: "Giyinmek", example: "I get dressed quickly in the morning.", exampleTR: "Sabahları hızlıca giyinirim." },
                    { answer: "Put clothes on", pronunciation: "Put klothz on", question: "Kıyafet giymek", example: "He puts his clothes on after shower.", exampleTR: "Duştan sonra kıyafetlerini giyer." },
                    { answer: "Take clothes off", pronunciation: "Teyk klothz of", question: "Kıyafet çıkarmak", example: "Take your clothes off before swimming.", exampleTR: "Yüzmeden önce kıyafetlerini çıkar." },
                    { answer: "Have breakfast", pronunciation: "Hev brekfıst", question: "Kahvaltı yapmak", example: "I have breakfast at 7:30 AM.", exampleTR: "Sabah 7:30'da kahvaltı yaparım." },
                    { answer: "Skip breakfast", pronunciation: "Skip brekfıst", question: "Kahvaltı yapmamak", example: "Don't skip breakfast, it's important.", exampleTR: "Kahvaltıyı atlama, önemlidir." },
                    { answer: "Have a shower", pronunciation: "Hev e şawır", question: "Duş almak", example: "I have a shower every morning.", exampleTR: "Her sabah duş alırım." },
                    { answer: "Make bed", pronunciation: "Meyk bed", question: "Yatağını toplamak", example: "I make my bed before leaving.", exampleTR: "Çıkmadan önce yatağımı toplarım." },
                    { answer: "Leave home", pronunciation: "Liiv hom", question: "Evden çıkmak", example: "I leave home at 8 AM.", exampleTR: "Sabah 8'de evden çıkarım." },
                    { answer: "Walk to school", pronunciation: "Wok tu skul", question: "Okula yürümek", example: "I walk to school every day.", exampleTR: "Her gün okula yürürüm." },
                    { answer: "Cycle to school", pronunciation: "Saykıl tu skul", question: "Bisikletle okula gitmek", example: "He cycles to school in summer.", exampleTR: "Yazın bisikletle okula gider." },
                    { answer: "Take the bus", pronunciation: "Teyk dı bas", question: "Otobüse binmek", example: "I take the bus to school.", exampleTR: "Okula otobüsle giderim." },
                    { answer: "Take the train", pronunciation: "Teyk dı treyn", question: "Trene binmek", example: "She takes the train to work.", exampleTR: "İşe trenle gider." },
                    { answer: "Attend classes", pronunciation: "Etend klasız", question: "Derse katılmak", example: "We attend classes on weekdays.", exampleTR: "Hafta içi derslere katılırız." },
                    { answer: "Take notes", pronunciation: "Teyk nots", question: "Not almak", example: "I take notes during lectures.", exampleTR: "Derslerde not alırım." },
                    { answer: "Have a break", pronunciation: "Hev e breyk", question: "Mola vermek", example: "Let's have a break for 10 minutes.", exampleTR: "10 dakika mola verelim." },
                    { answer: "Lunch", pronunciation: "Lanç", question: "Öğle yemeği", example: "We have lunch at noon.", exampleTR: "Öğlen öğle yemeği yeriz." },
                    { answer: "Leave school", pronunciation: "Liiv skul", question: "Okuldan ayrılmak", example: "I leave school at 3 PM.", exampleTR: "Saat 3'te okuldan ayrılırım." },
                    { answer: "Arrive home", pronunciation: "Erayv hom", question: "Eve varmak", example: "I arrive home at 4 PM.", exampleTR: "Saat 4'te eve varırım." },
                    { answer: "Return home", pronunciation: "Ritörn hom", question: "Eve dönmek", example: "I return home after work.", exampleTR: "İşten sonra eve dönerim." },
                    { answer: "Get back to", pronunciation: "Get bek tu", question: "Geri dönmek", example: "I get back to my room after dinner.", exampleTR: "Yemekten sonra odama geri dönerim." },
                    { answer: "Help parents", pronunciation: "Help perınts", question: "Aileye yardım etmek", example: "I help my parents with housework.", exampleTR: "Aileme ev işlerinde yardım ederim." },
                    { answer: "Household chores", pronunciation: "Haushould çorz", question: "Ev işleri", example: "I do household chores on weekends.", exampleTR: "Hafta sonları ev işleri yaparım." },
                    { answer: "Run errands", pronunciation: "Ran erındz", question: "Ayak işleri yapmak", example: "My mom runs errands on Saturdays.", exampleTR: "Annem Cumartesi günleri ayak işleri yapar." },
                    { answer: "Go shopping", pronunciation: "Go şaping", question: "Alışverişe gitmek", example: "We go shopping on Sundays.", exampleTR: "Pazar günleri alışverişe gideriz." },
                    { answer: "Meet friends", pronunciation: "Miit frendz", question: "Arkadaşlarla buluşmak", example: "I meet friends after school.", exampleTR: "Okuldan sonra arkadaşlarla buluşurum." },
                    { answer: "Chat", pronunciation: "Çet", question: "Sohbet etmek", example: "We chat online every evening.", exampleTR: "Her akşam çevrimiçi sohbet ederiz." },
                    { answer: "Go out", pronunciation: "Go aut", question: "Dışarı çıkmak", example: "Let's go out tonight.", exampleTR: "Bu akşam dışarı çıkalım." },
                    { answer: "Staying home", pronunciation: "Steying hom", question: "Evde kalmak", example: "I prefer staying home on rainy days.", exampleTR: "Yağmurlu günlerde evde kalmayı tercih ederim." },
                    { answer: "Watch", pronunciation: "Woç", question: "İzlemek", example: "I watch TV in the evening.", exampleTR: "Akşamları TV izlerim." },
                    { answer: "Read", pronunciation: "Riid", question: "Okumak", example: "I read books before bed.", exampleTR: "Yatmadan önce kitap okurum." },
                    { answer: "Study", pronunciation: "Stadi", question: "Ders çalışmak", example: "I study for two hours every day.", exampleTR: "Her gün iki saat ders çalışırım." },
                    { answer: "Relax", pronunciation: "Rileks", question: "Rahatlamak", example: "I relax by listening to music.", exampleTR: "Müzik dinleyerek rahatlarım." },
                    { answer: "Go to bed", pronunciation: "Go tu bed", question: "Yatağa gitmek", example: "I go to bed at 11 PM.", exampleTR: "Saat 11'de yatağa giderim." },
                    { answer: "Pack", pronunciation: "Pek", question: "Hazırlamak", example: "I pack my bag the night before.", exampleTR: "Çantamı bir gece önceden hazırlarım." },
                    { answer: "Do a task", pronunciation: "Du e task", question: "Görev yapmak", example: "I do a task before breakfast.", exampleTR: "Kahvaltıdan önce bir görev yaparım." }
                ]
            },
            {
                name: "Time & Frequency Expressions",
                pool: [
                    { answer: "Always", pronunciation: "Olweyz", question: "Daima (100%)", example: "I always brush my teeth.", exampleTR: "Daima dişlerimi fırçalarım." },
                    { answer: "Usually", pronunciation: "Yujuıli", question: "Genelde (90%)", example: "I usually wake up at 7.", exampleTR: "Genelde 7'de uyanırım." },
                    { answer: "Often", pronunciation: "Ofın", question: "Sık sık (70%)", example: "We often go to the cinema.", exampleTR: "Sık sık sinemaya gideriz." },
                    { answer: "Sometimes", pronunciation: "Samtaymz", question: "Bazen (50%)", example: "I sometimes eat fast food.", exampleTR: "Bazen fast food yerim." },
                    { answer: "Occasionally", pronunciation: "Okeyjınıli", question: "Ara sıra (30%)", example: "I occasionally visit my grandparents.", exampleTR: "Ara sıra büyükannemi ziyaret ederim." },
                    { answer: "Rarely", pronunciation: "Rerli", question: "Nadiren (10%)", example: "He rarely watches TV.", exampleTR: "O nadiren TV izler." },
                    { answer: "Never", pronunciation: "Nevır", question: "Asla (0%)", example: "I never skip breakfast.", exampleTR: "Asla kahvaltıyı atlamam." },
                    { answer: "Every day", pronunciation: "Evri dey", question: "Her gün", example: "I exercise every day.", exampleTR: "Her gün egzersiz yaparım." },
                    { answer: "On time", pronunciation: "On taym", question: "Zamanında", example: "Please arrive on time.", exampleTR: "Lütfen zamanında gel." },
                    { answer: "One-time", pronunciation: "Wan-taym", question: "Tek seferlik", example: "It was a one-time event.", exampleTR: "Tek seferlik bir etkinlikti." },
                    { answer: "Last", pronunciation: "Last", question: "Sürmek (zaman)", example: "The movie lasts two hours.", exampleTR: "Film iki saat sürüyor." },
                    { answer: "Quickly", pronunciation: "Kwikli", question: "Hızlıca", example: "Finish your homework quickly.", exampleTR: "Ödevini hızlıca bitir." },
                    { answer: "Slowly", pronunciation: "Sloli", question: "Yavaşça", example: "Walk slowly on the ice.", exampleTR: "Buzda yavaşça yürü." },
                    { answer: "Schedule", pronunciation: "Skecul", question: "Program", example: "I have a busy schedule today.", exampleTR: "Bugün yoğun bir programım var." },
                    { answer: "Routines", pronunciation: "Rutiinz", question: "Günlük alışkanlıklar", example: "Morning routines are important.", exampleTR: "Sabah rutinleri önemlidir." },
                    { answer: "Habits", pronunciation: "Hebits", question: "Alışkanlıklar", example: "Good habits lead to success.", exampleTR: "İyi alışkanlıklar başarıya götürür." },
                    { answer: "Break", pronunciation: "Breyk", question: "Ara, mola", example: "Take a short break.", exampleTR: "Kısa bir mola ver." },
                    { answer: "Lecture", pronunciation: "Lekçır", question: "Ders", example: "The lecture starts at 9 AM.", exampleTR: "Ders saat 9'da başlıyor." }
                ]
            },
            {
                name: "Education & Learning",
                pool: [
                    { answer: "Education", pronunciation: "Edyukeyşın", question: "Eğitim", example: "Education is very important.", exampleTR: "Eğitim çok önemlidir." },
                    { answer: "Curriculum", pronunciation: "Kırikyulım", question: "Müfredat", example: "The curriculum includes many subjects.", exampleTR: "Müfredat birçok ders içeriyor." },
                    { answer: "Cram school", pronunciation: "Krem skul", question: "Dershane", example: "Many students go to cram school.", exampleTR: "Birçok öğrenci dershaneye gider." },
                    { answer: "Entrance exam", pronunciation: "Entrıns igzem", question: "Giriş sınavı", example: "I'm preparing for the entrance exam.", exampleTR: "Giriş sınavına hazırlanıyorum." },
                    { answer: "Knowledge", pronunciation: "Nalıc", question: "Bilgi", example: "Knowledge is power.", exampleTR: "Bilgi güçtür." },
                    { answer: "Learning opportunities", pronunciation: "Lörning opırtunitiz", question: "Öğrenme fırsatları", example: "Online courses provide learning opportunities.", exampleTR: "Çevrimiçi kurslar öğrenme fırsatları sağlar." },
                    { answer: "Digital tools", pronunciation: "Dicıtıl tulz", question: "Dijital araçlar", example: "We use digital tools in class.", exampleTR: "Sınıfta dijital araçlar kullanıyoruz." },
                    { answer: "Expert-made", pronunciation: "Ekspört-meyd", question: "Uzman yapımı", example: "This is an expert-made curriculum.", exampleTR: "Bu uzman yapımı bir müfredattır." },
                    { answer: "Problem-solving skills", pronunciation: "Prablım-salving skilz", question: "Problem çözme becerileri", example: "Develop your problem-solving skills.", exampleTR: "Problem çözme becerilerini geliştir." },
                    { answer: "Solving problems", pronunciation: "Salving prablımz", question: "Sorun çözme", example: "Solving problems requires patience.", exampleTR: "Sorun çözme sabır gerektirir." },
                    { answer: "Writing stories", pronunciation: "Rayting storiz", question: "Hikâye yazmak", example: "I enjoy writing stories.", exampleTR: "Hikâye yazmaktan keyif alırım." },
                    { answer: "Preparation", pronunciation: "Prepıreyşın", question: "Hazırlık", example: "Good preparation is key to success.", exampleTR: "İyi hazırlık başarının anahtarıdır." },
                    { answer: "Prepare", pronunciation: "Pripeyr", question: "Hazırlamak", example: "I prepare my lessons every night.", exampleTR: "Her gece derslerimi hazırlarım." },
                    { answer: "Progress", pronunciation: "Pragrıs", question: "İlerleme", example: "You're making great progress.", exampleTR: "Harika ilerleme kaydediyorsun." },
                    { answer: "Repeat", pronunciation: "Ripiit", question: "Tekrar etmek", example: "Please repeat the question.", exampleTR: "Lütfen soruyu tekrar et." },
                    { answer: "Valuable information", pronunciation: "Velyuıbıl informeyşın", question: "Değerli bilgi", example: "This book contains valuable information.", exampleTR: "Bu kitap değerli bilgi içeriyor." }
                ]
            },
            {
                name: "Skills & Development",
                pool: [
                    { answer: "Skill", pronunciation: "Skil", question: "Beceri", example: "Reading is an important skill.", exampleTR: "Okuma önemli bir beceridir." },
                    { answer: "Develop", pronunciation: "Divelıp", question: "Geliştirmek", example: "Develop your language skills.", exampleTR: "Dil becerilerini geliştir." },
                    { answer: "Development", pronunciation: "Divelıpmınt", question: "Gelişim", example: "Personal development is important.", exampleTR: "Kişisel gelişim önemlidir." },
                    { answer: "Improve", pronunciation: "İmpruv", question: "Geliştirmek", example: "I want to improve my English.", exampleTR: "İngilizcemi geliştirmek istiyorum." },
                    { answer: "Increase", pronunciation: "İnkriis", question: "Artırmak", example: "Exercise increases your energy.", exampleTR: "Egzersiz enerjini artırır." },
                    { answer: "Creativity", pronunciation: "Kriyetiviti", question: "Yaratıcılık", example: "Art develops creativity.", exampleTR: "Sanat yaratıcılığı geliştirir." },
                    { answer: "Create", pronunciation: "Kriyet", question: "Oluşturmak", example: "Let's create something new.", exampleTR: "Yeni bir şey oluşturalım." },
                    { answer: "Teamwork", pronunciation: "Tiimwörk", question: "Ekip çalışması", example: "Teamwork makes the dream work.", exampleTR: "Ekip çalışması hayalleri gerçekleştirir." },
                    { answer: "Set goals", pronunciation: "Set golz", question: "Hedef belirlemek", example: "Set goals for the new year.", exampleTR: "Yeni yıl için hedef belirle." },
                    { answer: "Aim", pronunciation: "Eym", question: "Amaç", example: "My aim is to learn English.", exampleTR: "Amacım İngilizce öğrenmektir." },
                    { answer: "Career plans", pronunciation: "Keriır plenz", question: "Kariyer planları", example: "What are your career plans?", exampleTR: "Kariyer planların neler?" },
                    { answer: "Future plans", pronunciation: "Fyuçır plenz", question: "Gelecek planları", example: "I have big future plans.", exampleTR: "Büyük gelecek planlarım var." },
                    { answer: "Gain", pronunciation: "Geyn", question: "Kazanmak", example: "You can gain experience by working.", exampleTR: "Çalışarak deneyim kazanabilirsin." },
                    { answer: "Empower", pronunciation: "Empawır", question: "Güçlendirmek", example: "Education empowers people.", exampleTR: "Eğitim insanları güçlendirir." },
                    { answer: "Encourage", pronunciation: "Enkarıc", question: "Teşvik etmek", example: "Parents encourage their children.", exampleTR: "Aileler çocuklarını teşvik eder." },
                    { answer: "Support", pronunciation: "Sıport", question: "Desteklemek", example: "I support your decision.", exampleTR: "Kararını destekliyorum." },
                    { answer: "Participate", pronunciation: "Partisipeyt", question: "Katılmak", example: "Everyone should participate in class.", exampleTR: "Herkes derse katılmalı." },
                    { answer: "Join", pronunciation: "Coyn", question: "Katılmak", example: "Would you like to join us?", exampleTR: "Bize katılmak ister misin?" },
                    { answer: "Interact", pronunciation: "İnterekt", question: "Etkileşimde bulunmak", example: "Students interact with each other.", exampleTR: "Öğrenciler birbirleriyle etkileşimde bulunur." }
                ]
            },
            {
                name: "Lifestyle & Habits",
                pool: [
                    { answer: "Eating habits", pronunciation: "Iiting hebits", question: "Yeme alışkanlıkları", example: "Healthy eating habits are important.", exampleTR: "Sağlıklı yeme alışkanlıkları önemlidir." },
                    { answer: "Healthy", pronunciation: "Helthi", question: "Sağlıklı", example: "Eat healthy food every day.", exampleTR: "Her gün sağlıklı yiyecek ye." },
                    { answer: "Well-balanced", pronunciation: "Wel-belınst", question: "Dengeli", example: "Eat a well-balanced diet.", exampleTR: "Dengeli bir diyet uygula." },
                    { answer: "Well-being", pronunciation: "Wel-biing", question: "İyi oluş, sağlık", example: "Exercise is good for well-being.", exampleTR: "Egzersiz iyi oluş için faydalıdır." },
                    { answer: "Cereal", pronunciation: "Siriıl", question: "Mısır gevreği", example: "I eat cereal for breakfast.", exampleTR: "Kahvaltıda mısır gevreği yerim." },
                    { answer: "Snacks", pronunciation: "Sneks", question: "Atıştırmalıklar", example: "Don't eat too many snacks.", exampleTR: "Çok fazla atıştırmalık yeme." },
                    { answer: "Spending time together", pronunciation: "Spending taym tugedır", question: "Birlikte vakit geçirmek", example: "Spending time together is important.", exampleTR: "Birlikte vakit geçirmek önemlidir." },
                    { answer: "Being outdoors", pronunciation: "Biing autdorz", question: "Açık havada olmak", example: "I enjoy being outdoors.", exampleTR: "Açık havada olmaktan keyif alırım." },
                    { answer: "Keep up with", pronunciation: "Kiip ap wid", question: "Yetişmek", example: "I can't keep up with the news.", exampleTR: "Haberlere yetişemiyorum." },
                    { answer: "Make time", pronunciation: "Meyk taym", question: "Zaman ayırmak", example: "Make time for your hobbies.", exampleTR: "Hobiler için zaman ayır." },
                    { answer: "Busy", pronunciation: "Bizi", question: "Meşgul", example: "I'm very busy today.", exampleTR: "Bugün çok meşgulum." },
                    { answer: "Comfortable", pronunciation: "Kamfırtıbıl", question: "Rahat", example: "This chair is comfortable.", exampleTR: "Bu sandalye rahat." },
                    { answer: "Casual clothes", pronunciation: "Kejuıl klothz", question: "Günlük kıyafetler", example: "I wear casual clothes at home.", exampleTR: "Evde günlük kıyafet giyerim." },
                    { answer: "Relaxed clothes", pronunciation: "Rilekst klothz", question: "Rahat kıyafetler", example: "Wear relaxed clothes on the weekend.", exampleTR: "Hafta sonu rahat kıyafet giy." },
                    { answer: "Outfits", pronunciation: "Autfits", question: "Kıyafetler", example: "She has beautiful outfits.", exampleTR: "Onun güzel kıyafetleri var." },
                    { answer: "Trip", pronunciation: "Trip", question: "Gezi", example: "We had a nice trip.", exampleTR: "Güzel bir gezi yaptık." },
                    { answer: "Social event", pronunciation: "Soşıl ivent", question: "Sosyal etkinlik", example: "I attended a social event.", exampleTR: "Bir sosyal etkinliğe katıldım." },
                    { answer: "Ceremony", pronunciation: "Serımoni", question: "Tören", example: "The graduation ceremony was beautiful.", exampleTR: "Mezuniyet töreni güzeldi." }
                ]
            },
            {
                name: "Other Important Words",
                pool: [
                    { answer: "Adapt", pronunciation: "Edept", question: "Uyum sağlamak", example: "Adapt to new situations quickly.", exampleTR: "Yeni durumlara hızlıca uyum sağla." },
                    { answer: "Benefit", pronunciation: "Benıfit", question: "Fayda", example: "Exercise has many benefits.", exampleTR: "Egzersizin birçok faydası var." },
                    { answer: "Budget", pronunciation: "Bacıt", question: "Bütçe", example: "Plan your monthly budget.", exampleTR: "Aylık bütçeni planla." },
                    { answer: "Capture", pronunciation: "Kepçır", question: "Yakalamak", example: "Capture the moment with a photo.", exampleTR: "Anı fotoğrafla yakala." },
                    { answer: "Care about", pronunciation: "Ker ıbaut", question: "Önemsemek", example: "I care about my family.", exampleTR: "Ailemi önemsiyorum." },
                    { answer: "Carefully", pronunciation: "Kerfuli", question: "Dikkatlice", example: "Listen carefully to the teacher.", exampleTR: "Öğretmeni dikkatlice dinle." },
                    { answer: "Calligraphy", pronunciation: "Keligrıfi", question: "Hat sanatı", example: "Calligraphy is a beautiful art.", exampleTR: "Hat sanatı güzel bir sanattır." },
                    { answer: "Challenging", pronunciation: "Çelencing", question: "Zorlayıcı", example: "This exam is challenging.", exampleTR: "Bu sınav zorlayıcı." },
                    { answer: "Charge", pronunciation: "Çarc", question: "Şarj etmek", example: "Charge your phone before leaving.", exampleTR: "Çıkmadan önce telefonunu şarj et." },
                    { answer: "Check", pronunciation: "Çek", question: "Kontrol etmek", example: "Check your answers twice.", exampleTR: "Cevaplarını iki kez kontrol et." },
                    { answer: "Common", pronunciation: "Kamın", question: "Yaygın", example: "This is a common mistake.", exampleTR: "Bu yaygın bir hatadır." },
                    { answer: "Consists of", pronunciation: "Kınsists ov", question: "-den oluşmak", example: "The team consists of five members.", exampleTR: "Takım beş üyeden oluşuyor." },
                    { answer: "Cultural factors", pronunciation: "Kalçırıl fektırz", question: "Kültürel faktörler", example: "Cultural factors affect our habits.", exampleTR: "Kültürel faktörler alışkanlıklarımızı etkiler." },
                    { answer: "Culture", pronunciation: "Kalçır", question: "Kültür", example: "Every country has its own culture.", exampleTR: "Her ülkenin kendi kültürü var." },
                    { answer: "Traditional", pronunciation: "Trıdişınıl", question: "Geleneksel", example: "We eat traditional food on holidays.", exampleTR: "Tatillerde geleneksel yemek yeriz." },
                    { answer: "Effective", pronunciation: "Efektiv", question: "Etkili", example: "This method is very effective.", exampleTR: "Bu yöntem çok etkili." },
                    { answer: "Effectively", pronunciation: "Efektivli", question: "Etkili bir şekilde", example: "Use your time effectively.", exampleTR: "Zamanını etkili bir şekilde kullan." },
                    { answer: "Embrace", pronunciation: "Embreys", question: "Benimsemek", example: "Embrace new opportunities.", exampleTR: "Yeni fırsatları benimse." },
                    { answer: "Equal chances", pronunciation: "Iikwıl çensız", question: "Eşit fırsatlar", example: "Everyone deserves equal chances.", exampleTR: "Herkes eşit fırsatları hak eder." },
                    { answer: "Far", pronunciation: "Far", question: "Uzak", example: "The school is far from here.", exampleTR: "Okul buradan uzak." },
                    { answer: "Focus on", pronunciation: "Fokıs on", question: "Odaklanmak", example: "Focus on your studies.", exampleTR: "Derslerine odaklan." },
                    { answer: "Stay focused", pronunciation: "Stey fokıst", question: "Odaklanmak", example: "Stay focused during the exam.", exampleTR: "Sınav sırasında odaklan." },
                    { answer: "Forget", pronunciation: "Forget", question: "Unutmak", example: "Don't forget your homework.", exampleTR: "Ödevini unutma." },
                    { answer: "Highlight", pronunciation: "Haylayt", question: "Vurgulamak", example: "Highlight the important parts.", exampleTR: "Önemli kısımları vurgula." },
                    { answer: "Identify", pronunciation: "Aydentifay", question: "Belirlemek", example: "Identify the main problem.", exampleTR: "Ana problemi belirle." },
                    { answer: "Interested in", pronunciation: "İntrestid in", question: "İlgilenmek", example: "I'm interested in music.", exampleTR: "Müzikle ilgileniyorum." },
                    { answer: "Interesting", pronunciation: "İntresting", question: "İlginç", example: "This book is very interesting.", exampleTR: "Bu kitap çok ilginç." },
                    { answer: "Keen on", pronunciation: "Kiin on", question: "Düşkün olmak", example: "She is keen on sports.", exampleTR: "O spora düşkündür." },
                    { answer: "Leave a message", pronunciation: "Liiv e mesıc", question: "Mesaj bırakmak", example: "Please leave a message after the beep.", exampleTR: "Lütfen sinyal sesinden sonra mesaj bırakın." },
                    { answer: "Maintain", pronunciation: "Meynteyn", question: "Sürdürmek", example: "Maintain a healthy lifestyle.", exampleTR: "Sağlıklı bir yaşam tarzını sürdür." },
                    { answer: "Make an effort", pronunciation: "Meyk en efırt", question: "Çaba göstermek", example: "Make an effort to learn.", exampleTR: "Öğrenmek için çaba göster." },
                    { answer: "Make sure", pronunciation: "Meyk şur", question: "Emin olmak", example: "Make sure you lock the door.", exampleTR: "Kapıyı kilitlediğinden emin ol." },
                    { answer: "Minimise", pronunciation: "Minimays", question: "En aza indirmek", example: "Minimise distractions while studying.", exampleTR: "Çalışırken dikkat dağıtıcıları en aza indir." },
                    { answer: "Modernise", pronunciation: "Madırnayz", question: "Modernleştirmek", example: "Schools need to modernise.", exampleTR: "Okullar modernleşmeli." },
                    { answer: "Neatly", pronunciation: "Niitli", question: "Düzenli bir şekilde", example: "Write your name neatly.", exampleTR: "Adını düzenli bir şekilde yaz." },
                    { answer: "On the other hand", pronunciation: "On dı adır hend", question: "Diğer yandan", example: "On the other hand, it's expensive.", exampleTR: "Diğer yandan, pahalı." },
                    { answer: "Opportunity", pronunciation: "Opırtuniti", question: "Fırsat", example: "This is a great opportunity.", exampleTR: "Bu harika bir fırsat." },
                    { answer: "Pace", pronunciation: "Peys", question: "Tempo, hız", example: "Work at your own pace.", exampleTR: "Kendi temponla çalış." },
                    { answer: "Plan", pronunciation: "Plen", question: "Planlamak", example: "Plan your day in advance.", exampleTR: "Günü önceden planla." },
                    { answer: "Prefer", pronunciation: "Prifır", question: "Tercih etmek", example: "I prefer tea to coffee.", exampleTR: "Kahveyi çaya tercih ederim." },
                    { answer: "Provide", pronunciation: "Provayd", question: "Sağlamak", example: "Schools provide education.", exampleTR: "Okullar eğitim sağlar." },
                    { answer: "Raise", pronunciation: "Reyz", question: "Yükseltmek, artırmak", example: "Raise your hand if you know.", exampleTR: "Biliyorsan elini kaldır." },
                    { answer: "Reflect", pronunciation: "Riflekt", question: "Yansıtmak, düşünmek", example: "Reflect on your mistakes.", exampleTR: "Hatalarını düşün." },
                    { answer: "Shape", pronunciation: "Şeyp", question: "Şekillendirmek", example: "Education shapes our future.", exampleTR: "Eğitim geleceğimizi şekillendirir." },
                    { answer: "Share", pronunciation: "Şeyr", question: "Paylaşmak", example: "Share your ideas with others.", exampleTR: "Fikirlerini başkalarıyla paylaş." },
                    { answer: "Spontaneously", pronunciation: "Sponteyniısli", question: "Plansızca", example: "We decided spontaneously.", exampleTR: "Plansızca karar verdik." },
                    { answer: "Step by step", pronunciation: "Step bay step", question: "Adım adım", example: "Learn step by step.", exampleTR: "Adım adım öğren." },
                    { answer: "Suggest", pronunciation: "Sıcest", question: "Önermek", example: "I suggest you study harder.", exampleTR: "Daha çok çalışmanı öneririm." },
                    { answer: "Task", pronunciation: "Task", question: "Görev", example: "Complete this task by Friday.", exampleTR: "Bu görevi Cuma'ya kadar tamamla." },
                    { answer: "Track", pronunciation: "Trek", question: "Takip etmek", example: "Track your progress daily.", exampleTR: "İlerlemenizi günlük takip edin." },
                    { answer: "Value", pronunciation: "Velyu", question: "Değer vermek", example: "I value your opinion.", exampleTR: "Görüşüne değer veriyorum." },
                    { answer: "Various", pronunciation: "Veriıs", question: "Çeşitli", example: "There are various options.", exampleTR: "Çeşitli seçenekler var." },
                    { answer: "Weak", pronunciation: "Wiik", question: "Zayıf", example: "My math skills are weak.", exampleTR: "Matematik becerilerim zayıf." },
                    { answer: "Work on", pronunciation: "Wörk on", question: "Üzerinde çalışmak", example: "I need to work on my English.", exampleTR: "İngilizcemin üzerinde çalışmam lazım." }
                ]
            }
        ],
        Grade9_Unit3: [
            {
                name: "Physical Appearance",
                pool: [
                    { answer: "Attractive", pronunciation: "Etrektiv", question: "Çekici, güzel", example: "She is an attractive woman.", exampleTR: "O çekici bir kadın." },
                    { answer: "Beautiful", pronunciation: "Byutiful", question: "Güzel", example: "The sunset is beautiful.", exampleTR: "Gün batımı güzel." },
                    { answer: "Blond", pronunciation: "Bland", question: "Sarışın", example: "She has blond hair.", exampleTR: "Onun sarı saçları var." },
                    { answer: "Brunette", pronunciation: "Brunet", question: "Esmer", example: "She is a beautiful brunette.", exampleTR: "O güzel bir esmer." },
                    { answer: "Curly", pronunciation: "Körli", question: "Kıvırcık", example: "He has curly hair.", exampleTR: "Onun kıvırcık saçları var." },
                    { answer: "Cute", pronunciation: "Kyut", question: "Sevimli", example: "The baby is very cute.", exampleTR: "Bebek çok sevimli." },
                    { answer: "Dark", pronunciation: "Dark", question: "Esmer", example: "He has dark hair and eyes.", exampleTR: "Onun koyu renk saçı ve gözleri var." },
                    { answer: "Dark curly hair", pronunciation: "Dark körli heyr", question: "Koyu kıvırcık saç", example: "She has dark curly hair.", exampleTR: "Onun koyu kıvırcık saçları var." },
                    { answer: "Fair", pronunciation: "Feyr", question: "Açık tenli", example: "She has fair skin.", exampleTR: "Onun açık teni var." },
                    { answer: "Good-looking", pronunciation: "Gud-luking", question: "Yakışıklı/güzel", example: "He is a good-looking young man.", exampleTR: "O yakışıklı bir genç adam." },
                    { answer: "Handsome", pronunciation: "Hensım", question: "Yakışıklı", example: "The actor is very handsome.", exampleTR: "Aktör çok yakışıklı." },
                    { answer: "Medium height", pronunciation: "Midiyım hayt", question: "Orta boylu", example: "He is of medium height.", exampleTR: "O orta boylu." },
                    { answer: "Oversized", pronunciation: "Ovırsayzd", question: "Bol, geniş", example: "She wears oversized sweaters.", exampleTR: "O bol kazaklar giyer." },
                    { answer: "Pale skin", pronunciation: "Peyl skin", question: "Solgun tenli", example: "She has pale skin.", exampleTR: "Onun solgun teni var." },
                    { answer: "Plump", pronunciation: "Plamp", question: "Tombul", example: "The baby has plump cheeks.", exampleTR: "Bebeğin tombul yanakları var." },
                    { answer: "Pretty", pronunciation: "Priti", question: "Güzel/hoş", example: "She is a pretty girl.", exampleTR: "O güzel bir kız." },
                    { answer: "Red hair", pronunciation: "Red heyr", question: "Kızıl saç", example: "She has beautiful red hair.", exampleTR: "Onun güzel kızıl saçları var." },
                    { answer: "Skinny", pronunciation: "Skini", question: "Zayıf", example: "He is too skinny.", exampleTR: "O çok zayıf." },
                    { answer: "Slim", pronunciation: "Slim", question: "İnce/zayıf", example: "She is tall and slim.", exampleTR: "O uzun ve incedir." },
                    { answer: "Straight", pronunciation: "Streyt", question: "Düz", example: "She has straight hair.", exampleTR: "Onun düz saçları var." },
                    { answer: "Tan skin", pronunciation: "Ten skin", question: "Bronz tenli", example: "He has tan skin from the sun.", exampleTR: "Güneşten bronz teni var." },
                    { answer: "Wavy", pronunciation: "Weyvi", question: "Dalgalı", example: "She has wavy hair.", exampleTR: "Onun dalgalı saçları var." },
                    { answer: "Well-built", pronunciation: "Wel-bilt", question: "Yapılı/iri yapılı", example: "He is a well-built athlete.", exampleTR: "O yapılı bir atlet." },
                    { answer: "Young", pronunciation: "Yang", question: "Genç", example: "She is young and energetic.", exampleTR: "O genç ve enerjik." },
                    { answer: "Middle-aged", pronunciation: "Midıl eycd", question: "Orta yaşlı", example: "He is a middle-aged man.", exampleTR: "O orta yaşlı bir adam." },
                    { answer: "Round", pronunciation: "Raund", question: "Yuvarlak", example: "She has a round face.", exampleTR: "Onun yuvarlak bir yüzü var." },
                    { answer: "Hazel", pronunciation: "Heyzıl", question: "Ela", example: "She has hazel eyes.", exampleTR: "Onun ela gözleri var." },
                    { answer: "Skin", pronunciation: "Skin", question: "Cilt/ten", example: "Take care of your skin.", exampleTR: "Cildine dikkat et." }
                ]
            },
            {
                name: "Clothes",
                pool: [
                    { answer: "Bow tie", pronunciation: "Bo tay", question: "Papyon", example: "He wears a bow tie at formal events.", exampleTR: "Resmi etkinliklerde papyon takar." },
                    { answer: "Detective hat", pronunciation: "Dıtektiv het", question: "Dedektif şapkası", example: "The detective wears a classic hat.", exampleTR: "Dedektif klasik bir şapka takar." },
                    { answer: "Headband", pronunciation: "Hedbend", question: "Saç bandı", example: "She wears a headband when exercising.", exampleTR: "Egzersiz yaparken saç bandı takar." },
                    { answer: "Headscarf", pronunciation: "Hedskarf", question: "Başörtüsü", example: "She wears a colorful headscarf.", exampleTR: "O renkli bir başörtüsü takar." },
                    { answer: "Leather jacket", pronunciation: "Ledır cekit", question: "Deri ceket", example: "He looks cool in his leather jacket.", exampleTR: "Deri ceketiyle havalı görünüyor." },
                    { answer: "Leather trousers", pronunciation: "Ledır trawzırz", question: "Deri pantolon", example: "She wears leather trousers.", exampleTR: "O deri pantolon giyer." },
                    { answer: "Leather vest", pronunciation: "Ledır vest", question: "Deri yelek", example: "The biker wears a leather vest.", exampleTR: "Motorcu deri yelek giyer." },
                    { answer: "Sunglasses", pronunciation: "Sanglasız", question: "Güneş gözlüğü", example: "Don't forget your sunglasses.", exampleTR: "Güneş gözlüğünü unutma." },
                    { answer: "Tiara with stones", pronunciation: "Tiyara vid stonz", question: "Taşlı taç", example: "The princess wore a tiara with stones.", exampleTR: "Prenses taşlı bir taç taktı." },
                    { answer: "Trench coat", pronunciation: "Trenç kot", question: "Pardösü", example: "He wears a trench coat in autumn.", exampleTR: "Sonbaharda pardösü giyer." },
                    { answer: "Umbrella", pronunciation: "Ambrela", question: "Şemsiye", example: "Take an umbrella, it might rain.", exampleTR: "Şemsiye al, yağmur yağabilir." }
                ]
            },
            {
                name: "Personality",
                pool: [
                    { answer: "Bold", pronunciation: "Bold", question: "Atılgan", example: "She is bold and fearless.", exampleTR: "O atılgan ve korkusuz." },
                    { answer: "Brave", pronunciation: "Breyv", question: "Cesur", example: "The firefighter was very brave.", exampleTR: "İtfaiyeci çok cesurdu." },
                    { answer: "Calm", pronunciation: "Kam", question: "Sakin", example: "Stay calm during the exam.", exampleTR: "Sınav sırasında sakin kal." },
                    { answer: "Careful", pronunciation: "Kerfıl", question: "Dikkatli", example: "Be careful when crossing the street.", exampleTR: "Karşıdan karşıya geçerken dikkatli ol." },
                    { answer: "Careless", pronunciation: "Kerlıs", question: "Dikkatsiz", example: "Don't be careless with your belongings.", exampleTR: "Eşyalarınla dikkatsiz olma." },
                    { answer: "Chaotic", pronunciation: "Keyatik", question: "Karmaşık", example: "His room is very chaotic.", exampleTR: "Odası çok karmaşık." },
                    { answer: "Cheerful", pronunciation: "Çiirful", question: "Neşeli", example: "She is always cheerful and happy.", exampleTR: "O her zaman neşeli ve mutludur." },
                    { answer: "Childish", pronunciation: "Çaildish", question: "Çocukça", example: "His behavior is sometimes childish.", exampleTR: "Davranışları bazen çocukça." },
                    { answer: "Clever", pronunciation: "Klevır", question: "Zeki", example: "She is a clever student.", exampleTR: "O zeki bir öğrenci." },
                    { answer: "Confident", pronunciation: "Konfıdınt", question: "Kendine güvenen", example: "He feels confident about the exam.", exampleTR: "Sınav konusunda kendine güveniyor." },
                    { answer: "Confused", pronunciation: "Kınfyuzd", question: "Kafası karışık", example: "I'm confused about the instructions.", exampleTR: "Talimatlar konusunda kafam karışık." },
                    { answer: "Forgetful", pronunciation: "Fırgetful", question: "Unutkan", example: "My grandpa is a bit forgetful.", exampleTR: "Dedem biraz unutkan." },
                    { answer: "Friendly", pronunciation: "Frendli", question: "Arkadaş canlısı", example: "The people here are very friendly.", exampleTR: "Buradaki insanlar çok arkadaş canlısı." },
                    { answer: "Funny", pronunciation: "Fani", question: "Komik", example: "He is very funny and makes everyone laugh.", exampleTR: "O çok komik ve herkesi güldürür." },
                    { answer: "Generous", pronunciation: "Cenırıs", question: "Cömert", example: "She is very generous with her money.", exampleTR: "Parasına karşı çok cömert." },
                    { answer: "Gentle", pronunciation: "Centıl", question: "Nazik/yumuşak", example: "He is gentle with animals.", exampleTR: "Hayvanlara karşı nazik." },
                    { answer: "Genuine", pronunciation: "Cenyuin", question: "Samimi", example: "She gave a genuine smile.", exampleTR: "Samimi bir gülümseme verdi." },
                    { answer: "Greedy", pronunciation: "Griidi", question: "Açgözlü", example: "Don't be greedy, share with others.", exampleTR: "Açgözlü olma, başkalarıyla paylaş." },
                    { answer: "Honest", pronunciation: "Anıst", question: "Dürüst", example: "You must be honest with me.", exampleTR: "Bana karşı dürüst olmalısın." },
                    { answer: "Impressive", pronunciation: "İmpresiv", question: "Etkileyici", example: "His performance was impressive.", exampleTR: "Performansı etkileyiciydi." },
                    { answer: "Intense", pronunciation: "İntens", question: "Yoğun", example: "The training was very intense.", exampleTR: "Antrenman çok yoğundu." },
                    { answer: "Kind", pronunciation: "Kaynd", question: "Kibar/nazik", example: "Thank you for your kind words.", exampleTR: "Nazik sözlerin için teşekkür ederim." },
                    { answer: "Lazy", pronunciation: "Leyzi", question: "Tembel", example: "Don't be lazy, do your homework.", exampleTR: "Tembel olma, ödevini yap." },
                    { answer: "Moody", pronunciation: "Muudi", question: "Huysuz", example: "She is very moody today.", exampleTR: "Bugün çok huysuz." },
                    { answer: "Neutral", pronunciation: "Nyutrıl", question: "Sakin/nötr", example: "He remained neutral in the argument.", exampleTR: "Tartışmada tarafsız kaldı." },
                    { answer: "Outgoing", pronunciation: "Autgoing", question: "Sosyal/dışa dönük", example: "She is an outgoing person who loves parties.", exampleTR: "O partileri seven dışa dönük biri." },
                    { answer: "Passionate", pronunciation: "Peşınıt", question: "Tutkulu", example: "She is passionate about music.", exampleTR: "Müzik konusunda tutkulu." },
                    { answer: "Patient", pronunciation: "Peyşınt", question: "Sabırlı", example: "Teachers need to be patient.", exampleTR: "Öğretmenler sabırlı olmalı." },
                    { answer: "Peaceful", pronunciation: "Piisful", question: "Huzurlu", example: "It's a peaceful village.", exampleTR: "Huzurlu bir köy." },
                    { answer: "Playful", pronunciation: "Pleyfıl", question: "Oyuncu", example: "The puppy is very playful.", exampleTR: "Köpek yavrusu çok oyuncu." },
                    { answer: "Polite", pronunciation: "Polayt", question: "Kibar", example: "It is important to be polite.", exampleTR: "Kibar olmak önemlidir." },
                    { answer: "Rude", pronunciation: "Ruud", question: "Kaba", example: "Don't be rude to others.", exampleTR: "Başkalarına kaba olma." },
                    { answer: "Serious", pronunciation: "Siriıs", question: "Ciddi", example: "He is a serious person.", exampleTR: "O ciddi bir insan." },
                    { answer: "Shy", pronunciation: "Şay", question: "Utangaç", example: "She is too shy to speak in public.", exampleTR: "Halk önünde konuşamayacak kadar utangaç." },
                    { answer: "Silent", pronunciation: "Saylınt", question: "Sessiz", example: "He remained silent during the meeting.", exampleTR: "Toplantı boyunca sessiz kaldı." },
                    { answer: "Smart", pronunciation: "Smart", question: "Zeki", example: "He is a very smart student.", exampleTR: "O çok zeki bir öğrenci." },
                    { answer: "Stressful", pronunciation: "Stresfıl", question: "Stresli", example: "Exams can be stressful.", exampleTR: "Sınavlar stresli olabilir." },
                    { answer: "Unsure", pronunciation: "Anşur", question: "Emin olmayan", example: "I'm unsure about the answer.", exampleTR: "Cevap konusunda emin değilim." },
                    { answer: "Worried", pronunciation: "Wörid", question: "Endişeli", example: "She looks worried about something.", exampleTR: "Bir şey hakkında endişeli görünüyor." }
                ]
            },
            {
                name: "Other Words",
                pool: [
                    { answer: "Academic", pronunciation: "Ekedimik", question: "Akademik", example: "She has good academic results.", exampleTR: "İyi akademik sonuçları var." },
                    { answer: "Achievement", pronunciation: "Eçiivmınt", question: "Başarı", example: "Winning the prize was a great achievement.", exampleTR: "Ödülü kazanmak büyük bir başarıydı." },
                    { answer: "Along with", pronunciation: "Elong vid", question: "İle birlikte", example: "He came along with his friends.", exampleTR: "Arkadaşlarıyla birlikte geldi." },
                    { answer: "Animal shelter", pronunciation: "Enimıl şeltır", question: "Hayvan barınağı", example: "We adopted a dog from the animal shelter.", exampleTR: "Hayvan barınağından bir köpek sahiplendik." },
                    { answer: "Attendance", pronunciation: "Etendıns", question: "Katılım", example: "Good attendance is important for school.", exampleTR: "İyi katılım okul için önemlidir." },
                    { answer: "Bark", pronunciation: "Bark", question: "Havlamak", example: "Dogs bark at strangers.", exampleTR: "Köpekler yabancılara havlar." },
                    { answer: "Bright", pronunciation: "Brayt", question: "Parlak", example: "She has a bright future.", exampleTR: "Onun parlak bir geleceği var." },
                    { answer: "Century", pronunciation: "Sençıri", question: "Yüzyıl", example: "We live in the 21st century.", exampleTR: "21. yüzyılda yaşıyoruz." },
                    { answer: "Charming", pronunciation: "Çarming", question: "Büyüleyici", example: "He has a charming personality.", exampleTR: "Büyüleyici bir kişiliği var." },
                    { answer: "Chase", pronunciation: "Çeys", question: "Kovalamak", example: "The dog chased the cat.", exampleTR: "Köpek kediyi kovaladı." },
                    { answer: "Citizenship", pronunciation: "Sitizınşip", question: "Vatandaşlık", example: "He applied for citizenship.", exampleTR: "Vatandaşlık için başvurdu." },
                    { answer: "Collaboration", pronunciation: "Kılabıreyşın", question: "İş birliği", example: "Collaboration is key to success.", exampleTR: "İş birliği başarının anahtarıdır." },
                    { answer: "Contribute", pronunciation: "Kıntribut", question: "Katkı sağlamak", example: "Everyone should contribute to the project.", exampleTR: "Herkes projeye katkı sağlamalı." },
                    { answer: "Contribution", pronunciation: "Kıntribuşın", question: "Katkı", example: "Thank you for your contribution.", exampleTR: "Katkınız için teşekkürler." },
                    { answer: "Cultured", pronunciation: "Kalçırd", question: "Kültürlü", example: "She is a cultured woman.", exampleTR: "O kültürlü bir kadın." },
                    { answer: "Declare", pronunciation: "Dikleyr", question: "İlan etmek", example: "They declared the winner.", exampleTR: "Kazananı ilan ettiler." },
                    { answer: "Discrimination", pronunciation: "Diskrimiıneyşın", question: "Ayrımcılık", example: "Discrimination is wrong.", exampleTR: "Ayrımcılık yanlıştır." },
                    { answer: "Dish", pronunciation: "Diş", question: "Yemek", example: "This is my favorite dish.", exampleTR: "Bu benim favori yemeğim." },
                    { answer: "Driver", pronunciation: "Drayvır", question: "Şoför", example: "The taxi driver knows the city well.", exampleTR: "Taksi şoförü şehri iyi bilir." },
                    { answer: "Employee", pronunciation: "Employi", question: "Çalışan", example: "The company has 100 employees.", exampleTR: "Şirketin 100 çalışanı var." },
                    { answer: "Especially", pronunciation: "Ispeşıli", question: "Özellikle", example: "I love fruits, especially apples.", exampleTR: "Meyveleri severim, özellikle elma." },
                    { answer: "Ethnicity", pronunciation: "Ethnisiti", question: "Etnik köken", example: "People of all ethnicities live here.", exampleTR: "Her etnik kökenden insan burada yaşar." },
                    { answer: "Fairy", pronunciation: "Feyri", question: "Peri", example: "The fairy granted three wishes.", exampleTR: "Peri üç dilek hakkı verdi." },
                    { answer: "Folk dance", pronunciation: "Fok dens", question: "Halk dansı", example: "We watched a folk dance performance.", exampleTR: "Halk dansı gösterisi izledik." },
                    { answer: "Founder", pronunciation: "Faundır", question: "Kurucu", example: "Atatürk is the founder of the Republic.", exampleTR: "Atatürk Cumhuriyet'in kurucusudur." },
                    { answer: "Fur", pronunciation: "För", question: "Kürk", example: "The cat has soft fur.", exampleTR: "Kedinin yumuşak kürkü var." },
                    { answer: "Gender", pronunciation: "Cendır", question: "Cinsiyet", example: "Gender equality is important.", exampleTR: "Cinsiyet eşitliği önemlidir." },
                    { answer: "Harmony", pronunciation: "Harmıni", question: "Uyum", example: "They live in harmony.", exampleTR: "Uyum içinde yaşıyorlar." },
                    { answer: "Honour", pronunciation: "Onır", question: "Onurlandırmak", example: "We honour our heroes.", exampleTR: "Kahramanlarımızı onurlandırırız." },
                    { answer: "Humanity", pronunciation: "Hyumaniti", question: "İnsanlık", example: "Help humanity in any way you can.", exampleTR: "İnsanlığa elinden geldiğince yardım et." },
                    { answer: "Hundredth anniversary", pronunciation: "Handrıdth enivörsıri", question: "Yüzüncü yıl dönümü", example: "We celebrated the hundredth anniversary.", exampleTR: "Yüzüncü yıl dönümünü kutladık." },
                    { answer: "Improve", pronunciation: "Impruuv", question: "Geliştirmek", example: "Practice helps improve your skills.", exampleTR: "Pratik becerilerini geliştirmeye yardımcı olur." },
                    { answer: "In addition to", pronunciation: "İn edişın tu", question: "-e ek olarak", example: "In addition to English, he speaks French.", exampleTR: "İngilizce'ye ek olarak Fransızca da konuşuyor." },
                    { answer: "In particular", pronunciation: "İn pırtikular", question: "Özellikle", example: "I like sports, in particular football.", exampleTR: "Sporları severim, özellikle futbol." },
                    { answer: "International", pronunciation: "İntırneşınıl", question: "Uluslararası", example: "It's an international competition.", exampleTR: "Uluslararası bir yarışma." },
                    { answer: "Issues", pronunciation: "İşuuz", question: "Sorunlar", example: "We need to solve these issues.", exampleTR: "Bu sorunları çözmemiz gerekiyor." },
                    { answer: "Knowledgeable", pronunciation: "Nalıcıbıl", question: "Bilgili", example: "She is very knowledgeable about history.", exampleTR: "Tarih konusunda çok bilgili." },
                    { answer: "Leisure", pronunciation: "Lejır", question: "Boş zaman", example: "What do you do in your leisure time?", exampleTR: "Boş zamanında ne yaparsın?" },
                    { answer: "Librarian", pronunciation: "Laybreriın", question: "Kütüphaneci", example: "The librarian helped me find the book.", exampleTR: "Kütüphaneci kitabı bulmama yardım etti." },
                    { answer: "Massage", pronunciation: "Mesaj", question: "Masaj", example: "A massage helps you relax.", exampleTR: "Masaj rahatlamana yardımcı olur." },
                    { answer: "Mental", pronunciation: "Mentıl", question: "Zihinsel", example: "Mental health is very important.", exampleTR: "Zihinsel sağlık çok önemlidir." },
                    { answer: "Mentioning", pronunciation: "Menşıning", question: "Bahsetme", example: "Thank you for mentioning my name.", exampleTR: "Adımı bahsettiğin için teşekkürler." },
                    { answer: "Military", pronunciation: "Militeri", question: "Askeri", example: "He joined the military.", exampleTR: "Orduya katıldı." },
                    { answer: "Moreover", pronunciation: "Morovır", question: "Ayrıca", example: "Moreover, we need more time.", exampleTR: "Ayrıca daha fazla zamana ihtiyacımız var." },
                    { answer: "Peace", pronunciation: "Piis", question: "Barış", example: "We all want world peace.", exampleTR: "Hepimiz dünya barışı istiyoruz." },
                    { answer: "Pirate", pronunciation: "Payrıt", question: "Korsan", example: "The pirate had a wooden leg.", exampleTR: "Korsanın tahta bacağı vardı." },
                    { answer: "Political", pronunciation: "Pılitikıl", question: "Politik", example: "He is interested in political issues.", exampleTR: "Politik konularla ilgileniyor." },
                    { answer: "President", pronunciation: "Prezidınt", question: "Başkan", example: "The president gave a speech.", exampleTR: "Başkan konuşma yaptı." },
                    { answer: "Race", pronunciation: "Reys", question: "Irk", example: "People of all races live together.", exampleTR: "Tüm ırklardan insanlar birlikte yaşıyor." },
                    { answer: "Recipe", pronunciation: "Resıpi", question: "Yemek tarifi", example: "Can you share the recipe?", exampleTR: "Tarifi paylaşabilir misin?" },
                    { answer: "Reflect", pronunciation: "Riflekt", question: "Yansıtmak", example: "The mirror reflects light.", exampleTR: "Ayna ışığı yansıtır." },
                    { answer: "Reformer", pronunciation: "Rifarmır", question: "Yenilikçi", example: "Atatürk was a great reformer.", exampleTR: "Atatürk büyük bir yenilikçiydi." },
                    { answer: "Religion", pronunciation: "Rilicın", question: "Din", example: "Respect all religions.", exampleTR: "Tüm dinlere saygı göster." },
                    { answer: "Republic", pronunciation: "Ripablik", question: "Cumhuriyet", example: "Türkiye is a republic.", exampleTR: "Türkiye bir cumhuriyettir." },
                    { answer: "Scholar", pronunciation: "Skalır", question: "Bilgin/akademisyen", example: "He is a famous scholar.", exampleTR: "O ünlü bir bilgin." },
                    { answer: "Scientist", pronunciation: "Sayntist", question: "Bilim insanı", example: "The scientist won the Nobel Prize.", exampleTR: "Bilim insanı Nobel Ödülü kazandı." },
                    { answer: "Silly", pronunciation: "Sili", question: "Aptalca", example: "Don't be silly!", exampleTR: "Aptalca davranma!" },
                    { answer: "Soldier", pronunciation: "Solcır", question: "Asker", example: "The soldier defended the country.", exampleTR: "Asker ülkeyi savundu." },
                    { answer: "Species", pronunciation: "Spiişiiz", question: "Tür", example: "Many species are endangered.", exampleTR: "Birçok tür tehlike altında." },
                    { answer: "Statesperson", pronunciation: "Steytspörsın", question: "Devlet adamı", example: "Atatürk was a great statesperson.", exampleTR: "Atatürk büyük bir devlet adamıydı." },
                    { answer: "Stray", pronunciation: "Strey", question: "Sokak hayvanı", example: "Feed the stray animals.", exampleTR: "Sokak hayvanlarını besle." },
                    { answer: "Successful", pronunciation: "Sıksesful", question: "Başarılı", example: "She is a successful businesswoman.", exampleTR: "O başarılı bir iş kadını." },
                    { answer: "Team", pronunciation: "Tiim", question: "Takım", example: "We work as a team.", exampleTR: "Takım olarak çalışıyoruz." },
                    { answer: "Therefore", pronunciation: "Derfır", question: "Bu nedenle", example: "It rained, therefore the match was cancelled.", exampleTR: "Yağmur yağdı, bu nedenle maç iptal edildi." },
                    { answer: "Throughout", pronunciation: "Thruaut", question: "Boyunca", example: "He worked throughout the night.", exampleTR: "Gece boyunca çalıştı." },
                    { answer: "Title", pronunciation: "Taytıl", question: "Başlık", example: "What is the title of the book?", exampleTR: "Kitabın başlığı nedir?" },
                    { answer: "Traditional", pronunciation: "Trıdişınıl", question: "Geleneksel", example: "We eat traditional food on holidays.", exampleTR: "Tatillerde geleneksel yemek yeriz." },
                    { answer: "Trick", pronunciation: "Trik", question: "Numara", example: "The magician did a magic trick.", exampleTR: "Sihirbaz sihir numarası yaptı." },
                    { answer: "Try on", pronunciation: "Tray on", question: "Denemek (kıyafet)", example: "Can I try on this dress?", exampleTR: "Bu elbiseyi deneyebilir miyim?" },
                    { answer: "Various", pronunciation: "Veriıs", question: "Çeşitli", example: "There are various options.", exampleTR: "Çeşitli seçenekler var." },
                    { answer: "Vintage shop", pronunciation: "Vintıc şap", question: "İkinci el mağaza", example: "I found this jacket at a vintage shop.", exampleTR: "Bu ceketi ikinci el mağazada buldum." },
                    { answer: "Well-being", pronunciation: "Wel-biing", question: "İyi oluş", example: "Exercise improves your well-being.", exampleTR: "Egzersiz iyi oluşunu geliştirir." }
                ]
            }
        ],
        Grade9_Unit4: [
            {
                name: "Jobs",
                pool: [
                    { answer: "Architect", pronunciation: "Arkitekt", question: "Mimar", example: "The architect designed a beautiful bridge.", exampleTR: "Mimar güzel bir köprü tasarladı." },
                    { answer: "Lawyer", pronunciation: "Loyır", question: "Avukat", example: "The lawyer defended his client in court.", exampleTR: "Avukat müvekkilini mahkemede savundu." },
                    { answer: "Pharmacist", pronunciation: "Farmısist", question: "Eczacı", example: "The pharmacist gave me the medicine.", exampleTR: "Eczacı bana ilacı verdi." },
                    { answer: "Journalist", pronunciation: "Cörnılist", question: "Gazeteci", example: "The journalist wrote the breaking news.", exampleTR: "Gazeteci son dakika haberini yazdı." },
                    { answer: "Accountant", pronunciation: "Ekauntınt", question: "Muhasebeci", example: "The accountant checks the financial records.", exampleTR: "Muhasebeci mali kayıtları kontrol eder." },
                    { answer: "Scientist", pronunciation: "Sayntist", question: "Bilim insanı", example: "The scientist is doing an experiment.", exampleTR: "Bilim insanı bir deney yapıyor." },
                    { answer: "Photographer", pronunciation: "Fotografır", question: "Fotoğrafçı", example: "The photographer took amazing photos.", exampleTR: "Fotoğrafçı harika fotoğraflar çekti." },
                    { answer: "Security guard", pronunciation: "Sıkyurıti gard", question: "Güvenlik görevlisi", example: "The security guard protects the building.", exampleTR: "Güvenlik görevlisi binayı korur." }
                ]
            },
            {
                name: "Members",
                pool: [
                    { answer: "Cousin", pronunciation: "Kazın", question: "Kuzen", example: "My cousin lives in another city.", exampleTR: "Kuzenim başka bir şehirde yaşıyor." },
                    { answer: "Nephew", pronunciation: "Nefyu", question: "Erkek yeğen", example: "My nephew likes playing football.", exampleTR: "Erkek yeğenim futbol oynamayı sever." },
                    { answer: "Niece", pronunciation: "Niis", question: "Kız yeğen", example: "My niece is very smart.", exampleTR: "Kız yeğenim çok zekidir." },
                    { answer: "Stepfather", pronunciation: "Stepfadher", question: "Üvey baba", example: "My stepfather is very kind to me.", exampleTR: "Üvey babam bana karşı çok naziktir." },
                    { answer: "Relatives", pronunciation: "Relıtivs", question: "Akrabalar", example: "We visited our relatives during the holiday.", exampleTR: "Tatil sırasında akrabalarımızı ziyaret ettik." },
                    { answer: "Aunt", pronunciation: "Ant", question: "Hala/Teyze", example: "My aunt makes delicious cakes.", exampleTR: "Teyzem/Halam lezzetli kekler yapar." }
                ]
            },
            {
                name: "Activities",
                pool: [
                    { answer: "Create content", pronunciation: "Krieyt kantent", question: "İçerik üretmek", example: "She creates content for social media.", exampleTR: "O, sosyal medya için içerik üretir." },
                    { answer: "Manage", pronunciation: "Menıc", question: "Yönetmek", example: "He manages a large team.", exampleTR: "O, büyük bir ekibi yönetir." },
                    { answer: "Advise", pronunciation: "Edvayz", question: "Tavsiye vermek", example: "I advised him to see a doctor.", exampleTR: "Ona doktora görünmesini tavsiye ettim." },
                    { answer: "Research", pronunciation: "Risörç", question: "Araştırma yapmak", example: "Scientists research new cures for diseases.", exampleTR: "Bilim insanları hastalıklar için yeni tedaviler araştırırlar." },
                    { answer: "Defend", pronunciation: "Difend", question: "Savunmak", example: "Soldiers defend their country.", exampleTR: "Askerler ülkelerini savunurlar." }
                ]
            }
        ],
        Grade9_Unit5: [
            {
                name: "House Types",
                pool: [
                    { answer: "Flat", pronunciation: "Flet", question: "Daire", example: "I live in a small flat.", exampleTR: "Küçük bir dairede yaşıyorum." },
                    { answer: "Villa", pronunciation: "Vila", question: "Villa", example: "They bought a luxury villa.", exampleTR: "Lüks bir villa aldılar." },
                    { answer: "Cottage", pronunciation: "Katıc", question: "Kır evi", example: "We stayed in a cozy cottage.", exampleTR: "Rahat bir kır evinde kaldık." },
                    { answer: "Detached house", pronunciation: "Diteçt haus", question: "Müstakil ev", example: "A detached house offers more privacy.", exampleTR: "Müstakil ev daha fazla mahremiyet sunar." },
                    { answer: "Bungalow", pronunciation: "Bangılo", question: "Bungalov", example: "The bungalow has a nice garden.", exampleTR: "Bungalovun güzel bir bahçesi var." },
                    { answer: "Penthouse", pronunciation: "Penthaus", question: "Çatı katı", example: "The penthouse has a great view.", exampleTR: "Çatı katının harika bir manzarası var." },
                ]
            },
            {
                name: "Rooms & Furniture",
                pool: [
                    { answer: "Living room", pronunciation: "Living rum", question: "Oturma odası", example: "We relax in the living room.", exampleTR: "Oturma odasında dinleniriz." },
                    { answer: "Kitchen", pronunciation: "Kiçın", question: "Mutfak", example: "He is cooking in the kitchen.", exampleTR: "O, mutfakta yemek yapıyor." },
                    { answer: "Bathroom", pronunciation: "Bathrum", question: "Banyo", example: "The bathroom is upstairs.", exampleTR: "Banyo üst kattadır." },
                    { answer: "Garage", pronunciation: "Garaj", question: "Garaj", example: "My dad repairs his car in the garage.", exampleTR: "Babam garajda arabasını tamir ediyor." },
                    { answer: "Sofa", pronunciation: "Sofa", question: "Kanepe", example: "This sofa is very comfortable.", exampleTR: "Bu kanepe çok rahattır." },
                    { answer: "Wardrobe", pronunciation: "Wordrob", question: "Gardırop", example: "I keep my clothes in the wardrobe.", exampleTR: "Kıyafetlerimi gardıropta saklarım." },
                    { answer: "Oven", pronunciation: "Avın", question: "Fırın", example: "Bake the cake in the oven.", exampleTR: "Keki fırında pişir." },
                    { answer: "Fridge", pronunciation: "Fric", question: "Buzdolabı", example: "Please put the milk in the fridge.", exampleTR: "Lütfen sütü buzdolabına koy." },
                    { answer: "Cushion", pronunciation: "Kuşın", question: "Minder", example: "She put a cushion on the chair.", exampleTR: "Sandalyeye bir minder koydu." },
                ]
            },
            {
                name: "Chores",
                pool: [
                    { answer: "Iron", pronunciation: "Ayrın", question: "Ütü yapmak", example: "I iron my shirts every Sunday.", exampleTR: "Gömleklerimi her Pazar ütülerim." },
                    { answer: "Tidy up", pronunciation: "Taydi ap", question: "Toplamak", example: "It takes time to tidy up the house.", exampleTR: "Evi toplamak zaman alır." },
                    { answer: "Do laundry", pronunciation: "Du londri", question: "Çamaşır yıkamak", example: "I do laundry on weekends.", exampleTR: "Hafta sonları çamaşır yıkarım." },
                    { answer: "Clean", pronunciation: "Kliin", question: "Temizlemek", example: "We clean the kitchen daily.", exampleTR: "Mutfağı her gün temizleriz." },
                    { answer: "Make the bed", pronunciation: "Meyk dı bed", question: "Yatağı yapmak", example: "I make the bed every morning.", exampleTR: "Her sabah yatağı yaparım." }
                ]
            }
        ],
        Grade9_Unit6: [
            {
                name: "Food",
                pool: [
                    { answer: "Cuisine", pronunciation: "Kwiziin", question: "Mutfak (Kültürü)", example: "Turkish cuisine is famous worldwide.", exampleTR: "Türk mutfağı dünya çapında ünlüdür." },
                    { answer: "Spicy", pronunciation: "Spaysi", question: "Baharatlı", example: "Some people like spicy food.", exampleTR: "Bazı insanlar baharatlı yiyecekleri sever." },
                    { answer: "Sour", pronunciation: "Sawır", question: "Ekşi", example: "Lemons taste very sour.", exampleTR: "Limonların tadı çok ekşidir." },
                    { answer: "Delicious", pronunciation: "Dilişıs", question: "Lezzetli", example: "This cake is delicious.", exampleTR: "Bu kek lezzetli." },
                    { answer: "Traditional", pronunciation: "Trıdişınıl", question: "Geleneksel", example: "We wear traditional clothes on holidays.", exampleTR: "Bayramlarda geleneksel kıyafetler giyeriz." },
                    { answer: "Fried", pronunciation: "Frayd", question: "Kızarmış", example: "I like fried potatoes.", exampleTR: "Kızarmış patatesi severim." },
                    { answer: "Vegetable", pronunciation: "Vecıtıbıl", question: "Sebze", example: "Eat more vegetables for your health.", exampleTR: "Sağlığın için daha fazla sebze ye." },
                    { answer: "Butter", pronunciation: "Batır", question: "Tereyağı", example: "Spread some butter on the bread.", exampleTR: "Ekmeğe biraz tereyağı sür." },
                    { answer: "Dessert", pronunciation: "Dizört", question: "Tatlı", example: "Ice cream is my favorite dessert.", exampleTR: "Dondurma en sevdiğim tatlıdır." },
                ]
            },
            {
                name: "City Life",
                pool: [
                    { answer: "Noise", pronunciation: "Noyz", question: "Gürültü", example: "There is too much noise in the city.", exampleTR: "Şehirde çok fazla gürültü var." },
                    { answer: "Pollution", pronunciation: "Poluşın", question: "Kirlilik", example: "Air pollution is a big problem.", exampleTR: "Hava kirliliği büyük bir sorundur." },
                    { answer: "Traffic", pronunciation: "Trefik", question: "Trafik", example: "The traffic is very heavy today.", exampleTR: "Bugün trafik çok yoğun." },
                    { answer: "Crowded", pronunciation: "Krawdıd", question: "Kalabalık", example: "The bus was very crowded.", exampleTR: "Otobüs çok kalabalıktı." },
                    { answer: "Feast", pronunciation: "Fiist", question: "Ziyafet/Bayram", example: "We had a big feast last night.", exampleTR: "Dün gece büyük bir ziyafet verdik." },
                    { answer: "Festival", pronunciation: "Festivıl", question: "Festival", example: "The music festival starts tomorrow.", exampleTR: "Müzik festivali yarın başlıyor." },
                ]
            }
        ],
        Grade9_Unit7: [
            {
                name: "Animals",
                pool: [
                    { answer: "Tiger", pronunciation: "Taygır", question: "Kaplan", example: "The tiger is a dangerous animal.", exampleTR: "Kaplan tehlikeli bir hayvandır." },
                    { answer: "Whale", pronunciation: "Weyıl", question: "Balina", example: "The blue whale is the largest animal.", exampleTR: "Mavi balina en büyük hayvandır." },
                    { answer: "Shark", pronunciation: "Şark", question: "Köpekbalığı", example: "Sharks live in the ocean.", exampleTR: "Köpekbalıkları okyanusta yaşar." },
                    { answer: "Penguin", pronunciation: "Pengwin", question: "Penguen", example: "Penguins cannot fly.", exampleTR: "Penguenler uçamaz." },
                    { answer: "Turtle", pronunciation: "Törtıl", question: "Kaplumbağa", example: "Turtles move very slowly.", exampleTR: "Kaplumbağalar çok yavaş hareket eder." },
                    { answer: "Elephant", pronunciation: "Elıfınt", question: "Fil", example: "The elephant has a long trunk.", exampleTR: "Filin uzun bir hortumu vardır." },
                ]
            },
            {
                name: "Environment",
                pool: [
                    { answer: "Climate change", pronunciation: "Klaymıt çeync", question: "İklim değişikliği", example: "Climate change affects the whole world.", exampleTR: "İklim değişikliği tüm dünyayı etkiliyor." },
                    { answer: "Habitat", pronunciation: "Hebitet", question: "Yaşam alanı", example: "The jungle is the tiger's habitat.", exampleTR: "Orman kaplanın yaşam alanıdır." },
                    { answer: "Pollution", pronunciation: "Poluşın", question: "Kirlilik", example: "We must stop pollution.", exampleTR: "Kirliliği durdurmalıyız." },
                    { answer: "Protect", pronunciation: "Protek", question: "Korumak", example: "We must protect nature.", exampleTR: "Doğayı korumalıyız." },
                    { answer: "Donate", pronunciation: "Doneyt", question: "Bağışlamak", example: "They donate money to charity.", exampleTR: "Hayır kurumlarına para bağışlarlar." },
                    { answer: "Volunteer", pronunciation: "Valıntiir", question: "Gönüllü", example: "She is a volunteer at the hospital.", exampleTR: "O, hastanede bir gönüllü." },
                    { answer: "Survive", pronunciation: "Sörvayv", question: "Hayatta kalmak", example: "Water is necessary to survive.", exampleTR: "Su hayatta kalmak için gereklidir." },
                    { answer: "Save", pronunciation: "Seyv", question: "Kurtarmak/Tasarruf etmek", example: "We should save energy.", exampleTR: "Enerji tasarrufu yapmalıyız." },
                ]
            }
        ],
        Grade9_Unit8: [
            {
                name: "Movies",
                pool: [
                    { answer: "Comedy", pronunciation: "Kamıdi", question: "Komedi", example: "I like watching comedy movies.", exampleTR: "Komedi filmleri izlemeyi severim." },
                    { answer: "Action", pronunciation: "Ekşın", question: "Aksiyon", example: "It was an exciting action movie.", exampleTR: "Heyecan verici bir aksiyon filmiydi." },
                    { answer: "Horror", pronunciation: "Horır", question: "Korku", example: "I am afraid of horror movies.", exampleTR: "Korku filmlerinden korkarım." },
                    { answer: "Sci-Fi", pronunciation: "Say-Fay", question: "Bilim Kurgu", example: "I love sci-fi stories about space.", exampleTR: "Uzayla ilgili bilim kurgu hikayelerini severim." },
                    { answer: "Director", pronunciation: "Dayrektır", question: "Yönetmen", example: "The director makes the movie.", exampleTR: "Yönetmen filmi yapar." },
                    { answer: "Documentary", pronunciation: "Dakyumentıri", question: "Belgesel", example: "We watched a documentary about lions.", exampleTR: "Aslanlar hakkında bir belgesel izledik." },
                ]
            },
            {
                name: "Future",
                pool: [
                    { answer: "Robot", pronunciation: "Robat", question: "Robot", example: "Robots can do many tasks.", exampleTR: "Robotlar birçok görevi yapabilir." },
                    { answer: "Alien", pronunciation: "Eyliyın", question: "Uzaylı", example: "Do you believe in aliens?", exampleTR: "Uzaylılara inanır mısın?" },
                    { answer: "Invention", pronunciation: "İnvenşın", question: "İcat", example: "The telephone was a great invention.", exampleTR: "Telefon harika bir icattı." },
                    { answer: "Discovery", pronunciation: "Diskavıri", question: "Keşif", example: "The discovery of fire changed everything.", exampleTR: "Ateşin keşfi her şeyi değiştirdi." },
                    { answer: "Space", pronunciation: "Speys", question: "Uzay", example: "Astronauts travel to space.", exampleTR: "Astronotlar uzaya seyahat eder." },
                    { answer: "Galaxy", pronunciation: "Geleksi", question: "Galaksi", example: "There are many stars in the galaxy.", exampleTR: "Galakside birçok yıldız vardır." },
                    { answer: "Discover", pronunciation: "Diskavır", question: "Keşfetmek", example: "Colombo discovered America.", exampleTR: "Kolomb Amerika'yı keşfetti." },
                    { answer: "Invent", pronunciation: "İnvent", question: "İcat etmek", example: "Edison invented the light bulb.", exampleTR: "Edison ampulü icat etti." },
                ]
            }
        ],
        Grade11_Unit1: [
            {
                name: "Future Plans & Dreams",
                pool: [
                    { answer: "Accomplish", pronunciation: "Ekampliş", question: "Başarmak", example: "I will accomplish my goals.", exampleTR: "Hedeflerimi başaracağım." },
                    { answer: "Ambition", pronunciation: "Embişın", question: "Hırs/Tutku", example: "Her ambition is to be a doctor.", exampleTR: "Onun hırsı doktor olmaktır." },
                    { answer: "Benefit", pronunciation: "Benıfit", question: "Fayda", example: "Exercise has many benefits.", exampleTR: "Egzersizin birçok faydası vardır." },
                    { answer: "Challenge", pronunciation: "Çelınc", question: "Mücadele/Zorluk", example: "This exam is a big challenge.", exampleTR: "Bu sınav büyük bir zorluk." },
                    { answer: "Determine", pronunciation: "Ditörmın", question: "Belirlemek/Kararlı olmak", example: "She is determined to win.", exampleTR: "Kazanmaya kararlı." },
                    { answer: "Encourage", pronunciation: "Inkarıc", question: "Teşvik etmek", example: "My parents encourage me.", exampleTR: "Ailem beni teşvik eder." },
                    { answer: "Failure", pronunciation: "Feylyır", question: "Başarısızlık", example: "Failure is part of success.", exampleTR: "Başarısızlık başarının bir parçasıdır." },
                    { answer: "Graduate", pronunciation: "Grejuıyt", question: "Mezun olmak", example: "I will graduate next year.", exampleTR: "Gelecek yıl mezun olacağım." },
                    { answer: "Inspire", pronunciation: "İnspayır", question: "İlham vermek", example: "His story inspires me.", exampleTR: "Hikayesi bana ilham veriyor." },
                    { answer: "Opportunity", pronunciation: "Opırtuniti", question: "Fırsat", example: "Don't miss this opportunity.", exampleTR: "Bu fırsatı kaçırma." },
                    { answer: "Passion", pronunciation: "Peşın", question: "Tutku", example: "Music is my passion.", exampleTR: "Müzik benim tutkum." },
                    { answer: "Predict", pronunciation: "Pridikt", question: "Tahmin etmek", example: "Can you predict the future?", exampleTR: "Geleceği tahmin edebilir misin?" },
                    { answer: "Qualified", pronunciation: "Kwolıfayd", question: "Nitelikli", example: "He is highly qualified.", exampleTR: "O çok nitelikli." },
                    { answer: "Responsibility", pronunciation: "Rispansıbılıti", question: "Sorumluluk", example: "It is a big responsibility.", exampleTR: "Bu büyük bir sorumluluk." },
                    { answer: "Success", pronunciation: "Sıkses", question: "Başarı", example: "Hard work brings success.", exampleTR: "Çok çalışmak başarı getirir." },
                    { answer: "Talent", pronunciation: "Telınt", question: "Yetenek", example: "She has amazing talent.", exampleTR: "Harika bir yeteneği var." },
                    { answer: "University", pronunciation: "Yunivörsiti", question: "Üniversite", example: "I want to go to university.", exampleTR: "Üniversiteye gitmek istiyorum." },
                    { answer: "Victory", pronunciation: "Viktıri", question: "Zafer", example: "We celebrated our victory.", exampleTR: "Zaferimizi kutladık." },
                    { answer: "Wealth", pronunciation: "Welth", question: "Zenginlik/Varlık", example: "Health is better than wealth.", exampleTR: "Sağlık zenginlikten iyidir." },
                    { answer: "Wisdom", pronunciation: "Wizdım", question: "Bilgelik", example: "He is known for his wisdom.", exampleTR: "Bilgeliğiyle tanınır." }
                ]
            }
        ]
    }
};

// Student Data (Real Data Parsed from PDFs)
var studentData = {
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
};
