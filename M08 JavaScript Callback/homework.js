/*⚠️ NO MODIFIQUES EL NOMBRE DE LAS DECLARACIONES ⚠️*/

function mayuscula(nombre) {
   // Esta función recibe un nombre (string).
   // Debe devolver el mismo nombre, pero con la primera letra en mayúscula.
   // [Ejemplo]: "mario" ----> "Mario".
   // Tu código:
   return nombre.charAt(0).toUpperCase() + nombre.slice(1);
}
console.log(mayuscula("mario"));

function invocarCallback(cb) {
   // Invoca/ejecuta el callback `cb`.
   // [NOTA]: no debes reotrnar nada.
   // Tu código:
   cb();
}
function miCallback() {
   console.log("Hola desde el callback");
 }
 invocarCallback(miCallback);

function operacionMatematica(num1, num2, cb) {
   // En este ejercicio recibirás dos números y un callback.
   // El callback realiza una operación matemática, por lo que necesita de los dos números.
   // Retorna el resultado del callback pasándole como parámetros los números.
   // Tu código:
   return cb(num1, num2);
}
function suma(a, b) {
   return a + b;
 }
 var resultado = operacionMatematica(2, 3, suma);
console.log(resultado);

function sumarArray(arrayOfNumbers, cb) {
   // Recibes un arreglo de números y un callback.
   // Suma todos los números del arreglo.
   // Este resultado debes pasárselo como argumento al callback recibido.
   // [NOTA]: no debes reotrnar nada.
   // Tu código:
   var suma = arrayOfNumbers.reduce((acc, curr) => acc + curr, 0);
  cb(suma);
}
function mostrarResultado(resultado) {
   console.log("El resultado es: " + resultado);
 }
var numeros = [1, 2, 3, 4, 5];
sumarArray(numeros, mostrarResultado);

function forEach(array, cb) {
   // Recibes un arreglo y un callback.
   // Debes iterar sobre el arreglo, y por cada elemento ejecutar el callback.
   // Debes pasarle el elemento como argumento al callback.
   // Tu código:
   for (let i = 0; i < array.length; i++) {
      cb(array[i]);
}
}
function mostrarElemento(elemento) {
   console.log("El elemento es: " + elemento);
 }
var numeros = [1, 2, 3, 4, 5];
forEach(numeros, mostrarElemento);

function map(array, cb) {
   // Debes iterar sobre el arreglo, y cada elemento pasárselo como arguemento al callback.
   // Tiene que guardar el resultado devuelto por el callback en cada elemento dentro de un nuevo arreglo.
   // Retorna el nuevo arreglo.
   // Tu código:
   const newArray = [];
  for (let i = 0; i < array.length; i++) {
    const resultado = cb(array[i]);
    newArray.push(resultado);
  }
  return newArray;
}
function multiplicarPorDos(numero) {
   return numero * 2;
 }
var numeros = [1, 2, 3, 4, 5];
var numerosMultiplicadosPorDos = map(numeros, multiplicarPorDos);
console.log(numerosMultiplicadosPorDos);

function filter(arrayOfStrings) {
   // Debes identificar todos los elementos el arreglo que comiencen con la letra "a".
   // Luego retorna un nuevo arreglo con estos elementos.
   // Tu código:
   var newArray = arrayOfStrings.filter((elemento) => elemento.startsWith("a") || elemento.startsWith("A"));
  return newArray;
}
var palabras = ["amarillo", "azul", "rojo", "anaranjado", "verde"];
var palabrasConA = filter(palabras);
console.log(palabrasConA);

/*⚠️ NO MODIFIQUES NADA DEBAJO DE ESTO ⚠️*/
module.exports = {
   mayuscula,
   invocarCallback,
   operacionMatematica,
   sumarArray,
   forEach,
   map,
   filter,
};
