var slideIndex = 1;
showSlides(slideIndex);

function plusSlides(n) {
    showSlides(slideIndex += n);
}

function currentSlide(n) {
    showSlides(slideIndex = n);
}

function translatePlus() {
    let menu = document.getElementById('menu-box');
    menu.style.transform = 'translateX(0)';
}

function translateNegative() {
    let menu = document.getElementById('menu-box');
    menu.style.transform = 'translateX(100%)';
}


function showSlides(n) {
    var i;
    var slides = document.getElementsByClassName("mySlides");
    var dots = document.getElementsByClassName("dot");
    if (n > slides.length) { slideIndex = 1 }
    if (n < 1) { slideIndex = slides.length }
    for (i = 0; i < slides.length; i++) {
        slides[i].style.display = "none";
    }
    for (i = 0; i < dots.length; i++) {
        dots[i].className = dots[i].className.replace(" active", "");
    }
    slides[slideIndex - 1].style.display = "block";
    console.log(slideIndex);
    if (slideIndex == 3) {
        let heading = document.getElementById('heading');
        let menu = document.getElementById('menu-box');
        let menuMiddle = document.getElementById('menu-middle');
        let prev = document.getElementById('prev');
        let next = document.getElementById('next');
        let menuBottom = document.getElementById('bottom');
        let close = document.getElementById('close-svg');
        let menuSvg = document.getElementById('menu-svg');
        heading.style.color = 'white';
        menu.style.backgroundColor = 'white';
        menuMiddle.style.color = 'black';
        prev.style.filter = 'invert(100%) sepia(98%) saturate(0%) hue-rotate(338deg) brightness(102%) contrast(100%)';
        next.style.filter = 'invert(100%) sepia(98%) saturate(0%) hue-rotate(338deg) brightness(102%) contrast(100%)';
        close.style.filter = 'invert(0%) sepia(2%) saturate(0%) hue-rotate(239deg) brightness(98%) contrast(100%)';
        menuBottom.style.color = 'black';
        menuSvg.style.filter = 'invert(100%) sepia(98%) saturate(0%) hue-rotate(338deg) brightness(102%) contrast(100%)';
    } else {
        let heading = document.getElementById('heading');
        let menu = document.getElementById('menu-box');
        let menuMiddle = document.getElementById('menu-middle');
        let prev = document.getElementById('prev');
        let next = document.getElementById('next');
        let menuBottom = document.getElementById('bottom');
        let close = document.getElementById('close-svg');
        let menuSvg = document.getElementById('menu-svg');
        heading.style.color = 'black';
        menu.style.backgroundColor = 'black';
        menuMiddle.style.color = 'white';
        prev.style.filter = 'invert(0%) sepia(2%) saturate(0%) hue-rotate(239deg) brightness(98%) contrast(100%)';
        next.style.filter = 'invert(0%) sepia(2%) saturate(0%) hue-rotate(239deg) brightness(98%) contrast(100%)';
        menuSvg.style.filter = 'invert(0%) sepia(2%) saturate(0%) hue-rotate(239deg) brightness(98%) contrast(100%)';
        close.style.filter = 'invert(100%) sepia(98%) saturate(0%) hue-rotate(338deg) brightness(102%) contrast(100%)';
        menuBottom.style.color = 'white';
    }

}