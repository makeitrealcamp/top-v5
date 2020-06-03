import React, { useState, useEffect } from 'react';
import axios from 'axios';
import './App.css';

function App() {
  const [name, setName] = useState('');
  const [tasks, setTasks] = useState([]);

  async function handleSubmit(e) {
    e.preventDefault();

    const { data } = await axios({
      method: 'POST',
      baseURL: process.env.REACT_APP_SERVER_URL || 'http://localhost:8000',
      url: '/',
      data: { name }
    });

    setTasks(data)
  }

  return (
    <div className="App">
      <form onSubmit={handleSubmit}>
        <p>Hola mundo</p>
        <label for="name">Nueva tarea 1</label>
        <input
          type="text"
          id="name"
          name="name"
          onChange={(e) => setName(e.target.value)}
          value={name}
        />
        <button>Crear</button>
      </form>
      {tasks && tasks.length > 0 && tasks.map(task => {
        return (
          <div className="task">
            <h2>{task.name}</h2>
          </div>
        )
      })}
    </div>
  );
}

export default App;
