document.addEventListener('scroll', function() {
    const logoContainer = document.getElementById('logo-container') as HTMLElement;
    const scrollPosition = window.scrollY;

    if (scrollPosition > 100) { // Cambia 100 por la cantidad de scroll que desees
        logoContainer.classList.add('sticky');  // Mover el logo a la navbar
    } else {
        logoContainer.classList.remove('sticky'); // Devolver el logo a su posición original
    }
});
