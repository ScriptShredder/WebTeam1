const minWidth = 600;
const checkbox = document.getElementById('checkbox');
const STORAGE_KEY = 'themePreference';

// Función para cambiar el tema
function toggleTheme() {
    const isDarkTheme = checkbox.checked;
    document.body.classList.toggle('dark', isDarkTheme);
    localStorage.setItem(STORAGE_KEY, isDarkTheme);
}

// Manejar eventos de cambio de estado del checkbox
checkbox.addEventListener('change', () => {
    toggleTheme();
});

// Verificar el ancho de la página cuando se carga o redimensiona la ventana
function checkWidth() {
    const currentWidth = window.innerWidth || document.documentElement.clientWidth || document.body.clientWidth;
    if (currentWidth < minWidth) {
        redirectToError("503");
        // 503 porque el tipo de error es de servidor
    }
}


function redirectToError(errorcode) {
    // Construir la URL con el código de error como parámetro
    // Para pasar el error entre paginas, y para practicar los URIs y recursos compartidos pasamos el error como una URI
    // que dice la dirección de manera única del parámetro
    let errorUrl = 'error.html?code=' + encodeURIComponent(errorcode);
    // Redirigir a la página de error
    window.location.href = errorUrl;
}

// Manejar errores no gestionados
window.onerror = function () {
    redirectToError("404");
    return true;
};

// Verificar el ancho de la página al cargar y redimensionar
window.addEventListener('resize', () => {
    checkWidth();
    toggleTheme();
});

// Verificar el ancho de la página al cargar
document.addEventListener('DOMContentLoaded', () => {
    let anchoPantalla = window.innerWidth || document.documentElement.clientWidth || document.body.clientWidth;
    if (anchoPantalla <= minWidth) {
      window.location.href = 'opt.html';
    }
    // checkWidth();
    // Aplicar el tema inicial según la preferencia almacenada
    const storedPreference = localStorage.getItem(STORAGE_KEY);
    if (storedPreference !== null) {
        checkbox.checked = storedPreference === 'true';
        toggleTheme();
    }
});