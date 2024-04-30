var arrayimage=["./image/image-product-1.jpg","./image/image-product-2.jpg",
"./image/image-product-3.jpg","./image/image-product-4.jpg"];
var img=document.createElement('img');
var tasvir=document.getElementById('tasvir');
var img1=document.getElementById('img1');
var img2=document.getElementById('img2');
var u=0;


img.src=arrayimage[u];

tasvir.appendChild(img);


img1.addEventListener('click',function(){
if(u==0){
    u=arrayimage.length-1;
    img.src=arrayimage[u];

}else{
    u=u-1;
    img.src=arrayimage[u];

}
})
img2.addEventListener('click',function(){
    if(u==arrayimage.length-1){
        u=0;
        img.src=arrayimage[u];

    }else{
        u=u+1;
        img.src=arrayimage[u];
    }

})