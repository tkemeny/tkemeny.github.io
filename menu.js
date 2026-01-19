const hamburger = document.querySelector('.hamburger');
const overlay = document.querySelector('.menu-overlay');
const closeBtn = document.querySelector('.close-menu');

hamburger.addEventListener('click', () => {
  overlay.classList.add('open');
});

closeBtn.addEventListener('click', () => {
  overlay.classList.remove('open');
});
