# Components

1. ¿Cuál de las siguientes opciones no es un componente de React?

  1.1.
```javascript
const Text = ( ) => <p>Hola mundo</p>;
```
  1.1.
```javascript
class Text extends React.Component {
  render( ) {
    return <p>Hola mundo</p>;
  }
}
```
  1.1 (correcta)
```javascript
class Text {
  render( ) {
    return <p>Hola mundo</p>;
  }
}
```
  1.1.
```javascript
function Text( ) {
  return <p>Hola mundo</p>;
}
```

1. ¿Cuál es la forma correcta de renderizar un componente Title?

  1.1.
```javascript
class App extends Component {
    render( ) {
      return Title;
    }
}
```
  1.1.
```javascript
function App( ) {
    return (
      Title
    );
}
```
  1.1. (correcta)
```javascript
function App( ) {
    return <Title />;
}
```

1. ¿Qué son los props?

  1.1. Son los atributos que recibe un componente al ser llamado. Los props nos permiten comunicar nuestros componentes. (correcta)
  1.1. Son los atributos que recibe un componente al ser llamado. Por medio de los props importamos un nuevo componente.
  1.1. Nos permiten comunicar nuestros componentes. Por medio de los props podemos pasar información de un componente hijo a un componente padre.

1. ¿Qué es el state?

  1.1. Un arreglo de JavaScript que lleva el conteo de veces que se renderiza un componente.
  1.1. Un objeto de JavaScript que permita almacenar información interna del componente. (correcta)
  1.1. Un objeto de JavaScript que nos permite recibir información desde un componente padre.
