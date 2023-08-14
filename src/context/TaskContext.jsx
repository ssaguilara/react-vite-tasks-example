import { useState, useEffect, createContext } from "react";
import { tasks as data } from "../data/Task";
// se crea nombre data para no generar conflictos
//no se puede meter data inicializar el useState porque se pone primero el hook que data

export const TaskContext = createContext(); //almacena los datos

// el componente que engloba las componentes
export function TaskContextProvider(props) {
  const [tasks, setTasks] = useState([]);

  useEffect(() => {
    setTasks(data);
  }, []);

  function createTask(task) {
    setTasks([
      ...tasks,
      {
        id: tasks.length,
        title: task.title,
        description: task.description,
      },
    ]);
  }

  function deleteTask(taskId) {
    // console.log(tasks)
    // console.log(taskId)
    setTasks(tasks.filter((task) => task.id !== taskId)); // nuevo arreglo con los que son diferentes
  }

  return (
    <TaskContext.Provider
      value={{
        tasks,
        deleteTask,
        createTask,
      }}
    >
      {props.children}
    </TaskContext.Provider>
  );
}
