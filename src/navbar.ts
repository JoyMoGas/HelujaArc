const navbar = document.querySelector('.navbar') as HTMLElement;
const logo = document.getElementById("logo") as HTMLElement;
const logoTitle = document.getElementById("logo-title") as HTMLElement;
const logoNav = document.getElementById('logo-nav') as HTMLElement;
const logoTitleNav = document.getElementById('logo-title-nav') as HTMLElement;
const inicioLink = document.getElementById("inicio") as HTMLElement;
const proyectosLink = document.getElementById("proyectos") as HTMLElement;
const contactoLink = document.getElementById("contacto") as HTMLElement;
const poyectoDetallesLink = document.getElementById("project-link") as HTMLElement;

function scrollAnimation() {
  if (!logo || !logoTitle) return;

  const scrolled = window.scrollY > 50;

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
  } else {
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

  if (currentPath === "/inicio") {
    detectScroll();
    logoNav.style.visibility = "hidden";
    logoTitleNav.style.visibility = "hidden";
    logo.style.visibility = "visible";
    logoTitle.style.visibility = "visible";
    logoTitleNav.style.left = "215px";
  } else if (currentPath.includes("/proyecto/")) {
    detectScroll();
    
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
      const scrolled = window.scrollY > 20;
      navbar.classList.toggle("scrolled", scrolled);
      document.querySelector(".nav_logo")?.classList.toggle("scrolled", scrolled);
    } else {
      navbar.classList.add("scrolled");
    }
  });
});
