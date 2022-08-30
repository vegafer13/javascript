//Arrays (Arreglos)

// const arreglo1 = [];
// const arreglo2 = [5,6,7,8,9];
// const arreglo3 = ["andres","andrea","adriana","Juaco"];
// const arreglo4 = [true,false,false,true];
// const arreglo5 = [true, 5, "pepito"]; 
// console.log(arreglo2);
// console.log(arreglo5[2]);
// console.log(arreglo2[2] + arreglo2[4]);

// const arreglo2 = [5,6,7,8,9];

// for (let index = 0; index < 5; index++) {
//     console.log(arreglo2[index]);
// }


// const arreglo3 = ["andres","andrea","adriana","Juaco"];

// for (let index = 0; index < arreglo3.length; index++) {
//     console.log(arreglo3[index].toUpperCase());
// }


// Posicion = arranca de 0
// Cantidad de elementos = arranca de 1


/* //---- "push" sirve para agregar elementos al final
arreglo3.push("Camila")
console.log(arreglo3.length);
console.log(arreglo3);

//----- "unshift" sirve para agregar elementos al principio
arreglo3.unshift("pepito")
console.log(arreglo3);

//----- "pop" sirve para sacar elementos al final
arreglo3.pop()
console.log(arreglo3);

//----- "shift" sirve para sacar elementos al principio
arreglo3.shift()
console.log(arreglo3.length);
console.log(arreglo3);
 */

//----- "splice" sirve para eliminar elementos, se coloca  un numero donde inicia a borrar y donde terminara
// arreglo3.splice(1,2);
// console.log(arreglo3);

// Tambien se puede usar para crear una copia de informacion que queremos
// const nuevo = arreglo3.splice(1,3);
// console.log(arreglo3);
// console.log(nuevo);

//----- "join" concatena todos los elementos del arreglo en un solo string separando los elementos con los indicados dentro del parentesis
// console.log(arreglo3.join(" "));


//----- "concat" sirve para unir una variable seguido de otra variable 
// const arreglo3 = ["andres","andrea","adriana","Juaco"];
// const numeros = [1,2,3,4,5];

// const varios = arreglo3.concat(numeros);
// console.log(varios);


//----- "slice" hace una copia de un arreglo
// const arreglo3 = ["andres","andrea","adriana","Juaco"];
// console.log(arreglo3.slice(1,3));


//----- "indexOf" sirve para buscar la posicion de un elemento en especifico
// const arreglo3 = ["andres","andrea","adriana","Juaco"];
// console.log(arreglo3.indexOf("andres"));


//----- "include" sirve para identificar si un elemento esta dentro de la variable
// const arreglo3 = ["andres","andrea","adriana","Juaco"];
// console.log(arreglo3.includes("andres"));


//----- "reverse" sirve para voltear los elementos del arreglo
// const arreglo3 = ["andres","andrea","adriana","Juaco"];
// console.log(arreglo3.reverse());


//-----------> Los mas usados = Slice, Splice y filter


//
// const arreglo3 = ["andres","andrea","adriana","Juaco"];

// const eliminar = (nombre) =>{
//     let posicion = arreglo3.indexOf(nombre);

//     if (posicion != -1) {
//         arreglo3.splice(posicion, 1);
//     } 
//     console.log(arreglo3);
// }

// eliminar("andres");



//Arreglos con objetos, como productos
/* const array = [
    {nombre: "camisa", precio: 1000},
    {nombre: "gorra", precio: 500},
    {nombre: "bolsa", precio: 800},
];

array.push({nombre: "pantalon", precio: 600})
console.log(array);
 */

//--------------> Sirve para agregar productos
/* class Producto{
    constructor(nombre, precio){
      this.nombre = nombre;
      this.precio = precio;
    }
  }


const array = [];
for (let index = 0; index < 3; index++){
    let producto = prompt("Ingrese el producto");
    let precio = prompt("Ingrese el precio");
    let objeto = {
        nombre: nombre,
        precio: precio
    }
    array.push(objeto);
}

console.log(array);
 */


// --------------->> Maquina para crear productos, constructor
/* class Producto{
    constructor(nombre, precio){
      this.nombre = nombre;
      this.precio = precio;
    }
  }
  
  const array = [];
  
  for(let i = 0; i < 2; i++){
    let nombre = prompt("ingrese el nombre");
    let precio = prompt("ingrese el precio");
    let obj = new Producto(nombre, precio);
  
    array.push(obj);
  }
  
  console.log(array);
  
 */



//--- utilizar for con of para mostrar productos
const productos = [
    {id: 1, producto: "Arroz"},
    {id: 2, producto: "Frijol"},
    {id: 3, producto: "Semillas"},
];

for(const item of productos){
    console.log(item.producto);
}


// No se puese mostrar los arrays en un alert se tiene q poner asi

const obj = {nombre: "andres", edad: 50};
let mensaje = `persona ${obj.nombre} tiene ${obj.edad} años de edad`;

alert(mensaje);