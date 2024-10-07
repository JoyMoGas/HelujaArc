let slideIndex = 0;
showSlides(); // Inicia la presentación de diapositivas

function showSlides() {
  let i;
  const slides = document.getElementsByClassName("mySlides");
  const thumbnails = document.getElementsByClassName("thumbnail"); // Obtiene las miniaturas

  // Oculta todas las diapositivas
  for (i = 0; i < slides.length; i++) {
    slides[i].style.display = "none";  
    // Remueve el borde de todas las miniaturas
    thumbnails[i].classList.remove("active");
  }

  // Incrementa el índice de la diapositiva
  slideIndex++;
  // Reinicia el índice si supera el número de diapositivas
  if (slideIndex >= slides.length) { slideIndex = 0; } 

  // Muestra la diapositiva actual
  slides[slideIndex].style.display = "block";  
  // Agrega el borde a la miniatura correspondiente
  thumbnails[slideIndex].classList.add("active"); 

  // Llama a showSlides de nuevo después de 2 segundos
  setTimeout(showSlides, 2000); // Cambia la imagen cada 2 segundos
}
