function palabraMasLarga(frase) {
    var palabras = frase.split(' ');
    var palabraMasLarga = "";

    for (var i = 0; i < palabras.length; i++) {
        if (palabras[i].length > palabraMasLarga.length) {
            palabraMasLarga = palabras[i];
        }
    }

    return palabraMasLarga;
}

var resultado;
var entrada;
var letrasValidas = /^[a-zA-Z\s]+$/; // Expresión regular para letras y espacios

while (true) {
    entrada = prompt("Ingrese una frase o palabra:");

    if (letrasValidas.test(entrada)) {
        resultado = palabraMasLarga(entrada);
        console.log(`La palabra más larga es: ${resultado}. Tiene ${resultado.length} letras.`);
        break; // Sale del bucle si se ingresa una frase válida
    } else {
        alert("El valor ingresado no es una frase válida. Por favor, inténtelo de nuevo.");
    }
}

