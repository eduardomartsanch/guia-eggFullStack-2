/*document.addEventListener("DOMContentLoaded", function() {
  const mostrarMensajeBtn = document.getElementById("mostrarMensajeBtn");

  // Agregar un evento click al botón
  mostrarMensajeBtn.addEventListener("click", function() {
    // Define el mensaje que deseas mostrar
    const mensaje = "Conoce más sobre CoffeeHouse en nuestra página de Acerca de.";

    // Muestra el mensaje en una ventana emergente
    alert(mensaje);
  });
});

Ejercicio 23. 

  Resalte todas las palabras de más de 8 caracteres en el texto del párrafo (con un fondo
  amarillo, por ejemplo)*

  document.addEventListener("DOMContentLoaded", function() {
    // Obtén todos los elementos de párrafo con la clase "text"
    const parrafos = document.querySelectorAll(".text");
  
    // Recorre todos los párrafos
    for (let i = 0; i < parrafos.length; i++) {
      const miParrafo = parrafos[i];
  
      // Obtén el contenido del párrafo
      const texto = miParrafo.textContent;
  
      // Divide el texto en palabras
      const palabras = texto.split(" ");
  
      // Recorre todas las palabras
      for (let j = 0; j < palabras.length; j++) {
        const palabra = palabras[j];
  
        // Verifica si la palabra tiene más de 8 caracteres
        if (palabra.length > 8) {
          // Crea un elemento <span> para resaltar la palabra
          const spanResaltado = document.createElement("span");
          spanResaltado.textContent = palabra;
          spanResaltado.style.backgroundColor = "green"; // Cambia el color de fondo de la palabra
  
          // Reemplaza la palabra en el texto original con el elemento <span>
          palabras[j] = spanResaltado.outerHTML;
        }
      }
  
      // Actualiza el contenido del párrafo con las palabras resaltadas
      miParrafo.innerHTML = palabras.join(" ");
    }
  });
  */





