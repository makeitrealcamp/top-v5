# This

1. ¿Cómo nos podemos referir a una propiedad llamada age dentro del método risk del mismo objeto?

```javascript
const building = {
  age: 4,
  risk() {
    // ¿Cómo nos referimos a age?
  }
}
```

  1.1. this[age]
  1.1. self[age]
  1.1. this.age (correcta)
  1.1. self.age

1. Cuando ejecutamos código en JavaScript, la palabra clave this:

  1.1. Se refiere siempre al objeto donde está definida
  1.1. Cambia según el lugar desde el que se invoque (correcta)
  1.1. Se refiere al contexto global
  1.1. Ninguna de las anteriores

1. ¿Cuál sería el resultado de la ejecución de este código?

```javascript
const book = {
  content: "Así comienza el libro",
  numWords() {
    return this.content.split(" ").length;
  }
}

const words = book.numWords.call({ body: "Otro libro" });
console.log(`El libro tiene ${words} palabras`);
```

  1.1. "El libro tiene 4 palabras"
  1.1. "El libro tiene 2 palabras"
  1.1. Un error (correcta)

1. ¿Cuál es la diferencia entre call y apply?

  1.1. apply recibe los argumentos como un arreglo, call los recibe como argumentos (correcta)
  1.1. call recibe los argumentos como un arreglo, apply los recibe como argumentos
  1.1. apply se utiliza sobre las funciones, call sobre los objetos
  1.1. Ninguna, apply es un alias de call

1. Cuando una función constructora se invoca con new, this:

  1.1. Se refiere al contexto global
  1.1. Se refere a las variables de la función constructora
  1.1. Se refiere al nuevo objeto creado (correcta)
  1.1. Ninguna de las anteriores

1. Cuál de las siguientes afirmaciones es cierta del método bind:

  1.1. Se utiliza para cambiar el contexto de this al ejecutar una función
  1.1. Retorna una nueva función que garantiza que la función original se ejecute siempre con el contexto que queremos (correcta)
  1.1. Se utiliza para ejecutar una función constructora con el contexto que queremos
  1.1. Retorna una nueva función constructora que garantiza que los métodos de los objetos creados siempre se ejecuten en ese contexto

1. ¿Cómo se comportan las funciones flecha en relación a this?

  1.1. Funcionan igual que las funciones normales
  1.1. Utilizan el contexto de donde fueron invocadas
  1.1. Utilizan el contexto de donde fueron definidas (correcta)
  1.1. Ninguna de las anteriores

1. ¿Cuál sería el resultado de la ejecución del siguiente código en Node.js?

```javascript
const person = {
  name: "Pedro",
  greet: () => {
    console.log(`Hola ${this.name}`);
  }
}

person.greet();
```

  1.1. "Hola Pedro"
  1.1. "Hola undefined" (correcta)
  1.1. Un error
