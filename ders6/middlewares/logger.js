//custom middleware:yazıyoruz

module.exports=(req,res,next)=>{
 // next fonk amacı ,sıradaki middleware göndermek

 console.log(`${new Date().toUTCString()}-${req.method}- ${req.hostname}`);

  next(); // bunu ekledik çünkü üsteki console.log işlemini yaptıktan sonra sonraki middleware işlemine geçsin 
};

//  middleware ler 3 paremetre alır her zaman req,res,next
// hataları ele allan parametreler 4 parametre alıyor 