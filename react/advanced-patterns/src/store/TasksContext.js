import React, { createContext, useState } from 'react';

export const TasksContext = createContext();
// TasksContext.Provider
// TasksContext.Consumer

export function TasksProvider({ children }) {
  const [tasks, setTasks] = useState([]);

  function handleClick() {
    const task = `task${tasks.length + 1}`;

    setTasks(tasks.concat(task));
  }

  return (
    <TasksContext.Provider
      value={{
        tasks,
        handleClick,
      }}
    >
      {children}
    </TasksContext.Provider>
  )
}
