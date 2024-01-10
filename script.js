const imgBox=document.querySelector('.imgBox');
const qrImage=document.querySelector('#qrImage');
const qrText=document.querySelector('#qrText');
const Generator_btn=document.querySelector("#Generator-btn");

function generatorQR(){
   if(qrText.value.length>0){
    qrImage.src=`https://api.qrserver.com/v1/create-qr-code/?size=150x150&data=`+ qrText.value;
    imgBox.classList.add('show-img')
   }else{
    qrText.classList.add('error')
       setTimeout(()=>{
          qrText.classList.remove('error')
       },1000)
       
   }
}

Generator_btn.addEventListener('click',generatorQR,false);

