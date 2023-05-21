/*⚠️ NO MODIFIQUES EL NOMBRE DE LAS DECLARACIONES ⚠️*/

function devolverPrimerElemento(array) {
   // Retornar el primer elemento del arreglo recibido por parámetro.
   // Tu código:
   return array[0];
}
console.log(devolverPrimerElemento([77, 2, 3, 4, 5,1]));

function devolverUltimoElemento(array) {
   // Retornar el último elemento del arreglo recibido por parámetro.
   // Tu código:
   return array[array.length - 1];
}
console.log(devolverUltimoElemento([4,12,8,17,28]))
function obtenerLargoDelArray(array) {
   // Retornar la longitud del arreglo recibido por parámetro.
   // Tu código:
   return array.length;
}
console.log(obtenerLargoDelArray([1, 2, 3, 4, 5,1]));
function incrementarPorUno(array) {
   // El arreglo recibido por parámetro contiene números.
   // Retornar un arreglo con los elementos incrementados en +1.
   // Tu código:
   newarray=[]
   array.forEach( (incremento) => { 
     incremento=incremento+1 
     newarray.push(incremento)
    } )
    
    return newarray
}
console.log(incrementarPorUno([1,4,12,8,17,28]));

function agregarItemAlFinalDelArray(array, elemento) {
   // Agrega el "elemento" al final del arreglo recibido.
   // Retorna el arreglo.
   // Tu código:
   array.push(elemento);
   return array
}
console.log(agregarItemAlFinalDelArray(['perro','gato','pollito'],'pato'));

function agregarItemAlComienzoDelArray(array, elemento) {
   // Agrega el "elemento" al comienzo del arreglo recibido.
   // Retorna el arreglo.
   // Tu código:
   array.unshift(elemento);
   return array
}
console.log(agregarItemAlComienzoDelArray(['amarillo','azul'],'rojo'))

function dePalabrasAFrase(palabras) {
   // El argumento "palabras" es un arreglo de strings.
   // Retornar un string donde todas las palabras estén concatenadas
   // con un espacio entre cada palabra.
   // Ejemplo: ['Hello', 'world!'] -> 'Hello world!'.
   // Tu código:
   return palabras.join(' ');
}
console.log(dePalabrasAFrase(['Hola', 'mundo', 'desde', 'JavaScript!']));

function arrayContiene(array, elemento) {
   // Verifica si el elemento existe dentro del arreglo recibido.
   // Retornar true si está, o false si no está.
   // Tu código:
   return array.includes(elemento);

   }
console.log(arrayContiene([1, 2, 3, 4, 5], 3));

function agregarNumeros(arrayOfNums) {
   // El parámetro "arrayOfNums" debe ser un arreglo de números.
   // Suma todos los elementos y retorna el resultado.
   // Tu código:
   var suma = 0;
   arrayOfNums.forEach((elemento) => {
      suma=elemento+suma
      //suma +=elemento
   })
   return suma;
}
console.log(agregarNumeros([1,2,3,4,5]));




function promedioResultadosTest(resultadosTest) {
   // El parámetro "resultadosTest" es un arreglo de números.
   // Itera (en un bucle) los elementos del arreglo y devuelve el promedio de las notas.
   // Tu código:
 var suma=0;
 resultadosTest.forEach((numero)=>{
   suma=numero+suma
 })
 var promedio=suma/resultadosTest.length
 return promedio;
}
console.log(promedioResultadosTest([7,4,2,3,20,17]))


function numeroMasGrande(arrayOfNums) {
   // El parámetro "arrayOfNums" es un arreglo de números.
   // Retornar el número más grande.
     // Tu código:
     var mayor=0;
          arrayOfNums.forEach((numero)=>{
            if(mayor<numero){
               mayor=numero;
            }
     });
     return mayor;
}
console.log(numeroMasGrande([40,20,33,82,17,0]));

function multiplicarArgumentos(arguments) {
   // Usa la palabra clave `arguments` para multiplicar todos los argumentos y devolver el producto.
   // Si no se pasan argumentos retorna 0. Si se pasa un argumento, simplemente retórnalo.
   // [PISTA]: "arguments" es un arreglo.
   // Tu código:
   var product=0;
   if (arguments.length === 0) {
      return 0;
    } else if (arguments.length === 1) {
      return arguments[0];
    }
    
    arguments.forEach(argument => {
      product *= argument;
      //product= product*argument;
    });
    
    return product;

}
console.log(multiplicarArgumentos([40,20,33,82,17,0]));

function cuentoElementos(array) {
   // Desarrolla una función que retorne la cantidad de elementos del arreglo cuyo valor sea mayor que 18.
   // Tu código:
   var cantidad=0;
   array.forEach((dato)=> {
      if(dato>18){
         cantidad++;
      }
   });
   return cantidad;
}
console.log(cuentoElementos([2,40,24,8,22,18]))

function diaDeLaSemana(numeroDeDia) {
   // Supongamos que los días de la semana se codifican como 1 = Domingo, 2 = Lunes y así sucesivamente.
   // Realiza una función que, dado el número del día de la semana, retorne: "Es fin de semana"
   // si el día corresponde a "Sábado" o "Domingo", y "Es dia laboral" en caso contrario.
   // Tu código:

   if (numeroDeDia===7 || numeroDeDia===1) {
      return "Es fin de semana"
   } else {
      return "Es día laboral"
   }
}
console.log(diaDeLaSemana(3))

