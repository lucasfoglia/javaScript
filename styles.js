let respuesta = "si";
const arrayPersonas = [];

function calcularPromedio() {
  return arrayPersonas.reduce((acumulador, actual) => acumulador + actual.edad, 0) / arrayPersonas.length;
}

while (respuesta === "si") {
  const nombre = prompt("Ingrese nombre de la persona");
  const edad = Number(prompt("Ingrese edad de la persona:  "));
  arrayPersonas.push({ edad, nombre });
  respuesta = prompt("Quiere ingresar otra edad? conteste si o no ");
}

if (arrayPersonas.length) {
  const promedio = calcularPromedio();
  alert("Se ingresaron " + arrayPersonas.length + " Edades");
  alert("El promedio de edades registrado es de " + promedio);
} else {
  alert("No se puede calcular el promedio");
}