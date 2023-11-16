/*9. Realizar un programa que pida una frase y el programa deberá mostrar la frase con un
espacio entre cada letra. La frase se mostrara así: H o l a. Nota: recordar el
funcionamiento de la función Substring().*/
/*
function FraseConEspacios(frase) {
    var resultado = "";

    for (var i = 0; i < frase.length; i++) {
        resultado += frase.charAt(i) + " ";
    }
    return resultado.trim();
}

var fraseinput = prompt("Ingrese una frase");
var FraseSinEspacios = fraseinput.replace(/\s/g, '');
var resultado = FraseConEspacios(FraseSinEspacios);
console.log(resultado); */

/*function FraseConEspacios(frase) {
    var resultado = "";

    for (var i = 0; i < frase.length; i++) {
        resultado += frase.substring(i, i + 1) + " ";
    }
    return resultado.trim();
}

var fraseinput = prompt("Ingrese una frase");
var FraseSinEspacios = fraseinput.replace(/\s/g, '');
var resultado = FraseConEspacios(FraseSinEspacios);
console.log(resultado); */

/*En esa parte del código, estás utilizando el método substring() para extraer cada letra individual de la palabra y luego concatenarla con un espacio. Esto crea la separación entre cada letra de la palabra original.

Vamos a desglosar cómo funciona esta parte del código utilizando la palabra "adios" como ejemplo:

i comienza en 0 y avanza a través de cada índice de la cadena frase.
frase.substring(i, i + 1) extrae el carácter en el índice i de la cadena frase. Por ejemplo, cuando i es 0, extraerá la letra "a".
Luego, se concatena con un espacio: frase.substring(i, i + 1) + " ". En el caso de "a", esto se convierte en "a ".
En la siguiente iteración del bucle, i será 1, y se extraerá la siguiente letra "d". Esto se concatenará con un espacio y se agregará al resultado: "a d ".
El proceso se repite para cada letra de la palabra, creando una cadena con letras separadas por espacios.
Finalmente, resultado.trim() se utiliza para eliminar el espacio adicional al final de la cadena resultante.
Por lo tanto, en esta parte del código estás efectivamente logrando la separación de cada letra de la palabra ingresada, como se esperaba.*/ 
/*
function FraseConEspacios(caracteres) {
    var resultado = [];

    for (var i = 0; i < caracteres.length; i++) {
        resultado.push(caracteres[i], " ");
    }
    
    return resultado.join('').trim();
}

var fraseinput = prompt("Ingrese una frase");
var caracteresEnArray = fraseinput.split('');
var resultado = FraseConEspacios(caracteresEnArray);
console.log(resultado);
*/

/*
function FraseConEspacios(caracteres) {
    return caracteres.join(' ');
}

var fraseinput = prompt("Ingrese una frase");
var caracteresArray = fraseinput.split('').join(' ').split('');
var resultado = FraseConEspacios(caracteresArray);
console.log(resultado);
*/

function letrasSeparadas(frase) {
    var palabras = frase.split(' '); // Divide la frase en palabras
    var letrasSeparadas = [];

    for (var i = 0; i < palabras.length; i++) {
        var palabra = palabras[i];
        var letras = palabra.split(''); // Divide cada palabra en letras
        letrasSeparadas.push(letras.join(' ')); // Une las letras separadas con espacios y las agrega al resultado
    }

    return letrasSeparadas.join(''); // Une las palabras separadas con espacios
}

var fraseInput = prompt("Ingrese una frase");
var resultado = letrasSeparadas(fraseInput);
console.log(resultado);

