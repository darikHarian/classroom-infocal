import Popper from '../../node_modules/popper.js/dist/popper.js';

// Función cambio color de fondo Navbar
window.onscroll = function() {
    scrollFunction();
};

const scrollFunction = () => {
    if (document.body.scrollTop > 80 || document.documentElement.scrollTop > 80) {
        document.getElementById('navbar-bg').style.backgroundColor = '#212529';
    } else {
        document.getElementById('navbar-bg').style.backgroundColor = 'transparent';
    };
};

// Función Tooltip
var tooltipTriggerList = [].slice.call(document.querySelectorAll('[data-bs-toggle="tooltip"]'));
var tooltipList = tooltipTriggerList.map(function (tooltipTriggerEl) {
    return new bootstrap.Tooltip(tooltipTriggerEl);
});

// Función Alert
let btnEnviar = document.getElementById('enviar');

btnEnviar.addEventListener("click", function() {
    alert('¡Mensaje enviado con éxito!')
});