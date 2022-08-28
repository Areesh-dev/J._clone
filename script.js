let menu = document.querySelector("#menu-bar");
let navbar = document.querySelector(".navigation");

menu.onclick = () => {
  menu.classList.toggle("fa-times");
  navbar.classList.toggle("active");
};

var swiper = new Swiper(".mySwiper", {
  navigation: {
    nextEl: ".swiper-button-next",
    prevEl: ".swiper-button-prev",
  },
});

var loader = document.querySelector(".loader");

window.addEventListener("load", areesh);

function areesh() {
  loader.classList.add("disppear");
}
