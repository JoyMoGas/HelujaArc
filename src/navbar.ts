const navbar = document.querySelector('.navbar') as HTMLElement;
const logo = document.getElementById("logo") as HTMLElement;
const logoTitle = document.getElementById("logo-title") as HTMLElement;
const logoNav = document.getElementById('logo-nav') as HTMLElement;
const logoTitleNav = document.getElementById('logo-title-nav') as HTMLElement;
const inicioLink = document.getElementById("inicio") as HTMLElement;
const proyectosLink = document.getElementById("proyectos") as HTMLElement;
const contactoLink = document.getElementById("contacto") as HTMLElement;
const poyectoDetallesLink = document.getElementById("project-link") as HTMLElement;
const mediaQueryList: MediaQueryList = window.matchMedia("(max-width: 480px)");

function scrollAnimation() {
  if (!logo || !logoTitle || !logoTitleNav || !logoNav) return;

  const scrolled = window.scrollY > 20;

  // Si la pantalla cumple el media query, ocultamos logoTitleNav SIEMPRE
  if (mediaQueryList.matches) {
    logoTitleNav.style.opacity = "0"; // Lo mantenemos invisible
    logoTitleNav.style.visibility = "hidden"; // Lo ocultamos
    // Animaciones de los otros elementos, sin afectar la visibilidad de logoNav y logo
    logoNav.style.transform = "translateX(-100px)";
    if (scrolled) {
      // Animación de salida para los elementos del body
      logo.style.animation = "slideOut 0.7s forwards ease-in-out";
      logoTitle.style.animation = "slideOut 0.7s forwards ease-in-out";

      setTimeout(() => {
        logo.style.opacity = "0";
        logo.style.visibility = "hidden";
        logoTitle.style.opacity = "0";
        logoTitle.style.visibility = "hidden";

        // Mostrar los elementos de la navbar
        logoNav.style.opacity = "1";
        logoNav.style.visibility = "visible";
        logoNav.style.animation = "slideIn 0.7s forwards ease-in-out";

        // Aquí mantenemos la animación de logoNav, que seguirá animándose
        logoNav.style.animation = "slideIn 0.7s forwards ease-in-out";
      }, 1000); // Esperamos a que termine la animación antes de ocultarlos
    } else {
      // Animación de salida para los elementos de la navbar
      logoNav.style.animation = "slideOut 0.7s forwards ease-in-out";
      logoTitleNav.style.animation = "slideOut 0.7s forwards ease-in-out";

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

        logo.style.animation = "slideIn 0.7s forwards ease-in-out";
        logoTitle.style.animation = "slideIn 0.7s forwards ease-in-out";
      }, 1000);
    }
  } else {
    if (scrolled) {
      // Animación de salida para los elementos del body
      logo.style.animation = "slideOut 0.7s forwards ease-in-out";
      logoTitle.style.animation = "slideOut 0.7s forwards ease-in-out";

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

        logoNav.style.animation = "slideIn 0.7s forwards ease-in-out";
        logoTitleNav.style.animation = "slideIn 0.7s forwards ease-in-out";
      }, 1000); // Esperamos a que termine la animación antes de ocultarlos
    } else {
      // Animación de salida para los elementos de la navbar
      logoNav.style.animation = "slideOut 0.7s forwards ease-in-out";
      logoTitleNav.style.animation = "slideOut 0.7s forwards ease-in-out";

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

        logo.style.animation = "slideIn 0.7s forwards ease-in-out";
        logoTitle.style.animation = "slideIn 0.7s forwards ease-in-out";
      }, 1000);
    }
  }
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
        logoNav.style.top = "5px";  // Se mueve hacia arriba suavemente
        logoTitleNav.style.top = "10px";
      } else {
        logoNav.style.top = "10px";  // Se mueve hacia abajo suavemente
        logoTitleNav.style.top = "15px";
      }
    }
  });
}




function checkLink() {
  const currentPath = window.location.pathname;

  inicioLink?.classList.toggle("home_navbar", currentPath === "/inicio");
  proyectosLink?.classList.toggle("home_navbar", currentPath === "/proyectos");
  contactoLink?.classList.toggle("home_navbar", currentPath === "/contacto");
  poyectoDetallesLink?.classList.toggle("home_navbar", currentPath.includes("/proyecto/"));

  if (currentPath === "/inicio" || currentPath === "/") {
    detectScroll();
    logoNav.style.visibility = "hidden";
    logoTitleNav.style.visibility = "hidden";
    logo.style.visibility = "visible";
    logoTitle.style.visibility = "visible";
    logoTitleNav.style.left = "215px";
  } else if (currentPath.includes("/proyecto/")) {
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
    logoNav.style.animation = "none";  // Evita animaciones innecesarias
    logoTitleNav.style.animation = "none";
  } else if (currentPath === "/proyectos" || currentPath === "/contacto") {
    if (currentPath === "/proyectos") {
      logoNav.style.visibility = "visible";
      logoTitleNav.style.visibility = "visible";
      proyectosLink.style.color = "#5DADE2";
    } else {
      contactoLink.style.color = "#5DADE2";
    }

    navbar.classList.add('scrolled');

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


window.addEventListener('beforeunload', () => window.scrollTo(0, 0));

document.addEventListener('DOMContentLoaded', () => {
  const links = document.querySelectorAll<HTMLAnchorElement>('.navbar a');
  const currentURL = window.location.pathname;

  links.forEach(link => {
    const href = link.getAttribute('href');
    link.parentElement?.classList.toggle('active', href === currentURL);
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
    if (window.location.pathname === "/inicio") {
      const scrolled = window.scrollY > 50;
      navbar.classList.toggle("scrolled", scrolled);
      document.querySelector(".nav_logo")?.classList.toggle("scrolled", scrolled);
    } else {
      navbar.classList.add("scrolled");
    }
  });
});