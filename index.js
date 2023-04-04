'use strict';
const burgerMenu = document.querySelector('.menu');
const navbar = document.querySelector('ul.nav-menu');
const closeNav = document.querySelector('.close');
const overlay = document.querySelector('.overlay');
const nextBtn = document.querySelector('.next-icon');
const prevBtn = document.querySelector('.prev-icon');
const sneakerSlide = document.querySelectorAll('.pop-sneakers');
const sneakerShow = document.querySelector('.sneaker-main');
const popImg = document.querySelector('.popped-img');
const popClose = document.querySelector('.pop-close');

//Event Listeners
burgerMenu.addEventListener('click', function () {
  navbar.style.display = 'block';
  overlay.classList.remove('hidden');
});

closeNav.addEventListener('click', function () {
  navbar.style.display = 'none';
  overlay.classList.add('hidden');
});

// show pop-up
sneakerShow.addEventListener('click', function () {
  popImg.style.display = 'flex';
  overlay.classList.remove('hidden');
});

//close pop
popClose.addEventListener('click', function () {
  popImg.style.display = 'none';
  overlay.classList.add('hidden');
});

//changing slides

let currentSlide = 0;

const showSlide = function () {
  sneakerSlide.forEach(sneaker => sneaker.classList.remove('active'));
  sneakerSlide[currentSlide].classList.add('active');
};

showSlide(0);
const nextSneaker = function () {
  currentSlide = (currentSlide + 1) % sneakerSlide.length;
  showSlide();
};
const prevSneaker = function () {
  currentSlide = (currentSlide - 1 + sneakerSlide.length) % sneakerSlide.length;
  showSlide();
};
nextBtn.addEventListener('click', nextSneaker);
prevBtn.addEventListener('click', prevSneaker);

document.addEventListener('keydown', function (e) {
  if (e.key === 'ArrowLeft' && popImg.style.display !== 'none') prevSneaker();
});

document.addEventListener('keydown', function (e) {
  if (e.key === 'ArrowRight' && popImg.style.display !== 'none') nextSneaker();
});
