const router=require('express').Router();
let data=require('../data');

router.get('/',(req,res)=>{
res.status(200).json(data);
})


// ekleme:
let next_id=4;
router.post("/",(req,res,next)=>{
 let yeni_aktor=req.body;

if(yeni_aktor.isim && yeni_aktor.filmler ){

yeni_aktor.id=next_id;
 next_id++;
 data.push(yeni_aktor);
 res.status(201).json(yeni_aktor);

}else if(yeni_aktor.isim && !yeni_aktor.filmler){
next({statusCode:400,
    errorMessage:"aktor eklemek için filmler girmelisiz ",
})

}else{
    // error handling gerçekleşitirlecek

    next({statusCode:400, errorMessage:"aktor eklemek için isim girmelisiniz" });
    //  next({ }) eğer bu şekilde çağırır sanız bu bir sonraki normal hangisi müsaitse o middleware gidiyor 
}

 
});


// silme:
router.delete('/:id',(req,res)=>{
    const sil_id=req.params.id;
    const silinecek_aktor=data.find(sil_aktor=>sil_aktor.id==Number(sil_id));
if(silinecek_aktor){
    data=data.filter(silinecek_aktor=>silinecek_aktor.id!==Number(sil_id))
    res.status(204).end();
}else{
    res.status(404).json({errorMessage:"silmeye çalışıtığınız aktor sistemde yok"});
}
})

// put düzenleme:

router.put('/:id',(req,res)=>{
 let duzenlenecek_id=req.params.id;
let duzenlenecek_aktor= req.body;
const duzenlenecek_id_bul=data.find(aktor_id=>aktor_id.id===duzenlenecek_id)
if(duzenlenecek_id_bul){
    res.status(200).json({message:"aktor başarıyla güncellendi"})

}else{
    res.status(404).json({errorMessage:"böyle bir aktor yok"})
}

})

router.get('/:id',(req,res)=>{
    const {id}=req.params;
    const idbul=data.find((bul)=>bul.id==parseInt(id));

    if(idbul){
        res.status(200).json(idbul);
    }else{
        res.status(404).send("aktor bulunamadı");
    }
})

module.exports=router;