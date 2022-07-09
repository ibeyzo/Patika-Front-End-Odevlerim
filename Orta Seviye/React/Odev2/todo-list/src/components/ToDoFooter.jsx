import React, { useState, useEffect } from "react"

function ToDoFooter ({todos, setTodos, filtered, setFiltered}) {
  const [completed, setCompleted] = useState()

  useEffect (
    () => {
      setCompleted (todos.filter(
        (item) => item.completed !== true))
        setFiltered (todos)
    }, [todos])

    const deleteToDo = () => {
      setTodos ( todos.filter (
        (item) => item.completed === false
      ))
    }

  return (
    <div className="footer">
      <span className="todo-count">
      <strong>
        {completed ? completed.length : 0} 
      </strong> items left
      </span>

      <ul className="filters">
        <li>
          <a href="#/" className="selected" onClick={() => {setFiltered (todos)}}> All</a>
        </li>

        <li>
          <a href="#/" onClick={() => {
            setFiltered (todos.filter((item) => (item.completed === false)))
          }} > Active</a>
        </li>

        <li>
          <a href="#/" onClick={() => {
            setFiltered (todos.filter ((item) => (item.completed === true)))
          }} > Completed</a>
        </li>
      </ul>

      <button className="clear-completed" onClick={() => {deleteToDo()}}> Clear Completed
      </button>
    </div>
  )
}

export default ToDoFooter