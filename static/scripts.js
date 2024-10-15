"use strict";
document.addEventListener("DOMContentLoaded", () => {
    window.scrollTo(0, 0);
    window.addEventListener("scroll", () => {
        const logo = document.getElementById("logo");
        const title = document.getElementById("title");
        const subtitle = document.getElementById("subtitle");
        const logoTitle = document.getElementById("logo-title");
        const scrollPosition = window.scrollY;
        if (scrollPosition > 50) {
            logo.style.position = "fixed";
            logo.style.top = "8px";
            logo.style.left = "140px";
            logo.style.height = "45px";
            logo.style.transform = "scale(0.6)";
            logoTitle.style.position = "fixed";
            logoTitle.style.top = "13px";
            logoTitle.style.left = "240px";
            logoTitle.style.height = "35px";
            logoTitle.style.transform = "scale(0.5)";
        }
        else {
            logo.style.position = "absolute";
            logo.style.top = "110px";
            logo.style.left = "50%";
            logo.style.height = "250px";
            logo.style.transform = "translateX(-50%) scale(1)";
            logoTitle.style.position = "absolute";
            logoTitle.style.top = "380px";
            logoTitle.style.left = "50%";
            logoTitle.style.height = "85px";
            logoTitle.style.transform = "translateX(-50%) scale(1)";
        }
    });
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
window.addEventListener('DOMContentLoaded', () => {
    const links = document.querySelectorAll('.navbar ul li a');
    const currentURL = window.location.pathname;
    links.forEach(link => {
        var _a, _b;
        const href = link.getAttribute('href');
        if (href && currentURL === href) {
            (_a = link.parentElement) === null || _a === void 0 ? void 0 : _a.classList.add('active');
        }
        else {
            (_b = link.parentElement) === null || _b === void 0 ? void 0 : _b.classList.remove('active'); // Elimina la clase active en otros enlaces
        }
    });
});
const sections = document.querySelectorAll('section');
const navLinks = document.querySelectorAll('header nav a');
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
