document.addEventListener('DOMContentLoaded', () => {
    const logo = document.getElementById('logo') as HTMLImageElement;

    const handleScroll = () => {
        if (window.scrollY > 50) { // Ajusta el valor según el punto en el que quieras cambiar la posición
            logo.style.position = 'fixed';
            logo.style.top = '0px'; // Ajusta según el espacio necesario en la navbar
            logo.style.left = '120px'; // Ajusta según el espacio necesario en la navbar
            logo.style.height = '90px'; // Ajustado para coincidir con el tamaño en la navbar
            logo.style.transform = 'scale(0.6)'; // Ajusta el tamaño si es necesario
        } else {
            logo.style.position = 'absolute';
            logo.style.top = '110px';
            logo.style.left = '50%'; // Centra el logo horizontalmente en el body
            logo.style.transform = 'translateX(-50%) scale(1)';
            logo.style.height = '300px';
        }
    };

    window.addEventListener('scroll', handleScroll);
});

window.addEventListener('scroll', () => {
    const navbar = document.querySelector('.navbar') as HTMLElement;
    if (window.scrollY > 50) {
        navbar.classList.add('scrolled');
    } else {
        navbar.classList.remove('scrolled');
    }
});

