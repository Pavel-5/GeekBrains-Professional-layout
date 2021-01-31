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
//        document.body.style.height = "100vh";
        document.querySelector(".navbar").style.paddingRight = "1.3%";
        document.body.style.paddingRight = "1.3%";
//        document.body.parentNode.style.overflowY = "scroll"
    }
    if (!isOpen) {
        document.body.style.overflow = "auto";
//        document.body.style.height = null;
        document.querySelector(".navbar").style.paddingRight = "0";
        document.body.style.paddingRight = "0";
//        document.body.parentNode.style.overflowY = null
    }
});
closebtn.addEventListener("click", () => {
    isOpen = !isOpen;
    overlay.classList.remove("open");
    document.body.style.overflow = "auto";
});