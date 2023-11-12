/* particlesJS.load(@dom-id, @path-json, @callback (optional)); */
// particlesJS.load('particles.min.js', 'particlesjs-config.json', function() {
//     console.log('callback - particles.js config loaded');
//    });

var minWidth = 600; // Ancho mínimo 
const checkbox = document.getElementById('checkbox');
let currentStylesheet = document.getElementById('stylesheet');

checkbox.addEventListener('change', () => {
    const newStylesheet = document.createElement('link');
    newStylesheet.rel = 'stylesheet';
    
    if (checkbox.checked) {
        // Si el interruptor está activado (tema oscuro)
        newStylesheet.href = 'style-night.css'; // Cambia a tu hoja de estilo nocturna
    } else {
        // Si el interruptor está desactivado (tema claro)
        newStylesheet.href = 'style.css'; // Cambia a tu hoja de estilo claro
    }

    // Agregar la nueva hoja de estilo y eliminar la anterior
    document.head.appendChild(newStylesheet);
    document.head.removeChild(currentStylesheet);
    
    currentStylesheet = newStylesheet;
    currentStylesheet.id = 'stylesheet'; // Asignar el ID a la nueva hoja de estilo
});

window.addEventListener('load', function() {
    checkWidth(); // Verifica el ancho de la página cuando se carga la ventana
    window.addEventListener('resize', function() {
        checkWidth()
    });
});



// Manejar errores no gestionados y verificar el ancho de la página
window.onerror = function (message, source, lineno, colno, error) {
    // Mas tarde podría registrar el error, enviarlo a un servidor, etc.
    // Redirigir a la página de error
    redirectToError();
    // Devolver true para evitar que el navegador maneje el error automáticamente
    return true;
};

function checkWidth() {
    var currentWidth = window.innerWidth || document.documentElement.clientWidth || document.body.clientWidth;
    if (currentWidth < minWidth) {
        redirectToError(); 
    }
}

function redirectToError() {
    // Redirigir a la página de error si no se cumple con el ancho minimo
    window.location.href = 'error.html';
}

document.addEventListener('DOMContentLoaded', function () {
    checkWidth(); // Verificar el ancho de la página al cargar
});





