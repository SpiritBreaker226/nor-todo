import React, { ChangeEvent, useState } from 'react'
import { useDispatch } from 'react-redux'

import DatePicker from 'react-datepicker'

import 'react-datepicker/dist/react-datepicker.css'

import { nanoid } from 'nanoid'

import { Todo } from '../../../types/Todo'

import { createTodo, updateTodo } from '../todoSlice'

const TodoForm = ({
  id,
  initalTitle = '',
  initalDescription = '',
  initalDueDate = new Date(),
}: {
  id?: string
  initalTitle?: string
  initalDescription?: string
  initalDueDate?: Date
}) => {
  const dispatch = useDispatch()
  const [title, setTitle] = useState(initalTitle)
  const [description, setDescription] = useState(initalDescription)
  const [dueDate, setDueDate] = useState(new Date(initalDueDate))

  const onChangeTitle = (e: ChangeEvent<HTMLInputElement>) => {
    setTitle(e.target.value)
  }

  const onChangeDescription = (e: ChangeEvent<HTMLTextAreaElement>) => {
    setDescription(e.target.value)
  }

  const onChangeDueDate = (date: Date) => {
    setDueDate(date)
  }

  const onClickFormAction = () => {
    if (id) {
      dispatch(
        updateTodo({ id, title, description, dueDate: dueDate.toISOString() })
      )
    } else {
      const newTodo: Todo = {
        id: nanoid(),
        title,
        description,
        dueDate: dueDate.toISOString(),
        status: 'pending',
      }

      dispatch(createTodo(newTodo))

      setTitle(initalTitle)
      setDescription(initalDescription)
      setDueDate(initalDueDate)
    }
  }

  return (
    <section className="todoForm">
      <label htmlFor="title">Title</label>
      <input
        id="title"
        value={title}
        type="text"
        onChange={onChangeTitle}
        required
      />

      <label htmlFor="description">Description</label>
      <textarea
        id="description"
        value={description}
        onChange={onChangeDescription}
        required
      />

      <label htmlFor="description">Due Date</label>
      <DatePicker
        selected={dueDate}
        onChange={onChangeDueDate}
        timeInputLabel="Time:"
        dateFormat="MM/dd/yyyy h:mm aa"
        showTimeInput
      />

      <button onClick={onClickFormAction}>{id ? 'Update' : 'Create'}</button>
    </section>
  )
}

export default TodoForm
