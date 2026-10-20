
//express in rounting özelliği kullanıcıdan gelen istekleri o isteğe yönlendirme olarak denilebilir
// get metodu dışında istek göndermek istesiğimizde postman.com kullanıyoruz (oyuncular endpointi için get metodu tanımlamıştık şimdi post yanımlayalım ve elimizdeki oyuncular listesine yeni oyuncu ekleyelim)

const express=require('express');
// let data =require("./data");
const oyuncularRouter=require("./routers/oyuncularRouter");

// ilerleryen zamanlarda diğer routerlerımızı const filmlerRouter=require("./routers/filmlerRouter") olarak ekleyebilriz mesela hepsi tek bir dosyada kalıyor ve index.js dosyamızın sade kalmasını sağlıyor
const server=express();

server.use(express.json());
server.use("/oyuncular",oyuncularRouter); //   /oyuncular adresine gelen herşeye oyuncularRouterdan cevap ver demek oluyor bu

server.get("/",(req,res)=>{
    res.send("modul5");
})
// server.get("/oyuncular",(req,res)=>{
//     res.status(200).json(data);

// });

//  //EKLEME YAPACAz:
// //elimizde 3 tane data var yani veri var data.js dosyamızda biz elimizle diğer verinin id sini verebiliriz ama veritabanından almak isteidğimizde otomatik zaten geliyor bunu yazmamıza gerek yok şimdilik let next_id=4 verdik

// let next_id=4;
// server.post("/oyuncular",(req,res)=>{ 
//     //getteki adres uzantısı aklımızı karıştırmasın burdaki post metodu adresine cevap verirken diğeri get e cevap veriyor
// let yeni_oyuncu=req.body; // diğer dersde yeni kulanıcıdan gelen değerleri terminalde body den gördüğümüz için req.body yapıyoruz 
// yeni_oyuncu.id=next_id;
// next_id++;
// data.push(yeni_oyuncu);
// res.status(201).json(yeni_oyuncu);
// })

// //sileme yapacaz:
// server.delete( "/oyuncular/:id",(req,res)=>{
//     const silinecek_id=req.params.id; //silinecek id yi paramsdan alıp silinecek_id ye attık
//     const silinecek_oyuncu=data.find(silinecek_oyuncu=>silinecek_oyuncu.id===Number(silinecek_id));// bu oyuncu var mı diye aslında diye bakıyotuz

// if(silinecek_oyuncu){
//  data=data.filter(silinecek_oyuncu=>silinecek_oyuncu.id!==Number(silinecek_id));
//      //eğer silmeye çalıştığımız oyuncu hakikaten silindiyse bunu çalıştırıyor
//     res.status(204).end();// başarılı status yollıyor 
// }else{
//     res.status(404).json({errorMessage:"silmeye çalıştığınız oyuncu sistemde yok"});
// }

// });


// //put yani düzenleme yapacaz:
//  server.put("/oyuncular/:id",(req,res)=>{
//     let duzenlenecek_id=req.params.id;
//     let duzenlenen_oyuncu=req.body;
//     const duzenlenecek_id_bul=data.find(duzenlenecek_bul=>duzenlenecek_bul.id===duzenlenecek_id);
//     //Object.assign güncelemeye ve kopyalamaya yarıyor
//     if(duzenlenecek_id_bul){
//        Object.assign(duzenlenecek_id_bul,duzenlenen_oyuncu)
//        res.status(200).json({message:"oyuncu başarıyla güncellendi",
//         data:data
//        });
//     }else{
//         res.status(404).json({errorMessage:"böyle bir oyuncu bulunamadı"});
//     }

//  })



// server.get("/oyuncular/:id",(req,res)=>{
//     const {id}=req.params;
//     const idbul=data.find((idbul)=>idbul.id=== parseInt(id));

//     if(idbul){
//         res.status(200).json(idbul);

//     }else{
//         res.status(404).send("oyuncu bulunamadı");
//     }
// })

server.listen(5000,()=>{
    console.log("http://localhost:5000 tarayıcıyı dinliyor")
});