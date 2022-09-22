
# Homework JavaScript Avanzado I

## Scope & Hoisting

Determiná que será impreso en la consola, sin ejecutar el código.

> Investiga cuál es la diferencia entre declarar una variable con `var` y directamente asignarle un valor.
// Las variables declaradas se limitan al contexto de ejecución en el cual son declaradas. Las variables no declaradas siempre son globales.

```javascript
x = 1;
var a = 5;
var b = 10;
var c = function(a, b, c) {
  var x = 10;
  console.log(x);  // x es = 10
  console.log(a); // a es = 8
  var f = function(a, b, c) {
    b = a;
    console.log(b); // aqui b es = 8 o sea (a), ya que linea anterior fue reasignado valor
    b = c;
    var x = 5;
  }
  f(a,b,c);
  console.log(b); // vale 9
}
c(8,9,10);
console.log(b); // aqui es 10 (linea 14)
console.log(x); // aqui es 1 (linea 12)
```

```javascript
console.log(bar); // undefined
console.log(baz); // error
foo(); // 'Hola'
function foo() { console.log('Hola!'); }
var bar = 1;
baz = 2;
```F

```javascript
var instructor = "Tony";
if(true) {
    var instructor = "Franco";
}
console.log(instructor); //eso da Franco
```

```javascript
var instructor = "Tony";
console.log(instructor); // lee Tony
(function() {
   if(true) {
      var instructor = "Franco";
      console.log(instructor); // Franco
   }
})();
console.log(instructor); // lee Tony porque mira linea 51 en contexto global
```

```javascript
var instructor = "Tony";
let pm = "Franco";
if (true) {
    var instructor = "The Flash";
    let pm = "Reverse Flash";
    console.log(instructor); // Teh Flash porque est+a dentro de la funcion
    console.log(pm); // REverse Flash
}
console.log(instructor); // the Flash
console.log(pm); // Franco
```
### Coerción de Datos

¿Cuál crees que será el resultado de la ejecución de estas operaciones?:

```javascript
6 / "3" // devuelve 2 ya que javascript transforma el string "3" en numero 3
"2" * "3" // devuelve 6 ya que js convierte los string en numeros
4 + 5 + "px" // da 9px
"$" + 4 + 5 // $45
"4" - 2 // da 2
"4px" - 2 // NaN
7 / 0 // infinity 
{}[0] // depende del motor donde se ejecute..
parseInt("09") // 9, porque lo convierte a numero
5 && 2 // 2 porque el amperson toma el 2 true
2 && 5 // 5 mismo criterio anterior
5 || 0 // devuelve 5 porque el primer elemento es verdadero
0 || 5 // da 0 porque el primer elemento es falso
[3]+[3]-[10] // da 23 porque concatena los 2 primeros elementos y le resta 10. Cosas de js
!(3>2>1 // false
[]!=![] // false
```

> Si te quedó alguna duda repasá con [este artículo](http://javascript.info/tutorial/object-conversion).


### Hoisting

¿Cuál es el output o salida en consola luego de ejecutar este código? Explicar por qué:

```javascript
function test() {
   console.log(a); // undef por el hoisting
   console.log(foo()); // 2 por hoisting

   var a = 1;
   function foo() {
      return 2;
   }
}

test();
```

Y el de este código? :

```javascript
var snack = 'Meow Mix';

function getFood(food) {
    if (food) {
        var snack = 'Friskies';
        return snack;
    }
    return snack;
}

getFood(false);
```


### This

¿Cuál es el output o salida en consola luego de ejecutar esté código? Explicar por qué:

```javascript
var fullname = 'Juan Perez';
var obj = {
   fullname: 'Natalia Nerea',
   prop: {
      fullname: 'Aurelio De Rosa',
      getFullname: function() {
         return this.fullname;
      }
   }
};

console.log(obj.prop.getFullname()); // Aurelio De Rosa

var test = obj.prop.getFullname; // function() {
                                //  return this.fullname;

console.log(test());// devuelve undefined
```

### Event loop

Considerando el siguiente código, ¿Cuál sería el orden en el que se muestra por consola? ¿Por qué?

```javascript
function printing() {
   console.log(1);
   setTimeout(function() { console.log(2); }, 1000);
   setTimeout(function() { console.log(3); }, 0);
   console.log(4);
}

printing();
// 1 porque no espera nada
// 4 porque no espera nada
// 3
// 2 al final porque debe esperar 1 segundo
```
