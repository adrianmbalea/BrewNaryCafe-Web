function cargarContenido(contenidoJson) {
contenidoJson.contenedores.forEach(contenedor => {

  $('.contenedor-frase .frase h3').text(contenedor.titulo);
  $('.frase h6').text(contenedor.autor);
  $('.contenedor-frase img').attr('src', contenedor.imagen);


  });
}

$(document).ready(function() {
  $.getJSON('http://0.0.0.0:8000/eventos.json', function(data) {
    cargarContenido(data);
  });
});
