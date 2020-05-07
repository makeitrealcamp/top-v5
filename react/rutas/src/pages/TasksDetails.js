import React from 'react';

const TasksDetails = ({ match }) => {
  console.log(match)
  return (
    <div>
      <h1>Tarea {match.params.id}</h1>
    </div>
  );
}

export default TasksDetails;
