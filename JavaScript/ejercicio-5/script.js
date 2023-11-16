var num1 = parseFloat(prompt("Ingresa el primer número:"));
var num2 = parseFloat(prompt("Ingresa el segundo número:"));
do {
    var operacion = prompt("Ingresa un número para realizar una operación:\n1. Sumar\n2. Restar\n3. Multiplicar\n4. Dividir\n5. Salir");

    switch (operacion) {
        case '1':
            
            var suma = num1 + num2;
            alert("Resultado de la suma de: "+ num1 +" y "+ num2 +" es: " + suma);
            break;

        case '2':
            
            var resta = num1 - num2;
            alert("Resultado de la resta de: "+ num1 +" y: "+ num2+" es: " + resta);
            break;

        case '3':
            
            var multiplicacion = num1 * num2;
            alert("Resultado de la multiplicación de: "+ num1 +" y: "+ num2+" es: " + multiplicacion);
            break;

        case '4':
            
            if (num2 !== 0) {
                var division = num1 / num2;
                alert("Resultado de la división: "+ num1 +" y: "+ num2+" es: " + division);
            } else {
                alert("No es posible dividir entre cero.");
            }
            break;

        case '5':
            alert("Saliendo del programa. ¡Hasta luego!");
            break;

        default:
            alert("Opción no válida. Por favor ingresa un número del 1 al 5.");
            break;
    }
} while (operacion !== '5');

/*
do {
    var operacion = prompt("Ingresa un número para realizar una operación:\n1. Sumar\n2. Restar\n3. Multiplicar\n4. Dividir\n5. Salir");

    var operacionNumero = parseInt(operacion);

    if (!isNaN(operacionNumero) && operacionNumero >= 1 && operacionNumero <= 5) {
        switch (operacionNumero) {
            case 1:
                var num1 = parseFloat(prompt("Ingresa el primer número:"));
                var num2 = parseFloat(prompt("Ingresa el segundo número:"));
                var suma = num1 + num2;
                alert("Resultado de la suma de: "+ num1 +" y "+ num2 +" es: " + suma);
                break;

            case 2:
                var num1 = parseFloat(prompt("Ingresa el primer número:"));
                var num2 = parseFloat(prompt("Ingresa el segundo número:"));
                var resta = num1 - num2;
                alert("Resultado de la resta de: "+ num1 +" y: "+ num2+" es: " + resta);
                break;

            case 3:
                var num1 = parseFloat(prompt("Ingresa el primer número:"));
                var num2 = parseFloat(prompt("Ingresa el segundo número:"));
                var multiplicacion = num1 * num2;
                alert("Resultado de la multiplicación de: "+ num1 +" y: "+ num2+" es: " + multiplicacion);
                break;

            case 4:
                var num1 = parseFloat(prompt("Ingresa el primer número:"));
                var num2 = parseFloat(prompt("Ingresa el segundo número:"));
                if (num2 !== 0) {
                    var division = num1 / num2;
                    alert("Resultado de la división: "+ num1 +" y: "+ num2+" es: " + division);
                } else {
                    alert("No es posible dividir entre cero.");
                }
                break;

            case 5:
                alert("Saliendo del programa. ¡Hasta luego!");
                break;
        }

        var intentarDeNuevo = confirm("¿Deseas realizar otra operación?");

    } else {
        alert("Por favor, ingresa un número válido del 1 al 5.");
    }
} while (operacionNumero !== 5);*/
