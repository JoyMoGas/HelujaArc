"use strict";
const navbar = document.querySelector('.navbar');
const logo = document.getElementById("logo");
const logoTitle = document.getElementById("logo-title");
const logoNav = document.getElementById('logo-nav');
const logoTitleNav = document.getElementById('logo-title-nav');
const inicioLink = document.getElementById("inicio");
const proyectosLink = document.getElementById("proyectos");
const contactoLink = document.getElementById("contacto");
const poyectoDetallesLink = document.getElementById("project-link");
const mediaQueryList = window.matchMedia("(max-width: 480px)");
const mobileNav = document.querySelector(".hamburger");
const menuBar = document.querySelector(".menubar");
const slideOut = "slideOut 0.7s forwards ease-in-out";
const slideIn = "slideIn 0.7s forwards ease-in-out";
function scrollAnimation() {
    if (!logo || !logoTitle || !logoTitleNav || !logoNav)
        return;
    const scrolled = window.scrollY > 20;
    // Si la pantalla cumple el media query, ocultamos logoTitleNav SIEMPRE
    if (mediaQueryList.matches) {
        logoTitleNav.style.opacity = "0"; // Lo mantenemos invisible
        logoTitleNav.style.display = "none"; // Lo ocultamos
        // Animaciones de los otros elementos, sin afectar la visibilidad de logoNav y logo
        logoNav.style.left = "40px";
        logoNav.style.height = "35px";
        if (scrolled && mediaQueryList.matches) {
            navbar.style.padding = "25px";
            // Animación de salida para los elementos del body
            logo.style.animation = slideOut;
            logoTitle.style.animation = slideOut;
            timeToWaitFirst(); // Esperamos a que termine la animación antes de ocultarlos
        }
        else {
            // Animación de salida para los elementos de la navbar
            logoNav.style.animation = slideOut;
            logoTitleNav.style.animation = slideOut;
            timeToWaitSecond();
        }
    }
    else {
        if (scrolled) {
            // Animación de salida para los elementos del body
            logo.style.animation = slideOut;
            logoTitle.style.animation = slideOut;
            timeToWaitFirst();
        }
        else {
            // Animación de salida para los elementos de la navbar
            logoNav.style.animation = slideOut;
            logoTitleNav.style.animation = slideOut;
            timeToWaitSecond();
        }
    }
}
function timeToWaitFirst() {
    setTimeout(() => {
        logo.style.opacity = "0";
        logo.style.visibility = "hidden";
        logoTitle.style.opacity = "0";
        logoTitle.style.visibility = "hidden";
        // Mostrar los elementos de la navbar
        logoNav.style.opacity = "1";
        logoNav.style.visibility = "visible";
        logoTitleNav.style.opacity = "1";
        logoTitleNav.style.visibility = "visible";
        logoNav.style.animation = slideIn;
        logoTitleNav.style.animation = slideIn;
    }, 1000); // Esperamos a que termine la animación antes de ocultarlos
}
function timeToWaitSecond() {
    setTimeout(() => {
        logoNav.style.opacity = "0";
        logoNav.style.visibility = "hidden";
        logoTitleNav.style.opacity = "0";
        logoTitleNav.style.visibility = "hidden";
        // Mostrar los elementos del body
        logo.style.opacity = "1";
        logo.style.visibility = "visible";
        logoTitle.style.opacity = "1";
        logoTitle.style.visibility = "visible";
        logo.style.animation = slideIn;
        logoTitle.style.animation = slideIn;
    }, 1000);
}
function detectScroll() {
    window.addEventListener("scroll", () => {
        const scrolled = window.scrollY > 50;
        navbar.classList.toggle("scrolled", scrolled);
        if (window.scrollY === 0) {
            navbar.classList.remove("scrolled");
        }
        scrollAnimation();
        // ✅ Aplicar solo en /proyecto/
        if (window.location.pathname.includes("/proyecto/")) {
            if (scrolled) {
                logoNav.style.top = "5px"; // Se mueve hacia arriba suavemente
                logoTitleNav.style.top = "10px";
            }
            else {
                logoNav.style.top = "10px"; // Se mueve hacia abajo suavemente
                logoTitleNav.style.top = "15px";
            }
        }
    });
}
function checkLink() {
    const currentPath = window.location.pathname;
    inicioLink === null || inicioLink === void 0 ? void 0 : inicioLink.classList.toggle("home_navbar", currentPath === "/inicio");
    proyectosLink === null || proyectosLink === void 0 ? void 0 : proyectosLink.classList.toggle("home_navbar", currentPath === "/proyectos");
    contactoLink === null || contactoLink === void 0 ? void 0 : contactoLink.classList.toggle("home_navbar", currentPath === "/contacto");
    poyectoDetallesLink === null || poyectoDetallesLink === void 0 ? void 0 : poyectoDetallesLink.classList.toggle("home_navbar", currentPath.includes("/proyecto/"));
    if (currentPath === "/inicio" || currentPath === "/") {
        detectScroll();
        logoNav.style.visibility = "hidden";
        logoTitleNav.style.visibility = "hidden";
        logo.style.visibility = "visible";
        logoTitle.style.visibility = "visible";
        logoTitleNav.style.left = "215px";
    }
    else if (currentPath.includes("/proyecto/")) {
        detectScroll();
        proyectosLink.style.color = "#5DADE2";
        // Hacer que logoNav y logoTitleNav siempre sean visibles
        logoNav.style.visibility = "visible";
        logoTitleNav.style.visibility = "visible";
        logo.style.visibility = "hidden";
        logoTitle.style.visibility = "hidden";
        // Opcional: Asegurar posición
        logoNav.style.opacity = "1";
        logoTitleNav.style.opacity = "1";
        logoNav.style.animation = "none"; // Evita animaciones innecesarias
        logoTitleNav.style.animation = "none";
    }
    else if (currentPath === "/proyectos" || currentPath === "/contacto") {
        if (currentPath === "/proyectos") {
            logoNav.style.visibility = "visible";
            logoTitleNav.style.visibility = "visible";
            proyectosLink.style.color = "#5DADE2";
            if (mediaQueryList.matches) {
                navbar.style.padding = "25px";
                logoNav.style.height = "35px";
            }
        }
        else {
            navbar.classList.add('scrolled');
            navbar.style.backgroundColor = "#2c3e50e4";
            if (mediaQueryList.matches) {
                navbar.style.padding = "25px";
                logoNav.style.height = "35px";
            }
        }
        // Ensure navbar is always in scrolled state
        navbar.classList.add('scrolled');
        navbar.style.backgroundColor = "#2c3e50e4"; // Ensure background color is applied
        Object.assign(logoNav.style, {
            visibility: "visible",
            userSelect: "none",
            position: "fixed",
            top: "8px",
            left: "50px", // Adjusted position
            height: "45px",
            scale: "1",
            zIndex: "1000"
        });
        Object.assign(logoTitleNav.style, {
            visibility: "visible",
            userSelect: "none",
            position: "fixed",
            top: "13px",
            left: "175px",
            height: "35px",
            scale: "1",
            zIndex: "1000"
        });
        // Ensure navbar is solid and scrolled for responsive design
    }
}
checkLink();
window.addEventListener('beforeunload', () => window.scrollTo(0, 0));
document.addEventListener('DOMContentLoaded', () => {
    const links = document.querySelectorAll('.navbar a');
    const currentURL = window.location.pathname;
    links.forEach(link => {
        var _a;
        const href = link.getAttribute('href');
        (_a = link.parentElement) === null || _a === void 0 ? void 0 : _a.classList.toggle('active', href === currentURL);
    });
    const sections = document.querySelectorAll("section");
    const observer = new IntersectionObserver((entries) => {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                entry.target.classList.add("visible");
                observer.unobserve(entry.target);
            }
        });
    }, { threshold: 0.1 });
    sections.forEach(section => {
        section.classList.add("fade-in");
        observer.observe(section);
    });
    window.addEventListener("scroll", () => {
        var _a;
        if (window.location.pathname === "/inicio") {
            const scrolled = window.scrollY > 50;
            navbar.classList.toggle("scrolled", scrolled);
            (_a = document.querySelector(".nav_logo")) === null || _a === void 0 ? void 0 : _a.classList.toggle("scrolled", scrolled);
        }
        else {
            navbar.classList.add("scrolled");
        }
    });
    const hamburger = document.getElementById("hamburger");
    const menubar = document.querySelector(".menubar");
    hamburger.addEventListener("click", function () {
        menubar.classList.toggle("active");
        hamburger.classList.toggle("hamburger-active");
    });
});
