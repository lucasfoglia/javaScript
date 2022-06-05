let sumaEdades = 0;
let cantidadDePersonas = 0;
let respuesta = "si";
 const arrayEdades = [];




function calcularPromedio() {
  return (sumaEdades / cantidadDePersonas).toFixed(2);
}

while (respuesta === "si") {
  const entrada = Number(prompt("Ingrese edad de la persona:  "));
  sumaEdades += entrada;
  arrayEdades.push(entrada);
  cantidadDePersonas++;
  respuesta = prompt("Quiere ingresar otra edad? conteste si o no ");
}

if (cantidadDePersonas > 0) {
  let promedio = calcularPromedio();
  alert("Se ingresaron " + arrayEdades.length + " Edades");
  alert("El promedio de edades registrado es de " + promedio);
} else {
  alert("No se puede calcular el promedio");

}