// Matriz original
const matrizOriginal = [[3], [6], [9], [12], [15]];

// Función para obtener el nuevo array
function obtenerNuevoArray(matrizOriginal) {
  const nuevoArray = [];
  for (let i = 0; i < matrizOriginal.length; i++) {
    const elemento = matrizOriginal[i][0]; // Obtiene el elemento de la matriz
    const nuevoElemento = elemento * 2; // Multiplica el elemento por 2
    nuevoArray.push(nuevoElemento); // Agrega el nuevo elemento al nuevo array
  }
  return nuevoArray;
}

// Obtener y mostrar el nuevo array
const resultado = obtenerNuevoArray(matrizOriginal);
console.log(resultado);
