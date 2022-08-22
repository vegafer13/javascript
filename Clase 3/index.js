//Ciclos e Iteraciones for - while - do while

/* 
Estrutura del For

for(desde donde; hasta donde; actualizacion)
*/

// i++ es igual a     i = i + 1

/* for(let i = 0; i <= 100; i++){
    console.log("hola", i);
}
console.log("Terminamos"); */

/* 
let numero = parseInt(prompt("Ingrese un numero"))

for(let i = 0; i <= 10; i++){
    let resultado = numero * i;
    let mensaje = `${numero} * ${i} = ${resultado}`
    alert(mensaje)
}
 */

for (let i = 0; i <= 10; i++) {
    let nombre = prompt("Ingresa tu nombre");
    let mensaje = `Turno #${i} a nombre de ${nombre}`;
    alert(mensaje);
}