// This = Dinamico
// 'use strict';

// 1. Por defecto: global, cuando usamos use strict seria undefined
function bar(name, age) {
  console.log(this.foo + ' ' + name);
}

bar('simon'); // window.foo + simon
bar(); // undefined si use strict

// 2. Es el objeto en el cual estamos invocando nuestra funcion
const boo = {
  foo: 'fuz',
  bar: bar,
};

boo.bar('simon'); // fuz simon

const buz = {
  foo: 'far',
}

boo.bar.call(buz); // far

// 3. Enlazar manualmente una funcion (call, apply, bind)
const boo = {
  foo: 'faz',
};

bar.call(boo, 'simon', 28); // faz
bar.apply(boo, ['simon', 28]); // faz
const bar2 = bar.bind(boo, 'simon', 28);
// function bar2() {
//   bar.call(boo);
// }
bar2(); // faz

// 4. Pasos al usar la palabra clave new
  // 1. Se crea un nuevo objeto.
  // 2. Se relaciona ese objeto con un prototipo.
  // 3. al THIS se le asigna ese objeto.
  // 4. Si la funcion no esta retornando, retorna el this.

