let array = Array.from({ length: 100 }, (el, index) => index);

// Obtener
console.log(array[8]);
console.log(array[10]);

// Agregar elementos
array.push(100); // final
array.unshift(-1); // principio
array.splice(50, 0, "Hola", "Mundo");

console.log(array);

// Remover elementos
array.pop(); // final
array.shift(); // principio
array.splice(49, 2); // un indice especifico

console.log(array);

let object = { a: 1, b: 2, c: 3, d: 4, 'other-key': 5 };

// Obtener
console.log(object.b);
console.log(object['other-key']);

const key = 'a';
console.log(object[key]);

// Agregar o modificar elementos
object.z = 6;
object['f'] = 7;

object.a = 8;

console.log(object);

// Eliminar un valor
delete object.z;
delete object['f'];

console.log(object);

// Valor o Referencia
// Mutabilidad o Inmutabiladad

// valor: String, Number, Boolean, undefined, null
// referencia: Array, Object

// Inmutable
let array1 = [1,2,3,4,5];

// Agregar un elemento
let array2 = array1.concat(6);
let array3 = [ ...array1, 6 ];
console.log(array1);
console.log(array2);

// Remover un elemento
let array4 = array1.slice(0, 3).concat(array1.slice(4));
let array5 = array1.slice(1);
let array6 = array1.slice(0, -1);
console.log(array1);
console.log(array4);

// crear una copia
let array7 = [ ...array1 ];
let array8 = array1.slice(0);
let array9 = Array.from(array1);

let object1 = { a: 1 };

// Agregar un elemento
let object2 = { ...object1, b: 2 };
console.log(object1);
console.log(object2);

// Modificar un elemento
let object3 = { ...object1, a: 5 };
console.log(object1);
console.log(object3);

// Eliminar un elemento
let { a, ...object4 } = object1;
console.log(object1);
console.log(object4);

// Crear una copia
let object5 = { ...object1 };
let object6 = Object.assign({}, object1);
console.log(object1 !== object5);
console.log(object1 !== object6);
