import React from 'react';
import logo from './logo.svg';
import uuid from 'uuid-random';
import './App.css';

// DOM - Document Object Model
// VDOM - Virtual DOM o Shadow DOM

// O(n^3) - por cada nodo del html la función se va a correr 3 veces
// Algoritmo de Reconciliación O(n)
// [1,2,3,4,5,6,7,8,9, "al final"] O(1)
// [1,2,3,4,5,6,7,8,9]
// ["al principio",1,2,3,4,5,6,7,8,9] O(n)

// listas (Array)
// Array.from({ length: 10001 })

const names = [
  { id: uuid(), name: 'Simon', lastname: 'Hoyos' },
  { id: uuid(), name: 'Maria', lastname: 'Lopez' },
  { id: uuid(), name: 'Pedro' },
  { id: uuid(), name: 'Ana', lastname: 'Perez' }
];

// AND (&&)
// true && true return true
// true && false return false
// false && true return false
// false && false return false

// true && 'Hola' return 'Hola';
// null && 'Hola' return null;
// undefined && 'Hola' return undefined;

// OR (||)
// true || true return true
// true || false return true
// false || true return true
// false || false return false

// 'Hola' || null return 'Hola'
// null || 'Hola' return 'Hola'
// 'Hola' || true return 'Hola'

// const num = otraVariable || 'default';

// Implicit coercion
// 1 + '1' = '11';
// falsy values: 0, '', undefined, null, NaN, false

function Names() {
  return (
    <ul>
      {names.map(el => el.lastname && <li key={el.id}>{el.name} {el.lastname}</li>)}
    </ul>
  );
}

function App() {
  return (
    <div className="App">
      <Names />
    </div>
  );
}

export default App;
