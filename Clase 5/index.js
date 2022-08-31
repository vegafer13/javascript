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
// ---------->> Constructora de usuarios -- Opcion 1
// function Usuario(nombreUser, emailUser, direccionUser, telefonoUser) {
//     this.nombre = nombreUser;
//     this.email = emailUser;
//     this.direccion = direccionUser;
//     this.telefono = telefonoUser;
// }

//----------> Constructora de productos
// function Productos(idProduct, nombreProduct, precioProduct, imagenProduct, colorProduct) {
//     this.id = idProduct;
//     this.nombre = nombreProduct;
//     this.precio = precioProduct;
//     this.imagen = imagenProduct;
//     this.color = colorProduct;
// }

// let usuario = new Usuario("Pepito", "chuy@gmail.com", "AV");
// console.log(usuario.nombre);
// console.log(usuario.email);


// ---------->> Constructora de usuarios -- Opcion 2 (Cuando es larga la informacion a construir)
// function Usuario(info) {
//     this.nombre = info.nombreUser;
//     this.email = info.emailUser;
//     this.direccion = info.direccionUser;
//     this.telefono = info.telefonoUser;
// }

// let usuario = new Usuario(
//     {
//     nombreUser: "Chuy",
//     emailUser: "chuy@gmail.com",
//     direccionUser: "Av.2",
//     telefonoUser: 9900000000,
//     }
// )

// let usuario = new Usuario(
//     {
//     nombreUser: prompt("Agrega tu nombre"),
//     emailUser: prompt("Agrega tu correo"),
// }
// )

// console.log(usuario.nombre);



//---------------->> Ejemplo de Mercadolibre
// function Producto(img, precio, nombre){
//     this.img = img;
//     this.precio = precio;
//     this.nombre = nombre;
// }

// let producto1 = new Producto( 406000, "httpa,sdfhlkasugfojdshf","Monitor sam...");

// function Producto(tabla){
//     this.img = tabla.img;
//     this.precio = tabla.precio;
//     this.nombre = tabla.nombre;
// }

// let producto2 = new Producto(
//     {
//     nombre: "Monitor sam...",
//     precio: 406000,
//     img: "httpa,sdfhlkasugfojdshf",
// }
// )

