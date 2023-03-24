const nav = document.querySelector(".nav");
const toggleMenu = document.querySelector(".toggle-menu");

toggleMenu.addEventListener("click", ()=>{
    toggleMenu.classList.toggle("open");
    nav.classList.toggle("open");
});
