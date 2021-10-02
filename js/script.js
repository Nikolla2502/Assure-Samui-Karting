const menu = document.querySelector('.menu');
const btnResponsive = document.querySelector('.header_icon');

btnResponsive.addEventListener('click', () => {
    menu.style.transform = "translateX(0)";
})

menu.addEventListener('onscroll', () => {
    menu.style.transform = "translateX(-250px)";
})