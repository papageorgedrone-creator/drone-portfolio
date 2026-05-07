let activeCategory = null;
let currentIndex = 0;
let visiblePhotos = [];

function toggleCategory(category, element) {
  const gallery = document.getElementById("gallery");
  const photos = document.querySelectorAll(".photo");


if (activeCategory === category) {
  photos.forEach(photo => photo.style.display = "none");
  gallery.style.display = "none";
  activeCategory = null;
  return;
}

  visiblePhotos = [];
gallery.style.display = "grid";

  photos.forEach(photo => {
    if (photo.classList.contains(category)) {
      photo.style.display = "block";
      visiblePhotos.push(photo);
    } else {
      photo.style.display = "none";
    }
  });

  element.parentNode.insertBefore(gallery, element.nextSibling);

  activeCategory = category;
}

const photos = document.querySelectorAll(".photo");
const lightbox = document.getElementById("lightbox");
const lightboxImg = document.getElementById("lightbox-img");
const closeBtn = document.querySelector(".close");
const prevBtn = document.querySelector(".prev");
const nextBtn = document.querySelector(".next");

photos.forEach((photo, index) => {
  photo.addEventListener("click", () => {
    currentIndex = visiblePhotos.indexOf(photo);
    openLightbox();
  });
});

function openLightbox(){
  lightbox.style.display = "flex";
  lightboxImg.src = visiblePhotos[currentIndex].src;
}

function showNext(){
  currentIndex = (currentIndex + 1) % visiblePhotos.length;
  openLightbox();
}

function showPrev(){
  currentIndex =
    (currentIndex - 1 + visiblePhotos.length) % visiblePhotos.length;
  openLightbox();
}

nextBtn.addEventListener("click", showNext);
prevBtn.addEventListener("click", showPrev);

closeBtn.addEventListener("click", () => {
  lightbox.style.display = "none";
});

document.addEventListener("keydown", e => {
  if(lightbox.style.display === "flex"){
    if(e.key === "ArrowRight") showNext();
    if(e.key === "ArrowLeft") showPrev();
    if(e.key === "Escape") lightbox.style.display = "none";
  }
});

document.addEventListener("contextmenu", e => e.preventDefault());
document.addEventListener("dragstart", e => e.preventDefault());