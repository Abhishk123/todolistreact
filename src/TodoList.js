import React from 'react'
import Todo from './Todo'

export default function TodoList({todos,toggelTodo}) {
    return (
        todos.map(todo => {
            return <Todo key={todo.id} toggelTodo={toggelTodo} todo={todo}/>
        })
    )
}
