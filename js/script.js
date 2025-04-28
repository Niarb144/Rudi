const header = document.getElementById('header');
const navbar = document.getElementById('navbar');

window.addEventListener('scroll', () => {
    if (window.scrollY >= header.offsetHeight) {
        navbar.classList.add('fixed');
    } else {
        navbar.classList.remove('fixed');
    }
});
