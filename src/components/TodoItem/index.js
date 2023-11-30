import React from 'react'
import CompletedIcon from '../CompletedIcon';
import DeletedIcon from '../DeletedIcon';
import clickSoundCompleted from '../../assets/click-campana.mp3'
import clickSoundDeleted from '../../assets/click-cancel.mp3'

const TodoItem = ({ text, completed, completadoTodo, eliminarEstilosTodo}) => {


  const handleCompleted = () => {
    const clickCompleted = new Audio(clickSoundCompleted);
    clickCompleted.play();
    completadoTodo();
  };

  const handleDelete = () => {
    const clickDeleted = new Audio(clickSoundDeleted);
    clickDeleted.play();
    eliminarEstilosTodo();
  };

    return (
      <div>



       <div className='items'>
          <li className='itemsLi'>
            <span className={`icon-check`} onClick={handleCompleted} >
               <CompletedIcon
              completed= {completed}
               />
            </span>
            <p className={`${completed ? 'completed' : ''}`}>
              {text} {completed}
            </p>
            <span className={`icon-delete`} onClick={handleDelete}>
              <DeletedIcon
               completed= {completed}
              />
            </span>
          </li>
    </div>
          
      </div>
      
    );
  };
export default TodoItem
