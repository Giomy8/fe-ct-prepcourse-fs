/*⚠️ NO MODIFIQUES EL NOMBRE DE LAS DECLARACIONES ⚠️*/

function deObjetoAarray(objeto) {
   // Recibes un objeto. Tendrás que crear un arreglo de arreglos.
   // Cada elemento del arreglo padre será un nuevo arreglo que contendrá dos elementos.
   // Estos elementos debe ser cada par clave:valor del objeto recibido.
   // [EJEMPLO]: {D: 1, B: 2, C: 3} ---> [['D', 1], ['B', 2], ['C', 3]].
   // Tu código:
  var arrayDeArrays = Object.entries(objeto);
  return arrayDeArrays;
}
var objeto = {D: 1, B: 2, C: 3};
var arregloDeArreglos = deObjetoAarray(objeto);
console.log(arregloDeArreglos);

function numberOfCharacters(string) {
   // La función recibe un string. Debes recorrerlo y retornar un objeto donde cada propiedad es una de las
   // letras del string, y su valor es la cantidad de veces que se repite en el string.
   // Las letras deben estar en orden alfabético.
   // [EJEMPLO]: "adsjfdsfsfjsdjfhacabcsbajda" ---> { a: 5, b: 2, c: 2, d: 4, f: 4, h:1, j: 4, s: 5 }
   // Tu código:
   var objeto = {};
  for (let i = 0; i < string.length; i++) {
    var letra = string.charAt(i);
    if (!objeto[letra]) {
      objeto[letra] = 1;
    } else {
      objeto[letra]++;
    }
  }
  var objetoOrdenado = {};
  Object.keys(objeto).sort().forEach(function(key) {
    objetoOrdenado[key] = objeto[key];
  });
  return objetoOrdenado;
}
var stringDeEjemplo = "adsjfdsfsfjsdjfhacabcsbajda";
var objetoDeLetras = numberOfCharacters(stringDeEjemplo);
console.log(objetoDeLetras);

function capToFront(string) {
   // Recibes un string con algunas letras en mayúscula y otras en minúscula.
   // Debes enviar todas las letras en mayúscula al comienzo del string.
   // Retornar el string.
   // [EJEMPLO]: soyHENRY ---> HENRYsoy
   // Tu código:
   var arregloDeCaracteres = string.split("");
  var letrasMayusculas = arregloDeCaracteres.filter((caracter) => caracter === caracter.toUpperCase());
  var letrasMinusculas = arregloDeCaracteres.filter((caracter) => caracter === caracter.toLowerCase());
  var nuevoString = letrasMayusculas.join("") + letrasMinusculas.join("");
  return nuevoString;
}
var stringDeEjemplo = "soyHENRY";
var nuevoString = capToFront(stringDeEjemplo);
console.log(nuevoString); 

function asAmirror(frase) {
   // Recibes una frase. Tu tarea es retornar un nuevo string en el que el orden de las palabras sea el mismo.
   // La diferencia es que cada palabra estará escrita al inverso.
   // [EJEMPLO]: "The Henry Challenge is close!"  ---> "ehT yrneH egnellahC si !esolc"
   // Tu código:
   var palabras = frase.split(" ");
  var palabrasInvertidas = palabras.reverse().map((palabra) => {
    var caracteres = palabra.split("");
    var caracteresInvertidos = caracteres.reverse();
    var palabraInvertida = caracteresInvertidos.join("");
    return palabraInvertida;
  });
  var fraseInvertida = palabrasInvertidas.join(" ");
  return fraseInvertida;
}
var fraseDeEjemplo = "The Henry Challenge is close!";
var fraseInvertida = asAmirror(fraseDeEjemplo);
console.log(fraseInvertida);

function capicua(numero) {
   // Si el número que recibes es capicúa debes retornar el string: "Es capicua".
   // Caso contrario: "No es capicua".
   // Tu código:
   var stringDeNumero = numero.toString();
  var arregloDeCaracteres = stringDeNumero.split("");
  var arregloDeCaracteresInvertidos = arregloDeCaracteres.reverse();
  var stringInvertido = arregloDeCaracteresInvertidos.join("");
  if (stringDeNumero === stringInvertido) {
    return "Es capicua";
  } else {
    return "No es capicua";
  }
}
var numeroDeEjemplo = 12321;
var resultado = capicua(numeroDeEjemplo);
console.log(resultado);

function deleteAbc(string) {
   // Tu tarea es eliminar las letras "a", "b" y "c" del string recibido.
   // Retorna el string sin estas letras.
   // Tu código:
   var nuevoString = string.replace(/[abc]/g, "");
  return nuevoString;
}
var stringDeEjemplo = "abcdefg";
var nuevoString = deleteAbc(stringDeEjemplo);
console.log(nuevoString);

function sortArray(arrayOfStrings) {
   // Recibes un arreglo de strings.
   // Debe retornar un nuevo arreglo, pero con las palabras ordenadas en orden creciente a partir
   // de la longitud de cada string.
   // [EJEMPLO]: ["You", "are", "beautiful", "looking"]  ---> [“You", "are", "looking", "beautiful"]
   // Tu código:
         var nuevoArreglo = arrayOfStrings.sort((a, b) => {
        if (a.length > b.length) {
          return 1;
        } else if (a.length < b.length) {
          return -1;
        } else {
          return 0;
        }
      });
      return nuevoArreglo;
    }    
var arregloDeEjemplo = ["You", "are", "beautiful", "looking"];
var nuevoArreglo = sortArray(arregloDeEjemplo);
console.log(nuevoArreglo);


function buscoInterseccion(array1, array2) {
   // Recibes dos arreglos de números.
   // Debes retornar un nuevo arreglo en el que se guarden los elementos en común entre ambos arreglos.
   // [EJEMPLO]: [4,2,3] U [1,3,4] = [3,4].
   // Si no tienen elementos en común, retornar un arreglo vacío.
   // [PISTA]: los arreglos no necesariamente tienen la misma longitud.
   // Tu código:
   var nuevoArreglo = [];
  for (var i = 0; i < array1.length; i++) {
    for (var j = 0; j < array2.length; j++) {
      if (array1[i] === array2[j]) {
        nuevoArreglo.push(array1[i]);
      }
    }
  }
  return nuevoArreglo;
}
var arreglo1DeEjemplo = [4, 2, 3];
var arreglo2DeEjemplo = [1, 3, 4];
var nuevoArreglo = buscoInterseccion(arreglo1DeEjemplo, arreglo2DeEjemplo);
console.log(nuevoArreglo); 

/*⚠️ NO MODIFIQUES NADA DEBAJO DE ESTO ⚠️*/
module.exports = {
   deObjetoAarray,
   numberOfCharacters,
   capToFront,
   asAmirror,
   capicua,
   deleteAbc,
   sortArray,
   buscoInterseccion,
};
