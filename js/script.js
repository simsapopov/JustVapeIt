const toggle = document.querySelector('.toggle');
const navigation = document.querySelector('.navigation');

toggle.addEventListener('click', function(){
    navigation.classList.toggle('active');
    toggle.classList.toggle('active');
});

const navLinks = document.querySelectorAll('.navLink');
navLinks.forEach((l) => {
    l.addEventListener('click', () => { navigation.classList.toggle('active');
    toggle.classList.toggle('active'); })
})


window.onscroll = () =>{
    sideBar.classList.remove('active');
    searchForm.classList.remove('active');
};

document.querySelectorAll('.accordion-container .accordion').forEach(accordion =>{
    accordion.onclick = () =>{
        accordion.classList.toggle('active');
    }
});

var swiper = new Swiper(".home-slider", {
    loop:true,
    grabCursor:true,
    navigation: {
      nextEl: ".swiper-button-next",
      prevEl: ".swiper-button-prev",
    },
});

var swiper = new Swiper(".review-slider", {
    loop:true,
    grabCursor:true,
    spaceBetween: 20,
    breakpoints: {
        450: {
          slidesPerView: 1,
        },
        768: {
          slidesPerView: 2,
        },
        1024: {
          slidesPerView: 3,
        },
    },
});
var window_height;
var window_width;
v



$(document).ready(function () {
    window_width = $(window).width();

  
});

$(window).resize(function () {
    window_width = $(window).width();
    
});