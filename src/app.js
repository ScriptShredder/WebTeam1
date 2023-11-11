/* particlesJS.load(@dom-id, @path-json, @callback (optional)); */
// particlesJS.load('particles.min.js', 'particlesjs-config.json', function() {
//     console.log('callback - particles.js config loaded');
//    });

// var minWidth = 600;

// window.addEventListener('load', function() {
//     checkWidth(); // Verifica el ancho de la página cuando se carga la ventana

//     window.addEventListener('resize', function() {
//         checkWidth()  
//     })
// });

// window.onerror = function (message, source, lineno, colno, error) {
//     // Redirigir a la página de error en caso de cualquier error no gestionado o ancho de página insuficiente
//     if (window.innerWidth < 600) { // Ajusta el valor según tu necesidad
//         window.location.href = 'error.html';
//     }

//     // También puedes mostrar un mensaje de error en la consola del navegador
//     console.error('Error:', message, 'en', source, 'en la línea', lineno);
    
//     // Devolver true para evitar que el navegador maneje el error automáticamente
//     return true;
// };


// function checkWidth() {
//  // Ancho mínimo deseado en píxeles
//     var currentWidth = window.innerWidth || document.documentElement.clientWidth || document.body.clientWidth;

//     if (currentWidth < minWidth & window.location.href == "index.html") {
//         // Si el ancho de la página es menor al mínimo, muestra un mensaje
//         window.location.href = 'error.html';
//     } else {
//         checkWidth()
//         window.location.href = 'index.html';
//     }
// }


// document.addEventListener('DOMContentLoaded', function () {

//     // Verificar el ancho de la página al cargar
//     if (window.innerWidth < 600) { // Ajusta el valor según tu necesidad
//         window.location.href = 'error.html';
//     }

//     // Verificar el ancho de la página cuando cambia el tamaño de la ventana
//     window.addEventListener('resize', function() {
//         // Si la ventana se expande y tiene el ancho necesario, recargar la página principal
//         if (window.innerWidth >= 600) { // Ajusta el valor según tu necesidad
//             window.location.href = 'index.html';
//         }
//     });
// });


window.addEventListener('load', function() {
    checkWidth(); // Verifica el ancho de la página cuando se carga la ventana
    window.addEventListener('resize', function() {
        checkWidth()
    });
});
window.addEventListener('resize', function() {
    // Si la ventana se expande y tiene el ancho necesario, recargar la página principal
    var minWidth = 600; // Ajusta el valor según tu necesidad
    var currentWidth = window.innerWidth || document.documentElement.clientWidth || document.body.clientWidth;

    if (currentWidth >= minWidth && window.location.href.includes('error.html')) {
        // Si se está en la página de error y la ventana cumple con el ancho, redirigir a la página principal
        window.location.href = 'index.html';
    }


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
    var minWidth = 600; // Ancho mínimo 
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


