const burgerMenu = document.querySelector(".menu");
const navbar = document.querySelector("ul.nav-menu");
const closeNav = document.querySelector(".close");

burgerMenu.addEventListener("click", function () {
  navbar.style.display = "block";
});

closeNav.addEventListener("click", function () {
  navbar.style.display = "none";
});
