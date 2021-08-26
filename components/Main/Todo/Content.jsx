import InputField from "./InputField";
import TodoList from "./TodoList";
import styles from "./Content.module.css";
const Content = () => {
  return (
    <div className={styles["content-box"]}>
      <InputField />
      <TodoList />
    </div>
  );
};

export default Content;
