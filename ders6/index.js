// expressde middleware nedir= ara katman yazılım olarak diyebilriz, express uygulamasında ard arda gelen sırasıyla belirtilen işlemleri yerine getiren bil işlem olark düşünebilriz


const express=require('express');
// let data=require('./data'); router sayfasına eklenecek
const aktorlerRouter=require("./routers/aktorlerRouter");
 const  logger=require('./middlewares/logger');
const errorHandling=require("./middlewares/errorHandling");

const server=express();


server.use(express.json()) //kullanıcıdan gelen istekleri json çevirmesini istedik burdda bir middleware yapmış olduk

server.use(logger);//routerden önce gelmesi lazım ki  altaki raoutera gelen istekleree de uygulansın fonsiyonumuz

server.use("/aktorler",aktorlerRouter); //buda middleware

server.get('/',(req,res)=>{ //buda middleware
res.send("modüle 6");
})


server.use(errorHandling); // genellikle bütün enpointlerden sonra genellikle errorhandling çağırılır ve kullanıcıya error mesajı verilir !! her zaman error dosyasını en sona koy

server.listen(5000,()=>{
console.log("http://localhost:5000 tarayıcı dinleniyot");
})

// 3 çeşit middleware var:1.built-in expressle birlikte gelenler (ör express.json())
// 2.Application level / Custom Middleware:uygulamamız için kendimizin yazdığı middlewarelerdirm app.use() ile tanımlanan fonksiyon
// 3.Third-party Middleware:Dışarıdan npm ile yüklediğimiz middlewarelerdir cors, morgan