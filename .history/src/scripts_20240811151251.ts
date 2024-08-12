window.addEventListener('scroll', () => {
    const body = document.body;
    const scrollTop = window.scrollY || document.documentElement.scrollTop;

    if (scrollTop > 50) { // Ajusta el valor de scroll según sea necesario
        body.classList.add('scroll-active');
    } else {
        body.classList.remove('scroll-active');
    }
});
