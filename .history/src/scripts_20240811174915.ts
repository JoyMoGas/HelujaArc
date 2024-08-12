document.addEventListener('DOMContentLoaded', () => {
    const logo = document.getElementById('logo') as HTMLImageElement;
    let isAnimating = false;
    let animationFrame: number;

    const handleScroll = () => {
        const scrollY = window.scrollY;
        
        if (scrollY > 50) {
            if (!isAnimating) {
                startAnimationToNavbar();
            }
        } else {
            if (!isAnimating) {
                startAnimationToBody();
            }
        }
    };

    const startAnimationToNavbar = () => {
        isAnimating = true;
        cancelAnimationFrame(animationFrame);

        logo.style.position = 'fixed';
        logo.style.top = '0';
        logo.style.left = '120px';
        logo.style.height = '100px';
        logo.style.transform = 'scale(0.6)';
        
        animationFrame = requestAnimationFrame(() => {
            isAnimating = false;
        });
    };

    const startAnimationToBody = () => {
        isAnimating = true;
        cancelAnimationFrame(animationFrame);

        logo.style.position = 'absolute';
        logo.style.top = '110px';
        logo.style.left = '50%';
        logo.style.transform = 'translateX(-50%) scale(1)';
        logo.style.height = '300px';

        animationFrame = requestAnimationFrame(() => {
            isAnimating = false;
        });
    };

    // Mantener el logo en la navbar si la página se reinicia a media página
    const checkInitialScrollPosition = () => {
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

    window.addEventListener('scroll', handleScroll);
    checkInitialScrollPosition();
});

window.addEventListener('scroll', () => {
    const navbar = document.querySelector('.navbar') as HTMLElement;
    if (window.scrollY > 50) {
        navbar.classList.add('scrolled');
    } else {
        navbar.classList.remove('scrolled');
    }
});
