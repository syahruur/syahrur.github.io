// Toggle class active
const navbarNav = document.querySelector(".navbar-nav");
// ketika tugas menu di klik
document.querySelector("#tugas-menu");
onclick = () => {
  navbarNav.classList.toggle("active");
};

//Klik di luar sidebar untuk menghilangkan nav
const tugas = document.querySelector("#tugas-menu");

document.addEventListener("click", function (e) {
  if (!tugas.contains(e.target) && !navbarNav.contains(e.target)) {
    navbarNav.classList.remove("active");
  }
});
