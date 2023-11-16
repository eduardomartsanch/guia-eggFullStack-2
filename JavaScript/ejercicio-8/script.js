// Inicializar variables para máximo, mínimo, suma y cantidad de números
let maximo = -Infinity;
let minimo = Infinity;
let suma = 0;
let cantidadNumeros = 0;

// Solicitar números al usuario hasta que se ingrese 0
while (true) {
    const numero = parseInt(prompt("Ingresa un número entero (ingresa 0 para terminar):"));

    if (numero === 0) {
       
        break;
    }

    // Actualizar máximo y mínimo
    if (numero > maximo) {
        maximo = numero;
    }
    if (numero < minimo) {
        minimo = numero;
    }

    // Sumar número a la suma total
    suma += numero;

    // Incrementar la cantidad de números ingresados
    cantidadNumeros++;
}

// Calcular el promedio
const promedio = suma / cantidadNumeros;

// Mostrar resultados
console.log(`Máximo número ingresado: ${maximo}`);
console.log(`Mínimo número ingresado: ${minimo}`);
console.log(`Promedio de los números ingresados: ${promedio}`);
