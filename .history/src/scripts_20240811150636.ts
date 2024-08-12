document.addEventListener('scroll', function() {
    const bodyLogo = document.getElementById('body-logo') as HTMLElement;
    const navbarLogo = document.getElementById('navbar-logo') as HTMLElement;
    const scrollPosition = window.scrollY;

    if (scrollPosition > 100) { // Cambia 100 por la cantidad de scroll que desees
        bodyLogo.style.opacity = '0';
        navbarLogo.style.opacity = '1';
        navbarLogo.classList.add('sticky-logo');
    } else {
        bodyLogo.style.opacity = '1';
        navbarLogo.style.opacity = '0';
        navbarLogo.classList.remove('sticky-logo');
    }
});
