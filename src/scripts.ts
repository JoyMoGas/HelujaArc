document.addEventListener("DOMContentLoaded", () => {
  window.scrollTo(0, 0);
  window.addEventListener("scroll", () =>{
  const logo = document.getElementById("logo") as HTMLImageElement;
  const title = document.getElementById("title") as HTMLElement;
  const subtitle = document.getElementById("subtitle") as HTMLElement;
  const logoTitle = document.getElementById("logo-title") as HTMLElement;

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
  } else {
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
  const navbar = document.querySelector('.navbar') as HTMLElement;
  if (window.scrollY > 50) {
    navbar.classList.add('scrolled');
  } else {
    navbar.classList.remove('scrolled');
  }
});

window.addEventListener('beforeunload', () => {
  window.scrollTo(0, 0);
});
/* 
document.addEventListener('DOMContentLoaded', () => {
  window.scrollTo(0, 0);
  const logo = document.getElementById('logo') as HTMLImageElement;
  const title = document.getElementById('title') as HTMLElement;
  const titleSpan = document.querySelector('#title span') as HTMLElement;

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
    } else {
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
  const navbar = document.querySelector('.navbar') as HTMLElement;
  if (window.scrollY > 50) {
    navbar.classList.add('scrolled');
  } else {
    navbar.classList.remove('scrolled');
  }
});

window.addEventListener('beforeunload', () => {
  window.scrollTo(0, 0);
});
*/
window.addEventListener('DOMContentLoaded', () => {
  const links = document.querySelectorAll<HTMLAnchorElement>('.navbar ul li a');
  const currentURL = window.location.pathname;

  links.forEach(link => {
    const href = link.getAttribute('href');
    if (href && currentURL === href) {
      link.parentElement?.classList.add('active');
    } else {
      link.parentElement?.classList.remove('active');  // Elimina la clase active en otros enlaces
    }
  });
});

document.addEventListener("DOMContentLoaded", function () {
  const sections = document.querySelectorAll("section");
  let animatedSections = new Set(); // Usamos un Set para almacenar las secciones animadas

  const fadeInOnScroll = () => {
      sections.forEach((section) => {
          const rect = section.getBoundingClientRect();
          if (rect.top < window.innerHeight && !animatedSections.has(section)) {
              // Si la sección está visible y no ha sido animada
              section.style.opacity = "1";
              section.style.transform = "translateY(0)";
              animatedSections.add(section); // Agregamos la sección al Set
          }
      });
  };

  window.addEventListener("scroll", fadeInOnScroll);
  fadeInOnScroll(); // Llamamos la función para verificar las secciones al cargar la página
});

const sections: NodeListOf<HTMLElement> = document.querySelectorAll('section');
const navLinks: NodeListOf<HTMLAnchorElement> = document.querySelectorAll('header nav a');

window.onscroll = () => {
    sections.forEach((sec: HTMLElement) => {
        const top: number = window.scrollY;
        const offset: number = sec.offsetTop - 150;
        const height: number = sec.offsetHeight;
        const id: string | null = sec.getAttribute('id');
        
        if (id && top >= offset && top < offset + height) {
            navLinks.forEach((link: HTMLAnchorElement) => {
                link.classList.remove('active');
                const activeLink: HTMLAnchorElement | null = document.querySelector(`header nav a[href*=${id}]`);
                if (activeLink) {
                    activeLink.classList.add('active');
                }
            });
        }
    });
};

// Selección de elementos
const contactLink = document.getElementById('contactLink') as HTMLAnchorElement | null;
const footerContactLink = document.getElementById('footerContactLink') as HTMLAnchorElement | null; // Enlace del footer
const contactForm = document.getElementById('contactForm') as HTMLElement | null;
const closeFormButton = document.getElementById('closeForm') as HTMLButtonElement | null;
const overlay = document.createElement('div'); // Crear el overlay dinámicamente

// Crear y configurar el overlay
overlay.id = 'overlay';
document.body.appendChild(overlay); // Agregar al DOM

// Función para mostrar el formulario y el overlay con animación
function showForm(): void {
    if (contactForm) {
        contactForm.classList.remove('hidden');
        contactForm.classList.add('visible');
    }
    overlay.classList.remove('inactive');
    overlay.classList.add('active'); // Mostrar el overlay con la animación
}

// Función para ocultar el formulario y el overlay con animación
function closeForm(): void {
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
