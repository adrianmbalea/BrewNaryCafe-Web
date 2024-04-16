//Hacer que los elementos del formulario se muestren en la consola
// cuando el formulario se envíe
document.getElementById('contacto').addEventListener('submit', function (event) {
  //Evitar que el formulario se envíe
  //event.preventDefault();
  //Mostrar los elementos del formulario en la consola
  console.log('Nombre:', this.nombre.value);
  console.log('Correo:', this.correo.value);
  console.log('Mensaje:', this.mensaje.value);
  //Limpiar el formulario
  this.reset();
});