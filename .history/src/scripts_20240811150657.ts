const myListener = document.addEventListener('scroll', function() {
    const bodyLogo = document.getElementById('body-logo') as HTMLElement;
    const navbarLogo = document.getElementById('navbar-logo') as HTMLElement;
    const scrollPosition = window.scrollY;

    if (scrollPosition > 100) { // Cambia 100 por la cantidad de scroll que desees
        bodyLogo.style.opacity = '0';
        setTimeout(() =>{
            bodyLogo.style.display = 'none';
            navbarLogo.style.display = 'block';
            setTimeout(() => {
                navbarLogo.style.opacity = '1';
            }, 50);
        }, 500);
    } else {
        navbarLogo.style.opacity = '0';  // Hacer que el logo en la navbar se desvanezca
        setTimeout(() => {
            navbarLogo.style.display = 'none';
            bodyLogo.style.display = 'block';
            setTimeout(() => {
                bodyLogo.style.opacity = '1';  // Hacer que el logo en el body aparezca
            }, 50);  // Pequeño retraso para permitir que el logo se muestre antes de cambiar la opacidad
        }, 500);
    }
});