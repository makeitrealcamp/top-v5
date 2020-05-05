# ECMAScript 2015 (ES6)

1. ¿Cuál sería el resultado de la ejecución del siguiente código?

```javascript
const a = 5;
a = 6;
console.log(a)
```

  1.1. Imprime 6
  1.1. Imprime 5
  1.1. Sale un error (correcta)
  1.1. Ninguna de las anteriores

1. ¿Cuál sería el resultado de la ejecución del siguiente código?

```javascript
let a = 5;
a = 6;
console.log(a)
```

  1.1. Imprime 6 (correcta)
  1.1. Imprime 5
  1.1. Sale un error
  1.1. Ninguna de las anteriores

1. ¿Cuál sería el resultado de la ejecución del siguiente código?

```javascript
if (true) {
  var x = 5
  let y = 5
}
console.log(x)
console.log(y)
```

  1.1.
  ```javascript
    5
    5
  ```

  1.1.
  ```javascript
    undefined
    5
  ```

  1.1.
  ```javascript
    5
    undefined
  ```

  1.1. Un error (correcta)

1. ¿Cuál es la forma correcta de reescribir el siguiente código utilizando funciones flecha?

```javascript
function duplicate(n) {
  return n * 2;
}
```

  1.1.
  ```javascript
  duplicate => n {
    return n * 2
  }
  ```

  1.1.
  ```javascript
  const duplicate(n) => n * 2
  ```

  1.1. (correcta)
  ```javascript
  const duplicate = n => n * 2
  ```

  1.1.
  ```javascript
  duplicate(n) => {
    return n * 2
  }
  ```

1. ¿Cuál sería el resultado de ejecutar el siguiente código?

```javascript
const show = (x=5, y=5) => `x es ${x} y y es #{y}`
console.log(show(7))
```

  1.1. "x es 7 y y es #{y}" (correcta)
  1.1. "x es 7 y y es 5"
  1.1. "x es 5 y y es 7"
  1.1. "x es ${x} y y es #{y}"
  1.1. Un error

1. ¿Cómo se llama la funcionalidad que nos permite asignar variables a partir de un objeto o un arreglo? Por ejemplo:

```javascript
const { a, b } = { a: 1, b: 2 }
```

  1.1. Destructuración (correcta)
  1.1. Partición
  1.1. Asignación
  1.1. Particionamiento

1. ¿Cuál sería el resultado de la ejecución del siguiente código?

```javascript
function greet({ name }) {
  console.log(`Hola ${name}`)
}

greet({ nombre: "Pedro" })
```

  1.1. "Hola Pedro"
  1.1. "Hola undefined" (correcta)
  1.1. "Hola ${name}"
  1.1. Un error

1. ¿Cuál es la forma correcta de convertir el método bark a un método conciso en el siguiente código?

```javascript
const dog = {
  bark: function() {
    console.log("Guau!");
  }
}
```

  1.1.
  ```javascript
  const dog = {
    bark => () {
      console.log("Guau!");
    }
  }
  ```

  1.1.
  ```javascript
  const dog = {
    bark() => {
      console.log("Guau!");
    }
  }
  ```

  1.1.
  ```javascript
  const dog = {
    bark() {
      console.log("Guau!");
    }
  }
  ```

  1.1. Ninguna de las anteriores

