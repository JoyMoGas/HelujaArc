document.addEventListener("DOMContentLoaded", () => {
  window.scrollTo(0, 0);
  window.addEventListener("scroll", () =>{
  const logo = document.getElementById("logo") as HTMLImageElement;
  const title = document.getElementById("title") as HTMLElement;
  const subtitle = document.getElementById("subtitle") as HTMLElement;
  const logoTitle = document.getElementById("logo-title") as HTMLElement;

  const scrollPosition = window.scrollY;

  if (scrollPosition > 50) {
    logo.style.position = "fixed";
    logo.style.top = "8px";
    logo.style.left = "140px";
    logo.style.height = "45px";
    logo.style.transform = "scale(0.6)";

    logoTitle.style.position = "fixed";
    logoTitle.style.top = "13px";
    logoTitle.style.left = "240px";
    logoTitle.style.height = "35px";
    logoTitle.style.transform = "scale(0.5)";
  } else {
    logo.style.position = "absolute";
    logo.style.top = "110px";
    logo.style.left = "50%";
    logo.style.height = "250px";
    logo.style.transform = "translateX(-50%) scale(1)";

    logoTitle.style.position = "absolute";
    logoTitle.style.top = "380px";
    logoTitle.style.left = "50%";
    logoTitle.style.height = "85px";
    logoTitle.style.transform = "translateX(-50%) scale(1)";

  }
  });
});

window.addEventListener('scroll', () => {
  const navbar = document.querySelector('.navbar') as HTMLElement;
  if (window.scrollY > 50) {
    navbar.classList.add('scrolled');
  } else {
    navbar.classList.remove('scrolled');
  }
});

window.addEventListener('beforeunload', () => {
  window.scrollTo(0, 0);
});
/* 
document.addEventListener('DOMContentLoaded', () => {
  window.scrollTo(0, 0);
  const logo = document.getElementById('logo') as HTMLImageElement;
  const title = document.getElementById('title') as HTMLElement;
  const titleSpan = document.querySelector('#title span') as HTMLElement;

  const handleScroll = () => {
    if (window.scrollY > 100) {
      logo.style.position = 'fixed';
      logo.style.top = '-12px';
      logo.style.left = '90px';
      logo.style.height = '100px';
      logo.style.transform = 'translateX(0) scale(0.6)';

      title.style.position = 'fixed';
      title.style.top = '3px';
      title.style.left = '155px';
      title.style.height = '100px';
      title.style.transform = 'translateX(0) scale(0.6)';
      title.style.cursor = 'pointer';
      title.style.color = '#fff';
    } else {
      logo.style.position = 'absolute';
      logo.style.top = '220px';
      logo.style.left = '50%';
      logo.style.transform = 'translateX(-50%) scale(1)';
      logo.style.height = '250px';

      title.style.position = 'absolute';
      title.style.top = '500px';
      title.style.left = '50%';
      title.style.height = '500px';
      title.style.transform = 'translateX(-50%) scale(1)';
      title.style.cursor = 'default';
      title.style.color = '#fff';
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

window.addEventListener('beforeunload', () => {
  window.scrollTo(0, 0);
});
*/
window.addEventListener('DOMContentLoaded', () => {
  const links = document.querySelectorAll<HTMLAnchorElement>('.navbar ul li a');
  const currentURL = window.location.pathname;

  links.forEach(link => {
    const href = link.getAttribute('href');
    if (href && currentURL === href) {
      link.parentElement?.classList.add('active');
    } else {
      link.parentElement?.classList.remove('active');  // Elimina la clase active en otros enlaces
    }
  });
});

