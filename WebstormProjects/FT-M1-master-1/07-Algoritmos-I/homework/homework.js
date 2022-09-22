'use strict'
// No cambies los nombres de las funciones.

function factorear(num) {
  // Factorear el número recibido como parámetro y devolver en un array
  // los factores por los cuales se va dividiendo a dicho número (De menor a mayor)
  // Ej: factorear(180) --> [1, 2, 2, 3, 3, 5] Ya que 1x2x2x3x3x5 = 180 y son todos números primos
  // Tu código:

  var factores = [1]; // [1]
  var i = 2; // aqui va incrementando en cada vuelta
  while (num > 1){ // 10 > 1 ?
    if (num % i == 0){ // 10 % 2 = 0
      factores.push(i);
      num = num / i; // 10 = 10/2--->5
    } else { // resuelto el if se vuelve hacer el recorrido
      i++;
    }
  }
  return factores;

}
// 10

function bubbleSort(array) {
  // Implementar el método conocido como bubbleSort para ordenar de menor a mayor
  // el array recibido como parámetro
  // Devolver el array ordenado resultante
  // Tu código:
  for (var i = 0; i < array.length; i++) {
    for (var j = 0; j < array.length; j++) {
      if (array[j] > array[j + 1]) {
        var ordenar = array[j];
        array[j] = array[j + 1];
        array[j + 1] = ordenar;
      }
    }
  }
  return array;
}


function insertionSort(array) {
  // Implementar el método conocido como insertionSort para ordenar de menor a mayor
  // el array recibido como parámetro utilizando arreglos
  // Devolver el array ordenado resultante
  // Tu código:

  // ejemplo [2, 5, 9, 7, 3]
  for (var i = 0; i < array.length; i++) {
    var ordenar = array[i];
    var j = i - 1;
    while (j >= 0 && array[j] > ordenar) {
      array[j + 1] = array[j];
      j--;
    }
    array[j + 1] = ordenar;
  }
  return array;
}

// Otra solucion
/*
  for(let i = 1; i < array.length; i++) {
    let j = i - 1;
    let aux = array[i];

    while( j >= 0 && aux < array[j]){
      array[j + ] = array[j];
      j--
      }
    array[j + 1] = aux;
}
    return array;
}

 */


function selectionSort(array) {
  // Implementar el método conocido como selectionSort para ordenar de menor a mayor
  // el array recibido como parámetro utilizando dos arreglos
  // Devolver el array ordenado resultante
  // Tu código:
  var sorted = [];
  var min = array[0];
  var minIndex = 0;
  while (array.length > 0) {
    for (var i = 0; i < array.length; i++) {
      if (array[i] < min) {
        min = array[i];
        minIndex = i;
      }
    }
    sorted.push(min);
    array.splice(minIndex, 1);
    min = array[0];
    minIndex = 0;
  }
  return sorted;
}
// OTRA SOLUCION
/*
  for (let i = 0; i < array.length; i++) {
    let min = i;
  for (let j = 0; j <array.length; j++) {
    if(array[j] < array[min]){
    min = array[j];
  }
}
    if(i !== min){
  let aux = array[i];
  array[i] = array[min];
  array[min] = aux;
  }
}
  return array

}

 */


// No modificar nada debajo de esta línea
// --------------------------------

module.exports = {
  factorear,
  bubbleSort,
  insertionSort,
  selectionSort,
};
