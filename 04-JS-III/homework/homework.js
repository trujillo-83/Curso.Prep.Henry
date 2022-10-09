// No cambies los nombres de las funciones.

function devolverPrimerElemento(array) {
  // Devuelve el primer elemento de un  array (pasado por parametro)
  // Tu código:

  return array[0];
}
devolverPrimerElemento([1, 2, 3, 3, 4, 4, 4, 4]);

function devolverUltimoElemento(array) {
  // Devuelve el último elemento de un array
  // Tu código:
  return array.pop();
}
devolverUltimoElemento([1, 2, 3, 4, 5]);

function obtenerLargoDelArray(array) {
  // Devuelve el largo de un array
  // Tu código:
  return array.length;
}
obtenerLargoDelArray([1, 2, 3, 4, 5, 5, 6, 0]);

function incrementarPorUno(array) {
  // "array" debe ser una matriz de enteros (int/integers)
  // Aumenta cada entero por 1
  // y devuelve el array
  // Tu código:
  let contador = [];

  for (let i = 0; i < array.length; i++) {
    contador.push(array[i] + 1);
  }
  return contador;
}
incrementarPorUno([1, 2, 3, 4, 5]);

function agregarItemAlFinalDelArray(array, elemento) {
  // Añade el "elemento" al final del array
  // y devuelve el array
  // Tu código:
  array.push(elemento);
  return array;
}
agregarItemAlFinalDelArray([1, 2, 2, 3, 6], "trujillo");

function agregarItemAlComienzoDelArray(array, elemento) {
  // Añade el "elemento" al comienzo del array
  // y devuelve el array
  // Pista: usa el método `.unshift`
  // Tu código:
  array.unshift(elemento);
  return array;
}
agregarItemAlComienzoDelArray([1, 2, 5], "pepe");

function dePalabrasAFrase(palabras) {
  // "palabras" es un array de strings/cadenas
  // Devuelve un string donde todas las palabras estén concatenadas
  // con espacios entre cada palabra
  // Ejemplo: ['Hello', 'world!'] -> 'Hello world!'
  // Tu código:
  return palabras.join(" ");
}
dePalabrasAFrase(["Hello", "world!"]);

function arrayContiene(array, elemento) {
  // Comprueba si el elemento existe dentro de "array"
  // Devuelve "true" si está, o "false" si no está
  // Tu código:
  let contenida = array.includes(elemento);
  if (contenida === true) {
    return true;
  }
  return false;
}
arrayContiene([1, 2, 3, 4], 3);

function agregarNumeros(numeros) {
  // "numeros" debe ser un arreglo de enteros (int/integers)
  // Suma todos los enteros y devuelve el valor
  // Tu código:
  let acumulador = 0;
  for (let i = 0; i < numeros.length; i++) {
    acumulador += numeros[i];
  }
  return acumulador;
}
agregarNumeros([1, 2, 3, 4, 5]);

function promedioResultadosTest(resultadosTest) {
  // "resultadosTest" debe ser una matriz de enteros (int/integers)
  // Itera (en un bucle) los elementos del array, calcula y devuelve el promedio de puntajes
  // Tu código:
  let acumulado = 0;
  for (let i = 0; i < resultadosTest.length; i++) {
    acumulado += resultadosTest[i];
  }
  return acumulado / resultadosTest.length;
}
promedioResultadosTest([7, 8, 9]);

function numeroMasGrande(numeros) {
  // "numeros" debe ser una matriz de enteros (int/integers)
  // Devuelve el número más grande
  // Tu código:
  let contenedor = 0;
  for (let i = 0; i < numeros.length; i++) {
    if (numeros[i] > contenedor) {
      contenedor = numeros[i];
    }
  }
  return contenedor;
}
numeroMasGrande([2, 4, 6, 8, 90]);

function multiplicarArgumentos() {
  // Usa la palabra clave `arguments` para multiplicar todos los argumentos y devolver el producto
  // Si no se pasan argumentos devuelve 0. Si se pasa un argumento, simplemente devuélvelo
  // Escribe tu código aquí:
  let acumulador = 1;
  if (arguments.length === 0) {
    return 0;
  } else if (arguments.length === 1) {
    return arguments[0];
  } else {
    for (let i = 0; i < arguments.length; i++) {
      acumulador *= arguments[i];
    }
    return acumulador;
  }
}
multiplicarArgumentos(3, 4, 5, 6, 7);

function cuentoElementos(arreglo) {
  //Realiza una función que retorne la cantidad de los elementos del arreglo cuyo valor es mayor a 18.
  //Escribe tu código aquí
  let contador = 0;
  for (let i = 0; i < arreglo.length; i++) {
    if (arreglo[i] > 18) {
      contador += 1;
    }
  }
  return contador;
}
cuentoElementos([19, 19, 20, 3]);

