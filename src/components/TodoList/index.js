import React from 'react'


const TodoList = (props) => {
  return (
    <div className='listaTodos'>
      <ul>
        {props.children}



      </ul>
   
  
    </div>
  )
}

export default TodoList
