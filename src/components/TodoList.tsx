import * as React from "react";
import styles from "../styles/TodoList.module.scss";

const TodoList = (props) => {
  return (
    <ol className={styles.listContainer}>
      {props.error ? (
        <h4>Error Loading Todos, try again later...</h4>
      ) : (
        props.todos.map(({ todo }) => {
          return (
            <li key={`_${Math.random() * 1000000}-${Date.now()}`}>{todo}</li>
          );
        })
      )}
    </ol>
  );
};

export default TodoList;
