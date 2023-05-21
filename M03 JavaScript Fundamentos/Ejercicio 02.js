/*⚠️ NO MODIFIQUES EL NOMBRE DE LAS DECLARACIONES ⚠️*/
/*2️⃣ EJERCICIO 02 2️⃣*/

function devolverString(string) {
   // Debe retornar un string.
   // Tu código:
   
return string

}
//console.log(devolverString("rosa"))

// ⛔️ "X" e "Y" son números.

function suma(x, y) {
   // Retorna el resultado de su suma.
   // Tu código:
      //console.log(x + y);
   var numero=x + y
   return numero

}
//console.log(suma(7,4))

function resta(x, y) {
   // Retorna el resultado de la resta.
   // Tu código:
      //console.log(x - y);

   var guion=(x - y)
   return guion
}
//console.log(resta(24,12))

function divide(x, y) {
   // Retorna el resultado de su división.
   // Tu código:
   //console.log(x / y);

   var asterizco=x/y
   return asterizco
}
//console.log(divide(27,9))

function multiplica(x, y) {
   // Retorna el resultado de su multiplicación.
   // Tu código:
      //console.log(x * y);

   var por=x*y
   return por
}
//console.log(multiplica(45,50))

function obtenerResto(x, y) {
   // Obten el resto de la división de "x" entre "y".
   // Tu código:
      //console.log(x % y);

   var restante=x%y
   return restante
}
//console.log(obtenerResto(70,21))

/*⚠️ NO MODIFIQUES NADA DEBAJO DE ESTO ⚠️*/
module.exports = {
   devolverString,
   suma,
   resta,
   divide,
   multiplica,
   obtenerResto,
};
