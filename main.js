'use strict';

const toggle = document.querySelector('.menu-toggle');
const navLinks = document.querySelector('.nav-links');
const header = document.querySelector('.header')
const nav = document.querySelector('.nav')

toggle.addEventListener('click', () => {
    navLinks.classList.toggle('active');
    toggle.classList.toggle('open');
})


///////////////////////////////////////
// STICKY NAVIGATION

const stickyNav = function (entries) {
    const [entry] = entries;

    if (!entry.isIntersecting) nav.classList.add('sticky')
    else nav.classList.remove('sticky')

}

const headerObserver = new IntersectionObserver(stickyNav, {
    root: null,
    threshold: 0,
    rootMargin: '-90px'
})
headerObserver.observe(header)


///////////////////////////////////////
// SMOOTH SCROLLING


