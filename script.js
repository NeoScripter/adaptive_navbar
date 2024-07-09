document.addEventListener("DOMContentLoaded", () => {
    const header = document.querySelector('.header__navbar-wrapper');
    document.querySelector('.burger__menu').addEventListener('click', function() {
        this.classList.toggle('active');
        header.classList.toggle('scrolled-up');
    });
})