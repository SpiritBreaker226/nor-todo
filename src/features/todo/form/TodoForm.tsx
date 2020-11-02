import React, { ChangeEvent, useState } from 'react'
import { useDispatch } from 'react-redux'

import DatePicker from 'react-datepicker'

import 'react-datepicker/dist/react-datepicker.css'

import { nanoid } from 'nanoid'

import { Todo } from '../../../types/Todo'

import { createTodo } from '../todoSlice'

const TodoForm = () => {
  const dispatch = useDispatch()
  const [title, setTitle] = useState('')
  const [description, setDescription] = useState('')
  const [dueDate, setDueDate] = useState(new Date())

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
    const newTodo: Todo = {
      id: nanoid(),
      title,
      description,
      dueDate: dueDate.toISOString(),
      status: 'pending',
    }

    dispatch(createTodo(newTodo))

    setTitle('')
    setDescription('')
    setDueDate(new Date())
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

      <button onClick={onClickFormAction}>Create</button>
    </section>
  )
}

export default TodoForm
