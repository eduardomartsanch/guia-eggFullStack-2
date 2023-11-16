// 17. Eliminar los dos últimos elementos de un array
var valores = [true, 5, false, "hola", "adios", 2];
valores.pop();
valores.pop();
console.log(valores);

// Función para encontrar la palabra más larga
function encontrarPalabraMasLarga(palabra1, palabra2) {
  if (palabra1.length > palabra2.length) {
    return palabra1;
  } else if (palabra2.length > palabra1.length) {
    return palabra2;
  } else {
    return "Ambas palabras tienen la misma longitud.";
  }
}

// 18. Realizar operaciones con el array "valores"
var texto1 = valores[3]; // Ahora el texto1 es "false"
var texto2 = valores[4]; // Ahora el texto2 es "hola"

// a) Comparar longitud de los textos
if (typeof texto1 === 'string' && typeof texto2 === 'string') {
  // a) Comparar longitud de los textos
  if (texto1.length > texto2.length) {
    console.log("El texto 1 es mayor en longitud.");
  } else if (texto2.length > texto1.length) {
    console.log("El texto 2 es mayor en longitud.");
  } else {
    console.log("Los textos tienen la misma longitud.");
  }

  // Encuentra la palabra más larga
  var palabraMasLarga = encontrarPalabraMasLarga(texto1, texto2);
  console.log("La palabra más larga es:", palabraMasLarga);
} else {
  console.log("Al menos uno de los valores no es de tipo string.");
}

// b) Realizar operaciones booleanas
var resultadoTrue = valores[0] && valores[1]; // true && 5
var resultadoFalse = valores[0] || valores[1]; // true || 5

console.log("Resultado True:", resultadoTrue);
console.log("Resultado False:", resultadoFalse);

// c) Realizar operaciones matemáticas
var numero1 = valores[4]; // Ahora el número1 es 2
var numero2 = valores[5]; // Ahora el número2 es undefined

// Comprueba si numero1 es de tipo numérico
if (typeof numero1 === 'number') {
  // Comprueba si numero2 es de tipo numérico
  if (typeof numero2 === 'number') {
    var suma = numero1 + numero2;
    var resta = numero1 - numero2;
    var multiplicacion = numero1 * numero2;
    var division = numero1 / numero2;
    var modulo = numero1 % numero2;

    console.log("Suma:", suma);
    console.log("Resta:", resta);
    console.log("Multiplicación:", multiplicación);
    console.log("División:", division);
    console.log("Módulo:", modulo);
  } else {
    console.log("El segundo valor numérico no es de tipo numérico.");
  }
} else {
  console.log("El primer valor numérico no es de tipo numérico.");
}
