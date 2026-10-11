const express=require('express');
const data =require("./data.js");
const server=express();

server.use(espress.json()); //bütün gelen isteklerde bu komutun kullanmasını istiyoruz,gelen espress json verimizi parse (ayrıştıran) ediyor json verierini okuyabilmek için miiddleware aktif ediyoruz

server.get("/",(req,res)=>{
    res.send("dördüncü modülden merhaba , nodemon tekrar deneme");

})
server.get("/aktorler",(req,res)=>{
res.status(200).json(data);
});

server.get("/aktorler/:id",(req,res)=>{
 // req.params ,req.body gibi şeyler tarayıcı üzerinden sunucuya yani terminale veri gönderme yöntemi
    console.log("req.params:",req.params); //id params bir objectdir
    console.log("req.query:",req.query);
    console.log("req.body:",req.body);
    const {id}=req.params; 
    const aktorbul=data.find((aktorbul)=>aktorbul.id===parseInt(id));

    if(aktorbul){
        res.status(200).json(aktorbul);
    }else{
        res.status(404).send("aradığınız aktör bulunamadı");
    }
})
 server.listen(3000,()=>{
    console.log("http://localhost:3000  tarayıcı dinleniyor ");
 })

 //kullanıcı tarafından gönderilen isteklerde belirlik bilgiler olabilir örnekte aktör kullanıcıları görmek istediğinde yada değişiklik yapmak istediğinde hangi aktör üzerinden işlem yapacağımızı nerden bilecez ? bize gelen istekler üzerinden verileri okuyabiliyoruz bilebiliriyoruz


//  taratıcıdan localhost:3000/aktorler/1?isim=kemal (1 den sonraki kısım req.params yerine req.query ksımında karşımıza çıkıyor ve req.query: {isim: 'kemal' şeklinde vs code terminalde görünür})

// birden fazla parametre gönderildiyse(http://localhost:3000/aktorler/1?isim=kemal&soyisim=sunal&film_turu=komedi) gibi & işaretiyle yapılabilir ve req.query= bilgiler gözükür


//req.body ne işa yarar: post metodu için kullabılır : kulanıcı yeni bir aktör eklemek istiyor bu yeni aktör ile bilgileri isteğin gövdesi olarak gönderiyor 

//postman da get ile gönderdiğimiz veriyiyi sonradan pars etmek için server.use(espress.json())

// postman ile get kullanarak tarayıcıda url çağırdık sonra Postmanin Body → raw → JSON bölümüne şöyle bir veri yazılmış:
// {
//     "isim": "Münir Özkul",
//     "filmler": "Neşeli Günler"
// } bu JSON verisini HTTP isteğiyle Express.js sunucusuna gönderiyor.