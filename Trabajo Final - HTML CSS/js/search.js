function buscar() {
  // Obtener el valor del input de búsqueda
  var valorBusqueda = document.getElementById('buscador').value.toLowerCase();
  console.log(valorBusqueda)

  // Obtener todos los elementos donde deseas realizar la búsqueda 
  var elementos = document.getElementsByClassName('oculto');

  // Obtener el elemento del mensaje de error
  var mensajeError = document.getElementById('error');

  // Verificar si se ingresó algún término de búsqueda
  if (valorBusqueda.trim() === '') {
    // Mostrar el mensaje de error
    error.classList.add('mostrar');
    return; // Detener la ejecución de la función si no hay término de búsqueda
  } else {
    // Ocultar el mensaje de error si se ingresó un término de búsqueda
    error.classList.remove('mostrar');
    document.querySelectorAll(".placeholder")[0].classList.add("search-up")
  }

  // Recorrer los elementos y mostrar aquellos que coincidan con la búsqueda
  for (var i = 0; i < elementos.length; i++) {
    var contenidoElemento = elementos[i].innerHTML.toLowerCase();

    // Si el texto del elemento contiene la búsqueda, mostrarlo
    if (contenidoElemento.includes(valorBusqueda)) {
      elementos[i].classList.add('mostrar');

    } 
    else {
      elementos[i].classList.remove('mostrar');
    }
  }
}

  