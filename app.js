// Responsive side bar
const sideBar = document.querySelector(".side-bar");
const menuBtn = document.querySelector(".menu-btn");

menuBtn.addEventListener("click", function () {
  sideBar.classList.toggle("show-hide");
});
