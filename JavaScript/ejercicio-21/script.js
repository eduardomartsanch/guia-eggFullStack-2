let persona = {
    nombre: "",
    edad: 0,
    sexo: "", //cadena vacía
    peso: 0,
    altura: 0
  };
  
  persona.nombre = prompt("Ingrese su nombre:");
  persona.edad = parseInt(prompt("Ingrese su edad en años:"));
  
  // Solicitar al usuario que seleccione su sexo
  let sexoInput = prompt("Seleccione su sexo (H para hombre, M para mujer, O para otro):");
  sexoInput = sexoInput.toUpperCase(); // Convertir a mayúsculas para ser insensible a mayúsculas/minúsculas
  
  // Validar la entrada del usuario y asignar el sexo correspondiente
  if (sexoInput === "H" || sexoInput === "M" || sexoInput === "O") {
    persona.sexo = sexoInput;
  } else {
    console.log("Sexo no válido. Se ha asignado 'O' (otro) por defecto.");
    persona.sexo = "O"; // Asignar "O" por defecto en caso de entrada no válida
  }
  
  persona.peso = parseFloat(prompt("Ingrese su peso (en kg):"));
  persona.altura = parseFloat(prompt("Ingrese su altura (en cm):"));
  
  /* Ejercicio 21
       21. Escribir un programa para obtener un array de las propiedades de un objeto Persona.
       Las propiedades son nombre, edad, sexo ('H' hombre, 'M' mujer, 'O' otro), peso y altura.
  */
  // Obtener un array de las propiedades del objeto Persona
  const propiedadesPersona = Object.keys(persona); 
  
  console.log("Datos de la persona:");
  console.log("Nombre:", persona.nombre);
  console.log("Edad:", persona.edad);
  console.log("Sexo:", persona.sexo);
  console.log("Peso:", persona.peso);
  console.log("Altura:", persona.altura);
  
  console.log("Propiedades de la persona:");
  console.log(propiedadesPersona);
  