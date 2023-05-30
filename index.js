'use strict';
const burgerMenu = document.querySelector('.menu');
const navbar = document.querySelector('ul.nav-menu');
const closeNav = document.querySelector('.close');
const overlay = document.querySelector('.overlay');
const nextBtn = document.querySelector('.next-icon');
const prevBtn = document.querySelector('.prev-icon');
const sneakerSlide = document.querySelectorAll('.pop-sneakers');
const sneakerShow = document.querySelectorAll('.sneaker-main');
const sneaker = document.querySelectorAll('.sneakers');
const popImg = document.querySelector('.popped-img');
const popClose = document.querySelector('.pop-close');
const orangeBorder = document.querySelectorAll('.main-thumbnail');
const orangePopBorder = document.querySelectorAll('.pop-border');
const sneakerThumbnail = document.querySelectorAll('.sneaker-thumbnail');

//Event Listeners
burgerMenu.addEventListener('click', function () {
  navbar.style.display = 'block';
  overlay.classList.remove('hidden');
});

closeNav.addEventListener('click', function () {
  navbar.style.display = 'none';
  overlay.classList.add('hidden');
});

const popswitch = function () {
  orangePopBorder.forEach(function (thumbnail) {
    thumbnail.classList.remove('active');
  });
  this.classList.add('active');

  sneakerSlide.forEach(image => {
    image.classList.remove('active');
  });
  sneakerSlide[i].classList.add('active');
};
// show pop-up

const popActive = function () {
  popImg.style.display = 'flex';
  overlay.classList.remove('hidden');
};

// changing orangeborder

const switchMainBorder = function () {
  orangeBorder.forEach((thumbnail, i) => {
    thumbnail.addEventListener('click', function () {
      orangeBorder.forEach(function (thumbnail) {
        thumbnail.classList.remove('active');
      });
      this.classList.add('active');

      sneakerShow.forEach(image => {
        image.classList.remove('active');
      });
      sneakerShow[i].classList.add('active');
    });
  });
};
switchMainBorder();

const switchPopBorder = function () {
  orangePopBorder.forEach((thumbnail, i) => {
    thumbnail.addEventListener('click', function () {
      orangePopBorder.forEach(function (thumbnail) {
        thumbnail.classList.remove('active');
      });
      this.classList.add('active');

      sneakerSlide.forEach(image => {
        image.classList.remove('active');
      });
      sneakerSlide[i].classList.add('active');
    });
  });
};
switchPopBorder();

sneakerShow.forEach(sneaker => {
  sneaker.addEventListener('click', function () {
    popImg.style.display = 'flex';
    overlay.classList.remove('hidden');
  });
});

sneakerShow.forEach((sneaker, i) => {
  sneaker.addEventListener('click', function () {
    popActive();
    switchPopBorder();
    sneakerSlide.forEach(s => s.classList.remove('active'));
    sneakerSlide[i].classList.add('active');
  });
});
//close pop
popClose.addEventListener('click', function () {
  popImg.style.display = 'none';
  overlay.classList.add('hidden');
});

//changing slides
let currentSlide = 0;
let currentPop = 0;

const showSlide = function () {
  sneakerSlide.forEach(sneaker => sneaker.classList.remove('active'));
  sneakerSlide[currentSlide].classList.add('active');
};

const showPoporange = function () {
  orangePopBorder.forEach(function (thumbnail) {
    thumbnail.classList.remove('active');
  });
  this.classList.add('active');
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
const arrSwitchNext = function () {
  currentPop = (currentPop + 1) % orangePopBorder.length;
  showPoporange();
};
const nextArr = function () {
  nextSneaker();
  arrSwitchNext();
};

nextBtn.addEventListener('click', nextSneaker);
prevBtn.addEventListener('click', prevSneaker);

document.addEventListener('keydown', function (e) {
  if (e.key === 'ArrowLeft' && popImg.style.display !== 'none') prevSneaker();
});

document.addEventListener('keydown', function (e) {
  if (e.key === 'ArrowRight' && popImg.style.display !== 'none') nextSneaker();
});
