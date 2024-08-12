document.addEventListener('scroll', function() {
    const bodyLogoContainer = document.getElementById('body-logo-container') as HTMLElement;
    const navbarLogo = document.getElementById('navbar-logo') as HTMLElement;
    const bodyLogo = document.getElementById('body-logo') as HTMLElement;
    const scrollPosition = window.scrollY;

    if (scrollPosition > 100) { // Ajusta el valor para tu caso
        if (bodyLogoContainer.firstElementChild) {
            const logo = bodyLogoContainer.firstElementChild as HTMLElement;
            logo.classList.add('sticky-logo'); // Añadir clase para animación
            navbarLogo.appendChild(logo);
            bodyLogoContainer.style.display = 'none';
            navbarLogo.style.display = 'block';
        }
    } else {
        if (navbarLogo.firstElementChild) {
            const logo = navbarLogo.firstElementChild as HTMLElement;
            logo.classList.remove('sticky-logo'); // Quitar clase para animación
            bodyLogoContainer.appendChild(logo);
            navbarLogo.style.display = 'none';
            bodyLogoContainer.style.display = 'block';
        }
    }
});
