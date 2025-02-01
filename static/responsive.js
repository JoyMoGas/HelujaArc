"use strict";
// Verify screen size function
function checkScreenSize() {
    if (window.matchMedia("(min-width: 1440px)").matches) {
        document.addEventListener("DOMContentLoaded", () => {
            window.scrollTo(0, 0);
        });
    }
    else if (window.matchMedia("(max-width: 768px)").matches) {
        console.log("Estás en una pantalla entre 480px y 768px");
        document.body.style.backgroundColor = "white"; // Cambia otro estilo
    }
    else {
        console.log("Estás en una pantalla más grande de 768px");
        document.body.style.backgroundColor = "lightblue"; // Otra acción
    }
}
// Ejecutar la función al cargar la página
checkScreenSize();
// Detectar cambios en el tamaño de la ventana
window.addEventListener("resize", checkScreenSize);
