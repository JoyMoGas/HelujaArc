document.addEventListener('DOMContentLoaded', function() {
    const navbar = document.querySelector('.navbar');
    const logo = document.getElementById('logo');

    function onScroll() {
        if (window.scrollY > 50) {
            navbar.classList.add('scrolled');
            logo.style.top = '10px';
            logo.style.left = '20px';
            logo.style.height = '50px';
        } else {
            navbar.classList.remove('scrolled');
            logo.style.top = '110px';
            logo.style.left = '50%';
            logo.style.transform = 'translateX(-50%)';
            logo.style.height = '300px';
        }
    }

    window.addEventListener('scroll', onScroll);
    onScroll(); // Check on load to handle initial state
});
