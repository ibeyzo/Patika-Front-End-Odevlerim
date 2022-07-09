import React, { useState } from "react"
import ToDoFooter from "./ToDoFooter"
import ToDoList from "./ToDoList"

function Header () {
  const [inputValue, setInputValue] = useState("")
  const [todos, setTodos] = useState ([])
  const [filtered, setFiltered] = useState(todos)

  const addTodo = (e) => {
    e.preventDefault()

    let newTodo = {
      name : inputValue,
      id : new Date().getTime(),
      completed : false
    }

    setTodos ([...todos, newTodo])
    setInputValue ("")
  }

  return (
    <div className="header">
      <h1>todos</h1>
      <form onSubmit={ (e) => {addTodo (e)}}>
        <input className="new-todo" placeholder="What needs to be done
        ?" autoFocus value= {inputValue} onChange= {(e) => {setInputValue(e.target.value)}}/>
      </form>
      <section className="main">
        <input className="toggle-all" type="checkbox"/>
        <label for="toggle-all">Mark all as complete</label>
      </section>
      <ToDoList todos={todos} setTodos={setTodos} filtered={filtered}/>
      <ToDoFooter todos={todos} setTodos={setTodos} filtered={filtered} setFiltered={setFiltered} />
    </div>
  ) 
}

export default Header
