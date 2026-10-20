module.exports=(err,req,res,next)=>{
res.status(err.statusCode).json(err); //jsonda objenin kendisini yazdır
};
// kullanıcıya bir status kod göderecez ama post metosundaki statuscode ile eşit olmasını istiyoruz




//  middleware ler 3 paremetre alır her zaman req,res,next
// hataları ele allan parametreler 4 parametre alıyor 