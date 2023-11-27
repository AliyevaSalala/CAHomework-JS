let header = document.querySelector("header");
let nav = document.querySelector("nav");
let menuIcon = document.querySelector(".menu-icon");
let menuIconsI = document.querySelector(".menu-icon i");
let dropDown = document.querySelector(".responsive-header");

window.addEventListener("scroll", function () {
  console.log(scrollY);
});
window.addEventListener("scroll", function () {
  header.classList.toggle("header-scroll", window.scrollY > 0);
});

menuIcon.onclick = function () {
  dropDown.classList.toggle("open");
  let isOpen = dropDown.classList.contains("open");
  isOpen ? menuIconsI.classList("fa-x") : menuIconsI.classList("fa-bars");
};
