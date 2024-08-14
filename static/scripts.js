"use strict";
document.addEventListener('DOMContentLoaded', () => {
    window.scrollTo(0, 0);
    const logo = document.getElementById('logo');
    const title = document.getElementById('title');
    const titleSpan = document.querySelector('#title span');
    const handleScroll = () => {
        if (window.scrollY > 100) {
            logo.style.position = 'fixed';
            logo.style.top = '-12px';
            logo.style.left = '90px';
            logo.style.height = '100px';
            logo.style.transform = 'translateX(0) scale(0.6)';
            title.style.position = 'fixed';
            title.style.top = '3px';
            title.style.left = '155px';
            title.style.height = '100px';
            title.style.transform = 'translateX(0) scale(0.6)';
            title.style.cursor = 'pointer';
            title.style.color = '#fff';
        }
        else {
            logo.style.position = 'absolute';
            logo.style.top = '220px';
            logo.style.left = '50%';
            logo.style.transform = 'translateX(-50%) scale(1)';
            logo.style.height = '250px';
            title.style.position = 'absolute';
            title.style.top = '500px';
            title.style.left = '50%';
            title.style.height = '500px';
            title.style.transform = 'translateX(-50%) scale(1)';
            title.style.cursor = 'default';
            title.style.color = '#fff';
        }
    };
    window.addEventListener('scroll', handleScroll);
    // Inicializa el estado del logotipo
    handleScroll();
});
window.addEventListener('scroll', () => {
    const navbar = document.querySelector('.navbar');
    if (window.scrollY > 50) {
        navbar.classList.add('scrolled');
    }
    else {
        navbar.classList.remove('scrolled');
    }
});
window.addEventListener('beforeunload', () => {
    window.scrollTo(0, 0);
});
// Selecciona el botón y el ícono
const toggleButton = document.getElementById('toggle-theme');
const icon = toggleButton.querySelector('i');
// Verifica el estado inicial del tema
let darkMode = false;
// Función para actualizar el ícono
function updateIcon() {
    if (darkMode) {
        icon.className = 'fa-solid fa-moon'; // Cambia al ícono de luna
        icon.style.color = '#ffffff'; // Color del ícono en modo oscuro
    }
    else {
        icon.className = 'fa-solid fa-sun'; // Cambia al ícono de sol
        icon.style.color = '#ff9900'; // Color del ícono en modo claro
    }
}
// Función para alternar el modo
function toggleTheme() {
    darkMode = !darkMode;
    document.body.classList.toggle('dark-mode', darkMode);
    updateIcon();
}
// Añade el evento click al botón
if (toggleButton) {
    toggleButton.addEventListener('click', toggleTheme);
}
// Inicializa el ícono al cargar la página
updateIcon();
