document.addEventListener("DOMContentLoaded", () => {
    const menuBtn = document.getElementById("menu-btn");
    const nav = document.getElementById("menu");
  
    menuBtn.addEventListener("click", () => {
        menuBtn.classList.toggle("open");
        nav.classList.toggle("hidden");
    });
  });