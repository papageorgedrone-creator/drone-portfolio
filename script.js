
let activeCategory = null;
let currentIndex = 0;
let visiblePhotos = [];

function toggleCategory(category){

const photos = document.querySelectorAll(".photo");

if(activeCategory === category){

photos.forEach(photo=>{
photo.style.display="none";
});

activeCategory = null;
return;

}

visiblePhotos = [];

photos.forEach(photo=>{

if(photo.classList.contains(category)){

photo.style.display="block";
visiblePhotos.push(photo);

}else{

photo.style.display="none";

}

});

activeCategory = category;

}



// LIGHTBOX

const galleryImages = document.querySelectorAll(".photo");
const lightbox = document.getElementById("lightbox");
const lightboxImg = document.getElementById("lightbox-img");

galleryImages.forEach((img,index)=>{

img.addEventListener("click",()=>{

visiblePhotos = [...document.querySelectorAll(".photo")]
.filter(photo => photo.style.display === "block");

currentIndex = visiblePhotos.indexOf(img);

openLightbox();

});

});

function openLightbox(){

lightbox.style.display="flex";
lightboxImg.src = visiblePhotos[currentIndex].src;

}

function closeLightbox(){

lightbox.style.display="none";

}

function nextImage(){

currentIndex++;

if(currentIndex >= visiblePhotos.length){
currentIndex = 0;
}

fadeImage();

}

function prevImage(){

currentIndex--;

if(currentIndex < 0){
currentIndex = visiblePhotos.length - 1;
}

fadeImage();

}

function fadeImage(){

lightboxImg.style.opacity = 0;

setTimeout(()=>{

lightboxImg.src = visiblePhotos[currentIndex].src;
lightboxImg.style.opacity = 1;

},200);

}



// BUTTONS

document.querySelector(".next").onclick = nextImage;
document.querySelector(".prev").onclick = prevImage;
document.querySelector(".close").onclick = closeLightbox;



// KEYBOARD

document.addEventListener("keydown",function(e){

if(lightbox.style.display === "flex"){

if(e.key === "ArrowRight") nextImage();
if(e.key === "ArrowLeft") prevImage();
if(e.key === "Escape") closeLightbox();

}

});



// SWIPE MOBILE

let touchStartX = 0;
let touchEndX = 0;

lightbox.addEventListener("touchstart",e=>{
touchStartX = e.changedTouches[0].screenX;
});

lightbox.addEventListener("touchend",e=>{

touchEndX = e.changedTouches[0].screenX;

if(touchEndX < touchStartX - 50){
nextImage();
}

if(touchEndX > touchStartX + 50){
prevImage();
}

});



// Απενεργοποίηση δεξιού κλικ
document.addEventListener("contextmenu", function (e) {
  e.preventDefault();
});

