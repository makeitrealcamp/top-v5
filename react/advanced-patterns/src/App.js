import React, { useState, useContext } from 'react';
import logo from './logo.svg';
import './App.css';
import { TasksContext, TaskProvider, TasksProvider } from './store/TasksContext';

// HOC - RP - Props - Context - Redux

// Render Props
function Counter({ children }) {
  const [count, setCount] = useState(1);

  function handleClick() {
    setCount(count + 1);
  }

  return children(count, handleClick);
}

function Tasks() {
  // return (
  //   <TasksContext.Consumer>
  //     {({ tasks }) => {
  //       return tasks && tasks.length > 0 && tasks.map(task => (
  //         <p>{task}</p>
  //       ))
  //     }}
  //   </TasksContext.Consumer>
  // );

  const { tasks } = useContext(TasksContext);

  return tasks && tasks.length > 0 && tasks.map(task => (
    <p>{task}</p>
  ))
}

// class Tasks extends React.Component {
//   static contextType = TasksContext;

//   render() {
//     const { tasks } = this.context;
//     return tasks && tasks.length > 0 && tasks.map(task => (
//       <p>{task}</p>
//     ))
//   }
// }

function Button() {
  const { handleClick } = useContext(TasksContext);

  return (
    <button
      type="button"
      onClick={handleClick}
    >
      Add Task
    </button>
  )
}

function App() {
  return (
    <div className="App">
      {/* <Counter
        render={(count, handleClick) => {
          return (
            <div>
              <button onClick={handleClick}>{count}</button>
            </div>
          );
        }}
      />
      <Counter
        render={(count, handleClick) => {
          return (
            <div>
              <button onClick={handleClick}>{count}</button>
            </div>
          )
        }}
      /> */}
      <Counter>
        {(count, handleClick) => {
          return (
            <div>
              <h2>Component 1</h2>
              <button onClick={handleClick}>{count}</button>
            </div>
          )
        }}
      </Counter>
      <Counter>
        {(count, handleClick) => {
          return (
            <div>
              <h2>Component 2</h2>
              <button onClick={handleClick}>{count}</button>
            </div>
          )
        }}
      </Counter>
      <TasksProvider>
        <Tasks />
        <Button />
      </TasksProvider>
    </div>
  );
}

export default App;
