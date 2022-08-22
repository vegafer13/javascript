// Condicionales en JS
    // si <condicion> entonces <operacion>

// = Asignacion
// == comparacion que valida valor 
// === comparacion que valida tanto valor como tipo de dato

// console.log(3 == "3")
// console.log(3 === "3")

// let numero = 4;
// numero === 4;

//los === revisa que el valor y el tipo de dato sean iguales
// 4 === 4
//tira un error cuando el tipo de valor cambia, en este caso el primero es num y el segundo es texto
// 4 === "4" 

// se usa == cuando el valor es igual sin importar el tipo de dato
// 4 == "4"

//__________________________________________________________________

//Estructura del if
/*
if(condicion){
    codigo a ejecutar en caso de que la condicion sea verdadera
} 
*/

/*
if(true){
    console.log("entramos al if")
}

console.log("fin del proceso")
*/
   
/* let nombre = "Diana";
if(nombre === "Diana"){
    console.log("Hola diana");
}

console.log("Chao Diana"); */

// ____________________________________________________________________


//Estructura if else
/*
if(condicion){
    condicion a ejecutar en caso de que la condicion sea verdadera
}

else(condicion){
    codigo a ejecutar en caso de que la condicion sea falsa
}
*/

/* let numero = 10;
if(numero === 30){
    console.log("eres igual a 30");
}else{
    console.log("no eres 30");
}

console.log("terminamos"); */



/* let clima = "cae agua";

if(clima === "hace sol"){
    console.log("Salgo al parque");
}else{
    console.log("no salgo al parque");
}
console.log("Terminamos"); */


/* let respuesta = prompt("¿Terminaste la tarea?")
if(respuesta.toLowerCase() === "si"){
    alert("Puedes salir a jugar")
}else{
    alert("No puede salir a jugar")
} */


//parseInt sirve para que in string sea un numero
/* let edad = parseInt(prompt("Ingresa tu edad"));

if(edad < 15){
    alert("No puedes entrar");
}else if(edad < 18){
    alert("Puede entrar con un adulto");
}else if(edad = 18){
    alert("Puede entrar");
}

alert("Gracias por ingresar tu edad") */


//__________________________________________________

//Operadores Logicos

/* && solo es verdadero cuando las condiciones involucrada son verdaderas, de lo contrario es falso 

|| es verdadero cuando al menos una condicion es verdadera, de lo contrario es falso */

/* 
let respuestaTarea = prompt("¿Terminaste la tarea?")
let respuestaCasa = prompt("¿Organizaste la casa?")

if(respuestaTarea.toLowerCase() === "si" && respuestaCasa.toLowerCase() === "si"){
    alert("Puedes salir a jugar")
}else{
    alert("No puede salir a jugar")
}  */


/* let nombre = prompt("Ingresa tu nombre");

if((nombre == "andres" || nombre == "ANDRES") && (nombre !== "")){
    alert("Hola andres!!")
}else{
    alert("Ingrese nombre correcto alv!");
} */


/* let numero = parseInt(prompt("Ingresa un numero")); 

if(numero > 1000){
    alert("Salaverga es un chingo!");
} */


/* let saludo = prompt("Ingresa saludo");

if(saludo = "Hola"){
    console.log("Hola jtos");
} */


/* let numeroDos = parseInt(prompt("Ingresa un numero")); 

if(numeroDos > 10 && numeroDos < 50 ){
 alert("Todo chido oficial");
}else{
    alert("Salaverga te mamaste");
} */