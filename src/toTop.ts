const toTopButton = document.querySelector('.btn-top') as HTMLElement;
const toSection = document.querySelector('.contenedor-flecha') as HTMLElement;
const toSectionIndex = document.querySelector('.contenedor-flecha-inicio') as HTMLElement;
const targetSection = document.getElementById('project-detail') as HTMLElement;
const targetSectionInicio = document.getElementById('first-section') as HTMLElement;

if (toSectionIndex && toSection) {
  toSection.addEventListener('click', (event) => {
  event.preventDefault(); // Evita que el enlace agregue #demoBox en la URL
  targetSection.scrollIntoView({ behavior: 'smooth' });
  targetSectionInicio.scrollIntoView({ behavior: 'smooth' });
  toTop();
});
} else {
  toTop();
}

function toTop () {
  window.addEventListener('scroll', () => { 
    toTopButton.addEventListener('click', (event) => {
      event.preventDefault(); // Evita que el enlace agregue #demoBox en la URL
      window.scrollTo({ top: 0, behavior: 'smooth' }); // Hace scroll suave al inicio
    });
    if (window.scrollY >= 100) {
      toTopButton.classList.add('show');
    } else {
      toTopButton.classList.remove('show');
    }
  });
}