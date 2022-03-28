const showBtn = document.querySelector('.nav__toggle');
const navMenu = document.querySelector('.nav__menu');
const closeBtn = document.querySelector('.nav__close');
const navLinks = document.querySelectorAll('.nav__link');
const header = document.querySelector('.header');
const linkFeatued = document.querySelectorAll('.featured__item');

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

window.addEventListener('scroll', () => {
    if (window.scrollY >= 50) {
        header.classList.add('scroll-header');
    } else {
        header.classList.remove('scroll-header');
    }
});


let swiperPopular = new Swiper('.popular__container', {
    loop: true,
    spaceBetween: 24,
    slidesPerView: 'auto',
    grabCursor: true,

    pagination: {
        el: '.swiper-pagination',
        dynamicBullets: true
    },

    breakpoints: {
        768: {
            slidesPerView: 3,
        },
        1024: {
            spaceBetween: 48,
        }
    }
});

let mixerFeatured = mixitup('.featured__content', {
    selectors: {
        target: '.featured__card'
    },
    animation: {
        duration: 300
    }
});

function activeFeatured() {
    linkFeatued.forEach(li => {
        li.classList.remove("active-featured");
    });
    this.classList.add('active-featured');
}

linkFeatued.forEach(link => {
    link.addEventListener('click', activeFeatured);
})