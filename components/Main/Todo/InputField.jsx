import styles from "./Todo.module.css";

const InputField = () => {
  return (
    <input
      type="text"
      placeholder="Create a new todo"
      className={styles.placeholder}
      onKeyDown={(e) => console.log(e.key)}
    />
  );
};

export default InputField;
