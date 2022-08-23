
//Calculadora con funciones
/* function calculadora(numeroUno, numeroDos, operacion) {
    switch (operacion) {
      case "+":
       return numeroUno + numeroDos;
        break;
  
      case "-":
        return numeroUno - numeroDos;
        break;
  
      case "*":
        return numeroUno * numeroDos;
        break;
  
      case "/":
        return numeroUno / numeroDos;
        break;
  
      default:
        return "operacion no definida";
        break;
    }
  }
  

  let resultado = calculadora(8, 71, "-");
  console.log(resultado); */

//______________________
/*   function esPar(numero) {
    if (numero % 2 === 0) {
        resultado = "El numero es par";
    }else{
        resultado = "El numero es impar";
    }
    
    return resultado;
  } */



//   function saludar() {
//     let resultado = "Hola";

//     console.log(resultado);
// }

// saludar();
// console.log(resultado);

/* const suma = function (a, b) {return a + b};
const resta = function (a, b) {return a - b};
console.log(suma(4,5)); */

//__________arrow function
/* const suma = (num1, num2) => {return num1 + num2;};
console.log(suma(4,5)); */

const suma = (a, b) => a + b;
const resta = (a, b) => a - b;
const iva = x => x * 0.16;

let precio = 1000;
let descuento = 100;

let nuevoPrecio = resta(suma(precio, iva(precio)), descuento)
                // = resta(suma(1000, iva * 1000), 100)
                // = resta(suma(1000, 0.16 * 1000), 100)
                // = resta(suma(1000, 160), 100)
                // = resta((1000, 160), 100)
                // = resta(1160, 100)
                // = (1160, 100)
                // = 1060
console.log(nuevoPrecio);