import InputField from "./InputField";
import styles from "./Content.module.css";
import Todo from "./Todo";
export default function Content() {
  return (
    <div className={styles["content-box"]}>
      <InputField />
      <Todo />
    </div>
  );
}
