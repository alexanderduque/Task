import React, { useContext } from 'react'
import { TodoContext } from '../TodoContext'



const TodoSearch = () => {

 const{
  searchValue, 
  setSearchValue,
  completedTodos,
  totalTodos, } = useContext(TodoContext)


  const handleChange = (e)=>{
    setSearchValue(e.target.value)
    
  }



  return (
      <div className='search'>

       <h2> Tus Tareas</h2>
       <span>completado {completedTodos} de {totalTodos} Tareas</span> <br/>
       <input 
       placeholder='Buscar...'
       onChange={handleChange}
       value={searchValue}
       
       ></input>
      
       </div>
    
  )
}

export default TodoSearch
