
  import { useEffect, useState } from 'react';
   
   //CREANDO LOCALSTORAGE--CUSTOM HOOK
    //DOS PARAMETROS UNO PARA EL ITEM Y OTRO PARA EL STATE INICIAL DE LA APP

    function useLocalStorage (itemName, initialValue) {

        //ESTADO INICIAL DE LA APP
        const [item,setItem]= useState(initialValue);  

        const [cargar,setCargar]= useState(true)

        const [error,setError]= useState(false)
     
       useEffect(() =>{   

        setTimeout(() => {
          
        
        try {
          
          const localStorageItem = localStorage.getItem(itemName)
      
        let parseItem;
      

        if (!localStorageItem) {
      
          localStorage.setItem(itemName, JSON.stringify(initialValue));
          parseItem = initialValue;
      
        } else {
      
          parseItem = JSON.parse(localStorageItem);
          setItem(parseItem)
          
        }

        setCargar(false);
      

        } catch (error) {
          setCargar(false)
          setError(true)
        }
      },500);
    
      },[initialValue, itemName]);  
   
        //FUNCION PARA LOCALSTORE Y USESTATE
        
            const saveItem = (newItem) => {
      
            localStorage.setItem(itemName, JSON.stringify(newItem));
        
            setItem(newItem);
          };
          
          return {cargar,
                  error,
                  item,
                  saveItem,}; 
      } 
      export{useLocalStorage}
      
      /*const defaultTodo = [

  {text: 'cortar la cebolla', completed: false},
  {text: 'Tomar el curso React.Js', completed: false},
  {text: 'Llorar con el bebe', completed: false},
  {text: 'LALALA', completed: false},
  
  
  ]
  
  localStorage.setItem('TODO_V1', JSON.stringify(defaultTodo));*/