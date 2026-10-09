// BASİT BİR SERVER OLUŞTURMAK

const http =require('http'); //projeyi import ediyoruz

const host='127.0.0.1'; //kendi bilgisayarımda çalışacağı için kendi postum 

const port=3000;

const server=http.createServer((istek,cevap)=>{
    cevap.statusCode=200; //yapılan istek başarılı (status kodlar 200ler başarılı)
    cevap.setHeader('Content-Type' , 'text/plain');
        //gonderdiğimiz cevabın başlığını belirtiyoruz (text dönderiyoruz)
    cevap.end('ogrenmeye hosgeldiN dilek');
})  
// yeni bir server oluşturma 1 ADET CALLBACK FUNC ALIYOR VE 2 PAREMETRESİ VAR 1.Sİ REQUEST YANİ İSTEK , RESPONSE YANİ CEVAPLAR , kullanıcıya gönderdiğimiz bilgilerde bu cevap objesinden yararlanacaz 

server.listen(port, host, ()=>{
    console.log(`http://${host}:${port} adresinden gelen istekler dinleniyor...`);
})