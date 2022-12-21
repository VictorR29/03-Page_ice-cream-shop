const menuIcon = document.querySelector(".fi-br-cross");
const menu = document.querySelector(".navbar__mobile");
const menuDesktop = document.querySelector(".navbar__desktop");
const size = window.innerWidth;

menuIcon.addEventListener("click", ()=> {
  menu.classList.toggle("navbar__mobile--open");
  menuIcon.classList.toggle("icon-close");
});

if(size >= 640) {
  menu.style.display="none";
  menuDesktop.style.display="flex";
} 