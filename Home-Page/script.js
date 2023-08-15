const menu = document.querySelector(".menu-icon");
const headerUL = document.querySelector(".header-top-center");
const close = document.querySelector(".close-icon");
menu.addEventListener("click", function () {
  headerUL.classList.toggle("active-menu");
    document.body.style.overflow = 'hidden'
});
close.addEventListener("click", function () {
  headerUL.classList.toggle("active-menu");
  document.body.style.overflow = 'visible'
});
