document.addEventListener("DOMContentLoaded", () => {
  const form = document.getElementById("contactForm") as HTMLFormElement;
  const statusMessage = document.getElementById("statusMessage") as HTMLParagraphElement;

  form.addEventListener("submit", async (event) => {
      event.preventDefault(); // Evita el envío tradicional del formulario

      const formData = new FormData(form);

      try {
          const response = await fetch("/contacto", {
              method: "POST",
              body: formData
          });

          const result = await response.json();

          if (result.success) {
              statusMessage.textContent = "✅ Mensaje enviado correctamente.";
              statusMessage.style.color = "green";
              form.reset(); // Limpia el formulario después de enviarlo
          } else {
              statusMessage.textContent = "❌ Error al enviar el mensaje.";
              statusMessage.style.color = "red";
          }
      } catch (error) {
          console.error("Error al enviar la solicitud:", error);
          statusMessage.textContent = "❌ Ocurrió un error inesperado.";
          statusMessage.style.color = "red";
      }
  });
});
