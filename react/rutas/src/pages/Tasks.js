import React from 'react';
import { Link } from 'react-router-dom';

const Tasks = ({ match, location, history }) => {
  console.log(match)
  return (
    <div>
      <h1>Tasks</h1>
      <div className="tasks" key="1">
        <h2>Título de la tarea</h2>
        <Link to={`/tasks/1`}>Ver más</Link>
      </div>
    </div>
  )
};

export default Tasks;
