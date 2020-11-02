import React from 'react'
import { useSelector } from 'react-redux'

import TodoItem from '../item/TodoItem'

import { selectTodos } from '../todoSlice'

const TodoList = () => {
  const todos = useSelector(selectTodos)

  return (
    <section className="todoList">
      <ul>
        {todos.map((todo) => (
          <TodoItem key={todo.id} todo={todo} />
        ))}
      </ul>
    </section>
  )
}

export default TodoList
