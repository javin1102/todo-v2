import styles from "./Todo.module.css";
import TodoList from "./TodoList";
import { useSelector } from "react-redux";
const Todo = () => {
  const { todoList, displayType } = useSelector((state) => state.user);

  return (
    <div className={styles.list}>
      {todoList.length > 0 &&
        todoList.map((todo, i) => {
          if (
            (displayType === "active" && todo.completed) ||
            (displayType === "completed" && !todo.completed)
          ) {
            return;
          }
          return (
            <TodoList
              text={todo.text}
              id={todo.id}
              key={i}
              completed={todo.completed}
            />
          );
        })}
    </div>
  );
};
export async function getServerSideProps() {}
export default Todo;
