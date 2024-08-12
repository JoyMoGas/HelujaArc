document.addEventListener('scroll', function() {
    const bodyLogoContainer = document.getElementById('body-logo-container') as HTMLElement;
    const navbarLogoContainer = document.getElementById('navbar-logo-container') as HTMLElement;
    const scrollPosition = window.scrollY;

    if (scrollPosition > 100) { // Ajusta el valor para tu caso
        if (bodyLogoContainer.firstElementChild) {
            // Mover el logotipo de la body a la navbar
            navbarLogoContainer.appendChild(bodyLogoContainer.firstElementChild);
            bodyLogoContainer.style.display = 'none';
            navbarLogoContainer.style.display = 'block';
            navbarLogoContainer.classList.add('sticky');
        }
    } else {
        if (navbarLogoContainer.firstElementChild) {
            // Mover el logotipo de vuelta al body
            bodyLogoContainer.appendChild(navbarLogoContainer.firstElementChild);
            navbarLogoContainer.style.display = 'none';
            bodyLogoContainer.style.display = 'block';
            bodyLogoContainer.classList.remove('sticky');
        }
    }
});
