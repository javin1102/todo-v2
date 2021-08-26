import InputField from "./InputField";
import styles from "./Content.module.css";
import Todo from "./Todo";
const Content = () => {
  return (
    <div className={styles["content-box"]}>
      <InputField />
      <Todo />
    </div>
  );
};

export default Content;
