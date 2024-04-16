document.addEventListener("DOMContentLoaded", function() {
    var currentPage = window.location.pathname.split("/").pop(); // Obtiene el nombre del archivo de la URL actual

    // Obtiene la lista de elementos de la lista de navegación
    var navItems = document.querySelectorAll("nav ul li");

    // Itera sobre cada elemento de la lista de navegación
    navItems.forEach(function(item) {
        var link = item.querySelector("a");
        var href = link.getAttribute("href");

        // Verifica si el href de la página actual coincide con el href del elemento de la lista
        if (href === currentPage) {
            // Si coincide, agrega una clase para subrayar el elemento
            item.classList.add("active");
        }
    });
});
