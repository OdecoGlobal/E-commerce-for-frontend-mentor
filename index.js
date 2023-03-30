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
