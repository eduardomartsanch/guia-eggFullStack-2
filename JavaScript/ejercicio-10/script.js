const revertirPalabra = palabra => palabra.split('').reverse().join('');

const palabraOriginal = prompt("Ingrese una palabra: ");
const palabraRevertida = revertirPalabra(palabraOriginal);
console.log("Palabra original:", palabraOriginal);
console.log("Palabra al revés:", palabraRevertida);

/*Las funciones .split('').reverse().join('') se utilizan en conjunto para realizar tres operaciones en una cadena de caracteres:

.split(''): Divide la cadena en un arreglo de caracteres individuales.
.reverse(): Invierte el orden de los elementos en el arreglo.
.join(''): Une los elementos del arreglo en una cadena de nuevo.
En conjunto, estas operaciones se utilizan para revertir el orden de los caracteres en una cadena. Veamos un ejemplo:

Supongamos que tienes la palabra "hola". Aquí es cómo funciona cada paso:

.split(''): Divide "hola" en un arreglo ['h', 'o', 'l', 'a'].
.reverse(): Invierte el orden del arreglo, quedando ['a', 'l', 'o', 'h'].
.join(''): Une los elementos del arreglo en una cadena de nuevo, resultando en "aloh".
Por lo tanto, la combinación de estas tres funciones te permite obtener la palabra al revés. */ 