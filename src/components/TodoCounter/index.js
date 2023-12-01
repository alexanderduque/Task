import React, { useContext, useState, useEffect } from 'react'
import Swal from 'sweetalert2';
import task from '../../img/tasknew.png';
import Congratulations from '../Congratulations/index.js'
import { TodoContext } from '../TodoContext/index';
import '../../style.css'




const TodoCounter = () => {

  const {
    addTodo,
    completedTodos,
    totalTodos,
  } = useContext(TodoContext)


  const [valueTodo, setValueTodo] = useState('');

  const handleAdd = (e) => {

    e.preventDefault();

    // Verificar si valueTodo tiene contenido antes de agregarlo
    if (valueTodo.trim().length >= 3) {
      addTodo(valueTodo);
      setValueTodo(''); // Limpiar el input después de agregar

      Swal.fire({
        position: "top-end",
        icon: "success",
        title: "Tarea Creada",
        showConfirmButton: false,
        timer: 2000
      });
    } else {
      // Manejar el caso en el que el input esté vacío (opcional)
      Swal.fire({
        icon: "error",
        title: "ERROR",
        text: "Agrega Una Tarea Con Al Menos 3 Letras",
      });
    }
  };





  const handleChange = (e) => {

    setValueTodo(e.target.value)

  }


  const [completedTasks, setCompletedTasks] = useState(false);

  useEffect(() => {
    // Verificar si todas las tareas están completadas
    if (completedTodos === totalTodos && totalTodos > 0) {
      setCompletedTasks(true); // Si todas están completadas, muestra Congratulations
    } else {
      setCompletedTasks(false); // De lo contrario, oculta Congratulations
    }
  }, [completedTodos, totalTodos]);


  return (
    <div className='backCounter'>

      <h1> Crea una Nueva Tarea </h1>
      {completedTasks ? (
        <Congratulations />
      ) : (
        <img src={task} alt="Nueva Tarea" />
      )}
      <div className='createCounter'>
        <span>Nombre de la tarea</span><br />
        <div />

        <input
          placeholder='Hacer Ejercicio a las 09:00 AM'
          value={valueTodo}
          onChange={handleChange}
          required

        ></input><br />



        <button
          onClick={handleAdd}


        >Crear Tarea</button>
      </div>



    </div>
  )
}

export default TodoCounter
