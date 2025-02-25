"use strict";
var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
document.addEventListener("DOMContentLoaded", () => {
    const form = document.getElementById("contactForm");
    const statusMessage = document.getElementById("statusMessage");
    form.addEventListener("submit", (event) => __awaiter(void 0, void 0, void 0, function* () {
        event.preventDefault(); // Evita el envío tradicional del formulario
        const formData = new FormData(form);
        try {
            const response = yield fetch("/contacto", {
                method: "POST",
                body: formData
            });
            const result = yield response.json();
            if (result.success) {
                statusMessage.textContent = "✅ Mensaje enviado correctamente.";
                statusMessage.style.color = "green";
                form.reset(); // Limpia el formulario después de enviarlo
            }
            else {
                statusMessage.textContent = "❌ Error al enviar el mensaje.";
                statusMessage.style.color = "red";
            }
        }
        catch (error) {
            console.error("Error al enviar la solicitud:", error);
            statusMessage.textContent = "❌ Ocurrió un error inesperado.";
            statusMessage.style.color = "red";
        }
    }));
});
