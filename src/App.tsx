import React from 'react'

import ErrorBoundary from './features/ErrorBoundary'

import TodoForm from './features/todo/form/TodoForm'
import TodoList from './features/todo/list/TodoList'

import logo from './logo.svg'
import './App.scss'

function App() {
  return (
    <ErrorBoundary>
      <header className="App-header">
        <img src={logo} className="App-logo" alt="NorthOne" />
      </header>

      <main role="main">
        <TodoForm />

        <TodoList />
      </main>
    </ErrorBoundary>
  )
}

export default App
