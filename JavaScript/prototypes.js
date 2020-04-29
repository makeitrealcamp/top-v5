// Prototipos (Objeto)
// String, Number, Boolean, Object, Array

// Instancias
// "hola", 1, true, {}, []

// Vehicle -> Motos
function Vehicle() {
  this.speed = 0;
}

Vehicle.prototype.accelerate = function() {
  this.speed++;
}

const vehicle = new Vehicle();
vehicle.accelerate();
vehicle.accelerate();
vehicle.accelerate();
vehicle.accelerate();
console.log(vehicle);

function Moto() {
  this.wheels = 2;
}

Moto.prototype = new Vehicle();

Moto.prototype.accelerate = function() {
  this.speed += 2;
}

const moto = new Moto();
console.log(moto);
moto.accelerate();
console.log(moto);


function Person(name, lastname, age) {
  // this = {
  //   name: 'Juan',
  //   age: 25,
  //   __proto__: Person
  // };

  this.name = name;
  this.lastname = lastname;
  this.fullname = name + ' ' + lastname;
  this.age = age;
  // this.greet = function() {
  //   console.log('hola ' + this.name);
  // }
}

Person.prototype.greet = function (person) {
  console.log('hola ' + person.name + ', mi nombre es ' + this.name);
}

// const simon = {
//   name: 'Simon',
//   age: 28,
//   greet: function() {
//     console.log('hola ' + this.name);
//   }
// };
const simon = new Person('Simon', 'Hoyos', 28);
console.log(simon);
// simon.greet();

// const maria = {
//   name: 'Maria',
//   age: 25,
// };
const maria = new Person('Maria', 25);
maria.greet(simon);

const juan = new Person('Juan', 25);
// juan.greet();
console.log(Person.prototype.isPrototypeOf(juan));
// 1. Crea un nuevo objeto vacio.
// 2. Asocia ese objeto a un prototipo.
// 3. Le asigna a this ese objeto.
// 4. Si la funcion no esta retornando, retorna this.











