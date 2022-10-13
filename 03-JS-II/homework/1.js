var numero = 4 ;

function esPrimo(numero) {
    // Devuelve "true" si "numero" es primo
    // De lo contrario devuelve "falso"
    // Pista: un número primo solo es divisible por sí mismo y por 1
    // Pista 2: Puedes resolverlo usando un bucle `for`
    // Nota: Los números 0 y 1 NO son considerados números primos
      for (let x = 2; x < numero / 2; x++) {
          if (numero % x == 0) return "falso";
      }
      return true;
  }

  console.log(esPrimo(numero));