const showBtn = document.querySelector('.nav__toggle');
const navMenu = document.querySelector('.nav__menu');
const closeBtn = document.querySelector('.nav__close');
const navLinks = document.querySelectorAll('.nav__link');
const header = document.querySelector('.header');
const linkFeatued = document.querySelectorAll('.featured__item');
const scrollup = document.querySelector('.scrollup');

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
});


function scrollUp() {
    if (this.scrollY >= 350) {
        scrollup.classList.add('show-scroll');
    } else {
        scrollup.classList.remove('show-scroll');
    }
}

window.addEventListener('scroll', scrollUp);



const sections = document.querySelectorAll('section[id]');

function getActiveLink() {
    const scrollY = window.scrollY;
    sections.forEach(section => {
        const sectionHeight = section.offsetHeight;
        const sectionTop = section.offsetTop;
        const sectionId = section.getAttribute('id');
        if (scrollY >= sectionTop && scrollY < sectionTop+sectionHeight) {
            document.querySelector('.nav__link[href="#' + sectionId + '"]').classList.add('active-link');
        } else {
            document.querySelector('.nav__link[href="#' + sectionId + '"]').classList.remove('active-link');
        }
    });
}

window.addEventListener('scroll', getActiveLink);

const sr = ScrollReveal({
    origin: "top",
    distance: "60px",
    duration: 2500,
    delay: 400
});

sr.reveal('.home__title, .popular__container, .featured__filter');
sr.reveal('.home__subtitle', {delay: 500});
sr.reveal('.home__elec', {delay: 600});
sr.reveal('.home__img', {delay: 800});
sr.reveal('.home__car-data', {delay: 900, interval: 100, origin: 'bottom'});
sr.reveal('.home__button', {delay: 1000, origin: 'bottom'});
sr.reveal('.about__group, .offer__data', {origin: 'left'});
sr.reveal('.about__data, .offer__img', {origin: 'right'});
sr.reveal('.features__img', {origin: 'bottom'});
sr.reveal('.features__map', {delay: 600});
sr.reveal('.features__card', {interval: 300});
sr.reveal('.featured__card, .logos__content, .footer__content', {interval: 100});