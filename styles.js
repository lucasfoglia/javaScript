let respuesta = "si";
const arrayPersonas = [];

function calcularPromedio() {
  return (
    arrayPersonas.reduce((acumulador, actual) => acumulador + actual.edad, 0) /
    arrayPersonas.length
  );
}

function agregarPersona(edad, nombre) {
  const persona = { edad, nombre };
  const elementoPersona = document.createElement("li");

  elementoPersona.innerHTML =
    "nombre: " + persona.nombre + " edad: " + persona.edad;

  const listaPersonas = document.getElementById("contenedorDePersonas");
  listaPersonas.appendChild(elementoPersona);

  arrayPersonas.push(persona);
}

function validarFormulario(e) {

  e.preventDefault();

  const formulario = e.target;

  const nombre = formulario.children[0].value;
  const edad = Number(formulario.children[1].value);
  agregarPersona(edad, nombre)

}

const formulario = document.getElementById("formulario");
formulario.addEventListener("submit", validarFormulario)

const finalizar = document.getElementById("finalizar")
finalizar.onclick = () => {
  const elemento = document.getElementById("cantidadDePersonas");

  elemento.innerHTML = "Cantidad de personas ingresadas: " + arrayPersonas.length;

  const elementoPromedio = document.createElement("p");
  if (arrayPersonas.length) {
    const promedio = calcularPromedio();
    elementoPromedio.innerHTML =
      "El promedio de edades registrado es de " + promedio
  } else {
    elementoPromedio.innerHTML =
      "No se pudo calcular el promedio "
  }

  const resultado = document.getElementById("promedio");
  resultado.appendChild(elementoPromedio);
}



