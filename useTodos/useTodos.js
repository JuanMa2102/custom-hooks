import { useReducer,useEffect } from "react"
import { todoReducer } from "./todoReducer"
const initializer = () => {
    return JSON.parse(localStorage.getItem('todos')) || []
}

export const useTodos = () => {
  
    const [todos, dispatch] = useReducer(todoReducer, [] ,initializer)
    
    useEffect( () => {
        localStorage.setItem('todos', JSON.stringify(todos))
    },[todos])

    const handleTodoAdd = ( todo )=>{
        const action = {
            type: '[TODO] Add Todo',
            payload: todo
        }
        dispatch( action );
    }

    const handleTodoDelete = ( id ) => {
        dispatch({
            type: '[TODO] Remove Todo',
            payload: id
        })
    }

    const handleToogleTodo = ( id ) => {
        dispatch({
            type: '[TODO] Toggle Todo',
            payload: id
        })
    }

    return {
        todos,
        handleTodoAdd,
        handleTodoDelete,
        handleToogleTodo,
        pendingsTodosCount: todos.filter( (todo) => !todo.done ).length,
        todosCount : todos.length
    }
}
