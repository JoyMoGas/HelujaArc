document.addEventListener('DOMContentLoaded', () => {
    const logo = document.getElementById('logo') as HTMLImageElement;

    const handleScroll = () => {
        if (window.scrollY > 100) { // Ajusta el valor según el punto en el que quieras cambiar la posición
            logo.style.position = 'fixed';
            logo.style.top = '3px';
            logo.style.left = '20px';
            logo.style.height = '60px'; // Ajustado para coincidir con el tamaño en la navbar
            logo.style.transform = 'scale(0.8)';
        } else {
            logo.style.position = 'absolute';
            logo.style.top = '20px';
            logo.style.left = '20px';
            logo.style.height = '100px';
            logo.style.transform = 'scale(1)';
        }
    };

    window.addEventListener('scroll', handleScroll);
});
