"use strict";
const navbar = document.querySelector('.navbar');
const logo = document.getElementById("logo");
const logoTitle = document.getElementById("logo-title");
const logoNav = document.getElementById('logo-nav');
const logoTitleNav = document.getElementById('logo-title-nav');
const inicioLink = document.getElementById("inicio");
const proyectosLink = document.getElementById("proyectos");
const contactoLink = document.getElementById("contacto");
function scrollAnimation() {
    if (!logo || !logoTitle)
        return;
    const scrolled = window.scrollY > 20;
    if (scrolled) {
        logo.style.animation = "slideOut 1s forwards ease-in-out";
        logoTitle.style.animation = "slideOut 1s forwards ease-in-out";
        inicioLink.style.color = "#5DADE2";
        setTimeout(() => {
            logoNav.style.visibility = "visible";
            logoTitleNav.style.visibility = "visible";
            logoNav.style.animation = "slideIn 1s forwards ease-in-out";
            logoTitleNav.style.animation = "slideIn 1s forwards ease-in-out";
        }, 500);
    }
    else {
        inicioLink.style.color = "#ECF0F1";
        setTimeout(() => {
            logoNav.style.animation = "slideOut 1s forwards ease-in-out";
            logoTitleNav.style.animation = "slideOut 1s forwards ease-in-out";
            logo.style.animation = "slideIn 1s forwards ease-in-out";
            logoTitle.style.animation = "slideIn 1s forwards ease-in-out";
        }, 500);
    }
}
function detectScroll() {
    window.addEventListener('scroll', () => {
        scrollAnimation();
        navbar.classList.toggle('scrolled', window.scrollY > 50);
    });
}
function checkLink() {
    const currentPath = window.location.pathname;
    const currentUrl = window.location.href;
    const keyword = '/proyecto/';
    inicioLink === null || inicioLink === void 0 ? void 0 : inicioLink.classList.toggle("home_navbar", currentPath === "/inicio");
    proyectosLink === null || proyectosLink === void 0 ? void 0 : proyectosLink.classList.toggle("home_navbar", currentPath === "/proyectos");
    contactoLink === null || contactoLink === void 0 ? void 0 : contactoLink.classList.toggle("home_navbar", currentPath !== "/inicio" && currentPath !== "/proyectos");
    if (currentPath === "/inicio" || (currentPath != "/proyectos" && currentPath != "/contacto")) {
        detectScroll();
        logoNav.style.visibility = "hidden";
        logoTitleNav.style.visibility = "hidden";
        logo.style.visibility = "visible";
        logoTitle.style.visibility = "visible";
        logoTitleNav.style.left = "215px";
        // Aplica la animación fadeIn solo en /proyectos y /contacto
    }
    else if (currentPath === "/proyectos" || currentPath === "/contacto") {
        if (currentPath === "/proyectos") {
            logoNav.style.visibility = "visible";
            logoTitleNav.style.visibility = "visible";
            proyectosLink.style.color = "#5DADE2";
        }
        else {
            contactoLink.style.color = "#5DADE2";
        }
        navbar.classList.add('scrolled');
        // Asegura que el logo esté visible en cualquier página que no sea /inicio
        Object.assign(logo.style, {
            visibility: "visible",
            userSelect: "none",
            position: "fixed",
            top: "8px",
            left: "116px",
            height: "45px",
            scale: "1",
            zIndex: "1000"
        });
        Object.assign(logoTitle.style, {
            visibility: "visible",
            userSelect: "none",
            position: "fixed",
            top: "13px",
            left: "175px",
            height: "35px",
            scale: "1",
            zIndex: "1000"
        });
    }
    if (currentPath.includes(keyword)) {
        console.log("HOLA");
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
            const scrolled = window.scrollY > 20;
            navbar.classList.toggle("scrolled", scrolled);
            (_a = document.querySelector(".nav_logo")) === null || _a === void 0 ? void 0 : _a.classList.toggle("scrolled", scrolled);
        }
        else {
            navbar.classList.add("scrolled");
        }
    });
});
