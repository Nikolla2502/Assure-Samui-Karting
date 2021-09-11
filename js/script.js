const liste = document.querySelector('.liste');
const btnResponsive = document.querySelector('.btn-responsive');

btnResponsive.addEventListener('click', () => {
    liste.classList.toggle('show');
})
window.addEventListener('resize', () => {  // resize en format grand ecran pour reset
    if(window.innerWidth > 650) {
        liste.classList.remove('show');
    }
})