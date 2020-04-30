// Scope
// Lexical Scope o Scope estatico
// Scope Dinamico
// Hoisting
// Closure

// Entorno global
// nodejs: Global
// navegador: Window

// console.log(bar); // undefined
console.log(bar); // Error

// var bar = 'foo';
let bar = 'foo';
// window.bar = 'foo';

function showAlert() {
  console.log(global);

  var baf = 'far';

  function innerFunction() {
    console.log(baf);
  }

  function otherFunction() {
    innerFunction();

    function otherInnerFunction() {
      console.log(bar); // foo
      console.log(baf); // far
    }
  }
}

console.log(baf); // undefined o Error

// if(false) {
//   var buz = 'faz';
// }

if(false) {
  let buz = 'faz';
}

// for(var i = 0; i < 5; i++) {
//   var buz = 'fax'
// }

for(let i = 0; i < 5; i++) {
  let buz = 'fax'
}

// for(var i = 0; i < 5; i++) {
//   var buz = 'fal'
// }

// console.log(buz); // fal
console.log(buz) // Error
showAlert();

// Closure
function far() {
  let baz = 'fuz';

  return function() {
    console.log(baz);
  }
}

const boo = far();
// boo = function() {
//   console.log(baz);
// }
console.log(baz);// Error
boo(); // fuz

function foo() {
  console.log(baz);// Error
  boo(); // fuz
}

function multiply(num) {
  return function(num2) {
    return num * num2;
  }
}

const multiplyBy10 = multiply(10);
// const multiplyBy10 = function(num) {
//   return 10 * num;
// };
const multiplyBy5 = multiply(5);
// const multiplyBy5 = function(num) {
//   return 5 * num;
// };
const multiplyBy20 = multiply(20);
const multiplyBy13 = multiply(13);
const multiplyBy21 = multiply(21);

multiplyBy10(2); // 20
multiplyBy10(3); // 30

multiplyBy5(2); // 10






