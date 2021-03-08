import * as React from "react";
import styles from "../styles/index.module.scss";
import {useRef, useState} from "react";

const AddTodo = (props) => {
  const inputRef = useRef<HTMLInputElement>(null);
  const [formData, setFormData] = useState({todo: ""})
  const handleInput = (e: React.BaseSyntheticEvent) => {
    setFormData((prevState) => ({...prevState, [e.target.name]: e.target.value}))
  }
  const handleAddTodo = (e) => {
    e.preventDefault();
    if (formData.todo) {
      const newTodos = props.todos;
      newTodos.push(formData.todo);
      props.setTodos(() => [...newTodos])
    }
  }
  return (
    <form className={styles.addTodoSection}>
      <div className={styles.inputConatiner}>
        <input
          ref={inputRef}
          className={styles.inputField}
          type="text"
          id="todo"
          placeholder="Todo item"
          required
          name="todo"
          onChange={handleInput}
        />
        <label className={styles.todoLabel} htmlFor="todo">
          Input Todo Item <span className={styles.required}>*</span>
        </label>
        <button className={styles.btn} onClick={handleAddTodo}>Add Todo</button>
      </div>
    </form>
  )
}

export default AddTodo;