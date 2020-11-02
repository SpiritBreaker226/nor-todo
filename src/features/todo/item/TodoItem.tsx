import React from 'react'
import { useDispatch } from 'react-redux'

import { Todo } from '../../../types/Todo'

import TodoForm from '../form/TodoForm'

import { toogleCompleteTodo, deleteTodo } from '../todoSlice'

const TodoItem = ({ todo }: { todo: Todo }) => {
  const dispatch = useDispatch()

  const removeTodo = (id: string) => {
    dispatch(deleteTodo(id))
  }

  const completeTodo = (id: string) => {
    dispatch(toogleCompleteTodo(id))
  }

  return (
    <li className="todoItem">
      <button onClick={() => completeTodo(todo.id)}>
        {todo.status === 'done' ? (
          <span className="todoItemChecked">{todo.status}</span>
        ) : (
          <span className="todoItemUnchecked">Not Done</span>
        )}
      </button>

      <div className="todoItemInputContainer">
        <div className="todoItemContent">
          {todo.title}
          <br />
          <br />
          {todo.description}
          <br />
          <br />
          {todo.dueDate}
        </div>

        <div className="todoItemForm">
          <TodoForm
            id={todo.id}
            initalTitle={todo.title}
            initalDescription={todo.description}
          />
        </div>
      </div>

      <button className="itemRemove" onClick={() => removeTodo(todo.id)}>
        Remove
      </button>
    </li>
  )
}

export default TodoItem
