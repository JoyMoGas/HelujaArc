// Obtén los elementos necesarios
const bodyLogo = document.getElementById('body-logo') as HTMLImageElement;
const navbarLogo = document.getElementById('navbar-logo') as HTMLDivElement;
const bodyElement = document.body;

// Función para manejar el scroll
function handleScroll() {
    if (window.scrollY > 100) { // Ajusta el valor de scroll según sea necesario
        bodyElement.classList.add('scrolled'); // Agrega clase para aplicar estilos
    } else {
        bodyElement.classList.remove('scrolled'); // Remueve clase para aplicar estilos
    }
}

// Agrega un listener para el evento de scroll
window.addEventListener('scroll', handleScroll);

// Inicializa el estado del logotipo al cargar la página
document.addEventListener('DOMContentLoaded', handleScroll);
