/*
document.addEventListener('DOMContentLoaded', function () {
    var checkboxes = document.querySelectorAll('input[type="checkbox"]');
    for (var i = 0; i < checkboxes.length; i++) {
        checkboxes[i].addEventListener('click', filtrarItems);
    }
    // Al iniciar, seleccionar la opción "Todo"
    var todoCheckbox = document.querySelector('input[value="todo"]');
    filtrarItems.apply(todoCheckbox);
});
function filtrarItems() {
    var selectedOption = this.value;
    var containers = document.querySelectorAll('.container');
    for (var i = 0; i < containers.length; i++) {
        var container = containers[i];
        var item = container.querySelector('.item');
        var categoria = item.getAttribute('id');
        if (selectedOption === 'todo' || selectedOption === categoria) {
            container.style.display = 'block';
        } else {
            container.style.display = 'none';
        }
    }
    // Desmarcar la opción "Todo" si se selecciona otra opción
    var todoCheckbox = document.querySelector('input[value="todo"]');
    if (selectedOption !== 'todo') {
        todoCheckbox.checked = false;
    }
    // Estilizar la opción seleccionada
    var labels = document.querySelectorAll('label');
    for (var i = 0; i < labels.length; i++) {
        labels[i].style.fontWeight = 'normal';
    }
    if (selectedOption !== 'todo') {
        this.parentElement.style.fontWeight = 'bold';
    } else {
        var todoLabel = document.querySelector('label:nth-child(1)');
        todoLabel.style.fontWeight = 'bold';
    }
}

function flipCard(container) {
    container.classList.add('clicked');
    setTimeout(function() {
        container.classList.remove('clicked');
    }, 2000); // Duración de 5 segundos antes de volver al estado normal
}

*/

// CON JQUERY Y JES56
// CON JQUERY Y JES56
document.addEventListener('DOMContentLoaded', function () {
    const checkboxes = document.querySelectorAll('input[type="checkbox"]');
    checkboxes.forEach(checkbox => {
        checkbox.addEventListener('click', filtrarItems);
    });

    // Al iniciar, seleccionar la opción "Todo"
    filtrarItems.call(document.querySelector('input[value="todo"]'));
});

function filtrarItems() {
    const selectedOption = this.value;
    const containers = document.querySelectorAll('.container');
    containers.forEach(container => {
        const item = container.querySelector('.item');
        const categoria = item.getAttribute('id');
        if (selectedOption === 'todo' || selectedOption === categoria) {
            container.style.display = 'block';
        } else {
            container.style.display = 'none';
        }
    });

    // Desmarcar la opción "Todo" si se selecciona otra opción
    const todoCheckbox = document.querySelector('input[value="todo"]');
    if (selectedOption !== 'todo') {
        todoCheckbox.checked = false;
    }

    // Estilizar la opción seleccionada
    const labels = document.querySelectorAll('label');
    labels.forEach(label => {
        label.style.fontWeight = 'normal';
    });
    if (selectedOption !== 'todo') {
        this.parentElement.style.fontWeight = 'bold';
    } else {
        const todoLabel = document.querySelector('label:nth-child(1)');
        todoLabel.style.fontWeight = 'bold';
    }

    // Actualizar el título según la opción seleccionada
    const h1Title = document.querySelector('h1');
    switch(selectedOption) {
        case 'cafe':
            h1Title.textContent = 'Cafés';
            break;
        case 'te':
            h1Title.textContent = 'Tés';
            break;
        case 'dulce':
            h1Title.textContent = 'Algo dulce';
            break;
        case 'bebida':
            h1Title.textContent = 'Bebidas';
            break;
        default:
            h1Title.textContent = 'Menú';
            break;
    }
}


function flipCard(container) {
    // Asegurándonos de que 'container' sea un objeto jQuery
    var $container = $(container);

    // Agregando la clase 'clicked'
    $container.addClass('clicked');

    // Estableciendo un temporizador para remover la clase después de 2 segundos
    setTimeout(function() {
        $container.removeClass('clicked');
    }, 2000); // Duración de 2 segundos antes de volver al estado normal
}


