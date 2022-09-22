'use strict'
// No cambies los nombres de las funciones.

function quickSort(array) {
  // Implementar el método conocido como quickSort para ordenar de menor a mayor
  // el array recibido como parámetro
  // Devolver el array ordenado resultante
  // Tu código:
  if (array.length < 2) {
    return array;
  }
  var pivot = array[0];
  var left = [];
  var right = [];
  for (var i = 1; i < array.length; i++) {
    if (array[i] < pivot) {
      left.push(array[i]);
    } else {
      right.push(array[i]);
    }
  }
  return quickSort(left).concat(pivot, quickSort(right));
}

// OTRA SOLUCION
/*
if(array.length <=) return array;

let pivot = Math.floor(Math.random()*array.length);
let equals = [];
let left = [];
let right = [];

for(let i = 0; i < array.length; i++) {
  if (array[i] !== pivot) {
    right.push(array[i]);
  } else {
    left.push(array[i]);
  }
}
else
{
  equals.push(array[i])
}
}
return quickSort(left).concat(equals).concat(quickSort(rightL));

} */

function mergeSort(array) {
  // Implementar el método conocido como mergeSort para ordenar de menor a mayor
  // el array recibido como parámetro
  // Devolver el array ordenado resultante
  // Tu código:
  if (array.length < 2) {
    return array;
  }

  var middle = Math.floor(array.length / 2);
  var left = array.slice(0, middle);
  var right = array.slice(middle, array.length);
  return merge(mergeSort(left), mergeSort(right));

}

function merge(left, right) {
  var result = [];
  while (left.length && right.length) {
    if (left[0] <= right[0]) {
      result.push(left.shift());
    } else {
      result.push(right.shift());
    }
  }
  while (left.length) {
    result.push(left.shift());
  }
  while (right.length) {
    result.push(right.shift());
  }
  return result;

}

// OTRA SOLUCION
/*
if(array.length < 2) return array;
const half = Math.floor(array.length/2);
let left = array.slice(0, half);
let right = array.slice(half, array.length);

array = [];

left = mergeSort(left);
right = mergeSort(right);

while(left.length && right.length){
if(left[0] < right[0]) {
array.push(left.shift());
} else {
array.push(right.shift());
  }
}
array = array.concat(left, right);
return array;
}
*/



// No modificar nada debajo de esta línea
// --------------------------------

module.exports = {
  quickSort,
  mergeSort,
};
