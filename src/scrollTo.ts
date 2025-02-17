document.addEventListener("DOMContentLoaded", () => {
  const flecha = document.querySelector(".contenedor-flecha") as HTMLAnchorElement;
  const seccionDestino = document.getElementById("seccion-destino");

  if (flecha && seccionDestino) {
    flecha.addEventListener("click", (event) => {
      event.preventDefault(); // Evita el scroll automático del navegador

      const extraOffset = 100; // Ajusta este valor para cambiar el espacio extra
      const offsetTop = seccionDestino.getBoundingClientRect().top + window.scrollY + extraOffset;

      window.scrollTo({
        top: offsetTop,
        behavior: "smooth"
      });
    });
  }
});
