"use strict";
const navbar = document.querySelector('.navbar');
const logo = document.getElementById("logo");
const logoTitle = document.getElementById("logo-title");
const logoNav = document.getElementById('logo-nav');
const logoTitleNav = document.getElementById('logo-title-nav');
function scrollAnimation() {
    if (logo && logoTitle) {
        if (window.scrollY > 50) {
            // Si el usuario hace scroll hacia abajo, activar slideOut
            logo.style.animation = "slideOut 1s forwards ease-in-out";
            logoTitle.style.animation = "slideOut 1s forwards ease-in-out";
            setTimeout(() => {
                logoNav.style.visibility = "visible";
                logoTitleNav.style.visibility = "visible";
                logoNav.style.animation = "slideIn 1s forwards ease-in-out";
                logoTitleNav.style.animation = "slideIn 1s forwards ease-in-out";
            }, 500);
        }
        else {
            setTimeout(() => {
                // Si el usuario regresa al top, activar slideIn
                logoNav.style.animation = "slideOut 1s forwards ease-in-out";
                logoTitleNav.style.animation = "slideOut 1s forwards ease-in-out";
                logo.style.animation = "slideIn 1s forwards ease-in-out";
                logoTitle.style.animation = "slideIn 1s forwards ease-in-out";
            }, 500);
        }
    }
}
function detectScroll() {
    window.addEventListener('scroll', () => {
        // Llamamos a la función para manejar las animaciones
        scrollAnimation();
        if (window.scrollY > 50) {
            navbar.classList.add('scrolled');
        }
        else {
            navbar.classList.remove('scrolled');
        }
    });
}
function checkLink() {
    // Obtener la ruta actual
    const currentPath = window.location.pathname;
    const inicioLink = document.getElementById("inicio");
    const proyectosLink = document.getElementById("proyectos");
    const contactoLink = document.getElementById("contacto");
    // Comprobar si la ruta contiene "/inicio"
    if (currentPath === "/inicio") {
        detectScroll();
        // Si estamos en /inicio, agregar la clase solo al enlace de inicio
        inicioLink.classList.add("home_navbar");
        proyectosLink.classList.remove("home_navbar");
        contactoLink.classList.remove("home_navbar");
        logo.style.visibility = "visible";
        logoTitle.style.visibility = "visible";
    }
    else if (currentPath === "/proyectos") {
        navbar.classList.add('scrolled');
        inicioLink.classList.remove("home_navbar");
        proyectosLink.classList.add("home_navbar");
        contactoLink.classList.remove("home_navbar");
        // Aplicar estilos con Object.assign()
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
    else {
        navbar.classList.add('scrolled');
        inicioLink.classList.remove("home_navbar");
        proyectosLink.classList.remove("home_navbar");
        contactoLink.classList.add("home_navbar");
        // Aplicar estilos a los logos
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
}
checkLink();
window.addEventListener('beforeunload', () => {
    window.scrollTo(0, 0);
});
window.addEventListener('DOMContentLoaded', () => {
    const links = document.querySelectorAll('.navbar a');
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
// Detectar secciones visibles y añadir clase 'visible'
document.addEventListener("DOMContentLoaded", function () {
    const sections = document.querySelectorAll("section");
    const options = { threshold: 0.1 };
    const observer = new IntersectionObserver((entries, observer) => {
        entries.forEach((entry) => {
            if (entry.isIntersecting) {
                entry.target.classList.add("visible");
                observer.unobserve(entry.target);
            }
        });
    }, options);
    sections.forEach((section) => {
        section.classList.add("fade-in");
        observer.observe(section);
    });
});
// Evento de scroll adicional para navbar
document.addEventListener("DOMContentLoaded", () => {
    const navbar = document.querySelector(".navbar");
    const nav_logo = document.querySelector(".nav_logo");
    if (navbar) {
        window.addEventListener("scroll", () => {
            const scrollY = window.scrollY;
            if (scrollY > 50) {
                navbar.classList.add("scrolled");
                nav_logo.classList.add("scrolled");
            }
            else {
                navbar.classList.remove("scrolled");
                nav_logo.classList.remove("scrolled");
            }
        });
    }
});
/*
// Getting DOM elements
const toggle = document.getElementById('_toggle') as HTMLElement;
const navItems = document.getElementById('_items') as HTMLElement;
const navbar = document.querySelector('navbar') as HTMLElement;

// Open/Close the menu function
toggle.onclick = () => {
    const isOpen = navItems.classList.toggle("open");
    toggle.classList.toggle("close");

    if (isOpen){
      navbar.style.backgroundColor = 'rgba(27, 38, 59, 0.9)';
      navbar.style.boxShadow = 'none';
      navItems.style.backgroundColor = 'rgba(27, 38, 59, 0.9)';
      toggle.style.backgroundColor = 'rgba(27, 38, 59, 0.9)';
    } else {
      navbar.style.backgroundColor = 'transparent0;';
      navbar.style.boxShadow = '0 4px 8px rgba(0, 0, 0, 0.2)';
      navItems.style.backgroundColor = '';
      toggle.style.backgroundColor = '';
    }
};

// Smooth scrolling function
const smoothScroll = (event: MouseEvent): void => {
    const target = (event.currentTarget as HTMLAnchorElement).hash;
    const targetElement = document.querySelector(target) as HTMLElement; // Select the destination element

    // Check if the destination alement exist
    if (targetElement) {
        event.preventDefault();

        // Item smooth scrolling
        targetElement.scrollIntoView({
            behavior: 'smooth',
            block: 'start' // Align the element to top of the view
        });

        // Focus element after scrolling
        targetElement.setAttribute('tabindex', '-1');
        targetElement.focus();
    }
};

// Select add links that have a hash
const linksWithHashes = document.querySelectorAll('a[href*="#"]');

// Iterate over each link and add a click event
linksWithHashes.forEach(link => {
    // Check if LINK is an HTMLAnchorElement
    const anchor = link as HTMLAnchorElement;

    // Exclude links that point to nothing
    if (anchor.getAttribute('href') !== '#' && anchor.getAttribute('href') !== '#0') {
        anchor.addEventListener('click', (event) => {
            // Check if the link points to the same page
            if (
                location.pathname.replace(/^\//, '') === anchor.pathname.replace(/^\//, '') &&
                location.hostname === anchor.hostname
            ) {
                smoothScroll(event as MouseEvent); // Call to smooth scroll function
            }
        });
    }
});

document.addEventListener("DOMContentLoaded", function () {
    const sections = document.querySelectorAll("section");
  
    const options = {
      threshold: 0.1, // Defines how much of the section should be visible before activating it
    };
  
    const observer = new IntersectionObserver((entries, observer) => {
      entries.forEach((entry) => {
        if (entry.isIntersecting) {
          entry.target.classList.add("visible");
          observer.unobserve(entry.target); // Stop looking at the section once it is visible
        }
      });
    }, options);
  
    sections.forEach((section) => {
      section.classList.add("fade-in"); // Add Fade In class to each section
      observer.observe(section); // Look each section
    });
  });

  document.addEventListener("DOMContentLoaded", () => {
    const navbar = document.querySelector(".navbar") as  HTMLElement;
    const nav_logo = document.querySelector(".nav_logo") as HTMLElement;
  
    if (navbar) {
      window.addEventListener("scroll", () => {
        const scrollY = window.scrollY;
        if (scrollY > 50) {
          navbar.classList.add("scrolled");
          nav_logo.classList.add("scrolled")
        } else {
          navbar.classList.remove("scrolled");
          nav_logo.classList.remove("scrolled")
        }
      });
    }
  });
  
*/
