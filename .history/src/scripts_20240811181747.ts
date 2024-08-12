document.addEventListener('DOMContentLoaded', () => {
    // Forzar que la página comience en la parte superior al cargarla
    window.scrollTo(0, 0);

    const logo = document.getElementById('logo') as HTMLImageElement;

    const handleScroll = () => {
        if (window.scrollY > 50) {
            logo.style.position = 'fixed';
            logo.style.top = '0';
            logo.style.left = '8%';
            logo.style.height = '100px';
            logo.style.transform = 'scale(0.6)';
        } else {
            logo.style.position = 'absolute';
            logo.style.top = '110px';
            logo.style.left = '50%';
            logo.style.transform = 'translateX(-50%) scale(1)';
            logo.style.height = '300px';
        }
    };

    window.addEventListener('scroll', handleScroll);

    // Cambia el fondo de la navbar al hacer scroll
    const navbar = document.querySelector('.navbar') as HTMLElement;
    window.addEventListener('scroll', () => {
        if (window.scrollY > 50) {
            navbar.classList.add('scrolled');
        } else {
            navbar.classList.remove('scrolled');
        }
    });
});
