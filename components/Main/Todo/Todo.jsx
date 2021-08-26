import styles from "./Todo.module.css";
import TodoList from "./TodoList";

const Todo = () => {
  return (
    <div className={styles.list}>
      <TodoList />
      <TodoList />
    </div>
  );
};

export default Todo;
