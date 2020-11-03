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
    <section className={styles.todoFormBody}>
      <div className={styles.todoForm}>
        <div className={styles.field}>
          <div className={styles.fieldLabel}>
            <label htmlFor="title">Title</label>
          </div>

          <input
            id="title"
            value={title}
            type="text"
            onChange={onChangeTitle}
            required
          />
        </div>

        <div className={styles.field}>
          <div className={styles.fieldLabel}>
            <label htmlFor="description">Description</label>
          </div>

          <textarea
            id="description"
            value={description}
            onChange={onChangeDescription}
            required
          />
        </div>

        <div className={styles.field}>
          <div className={styles.fieldLabel}>
            <label htmlFor="description">Due Date</label>
          </div>

          <DatePicker
            selected={dueDate}
            onChange={onChangeDueDate}
            timeInputLabel="Time:"
            dateFormat="MM/dd/yyyy h:mm aa"
            showTimeInput
          />
        </div>

        <button className={styles.button} onClick={onClickFormAction}>
          {id ? 'Update' : 'Create'}
        </button>
      </div>
    </section>
  )
}

export default TodoForm
