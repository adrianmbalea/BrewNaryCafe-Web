
function cuadrado() {
    var cuadrado = document.querySelector('.cuadrado');
        var primerParrafo = cuadrado.querySelector('p');

        // Verificar si el contenido se desborda
        if (primerParrafo.scrollHeight > 0.365*window.innerWidth) {
            // El contenido se desborda, ajustar texto del primer párrafo
            while (primerParrafo.scrollHeight > (0.365*window.innerWidth-3)) {
                primerParrafo.textContent = primerParrafo.textContent.slice(0, -1); // Eliminar último carácter
            }
            // Agregar puntos suspensivos al final del párrafo
            primerParrafo.textContent += '...';
        }
}

document.addEventListener('DOMContentLoaded',cuadrado);
window.addEventListener('resize', cuadrado);
