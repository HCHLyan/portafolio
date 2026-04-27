// TASK 5: Muestra un mensaje de bienvenida en pantalla
// window.onload asegura que el mensaje salga cuando la página ya cargó completamente
window.onload = function() {
    alert("¡Bienvenido a la nueva versión de mi portafolio responsivo!");
};

// TASK 5: Cambiar el texto de un párrafo al hacer clic
const btnCambiar = document.getElementById("btn-cambiar");
const parrafoDinamico = document.getElementById("parrafo-dinamico");

btnCambiar.addEventListener("click", function() {
    parrafoDinamico.textContent = "¡Magia! El DOM ha sido manipulado con éxito usando JavaScript.";
    parrafoDinamico.style.color = "blue"; // Agregamos un cambio de color visual
});

// TASK 5: Efecto dinámico (mostrar/ocultar contenido)
const btnToggle = document.getElementById("btn-toggle");
const cajaSecreta = document.getElementById("caja-secreta");

btnToggle.addEventListener("click", function() {
    // Verificamos si la caja tiene la clase 'oculto'
    if (cajaSecreta.classList.contains("oculto")) {
        // Si está oculta, le quitamos la clase y la mostramos
        cajaSecreta.classList.remove("oculto");
        btnToggle.textContent = "Ocultar Secreto";
    } else {
        // Si está visible, le volvemos a poner la clase
        cajaSecreta.classList.add("oculto");
        btnToggle.textContent = "Mostrar Secreto";
    }
});