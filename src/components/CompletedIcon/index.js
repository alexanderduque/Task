import React from 'react'
import TodoIcon from '../TodoIcon';



const CompletedIcon = ({completed}) => {


  return (
    
<TodoIcon
type='check'
color= {completed ?'rgb(153, 255, 1)' :'white'}

/>

     
  )
}


export default CompletedIcon
