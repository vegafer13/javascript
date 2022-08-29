//Objetos en Javascripts

//Estructura de un objeto
//{key 1 : value1, key2: value2...keyn: valuen}

/* let nombre = "pepito";
let edad = 23;
let direccion = "AV";

const persona = {
    nombre: "pepito",
    edad: 23,
    direccion: "av"
};

// Tambien se puede poner en linea =
// const persona = {nombre: "pepito", edad: 23, direccion: "av"}

console.log(persona.nombre);
console.log(persona.edad);
console.log(persona.direccion);
console.log(persona["nombre"]);
console.log(persona["edad"]);
console.log(persona["direccion"]);

// Forma de cambiar valores
persona["nombre"] = "Juan";
persona.edad = 35;

console.log(persona); */

//---------------->Funciones constructoras o constructores, como buena practica se pone Mayuscula al nombre de la funcion
function Product(modeloSneaker, colorSneaker, tallaSneaker, generoSneaker) {
    this.modelo = modeloSneaker;

}
