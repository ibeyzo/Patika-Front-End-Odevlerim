import React from "react"
import ToDos from "./ToDos"

function ToDoList({todos, setTodos, filtered}) {
  return (
    <ul className="todo-list">
      {filtered.map (
        (todo) => (
          <ToDos key={todo.id} todo={todo} todos= {todos} setTodos={setTodos} />
        )
      )}
    </ul>
  )
}

export default ToDoList