"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
// Importamos EmailJS
const emailjs_com_1 = __importDefault(require("emailjs-com"));
console.log("Script contact.js cargado correctamente");
document.addEventListener("DOMContentLoaded", function () {
    console.log("Evento DOMContentLoaded detectado");
    // Inicializar EmailJS con tu Public Key
    emailjs_com_1.default.init("IqSSuQFUDh5PsTTkW"); // Reemplaza con tu Public Key de EmailJS
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
        var _a, _b, _c;
        event.preventDefault();
        console.log("Evento submit detectado");
        if (honeypot && honeypot.value) {
            console.warn("Spam detectado.");
            return;
        }
        const name = (_a = document.getElementById("name")) === null || _a === void 0 ? void 0 : _a.value.trim();
        const email = (_b = document.getElementById("email")) === null || _b === void 0 ? void 0 : _b.value.trim();
        const message = (_c = document.getElementById("text-area")) === null || _c === void 0 ? void 0 : _c.value.trim();
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
        emailjs_com_1.default.send("service_gq8g2m6", "template_7gm00eo", templateParams)
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
