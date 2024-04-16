var xhr = new XMLHttpRequest();
xhr.open('GET', 'http://0.0.0.0:8000/plantilla.xml', true);

xhr.onreadystatechange = function() {
  if (xhr.readyState == 4 && xhr.status == 200) {
    var xmlDoc = xhr.responseXML;
    var cols = xmlDoc.getElementsByTagName('col');

    // Crear un fragmento de documento para almacenar los elementos HTML temporales
    var docFragment = document.createDocumentFragment();

    // Iterar a través de cada 'col' en el XML
    for (var i = 0; i < cols.length; i++) {
      var div = document.createElement('div');
      div.className = cols[i].getAttribute('class');

      var figure = document.createElement('figure');
      var img = document.createElement('img');
      img.src = cols[i].getElementsByTagName('img')[0].getAttribute('src');
      img.width = cols[i].getElementsByTagName('img')[0].getAttribute('width');
      img.height = cols[i].getElementsByTagName('img')[0].getAttribute('height');
      figure.appendChild(img);
      div.appendChild(figure);

      var h3 = document.createElement('h3');
      h3.textContent = cols[i].getElementsByTagName('name')[0].textContent;
      div.appendChild(h3);

      var p = document.createElement('p');
      p.textContent = cols[i].getElementsByTagName('description')[0].textContent;
      div.appendChild(p);

      // Añadir el div al fragmento de documento
      docFragment.appendChild(div);
    }

    // Finalmente, inserta el contenido en el elemento contenedor de la página
    document.querySelector('.row').appendChild(docFragment);
  }
};

xhr.send();
