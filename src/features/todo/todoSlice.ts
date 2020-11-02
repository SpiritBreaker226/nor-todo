import { createSlice, PayloadAction } from '@reduxjs/toolkit'

import { RootState } from '../../app/store'

import { Todo } from '../../types/Todo'

export interface TodoState {
  todos: Todo[]
}

export const initialState: TodoState = {
  todos: [],
}

export const todoSlice = createSlice({
  name: 'todo',
  initialState,
  reducers: {
    createTodo: (state, action: PayloadAction<Todo>) => {
      const newTodo = action.payload

      state.todos.push(newTodo)
    },
    updateTodo: (state, action: PayloadAction<Omit<Todo, 'status'>>) => {
      const { id, title, description, dueDate } = action.payload
      const todo = state.todos.find((todo: Todo) => todo.id === id)

      if (todo) {
        todo.description = description
        todo.title = title
        todo.dueDate = dueDate
      }
    },
  },
})

export const { createTodo, updateTodo } = todoSlice.actions

export const selectTodos = (state: RootState) => state.todo.todos

export default todoSlice.reducer
