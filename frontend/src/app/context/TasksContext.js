"use client"
import { useLocalStorage } from "../hooks/useLocalstorage"
import {useState} from "react"
import { createContext, useContext } from "react"

export const TasksContext = createContext();

// Agrega tu endpoint aquí
const endpoint = " http://localhost:9000/api/empleados ";

export const useTasks = () => {
  const context = useContext(TasksContext);
  if (!context) throw new Error('Error Grave');
  return context;
}

export const TasksProvider = ({ children }) => {
  const [tasks, setTask] = useLocalStorage('tasks', []);

  const createTask = (nombre,edad,pais,cargo,anios ) => {
    // Aquí puedes hacer una llamada a tu endpoint para crear la tarea
    // Utiliza la función fetch o axios para realizar la solicitud HTTP
    fetch(endpoint, {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify({
        nombre,edad,pais,cargo,anios
      }),
    })
      .then(response => response.json())
      .then(data => {
        setTask([...tasks, {
          nombre: data.nombre,
          edad: data.edad,
          pais:data.pais,
          cargo:data.cargo,
          anios:data.anios,
          id: data.id,
        }]);
      })
      .catch(error => {
        console.error('Error al crear la tarea:', error);
      });
  }

  const deleteTask = (id) => {
    // Aquí puedes hacer una llamada a tu endpoint para eliminar la tarea por su id
    fetch(`${endpoint}/${id}`, {
      method: 'DELETE',
    })
      .then(() => {
        setTask([...tasks.filter(task => task.id !== id)]);
      })
      .catch(error => {
        console.error('Error al eliminar la tarea:', error);
      });
  }

  const updateTask = (id, newData) => {
    // Aquí puedes hacer una llamada a tu endpoint para actualizar la tarea por su id
    fetch(`${endpoint}/${id}`, {
      method: 'PUT',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify(newData),
    })
      .then(response => response.json())
      .then(data => {
        setTask([
          ...tasks.map(task => (task.id === id ? { ...task, ...data } : task)),
        ]);
      })
      .catch(error => {
        console.error('Error al actualizar la tarea:', error);
      });
  }

  return (
    <TasksContext.Provider value={{
      tasks,
      createTask,
      deleteTask,
      updateTask,
    }}>
      {children}
    </TasksContext.Provider>
  );
}