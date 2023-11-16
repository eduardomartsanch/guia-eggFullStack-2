//Pediremos a al usuario que ingese un numero entero
const num = parseInt(prompt("ingresa un numero:"));
// Con un if verificaremos si el numero ingresado es par o impar
if (num === 0) {
    alert("el numero no es par ni impar");
} else if (num %2 === 0) { //verificaremos si el numero es par
alert("El numero ingresado es par");
} else { // si el numero no es par se mostraraeste este mensaje
alert("El numero ingresado es impar");
}