import React from 'react'
import { BsClipboard2CheckFill } from "react-icons/bs";
import { RiDeleteBin6Fill } from "react-icons/ri";

 
const iconTypes = {
  "check": (color) => (
    <BsClipboard2CheckFill className='icon-svg' fill={color} />),

  "delete": (color) => (
    <RiDeleteBin6Fill className='icon-svg' fill={color} />),

};


const TodoIcon = ({type, color}) => {



  return (
    <span className={`icon-${type}`}>
        
        {iconTypes[type](color)}

    </span>
  )
}

export default TodoIcon
