/* //Forma de declarar variable (no recomendada)
var edad;

//Declaramos nuestra primera variable (declaracion de variable), sustituye a "var" que se usaba antes
let nombre = "Chuy";
let apellido;

//variable que no se va a cambiar, es constante. Siempre q se pone una constante se tiene que asignar el valor
// Siempre se pone en MAYUSCULA
const EDAD = 15;

// Si ponemos una asignacion dentro de " " se vuelve texto
apellido = "Vega"; */


// //Ejemplo
// let numeroUno = 2;
// let numeroDos = 10;
// const NUMEROTRES = 20;

// let suma = numeroUno + numeroDos;

// // Console.log() sirve para mostrar las funciones en la consola 
// console.log("Aqui vemos el valor de la suma", suma * NUMEROTRES);


//Practica
// let saludo = "Hola";
// let nombre = "Chuy";

// let mensaje = saludo + " " + nombre;
// console.log(mensaje);


//Practica2
// let saludo = "Hola ";
// let nombre = prompt("ingrese su nombre");
// let mensaje = saludo + nombre;

// alert(mensaje);

// console.log(nombre)

// Para poder pedir datos de texto se usa prompt()
// let entrada = prompt("Ingresa tu usuario");
// let salida = "Hola" + entrada;
// alert(salida)

// Para poder pedir numero y sumarlo, se necesita de parseInt()
// let numeroUno = parseInt(prompt("Ingrese un numero"));
// let numeroDos = parseInt(prompt("Ingrese otro numero"));
// let suma = numeroDos + numeroUno;
// alert(suma);


let user = prompt("Ingresa tu usuario");
let password = prompt("Ingresa tu contraseña");
// Se quito para facilitar el nuevo comando de abajo 
// let saludo = "Hola" + " " + "user" + ", " + "un gusto tenerte de vuelta";
let saludoDos = "Hola";
let saludoCont = "un gusto tenerte de vuelta 😁";



// Para sustituir + " " +
let saludoNew = `${saludoDos} ${user}, ${saludoCont}`;
alert(saludoNew);

console.log(saludoNew);