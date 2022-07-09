import React, { useState } from "react"

function ToDos ({todo, todos,setTodos}) {

  const deleteToDo = (ID) => {
    setTodos(todos.filter ( (item) => item.id !==ID))
  }

  const completedToDo = () => {
    setTodos (todos.map (
      (item) => {
        if (item.id === todo.id) {
          return {
            ...item, completed : !item.completed
          }
        }
        return item
      }
    ))
  }

  return (
    <li className= { todo.completed ? "completed" : ""}>
      <div className="view">
        <input className="toggle" type="checkbox" onClick= {() => {
            completedToDo()
          }
        } />
        <label>{todo.name}</label>
        <button className="destroy" onClick= {() => {
          deleteToDo(todo.id)
        }
        }>
        </button>
      </div>
    </li>
  )
}

export default ToDos