function diaDeLaSemana(numeroDeDia) {
  //Suponga que los días de la semana se codifican como 1 = Domingo, 2 = Lunes y así sucesivamente.
  //Realiza una función que dado el número del día de la semana, retorne: Es fin de semana
  //si el día corresponde a Sábado o Domingo y “Es dia Laboral” en caso contrario.
  //Escribe tu código aquí
  if (numeroDeDia === 1 || numeroDeDia === 7) {
    return "Es fin de semana";
  } else {
    return "Es dia Laboral";
  }
}
diaDeLaSemana(1);

function empiezaConNueve(n) {
  //Desarrolle una función que recibe como parámetro un número entero n. Debe retornar true si el entero
  //inicia con 9 y false en otro caso.
  //Escribe tu código aquí
  let numeroNueve = n.toString();
  if (numeroNueve[0] === "9") {
    return true;
  } else {
    return false;
  }
}
empiezaConNueve(908);

function todosIguales(arreglo) {
  //Escriba la función todosIguales, que indique si todos los elementos de un arreglo son iguales:
  //retornar true, caso contrario retornar false.
  //Escribe tu código aquí
  for (let i = 0; i < arreglo.length - 1; i++) {
    if (arreglo[i] !== arreglo[i + 1]) {
      return false;
    }
    return true;
  }
}
todosIguales([2, 2, 2, 2, 2, 2, 2]);

function mesesDelAño(array) {
  //Dado un array que contiene algunos meses del año desordenados, recorrer el array buscando los meses de
  // "Enero", "Marzo" y "Noviembre", guardarlo en nuevo array y retornarlo.
  //Si alguno de los meses no está, devolver: "No se encontraron los meses pedidos"
  // Tu código:
  let acumulador = [];
  for (let i = 0; i < array.length; i++) {
    if (
      array[i] === "Enero" ||
      array[i] === "Marzo" ||
      array[i] === "Noviembre"
    ) {
      acumulador.push(array[i]);
    }
  }
  if (acumulador.length === 3) {
    return acumulador;
  } else {
    return "No se encontraron los meses pedidos";
  }
}
mesesDelAño(["Enero", "Noviembre", "Marzo"]);

function mayorACien(array) {
  //La función recibe un array con enteros entre 0 y 200. Recorrer el array y guardar en un nuevo array sólo los
  //valores mayores a 100 (no incluye el 100). Finalmente devolver el nuevo array.
  // Tu código:
  let nuevoArray = [];
  for (let i = 0; i < array.length; i++) {
    if (array[i] > 100) {
      nuevoArray.push(array[i]);
    }
  }
  return nuevoArray;
}
mayorACien([101, 99, 122, 1, 100, 123]);

function breakStatement(numero) {
  //Iterar en un bucle aumentando en 2 el numero recibido hasta un límite de 10 veces.
  //Guardar cada nuevo valor en un array.
  //Devolver el array
  //Si en algún momento el valor de la suma y la cantidad de iteraciones coinciden, debe interrumpirse la ejecución y
  //devolver: "Se interrumpió la ejecución"
  //Pista: usá el statement 'break'
  // Tu código:
  let acumulador = [];
  let suma = numero;
  for (let i = 0; i < 10; i++) {
    suma = suma + 2;
    if (suma === i) {
      break;
    } else {
      acumulador.push(suma);
    }
  }
  if (acumulador.length < 10) {
    return "Se interrumpió la ejecución";
  } else {
    return acumulador;
  }
}
breakStatement(8);

function continueStatement(numero) {
  //Iterar en un bucle aumentando en 2 el numero recibido hasta un límite de 10 veces.
  //Guardar cada nuevo valor en un array.
  //Devolver el array
  //Cuando el número de iteraciones alcance el valor 5, no se suma en ese caso y se continua con la siguiente iteración
  //Pista: usá el statement 'continue'
  // Tu código:
  /*obeservacion... en realidad no le encontre mucha logica al ejercicio ya que el salto no es visible...
  si le cambio el 5 por 6 o por 3 como quiera arrojara el mismo resultado...le ideal seria.. hacer el salto en 
   la posicion #5*/
  let acumulador = [];
  let suma = numero;
  for (let i = 0; i < 10; i++) {
    
    if(i === 6) continue;
    suma = suma +2;
    acumulador.push(suma);
        
  }return acumulador;
}
continueStatement(9);
// No modificar nada debajo de esta línea
// --------------------------------

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
  mayorACien,
  breakStatement,
  continueStatement,
};
