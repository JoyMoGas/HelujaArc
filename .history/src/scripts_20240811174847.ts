document.addEventListener('DOMContentLoaded', () => {
    const logo = document.getElementById('logo');

    // Detect scroll position on load to set initial logo position
    const handleInitialPosition = () => {
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

    // Function to handle scroll and animate logo
    let scrollTimeout;
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

        // Debounce logic to detect scroll interruption
        if (scrollTimeout) clearTimeout(scrollTimeout);
        scrollTimeout = setTimeout(() => {
            // When scroll stops, reset logo to appropriate position
            handleInitialPosition();
        }, 100); // Wait 100ms after scrolling stops
    };

    // Apply the handleScroll function during scrolling
    window.addEventListener('scroll', handleScroll);

    // Apply initial position logic on page load
    handleInitialPosition();
    
    // Handle navbar background change on scroll
    window.addEventListener('scroll', () => {
        const navbar = document.querySelector('.navbar');
        if (window.scrollY > 50) {
            navbar.classList.add('scrolled');
        } else {
            navbar.classList.remove('scrolled');
        }
    });
});
