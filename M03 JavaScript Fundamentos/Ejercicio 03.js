/*⚠️ NO MODIFIQUES EL NOMBRE DE LAS DECLARACIONES ⚠️*/
/*3️⃣ EJERCICIO 03 3️⃣*/

function sonIguales(b, c) {
   // Retorna true si "x" e "y" son iguales.
   // De lo contrario, retorna false.
   // Tu código:

if (b === c) {
   
   return true;
} else {
  
   return false;
}

}

//console.log (sonIguales(7,4));

function tienenMismaLongitud(str1, str2) {
   // Retorna true si los dos strings tienen la misma longitud.
   // De lo contrario, retorna false.
   // Tu código:

   if (str1.lenght === str2.lenght) {
      return true;
   } else {
      return false;
   }
}


//console.log (tienenMismaLongitud("Giomy","Diego"));

function menosQueNoventa(num) {
   // Retorna true si el argumento "num" es menor que noventa.
   // De lo contrario, retorna false.
   // Tu código:
   if (num<90) {
      return true;
   } else {
      return false;
   }
}

//console.log(menosQueNoventa(40))

function mayorQueCincuenta(num) {
   // Retorna true si el argumento "num" es mayor que cincuenta.
   // De lo contrario, retorna false.
   // Tu código:
   if (num>50) {
      return true;
   } else {
      return false;
   }
}

///console.log(mayorQueCincuenta(51))

function esPar(num) {
   // Retorna true si "num" es par.
   // De lo contrario, retorna false.
   // Tu código:
   if ((num % 2)==0) {
      return true;
   } else {
      return false;
   }
}

//console.log(esPar(41));

function esImpar(num) {
   // Retorna true si "num" es impar.
   // De lo contrario, retorna false.
   // Tu código:

      if ((num % 2)==1) {
         return true;
      } else {
         return false;
      }
}

console.log(esImpar(35))


/*⚠️ NO MODIFIQUES NADA DEBAJO DE ESTO ⚠️*/
module.exports = {
   tienenMismaLongitud,
   sonIguales,
   menosQueNoventa,
   mayorQueCincuenta,
   esPar,
   esImpar,
};
