// script.js
var dropDownMenu = document.getElementById("dropdown-content");

function showMenu() {
    dropDownMenu.classList.add("show");
}

function hideMenu() {
    dropDownMenu.classList.remove("show");
}


let slideIndex = 0;
showSlides();

function plusSlides(n) {
    showSlides(slideIndex += n);
}

function showSlides(n) {
    let i;
    let slides = document.getElementsByClassName("slide");
    if (n >= slides.length) { slideIndex = 0; }
    if (n < 0) { slideIndex = slides.length - 1; }
    for (i = 0; i < slides.length; i++) {
        slides[i].style.display = "none";  
    }
    slides[slideIndex].style.display = "block";  
}