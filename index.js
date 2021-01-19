const burger = document.querySelector(".burger");
const closebtn = document.querySelector(".menu__cross");
const overlay = document.querySelector(".navbar__overlay");
const menu = document.querySelector(".navbar__menu");
let isOpen = false;
burger.addEventListener("click", () => {
    isOpen = !isOpen;
    overlay.classList.toggle("open");
    if (isOpen) {
        document.body.style.overflow = "hidden";
//        document.querySelector(".navbar__wrapper").style.paddingRight = "1.1%";
    }
    if (!isOpen) {
        document.body.style.overflow = "auto";
//        document.querySelector(".navbar__wrapper").style.paddingRight = "0";
    }
});
closebtn.addEventListener("click", () => {
    isOpen = !isOpen;
    overlay.classList.remove("open");
    document.body.style.overflow = "auto";
});