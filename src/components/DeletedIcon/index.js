import React from 'react'
import TodoIcon from '../TodoIcon';



const DeletedIcon = ({completed}) => {
  return (
    <TodoIcon
    type="delete"
    color={completed ?'red' :'rgba(255, 0, 0, 0.442)'}
    />
      
 
  )
}


export default DeletedIcon
