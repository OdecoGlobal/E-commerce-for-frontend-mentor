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
const amtSneaker = document.querySelector('.counter');
const btnMinus = document.getElementById('minus_icon');
const btnPlus = document.getElementById('plus_icon');
const btnCart = document.querySelector('.btn--cart');
const amtCheckout = document.querySelector('.checkout-amt');
const totalCart = document.querySelector('.total-carted');
const iconCart = document.getElementById('cart-icon');
const empCart = document.querySelector('.cart-empty');
const cardCart = document.querySelector('.card');
const fillCart = document.querySelector('.cart-filled');
const total = document.querySelector('.amt-total');
const btnDelete = document.querySelector('.delete-icon');

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

const showPop = sneakerShow.forEach(sneaker => {
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

    orangePopBorder.forEach(t => t.classList.remove('active'));
    orangePopBorder[i].classList.add('active');
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
  orangePopBorder.forEach(t => t.classList.remove('active'));
  orangePopBorder[currentPop].classList.add('active');
};

showSlide();
const nextSneaker = function () {
  currentSlide = (currentSlide + 1) % sneakerSlide.length;
  currentPop = (currentPop + 1) % orangePopBorder.length;

  showSlide();
};
const prevSneaker = function () {
  currentSlide = (currentSlide - 1 + sneakerSlide.length) % sneakerSlide.length;
  currentPop =
    (currentPop - 1 + orangePopBorder.length) % orangePopBorder.length;
  showSlide();
};

nextBtn.addEventListener('click', nextSneaker);
prevBtn.addEventListener('click', prevSneaker);

document.addEventListener('keydown', function (e) {
  e.preventDefault();
  if (e.key === 'ArrowLeft' && popImg.style.display !== 'none') prevSneaker();
});

document.addEventListener('keydown', function (e) {
  e.preventDefault();
  if (e.key === 'ArrowRight' && popImg.style.display !== 'none') nextSneaker();
});

// cart
// amtSneaker.textContent = 20;
let counter = Number(amtSneaker.textContent);

let checkoutNum = Number(amtCheckout.textContent);
console.log(checkoutNum);

btnMinus.addEventListener('click', function (e) {
  e.preventDefault();
  if (counter > 0) {
    amtSneaker.textContent = --counter;
  }
});

btnPlus.addEventListener('click', function () {
  amtSneaker.textContent = ++counter;
});

btnCart.addEventListener('click', function (e) {
  e.preventDefault();
  if (counter > 0) {
    amtCheckout.classList.remove('hidden');
    amtCheckout.textContent = totalCart.textContent =
      Number(amtCheckout.textContent) + Number(amtSneaker.textContent);

    amtSneaker.textContent = counter = 0;
    total.textContent = Number(amtCheckout.textContent) * 125;
  }
});

iconCart.addEventListener('click', function () {
  cardCart.classList.toggle('hidden');
  if (checkoutNum === 0) {
    empCart.classList.remove('hidden');
  }
  if (amtCheckout.textContent > 0) {
    empCart.classList.add('hidden');
    fillCart.classList.remove('hidden');
  }
});

btnDelete.addEventListener('click', function () {
  amtCheckout.textContent = totalCart.textContent = 0;
  cardCart.classList.add('hidden');
  amtCheckout.classList.add('hidden');
  fillCart.classList.add('hidden');
});
