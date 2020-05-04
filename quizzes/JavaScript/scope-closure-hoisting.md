# Scope, closure y hoisting

1.¿Qué es el scope en JavaScript?

  1.1. El alcance de las variables (correcta)
  1.1. Cuando una función se pasa como argumento de otra función
  1.1. Cuando una variable se limita por bloque
  1.1. Ninguna de las anteriores

1. En los navegadores el scope global es:

  1.1. undefined
  1.1. El objeto global
  1.1. El objeto document
  1.1. Ninguna de las anteriores (correcta)

1. En Node.js el scope global es:

  1.1. undefined
  1.1. El objeto global (correcta)
  1.1. El objeto document
  1.1. Ninguna de las anteriores

1. var limita el alcance de las variables por:

  1.1. Corchetes
  1.1. Bloque
  1.1. Función (correcta)
  1.1. Closure

1. const y let limitan el alcance de las variables por:

  1.1. Corchetes
  1.1. Función
  1.1. Bloque (correcta)
  1.1. Closure

1. ¿Cuál sería el efecto del siguiente código? Asume que la variable x no ha sido declarada antes ni después. Tampoco se ha utilizado "use strict".

```javascript
function test() {
  x = 5
}
```

  1.1. Se crea una variable local x
  1.1. Crea una variable global x (correcta)
  1.1. Sale un error
  1.1. Ninguna de las anteriores

1. ¿Qué es hoisting en JavaScript?

  1.1. El alcance de las variables
  1.1. El comportamiento que mueve la declaración de variables al principio del archivo o función (correcta)
  1.1. La referencia a variables externas a las que la función tenía acceso desde un principio
  1.1. Ninguna de las anteriores

1. ¿Cuál sería el resultado de la ejecución del siguiente código?

```javascript
hoist()

const hoist = function() {
  console.log("I love hoisting!")
}
```

  1.1. "I love hoisting"
  1.1. Un error (la variable hoist no está definida) (correcta)
  1.1. Un error (la variable hoist no es una función)
  1.1. No imprime nada

1. ¿Qué es un closure en JavaScript?

  1.1. Cuando una función se pasa como argumento de otra función para que sea invocada más adelante
  1.1. Cuando una función retorna otra función
  1.1. Una función que mantiene la referencia a variables externas a las que tenía acceso desde un principio (correcta)
  1.1. Ninguna de las anteriores

1. ¿Cuál sería el resultado de la ejecución del siguiente código?

```javascript
function createCounter() {
  let x = 0

  return {
    increment() {
      x++
    },
    get() {
      return x
    }
  }
}

const counter = createCounter()
counter.increment()
counter.increment()
console.log(counter.get())
```

  1.1. 0
  1.1. 1
  1.1. 2 (correcta)
  1.1. Un error
