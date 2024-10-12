"use strict";
// Selección de elementos
const contactLink = document.getElementById('contactLink');
const footerContactLink = document.getElementById('footerContactLink'); // Enlace del footer
const contactForm = document.getElementById('contactForm');
const closeFormButton = document.getElementById('closeForm');
const overlay = document.createElement('div'); // Crear el overlay dinámicamente
// Crear y configurar el overlay
overlay.id = 'overlay';
document.body.appendChild(overlay); // Agregar al DOM
// Función para mostrar el formulario y el overlay con animación
function showForm() {
    if (contactForm) {
        contactForm.classList.remove('hidden');
        contactForm.classList.add('visible');
    }
    overlay.classList.remove('inactive');
    overlay.classList.add('active'); // Mostrar el overlay con la animación
}
// Función para ocultar el formulario y el overlay con animación
function closeForm() {
    if (contactForm) {
        contactForm.classList.remove('visible');
        // Usar un timeout para esperar la transición de opacidad antes de ocultarlo
        setTimeout(() => {
            contactForm.classList.add('hidden');
        }, 500); // Ajustar el tiempo según la duración de la transición
    }
    overlay.classList.remove('active');
    // Usar un timeout para esperar la transición de opacidad antes de ocultarlo
    setTimeout(() => {
        overlay.classList.add('inactive'); // Ocultar overlay
    }, 500); // Ajustar el tiempo según la duración de la transición
}
// Agregar evento al enlace de la navbar
if (contactLink) {
    contactLink.addEventListener('click', (event) => {
        event.preventDefault(); // Prevenir el comportamiento por defecto
        showForm(); // Mostrar formulario
    });
}
// Agregar evento al enlace de correo electrónico en el footer
if (footerContactLink) {
    footerContactLink.addEventListener('click', (event) => {
        event.preventDefault(); // Prevenir el comportamiento por defecto
        showForm(); // Mostrar formulario
    });
}
// Agregar evento al botón de cierre
if (closeFormButton) {
    closeFormButton.addEventListener('click', closeForm);
}
// Manejar el clic en el overlay para cerrar el formulario
overlay.addEventListener('click', closeForm);
