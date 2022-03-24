const showBtn = document.querySelector('.nav__toggle');
const navMenu = document.querySelector('.nav__menu');
const closeBtn = document.querySelector('.nav__close');
const navLinks = document.querySelectorAll('.nav__link');

showBtn.addEventListener('click', () => {
    navMenu.classList.add('show');
});

closeBtn.addEventListener('click', () => {
    navMenu.classList.remove('show');
});

navLinks.forEach(link => {
    link.addEventListener('click', () => {
        navMenu.classList.remove('show');
    });
});