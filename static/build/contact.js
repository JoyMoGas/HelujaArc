document.addEventListener("DOMContentLoaded", function () {

    // Inicializar EmailJS con tu Public Key
    emailjs.init("IqSSuQFUDh5PsTTkW"); // Reemplaza con tu Public Key de EmailJS

    // Obtener los elementos del formulario
    const form = document.getElementById("contact-form");
    const statusMessage = document.getElementById("statusMessage");
    const honeypot = document.getElementById("honeypot");

    if (!form || !statusMessage) {
        console.error("No se encontró el formulario o el mensaje de estado.");
        return;
    }

    // Agregar evento de submit
    form.addEventListener("submit", function (event) {
        event.preventDefault();

        if (honeypot.value) {
            console.warn("Spam detectado.");
            return;
        }

        const name = document.getElementById("name").value.trim();
        const email = document.getElementById("email").value.trim();
        const message = document.getElementById("text-area").value.trim();

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

        emailjs.send("service_gq8g2m6", "template_7gm00eo", templateParams)
            .then(function () {
                statusMessage.textContent = "Mensaje enviado correctamente.";
                statusMessage.style.color = "green";
                form.reset();
            })
            .catch(function (error) {
                console.error("Error al enviar el mensaje:", error);
                statusMessage.textContent = "Error al enviar el mensaje. Inténtalo más tarde.";
                statusMessage.style.color = "red";
            });
    });
});
