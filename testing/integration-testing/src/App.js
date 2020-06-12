import React from 'react';
import logo from './logo.svg';
import './App.css';

const data = [
  { id: 1, text: 'hola mundo'},
  { id: 2, text: 'hola mundo'},
  { id: 3, text: 'hola mundo'},
]

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <p>
          Edit <code>src/App.js</code> and save to reload.
        </p>
        <a
          className="App-link"
          href="https://reactjs.org"
          target="_blank"
          rel="noopener noreferrer"
        >
          Learn React
        </a>
        {data.map(el => {
          return (
            <div class="App-list" key={el.id}>
              <p>{el.text}</p>
            </div>
          )
        })}
      </header>
    </div>
  );
}

export default App;
