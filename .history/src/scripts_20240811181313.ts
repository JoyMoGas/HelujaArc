document.addEventListener('DOMContentLoaded', () => {
    // Forzar que la página comience en la parte superior al cargarla
    window.scrollTo(0, 0);

    const demoBox = document.getElementById('demoBox') as HTMLElement;

    const handleScroll = () => {
        if (window.scrollY > 50) {
            demoBox.style.backgroundPosition = 'center, 8% 0';
            demoBox.style.backgroundSize = 'cover, 100px';
        } else {
            demoBox.style.backgroundPosition = 'center, center 110px';
            demoBox.style.backgroundSize = 'cover, 300px';
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

// Escuchar el evento 'beforeunload' para forzar que la página se reinicie en la parte superior
window.addEventListener('beforeunload', () => {
    window.scrollTo(0, 0);
});
