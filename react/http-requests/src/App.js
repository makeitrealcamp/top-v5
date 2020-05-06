import React from 'react';
import axios from 'axios';
import './App.css';

function Tasks({ tasks }) {
  return (
    <div className="tasks">
      <h1>Tareas</h1>
      {tasks && tasks.length > 0 && tasks.map(task => {
        return (
          <div className="task" key={task.id}>
            <h2>{task.title}</h2>
            <p>{task.completed ? 'Completed' : 'In progress'}</p>
          </div>
        )
      })}
    </div>
  )
}

class App extends React.Component {
  state = {
    tasks: [],
    loading: true,
    error: false
  };

  // Mount Update Unmount
  // render - componentDidMount - render - componentDidUpdate - render - componentDidUpdate - componentWillUnmount

  componentDidMount() {
    // Promesas
    // Pila o Stack PEUS (Primeros en Entrar, Ultimos en Salir)
    axios({
      url: 'https://jsonplaceholder.typicode.com/todos',
      method: 'GET'
    })
      .then((response) => {
        this.setState({ tasks: response.data })
      })
      .catch((error) => {
        this.setState({ error: true })
      })
      .finally(() => {
        this.setState({ loading: false })
      })
  }

  // componentDidUpdate() {}
  // componentWillUnmount() {}

  render() {
    if(this.state.loading) return <p>Loading....</p>;
    if(this.state.error) return <p>Ups! something went wrong!</p>;
    return (
      <div className="App">
        <Tasks tasks={this.state.tasks} />
      </div>
    );
  }
}

export default App;
