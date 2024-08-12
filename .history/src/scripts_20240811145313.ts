const myListener = document.addEventListener('scroll', function() {
    const bodyLogo = document.getElementById('body-logo') as HTMLElement;
    const navbarLogo = document.getElementById('navbar-logo') as HTMLElement;
    const scrollPosition = window.scrollY;

    if (scrollPosition > 100) { // Cambia 100 por la cantidad de scroll que desees
        bodyLogo.classList.add('sticky-logo');  // Añadir clase para deslizamiento
        navbarLogo.style.display = 'block';     // Mostrar logotipo en la navbar
    } else {
        bodyLogo.classList.remove('sticky-logo'); // Quitar clase para devolver el logo a su posición original
        setTimeout(() => {
            navbarLogo.style.display = 'none';    // Ocultar logotipo en la navbar cuando se vuelve al inicio
        }, 500);  // Tiempo igual al de la transición en CSS
    }
});
