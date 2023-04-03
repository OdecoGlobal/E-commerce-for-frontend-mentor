'use strict';
const burgerMenu = document.querySelector('.menu');
const navbar = document.querySelector('ul.nav-menu');
const closeNav = document.querySelector('.close');
const overlay = document.querySelector('.overlay');

burgerMenu.addEventListener('click', function () {
  navbar.style.display = 'block';
  overlay.classList.remove('hidden');
});

closeNav.addEventListener('click', function () {
  navbar.style.display = 'none';
  overlay.classList.add('hidden');
});

//changing slides
const nextBtn = document.querySelector('.next-icon');
const prevBtn = document.querySelector('.prev-icon');
const sneakerSlide = document.querySelectorAll('.pop-sneakers');
let currentSlide = 0;

const showSlide = function () {
  sneakerSlide.forEach(sneaker => sneaker.classList.remove('active'));
  sneakerSlide[currentSlide].classList.add('active');
};
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
