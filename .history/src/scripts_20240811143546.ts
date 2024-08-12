const myListener = document.addEventListener('scroll', function() {
    const bodyLogo = document.getElementById('body-logo') as HTMLElement;
    const navbarLogo = document.getElementById('navbar-logo') as HTMLElement;
    const scrollPosition = window.scrollY;

    if (scrollPosition > 100) { // Cambia 100 por la cantidad de scroll que desees
        bodyLogo.style.display = 'none';
        navbarLogo.style.display = 'block';
    } else {
        bodyLogo.style.display = 'block';
        navbarLogo.style.display = 'none'
    }
});