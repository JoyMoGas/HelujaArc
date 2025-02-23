"use strict";
const toTopButton = document.querySelector('.btn-top');
const toSection = document.querySelector('.contenedor-flecha');
const toSectionIndex = document.querySelector('.contenedor-flecha-inicio');
const targetSection = document.getElementById('project-detail');
const targetSectionInicio = document.getElementById('first-section');
if (toSection) {
    toSection.addEventListener('click', (event) => {
        event.preventDefault(); // Evita que el enlace agregue #demoBox en la URL
        targetSection.scrollIntoView({ behavior: 'smooth' });
        targetSectionInicio.scrollIntoView({ behavior: 'smooth' });
        toTop();
    });
}
else {
    toTop();
}
function toTop() {
    window.addEventListener('scroll', () => {
        toTopButton.addEventListener('click', (event) => {
            event.preventDefault(); // Evita que el enlace agregue #demoBox en la URL
            window.scrollTo({ top: 0, behavior: 'smooth' }); // Hace scroll suave al inicio
        });
        if (window.scrollY >= 100) {
            toTopButton.classList.add('show');
        }
        else {
            toTopButton.classList.remove('show');
        }
    });
}
