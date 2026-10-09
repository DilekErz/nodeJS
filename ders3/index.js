//nodemon nedir nasıl kurulur onu öğrenecem 

const express=require('express');

const server=express();

server.get('/',(req,res)=>{
    res.send("tek başıma ilk deneme , NODEMON DENEMESİ");
    // res.send("nodemon paketi değişikliği kaydediyor mu diye bakılıyor"); ÖĞRENİLEN: RES.SEND(), RES.JSON,RES.END GİBİ KOMUTLAR SADECE BİR KERE YANIT DÖNDÜREBİLİR:
    // ERR-HTTP-HEADERS-SENT: hatası, Node.js ve Express.js gibi sunucu taraflı uygulamalarda, bir HTTP isteği için istemciye zaten bir yanıt (response) gönderildikten sonra tekrar yanıt göndermeye veya başlıkları (headers) değiştirmeye çalıştığınızda ortaya çıkan yaygın bir programlama hatasıdır.

    
})

server.get("/borsagiris",(req,res)=>{

res.status(200).send("giriş başarılı");
});

server.listen(5000,()=>{
    console.log("http://localhost:5000 dinleme yapılıyor ");
})

//ÖĞRENİLENLER: / DAN SONRA YAZILAN TARAYICI YÖNLENDİRME SAYFASI MESELA BİZ("/BORSAGİRİŞ")YAZDIK AMA TÜRKÇE KARAKTERE İZİN VERMEDİ VE Cannot GET /borsagiri%C5%9F yazdı


//NODEMON NEDİR NODEMON NASIL KURULUR ONU ÖĞRENECEZ: SAYADAKİ DEĞİŞİKLERİ SÜREKLİ GÖRMEK İÇİN SÜREKLİ TERMİNALDE NODE İNDEX.JS YAZIYORDUK BU KOMUTU OTOMATİK HALE GETİRECEZ BUNU DA PACKAGE.JSSON KISMINDA YAPACAZ:

//  "scripts": {
//   "start":"node index.js", EKLEDİK
// "server":"nodemon index.js", ekledik

// sonra terminalde (npm install -D nodemon  PAKETİMİZİ YÜKLÜYORUZ)(burdaki büyük D sadece uygualmayı geliştirme aşamasında kullanacağımızı söylüyoruz) SONRA TERMİNALDEN DEVAMLI DEĞİŞİKLİĞİ KAYDEDİNCE BİR KERE ÇALIŞTIRMAK İÇİN npx nodemon index.js yazılır ve bunu da package.json a da ekleyecez ve artık terminalde npm run server yazıp çalışabilecaz
