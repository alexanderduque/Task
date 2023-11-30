import React, { useContext } from 'react'
import TodoCounter from '../components/TodoCounter';
import TodoSearch from '../components/TodoSearch';
import TodoList from '../components/TodoList';
import TodoItem from '../components/TodoItem';
import ErrorDefault from '../components/ErrorDefault'
import EmptyTodos from '../components/EmptyTodos'
import { TodoContext } from '../components/TodoContext';
import '../style.css'


const AppUi = () => {

    const {
        cargar,
        error,
        searchValue,
        setSearchValue,
        completedTodos,
        totalTodos,
        searchendTodo,
        completadoTodo,
        eliminarEstilosTodo,
        setOpenModal,

    } = useContext(TodoContext) //FORMA OPTIMA DE USAR EL CONSUMER DEL PROVIDER (TodoContext


    const hayTareasPendientes = searchendTodo.length > 0;
    const mostrarTodoSearch = !cargar && (hayTareasPendientes || searchValue !== '');
    const resultadosEncontrados = hayTareasPendientes || searchValue === '';
    const noHayTareasCargadas = !cargar && !hayTareasPendientes && searchValue === '';


    //ENTENDER EL SEARCHVALUE QUE TIENE QUE VER
    //CAMBIAR COLOR DE FONDO
    //TERMINAR DE VERIFICAR POR COMPLETO EL RESPONSIVE
    // PONERLO MAS BONITO EN MODO PC SOBRE TODO LA CARGA DE ITEMS AL COMIENZO
    // DEPLOY
    // OTRA IMAGEN QUIZAS PARA TODOCOUNTER
    return (
        <div>

            <>

                <TodoCounter

                    setOpenModal={setOpenModal}

                />


                <TodoList>

                    {noHayTareasCargadas && <EmptyTodos />}
                    {(!cargar && !resultadosEncontrados && searchValue !== '') && (
                        <ErrorDefault/>
                    )}

                    {searchendTodo.map(todo => (

                        <TodoItem
                            key={todo.text}
                            text={todo.text}
                            completed={todo.completed}
                            totalTodos={totalTodos}
                            completadoTodo={() => completadoTodo(todo.text)}
                            eliminarEstilosTodo={() => eliminarEstilosTodo(todo.text)}
                            cargar={cargar}
                            error={error}
                            searchValue={searchValue}
                            setSearchValue={setSearchValue}
                            completedTodos={completedTodos}
                            searchendTodo={searchendTodo}

                        />
                    ))}

                </TodoList>

                {mostrarTodoSearch && <TodoSearch />}


            </>


        </div>
    )
}

export default AppUi 
