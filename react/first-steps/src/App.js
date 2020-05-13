import React from 'react';
import logo from './logo.svg';
import webpack from './assets/download.png';
import './App.css';

const name = 'Simon';
function App() {
  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <img src={webpack} />
        <p>
          Edit <code>src/App.js</code> and save to reload.
        </p>
        <p>Hola {name}, esta es mi primera aplicación con React</p>
        <a
          className="App-link"
          href="https://reactjs.org"
          target="_blank"
          rel="noopener noreferrer"
        >
          Learn React
        </a>
      </header>
    </div>
  );
}

export default App;
