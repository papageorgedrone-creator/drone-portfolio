document.addEventListener("DOMContentLoaded", function () {

  const images = document.querySelectorAll('.gallery-item img');
  const lightbox = document.getElementById('lightbox');
  const lightboxImg = document.getElementById('lightbox-img');
  const closeBtn = document.querySelector('.close');

  images.forEach(img => {
    img.addEventListener('click', function () {
      lightbox.style.display = 'flex';
      lightboxImg.src = this.src;
    });
  });

  closeBtn.addEventListener('click', function () {
    lightbox.style.display = 'none';
  });

  lightbox.addEventListener('click', function (e) {
    if (e.target !== lightboxImg) {
      lightbox.style.display = 'none';
    }
  });

});
function filterSelection(category) {
  const items = document.querySelectorAll('.gallery-item');

  items.forEach(item => {
    if (category === 'all') {
      item.style.display = 'block';
    } else {
      if (item.getAttribute('data-category') === category) {
        item.style.display = 'block';
      } else {
        item.style.display = 'none';
      }
    }
  });
}
// Απενεργοποίηση δεξιού κλικ
document.addEventListener("contextmenu", function (e) {
  e.preventDefault();
});
