// ECMAScript

// Parametros por defecto
Car.prototype.accelerate = function(amount = 1, name = 'Simon', age = 25) {
  this.velocity += amount;
}

car.accelerate(undefined, 'Maria'); // amount: 1, name: 'Maria, age: 25

// Plantillas literales
let name = 'Simon';
"hola" + " " + name + ".";
`hola ${name}.`; // interpolación
`${1234}`;
`Cadenas de texto
de varias
lineas`;

// los tres puntos
let nums = [1,2,3,4,5,6,7,9];
Math.max(...nums);
Math.max(1,2,3,4,5,6,7,9);

let copy = [...nums, 10, 11, 12];
// let copy = [1,2,3,4,5,6,7,9,10,11,12];

let obj = { a: 1, b: 2 };
let copy = { ...obj };

// Destructuring
let obj = { a: 1, b: 2, c: 3, d: 4, e: 5 };
let { a, b, ...rest } = obj;
// let a = obj.a;
// let b = obj.b;
console.log(a); // 1
console.log(b); // 2
console.log(rest); // { c: 3, d: 4, e: 5 }

let arr = [1,2,3,4,5,6,7,8,9,0];
let [first, second, third, loquesea, ...rest] = arr;

// const { data } = response;
// const data = response.data;
// const { name, age } = data;
// const name = data.name;
// const age = data.age;
// const { data: { name, age } } = response;
// const name = response.data.name;
// const age = response.data.age;

// const [ { name, age } ] = arr;
// const name = arr[0].name;
// const age = arr[0].age;


console.log(first); // 1
// arr[0];
console.log(second); // 2
// arr[1];
console.log(third); // 3
// arr[2];
console.log(loquesea); // 4
// arr[3];
console.log(rest); // [5,6,7,8,9,0]

// Métodos concisos
function createPerson(name, age) {
  return { name, age };
}

const obj = {
  name: 'Simon',
  age: 28,
  greet() {
    console.log('hola mundo');
  }
}

// Modulos

// math.js
export function multiply(a, b) {
  return a * b;
}

export function divide(a, b) {
  return a / b;
}

function sum(a, b) {
  return a + b;
}

multiply(1,2) // 2
divide(2,1) // 2
sum(1,2) // 3

export default sum;

// file2
import sum from './path/to/file/math';
import { multiply, divide } from './path/to/file/math';

sum(1,2); // 3
multiply(2, 5) // 10
divide(21,3) // 7

// Clases
class Car {
  constructor(carVelocity = 0) {
    this.velocity = carVelocity;
  }

  accelerate(amount = 1) {
    this.velocity += amount;
    return this;
  }

  break(amount = 1) {
    this.velocity -= amount;
    return this;
  }
}

class Bus extends Car {
  constructor(busVelocity = 10) {
    super(busVelocity);
  }

  beep() {
    return 'BEEP';
  }
}

const bus = new Bus(5); // { velocity: 5 }

// Syntatic sugar
class Person {
  constructor(name, age) {
    this.name = name;
    this.age = age;
  }
}

class Teacher extends Person {
  constructor(name, age, labor) {
    super(name, age);
    // this.name = name;
    // this.age = age;
    this.labor = labor;
  }
}

const teacher = new Teacher('Simon', 28, 'programmer');
console.log(teacher.name);