function empiezaConNueve(num) {
   // Esta función recibe por parámetro un número.
   // Debe retornar true si el entero inicia con 9 y false en otro caso.
   // Tu código:
   //return num.toString().startsWith("9"); (esta es otra manera de resolver el ejercicio).

      var x=num.toString()
     //console.log(x[0])
   if (x[0]==9){
      return true;
   }else {
      return false;
   }

}
console.log(empiezaConNueve(9524114))

function todosIguales(array) {
   // Si todos los elementos del arreglo son iguales, retornar true.
   // Caso contrario retornar false.
   // Tu código:
   var igual =0;
   var guardar = true;
   array.forEach((elemento)=>{
      if(igual===0){
       igual=elemento  
      }
//console.log(igual + '-' + elemento)
      if(igual!=elemento){
       guardar= false;
        }

   })

  return guardar;

}

console.log(todosIguales([2,2,1,2,2]));

function mesesDelAño(array) {
   // El arreglo contiene algunos meses del año desordenados. Debes recorrerlo, buscar los meses "Enero",
   // "Marzo" y "Noviembre", guardarlos en un nuevo arreglo y retornarlo.
   // Si alguno de los meses no está, retornar el string: "No se encontraron los meses pedidos".
   // Tu código:

   var mesesPedidos = [];
   var enero = false;
   var marzo = false;
   var noviembre = false;

   array.forEach((mes)=>{
      if (mes === "Enero") {
         mesesPedidos.push(mes);
         enero = true;
       } else if (mes === "Marzo") {
         mesesPedidos.push(mes);
         marzo = true;
       } else if (mes === "Noviembre") {
         mesesPedidos.push(mes);
         noviembre = true;
       }
   });
   if (enero && marzo && noviembre) {
      return mesesPedidos;
    } else {
      return "No se encontraron los meses pedidos";
    }
}
console.log(mesesDelAño(["Enero","Marzo","Septiembre","Noviembre","Octubre"]));

function tablaDelSeis() {
   // Escribe una función que muestre la tabla de multiplicar del 6 (del 0 al 60).
   // La función devuelve un arreglo con los resultados de la tabla de multiplicar del 6 en orden creciente.
   // Tu código:
   var resultados = [];
   var multiplicador = 0;
   [0, 1, 2, 3, 4, 5, 6, 7, 8, 9, 10].forEach((numero)=> {
     var resultado = numero * 6;
     resultados.push(resultado);
     console.log("6 x " + multiplicador + " = " + resultado);
     multiplicador++;
   });
   return resultados;
}
console.log(tablaDelSeis(6))

function mayorACien(array) {
   // La función recibe un arreglo con enteros entre 0 y 200.
   // Recorrerlo y retornar un arreglo con todos los valores mayores a 100 (no incluye el 100).
   // Tu código:
   var mayores = [];
  array.forEach((numero) => {
    if (numero > 100) {
      mayores.push(numero);
    }
  });

  return mayores;
}
console.log(mayorACien([50, 75, 100, 125, 150, 175, 200]));

/* ----------------------------------------------------------------------------------
💪 EXTRA CREDIT EXTRA CREDIT EXTRA CREDIT EXTRA CREDIT EXTRA CREDIT  EXTRA CREDIT 💪
-------------------------------------------------------------------------------------*/

function breakStatement(num) {
   // Iterar en un bucle aumentando en 2 el número recibido hasta un límite de 10 veces.
   // Guardar cada nuevo valor en un arreglo y retornarlo.
   // Si en algún momento el valor de la suma y la cantidad de iteraciones coinciden, debe interrumpirse
   // la ejecución y retornar el string: "Se interrumpió la ejecución".
   // [PISTA]: utiliza el statement 'break'.
   // Tu código:
   const resultado = [];
  var suma = num;
  for (let i = 0; i < 10; i++) {
    suma += 2;
    resultado.push(suma);
    if (suma === i) {
      return "Se interrumpió la ejecución";
      break;
    }
  }
  return resultado;

}
console.log(breakStatement([7, 9, 11, 13, 15, 17, 19, 21, 23, 25]));

function continueStatement(num) {
   // Iterar en un bucle aumentando en 2 el número recibido hasta un límite de 10 veces.
   // Guardar cada nuevo valor en un array y retornarlo.
   // Cuando el número de iteraciones alcance el valor 5, no se suma ese caso y
   // se continua con la siguiente iteración.
   // [PISTA]: utiliza el statement 'continue'.
   // Tu código:
   const resultado = [];
  var suma = num;
  for (let i = 0; i < 10; i++) {
    if (i === 5) {
      continue;
    }
    suma += 2;
    resultado.push(suma);
  }
  return resultado;

}
console.log(continueStatement([7, 9, 11, 13, 17, 19, 21, 23, 25]));

/*⚠️ NO MODIFIQUES NADA DEBAJO DE ESTO ⚠️*/
module.exports = {
   devolverPrimerElemento,
   devolverUltimoElemento,
   obtenerLargoDelArray,
   incrementarPorUno,
   agregarItemAlFinalDelArray,
   agregarItemAlComienzoDelArray,
   dePalabrasAFrase,
   arrayContiene,
   agregarNumeros,
   promedioResultadosTest,
   numeroMasGrande,
   multiplicarArgumentos,
   cuentoElementos,
   diaDeLaSemana,
   empiezaConNueve,
   todosIguales,
   mesesDelAño,
   tablaDelSeis,
   mayorACien,
   breakStatement,
   continueStatement,
};
