import styles from "./Todo.module.css";
const InputField = () => {
  return (
    <input
      type="text"
      placeholder="Create a new todo"
      className={styles.placeholder}
    />
  );
};

export default InputField;
