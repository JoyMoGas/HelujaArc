const logo = document.querySelector('#logo') as HTMLImageElement;
const navbar = document.querySelector('#navbar') as HTMLElement;
const body = document.querySelector('body') as HTMLElement;

// Función para manejar el scroll y la animación del logotipo
const handleScroll = () => {
  const scrollPosition = window.scrollY;
  const navbarHeight = navbar.offsetHeight;

  if (scrollPosition > navbarHeight) {
    logo.classList.add('fixed');
  } else {
    logo.classList.remove('fixed');
  }
};

// Función para establecer la posición inicial del logotipo según la posición de scroll
const setInitialLogoPosition = () => {
  const scrollPosition = window.scrollY;
  const navbarHeight = navbar.offsetHeight;

  if (scrollPosition > navbarHeight) {
    logo.classList.add('fixed');
  } else {
    logo.classList.remove('fixed');
  }
};

// Añadir evento de scroll
window.addEventListener('scroll', handleScroll);

// Establecer la posición inicial del logotipo al cargar la página
window.addEventListener('load', setInitialLogoPosition);
