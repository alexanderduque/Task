import React, { createContext, useState } from 'react'
import { useLocalStorage } from './useLocalStorage';


const TodoContext = createContext()


function TodoProvider({children}) {

    const { item: todos,
        saveItem: saveTodos,
        cargar,
        error,
      } = useLocalStorage('TODO_V1', []);
    
    
      const [searchValue, setSearchValue] = useState('');
      const [openModal, setOpenModal] = useState(false);
    
    
      //FILTRAR CANTIDAD DE TAREAS Y TAREAS COMPLETADAS
      const completedTodos = todos.filter(todo => !!todo.completed).length;
      const totalTodos = todos.length
    
      //FILTRAR QUE BUSQUEDA DEL todoSearch sea igual a todoText
      const searchendTodo = todos.filter((todo) => {
    
        const todoText = todo.text.toLowerCase();
        const searchText = searchValue.toLowerCase();
    
        return todoText.includes(searchText);
    
      }
      );

      const addTodo = (text) =>{

        const newTodos = [...todos];
        newTodos.push({
          text,
          completed : false,

        })
        saveTodos(newTodos)
      }
    
    
      const completadoTodo = (text) => {
    
        const newTodos = [...todos]
        const todoIndex = newTodos.findIndex(
          (todos) => todos.text === text);
    
        // Cambiar entre completado y no completado
        newTodos[todoIndex].completed = !newTodos[todoIndex].completed;
        saveTodos(newTodos);
    
    
    
      }
    
    
      const eliminarEstilosTodo = (text) => {
        const newTodos = [...todos];
        const todoIndex = newTodos.findIndex((todo) => todo.text === text);
        newTodos.splice(todoIndex, 1)
        saveTodos(newTodos);
    
    
      };


    return(

    <TodoContext.Provider value={{ // PROVIDER= PROVEEDOR DE PROPS 
                                   // CONSUMER= Metodo Consumidor de Props
    cargar,
    error,
    searchValue, 
    setSearchValue,
    completedTodos,
    totalTodos,
    searchendTodo,
    completadoTodo,
    eliminarEstilosTodo,
    addTodo,
    openModal,
    setOpenModal,

    }}>
        {children}
    </TodoContext.Provider>


    )

}



export{ TodoContext, TodoProvider };

