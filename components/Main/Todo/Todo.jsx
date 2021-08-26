import styles from "./Todo.module.css";
import TodoList from "./TodoList";
import { useSelector } from "react-redux";
const Todo = () => {
  const { todoList } = useSelector((state) => state.user);
  return (
    <div className={styles.list}>
      {todoList.length > 0 &&
        todoList.map((todo, i) => (
          <TodoList
            text={todo.text}
            id={todo.id}
            key={i}
            completed={todo.completed}
          />
        ))}
    </div>
  );
};

export default Todo;
