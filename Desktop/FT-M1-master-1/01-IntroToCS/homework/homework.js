'use strict'

function BinarioADecimal(num) {
  // tu codigo aca}
var a = num.split('');
    var tam = a.length;
var suma = 0;

  for (let i = 0; i < tam; i++) {
    suma += a[i] * Math.pow(2, tam - 1) - 1;
  }
return suma;
}

function DecimalABinario(num) {
  // tu codigo aca

var a, b = ''
  while (num > 0) {
  b += (num%2).toString();
  console.log(b)
    num = Math.floor(num/2);

  }
  a = b.split('').reverse();
var c = a.join('');
  return c;
}


module.exports = {
  BinarioADecimal,
  DecimalABinario,
}
