document.addEventListener('DOMContentLoaded', () => {
    const logo = document.getElementById('logo') as HTMLImageElement;

    const handleScroll = () => {
        if (window.scrollY > 50) {
            logo.style.position = 'fixed';
            logo.style.top = '0'; 
            logo.style.left = '120px'; 
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

    // Verificar la posición de desplazamiento al cargar la página
    if (window.scrollY > 50) {
        logo.style.position = 'fixed';
        logo.style.top = '0';
        logo.style.left = '120px';
        logo.style.height = '100px';
        logo.style.transform = 'scale(0.6)';
    }

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
