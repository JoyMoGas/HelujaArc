document.addEventListener('DOMContentLoaded', () => {
    const logo = document.getElementById('logo') as HTMLImageElement;

    const handleScroll = () => {
        if (window.scrollY > 100) { // Ajusta el valor según el punto en el que quieras cambiar la posición
            logo.style.position = 'fixed';
            logo.style.top = '10px';
            logo.style.left = '20px'; // Ajusta según el espacio que necesites en la navbar
            logo.style.transform = 'scale(0.6)';
        } else {
            logo.style.position = 'absolute';
            logo.style.top = '20px';
            logo.style.left = '50%'; // Centra el logo horizontalmente en el body
            logo.style.transform = 'translateX(-50%) scale(1)';
            logo.style.height = '100px';
        }
    };

    window.addEventListener('scroll', handleScroll);
});
