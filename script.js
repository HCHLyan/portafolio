// ==========================================
// INTERACTIVIDAD BÁSICA DEL DOM
// ==========================================

const btnCambiar = document.getElementById("btn-cambiar");
const parrafoDinamico = document.getElementById("parrafo-dinamico");

// Verificamos si los elementos existen en la página actual antes de darles eventos
if (btnCambiar && parrafoDinamico) {
    btnCambiar.addEventListener("click", function() {
        parrafoDinamico.textContent = "¡Magia! El DOM ha sido manipulado con éxito usando JavaScript.";
        parrafoDinamico.style.color = "blue"; 
    });
}

// ==========================================
// EFECTO DINÁMICO: MOSTRAR / OCULTAR
// ==========================================

const btnToggle = document.getElementById("btn-toggle");
const cajaSecreta = document.getElementById("caja-secreta");

if (btnToggle && cajaSecreta) {
    btnToggle.addEventListener("click", function() {
        if (cajaSecreta.classList.contains("oculto")) {
            cajaSecreta.classList.remove("oculto");
            btnToggle.textContent = "Ocultar Secreto";
        } else {
            cajaSecreta.classList.add("oculto");
            btnToggle.textContent = "Mostrar Secreto";
        }
    });
}

// ==========================================
// MENÚ DE HAMBURGUESA PARA MÓVILES
// ==========================================

const btnHamburguesa = document.getElementById("btn-hamburguesa");
const navMenu = document.getElementById("nav-menu");

if (btnHamburguesa && navMenu) {
    btnHamburguesa.addEventListener("click", function() {
        navMenu.classList.toggle("activo");
    });
}

// ==========================================
// CERRAR EL MENÚ AL HACER CLIC EN UN ENLACE
// ==========================================

const enlacesNav = document.querySelectorAll("#nav-menu ul li a");

if (enlacesNav.length > 0) {
    enlacesNav.forEach(enlace => {
        enlace.addEventListener("click", function() {
            navMenu.classList.remove("activo");
        });
    });
}