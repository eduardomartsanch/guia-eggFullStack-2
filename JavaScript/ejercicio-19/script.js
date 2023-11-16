// Crear el arreglo A de 50 números reales e inicializarlo con valores aleatorios
const arregloA = new Array(50);
for (let i = 0; i < arregloA.length; i++) {
    arregloA[i] = Math.random() * 100; // Valores aleatorios entre 0 y 100
}

// Mostrar el arreglo A original
console.log("Arreglo A original:");
console.log(arregloA);

// Ordenar el arreglo A de menor a mayor
arregloA.sort((a, b) => a - b);

// Crear el arreglo B de 20 números reales
const arregloB = new Array(20);

// Copiar los primeros 10 números ordenados de A a B
for (let i = 0; i < 10; i++) {
    arregloB[i] = arregloA[i];
}

// Rellenar los 10 últimos elementos de B con el valor 0.5
for (let i = 10; i < 20; i++) {
    arregloB[i] = 0.5;
}

// Mostrar los dos arreglos resultantes
console.log("\nArreglo A ordenado:");
console.log(arregloA);
console.log("\nArreglo B combinado:");
console.log(arregloB);
