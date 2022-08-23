//Algoritmo usando un ciclo


//Variables
let encabezados = parseInt(prompt("Ingresa cuantos encabezados quieres agregar a tu documento (1-6 niveles)"));

//_______Opcion 1
// Condicion para crear el ciclo
if (encabezados === 1) {
    mensaje = `se creo 1 nivel de encabezado ... 📑👍`;
    for(let i = 1; i <=encabezados; i++){
        document.write(`<h${i}> Encabezado de nivel ${i} </h${i}>` );
        }
}else if (encabezados <=6){
    mensaje = `Se creo ${encabezados} niveles de encabezados ... 📑👍`;
    for(let i = 1; i <=encabezados; i++){
        document.write(`<h${i}> Encabezado de nivel ${i} </h${i}>` );
        }
}else{
    alert("Solo se puede agregar 6 niveles de encabezado 😪");
}

alert(mensaje);



//_______Opcion 2
//Condicion para crear el ciclo
// if(encabezados > 6){
//     alert("Solo se puede agregar 6 niveles de encabezado 😪");
// }else{
//     for(let i = 1; i <=encabezados; i++){
//     document.write(`<h${i}> Encabezado de nivel ${i} </h${i}>` );
//     }
// }

// //Codicion para colocar el texto adecuado y no agregar mas de 6 niveles de encabezados
// if(encabezados === 1){
//     mensaje = `se creo 1 nivel de encabezado ... 📑👍`; 
// }else if(encabezados <=6){
//     mensaje = `Se creo ${encabezados} niveles de encabezados ... 📑👍`; 
// }else{
//     alert("Ingrese un valor adecuado");
// }

// alert(mensaje);





