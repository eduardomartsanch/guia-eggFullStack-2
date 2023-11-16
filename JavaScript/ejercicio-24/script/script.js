document.addEventListener("DOMContentLoaded", function () {
    // Ejercicio 1
    const formulario1 = document.getElementById("formulario-1");
    const diametroInput1 = document.getElementById("diametro-1");
    const resultadoDiv1 = document.getElementById("resultado-1");

    document.getElementById("calcular-1").addEventListener("click", function () {
        const diametro1 = parseFloat(diametroInput1.value);

        if (!isNaN(diametro1)) {
            const radio1 = diametro1 / 2;
            resultadoDiv1.textContent = `El radio del círculo es: ${radio1.toFixed(2)} cm`;
        } else {
            resultadoDiv1.textContent = "Ingresa un número válido para el diámetro.";
        }
    });

    // Ejercicio 2
    const formulario2 = document.getElementById("formulario-2");
    const diametroInput2 = document.getElementById("diametro-2");
    const resultadoDiv2 = document.getElementById("resultado-2");

    document.getElementById("calcular-2").addEventListener("click", function () {
        const diametro2 = parseFloat(diametroInput2.value);

        if (!isNaN(diametro2)) {
            const radio2 = diametro2 / 2;
            resultadoDiv2.textContent = `El radio del círculo es: ${radio2.toFixed(2)} cm`;
        } else {
            resultadoDiv2.textContent = "Ingresa un número válido para el diámetro.";
        }
    });

    // Ejercicio 3
    const formulario3 = document.getElementById("formulario-3");
    const perimetroInput1 = document.getElementById("perimetro1");
    const resultadoDiv3 = document.getElementById("resultado-3");

    document.getElementById("calcular-3").addEventListener("click", function () {
        const perimetro1 = parseFloat(perimetroInput1.value);

        if (!isNaN(perimetro1)) {
            const radio3 = perimetro1 / (2 * Math.PI);
            resultadoDiv3.textContent = `El radio del círculo es: ${radio3.toFixed(2)} cm`;
        } else {
            resultadoDiv3.textContent = "Ingresa un número válido para el perímetro.";
        }
    });

    // Ejercicio 4
    const formulario4 = document.getElementById("formulario-4");
    const perimetroInput2 = document.getElementById("perimetro2");
    const resultadoDiv4 = document.getElementById("resultado-4");

    document.getElementById("calcular-4").addEventListener("click", function () {
        const perimetro2 = parseFloat(perimetroInput2.value);

        if (!isNaN(perimetro2)) {
            const radio4 = perimetro2 / (2 * Math.PI);
            resultadoDiv4.textContent = `El radio del círculo es: ${radio4.toFixed(2)} cm`;
        } else {
            resultadoDiv4.textContent = "Ingresa un número válido para el perímetro.";
        }
    });
});

