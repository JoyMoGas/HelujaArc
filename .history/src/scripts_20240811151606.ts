// Obtén los elementos necesarios
const bodyLogo = document.getElementById('body-logo') as HTMLImageElement;
const navbarLogo = document.getElementById('navbar-logo') as HTMLDivElement;

// Función para manejar el scroll
function handleScroll() {
    if (window.scrollY > 100) { // Ajusta el valor de scroll según sea necesario
        if (bodyLogo) {
            bodyLogo.style.display = 'none'; // Oculta el logotipo en el body
        }
        if (navbarLogo) {
            navbarLogo.style.display = 'block'; // Muestra el logotipo en la navbar
            navbarLogo.style.animation = 'slideToNavbar 1s forwards'; // Aplica la animación
        }
    } else {
        if (bodyLogo) {
            bodyLogo.style.display = 'block'; // Muestra el logotipo en el body
        }
        if (navbarLogo) {
            navbarLogo.style.display = 'none'; // Oculta el logotipo en la navbar
            navbarLogo.style.animation = 'none'; // Detiene la animación
        }
    }
}

// Agrega un listener para el evento de scroll
window.addEventListener('scroll', handleScroll);

// Inicializa el estado del logotipo al cargar la página
document.addEventListener('DOMContentLoaded', handleScroll);
