let alanlar=document.getElementsByTagName("area");
let secilen;

[...alanlar].forEach((alan,index)=>{
    alan.addEventListener("click",()=>{
        secilen=alan.getAttribute("title");
        yazdır(secilen);
    });
});


 function yazdır(secilen){
     alert(secilen);
 }