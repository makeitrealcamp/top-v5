import React from 'react';
import logo from './logo.svg';
import webpack from './assets/download.png';
import './App.css';

const name = 'Simon';
// BEM - Block__Element--modifier
function App() {
  return (
    <div className="App">
      <header className="App__header">
        <img src={logo} className="App__logo" alt="logo" />
        <img src={webpack} />
        <p>
          Edit <code>src/App.js</code> and save to reload.
        </p>
        <p className="App__paragraph">Hola {name}, esta es mi primera aplicación con React</p>
        <a
          className="App__link"
          href="https://reactjs.org"
          target="_blank"
          rel="noopener noreferrer"
        >
          Learn React
        </a>
        <button className="App__button App__button--primary">Button 1</button>
        <button className="App__button App__button--secondary App__button--red">Button 2</button>
      </header>
    </div>
  );
}

export default App;
