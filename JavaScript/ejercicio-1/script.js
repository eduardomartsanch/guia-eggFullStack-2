var EstadoDelDia = prompt("¿Cómo está el día de hoy? (soleado, nublado, lloviendo)");

// Haremos una comparacion si el usuario ingresa cualquiera de las 3 opciones
if (EstadoDelDia === "lloviendo") {
    // Muestra un mensaje específico si está lloviendo
    alert("Recuerda llevar un paraguas!");
} else {
    // Muestra un mensaje general con el estado del día ingresado.
    alert("El día de hoy está " + EstadoDelDia + ".");
}

if (EstadoDelDia === "soleado"){
    alert("Hace mucho calor!");
} else {
    alert("El dia de hoy esta "+ EstadoDelDia + ".");
}

if (EstadoDelDia === "nublado"){
    alert("Ponte un sueter podria hacer frio!");
} else {
alert("El dia de hoy esta "+ EstadoDelDia + ".");
}