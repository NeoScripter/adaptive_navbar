document.addEventListener("DOMContentLoaded", () => {
    const header = document.querySelector('.header__navbar-wrapper');
    const burgerMenu = document.querySelector('.burger__menu');
    
    burgerMenu.addEventListener('click', () => {
        burgerMenu.classList.toggle('active');
        header.classList.toggle('scrolled-up');
    });

    const prefersDarkScheme = window.matchMedia("(prefers-color-scheme: dark)").matches;
    document.getElementById(prefersDarkScheme ? 'dark' : 'light').checked = true;
});
