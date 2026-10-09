const express= require('express') ;//import ediyoruz (terminalde npm install express)

const data=require('./data.js');

const server=express();// serverimizi bu express i alarak oluşturuyoruz

server.get('/',(req,res)=>{
    res.send('expressden merhaba dilek');//kullanıcıya giden sayafya yani slaşa gönderilecek cevabı yazıyoruz
});

server.get("/aktorler",(req,res)=>{
//res.send('aktorler listesi:'); //aktörler sayfasına girildiğinde bu func çalıştırıılsın 
res.status(200).json(data); // cevap olarak başarılı ve data js değerini yollattık
});

server.get("/aktorler/:id",(req,res)=>{ // aktörlerden sonra kullanıcı hangi id yi girerse req istek verisini içersinde bize gelecek (:id kısmı aktore-id olsaydo params ın yanına params.aktore-id yazaxaktık)
    // req.params.id (params= isteklerin dinamik olarak gönderilen değişkenleri yakalamayı sağlar )

    const {id}=req.params;
    const aktor=data.find((aktor)=>aktor.id===parseInt(id)) //id ler rakam ama string olarak geleceği için parseInt ile çeviriyoruz.

    // aktörlerle işleşen bir id varda ,döndürülecek
    if(aktor){
        res.status(200).json(aktor);
    }else{
        res.status(404).send("arafığınız aktör bulunamadı");
    }
})

server.listen(5000,()=>{
    console.log('http://localhost:5000 adresine gelen istekler dinleniyor');
});