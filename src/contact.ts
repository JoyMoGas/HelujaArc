// Importamos EmailJS
import emailjs from "emailjs-com";

console.log("Script contact.js cargado correctamente");

document.addEventListener("DOMContentLoaded", function () {
    console.log("Evento DOMContentLoaded detectado");

    // Inicializar EmailJS con tu Public Key
    emailjs.init("IqSSuQFUDh5PsTTkW"); // Reemplaza con tu Public Key de EmailJS

    // Obtener los elementos del formulario
    const form = document.getElementById("contact-form") as HTMLFormElement | null;
    const statusMessage = document.getElementById("statusMessage") as HTMLParagraphElement | null;
    const honeypot = document.getElementById("honeypot") as HTMLInputElement | null;

    if (!form || !statusMessage) {
        console.error("No se encontró el formulario o el mensaje de estado.");
        return;
    }

    // Agregar evento de submit
    form.addEventListener("submit", function (event: Event) {
        event.preventDefault();
        console.log("Evento submit detectado");

        if (honeypot && honeypot.value) {
            console.warn("Spam detectado.");
            return;
        }

        const name = (document.getElementById("name") as HTMLInputElement | null)?.value.trim();
        const email = (document.getElementById("email") as HTMLInputElement | null)?.value.trim();
        const message = (document.getElementById("text-area") as HTMLTextAreaElement | null)?.value.trim();

        if (!name || !email || !message) {
            console.warn("Formulario incompleto.");
            statusMessage.textContent = "Por favor, completa todos los campos.";
            statusMessage.style.color = "red";
            return;
        }

        const templateParams = {
            from_name: name,
            from_email: email,
            message: message
        };

        console.log("Enviando datos a EmailJS:", templateParams);

        emailjs.send("service_gq8g2m6", "template_7gm00eo", templateParams)
            .then(() => {
                console.log("Mensaje enviado correctamente.");
                statusMessage.textContent = "Mensaje enviado correctamente.";
                statusMessage.style.color = "green";
                form.reset();
            })
            .catch((error) => {
                console.error("Error al enviar el mensaje:", error);
                statusMessage.textContent = "Error al enviar el mensaje. Inténtalo más tarde.";
                statusMessage.style.color = "red";
            });
    });
});
