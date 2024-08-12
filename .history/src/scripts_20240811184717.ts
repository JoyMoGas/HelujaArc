document.addEventListener('DOMContentLoaded', () => {
    const logo = document.getElementById('logo') as HTMLImageElement;

    const handleScroll = () => {
        if (window.scrollY > 50) {
            logo.style.position = 'fixed';
            logo.style.top = '0px';
            logo.style.left = '120px';
            logo.style.height = '100px';
            logo.style.transform = 'translateX(0) scale(0.6)';
        } else {
            logo.style.position = 'absolute';
            logo.style.top = '110px';
            logo.style.left = '50%';
            logo.style.transform = 'translateX(-50%) scale(1)';
            logo.style.height = '300px';
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
