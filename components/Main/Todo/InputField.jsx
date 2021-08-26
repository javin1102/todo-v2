import styles from "./Todo.module.css";
import { userAction } from "../../../redux/user-slice";
import { useDispatch } from "react-redux";
import { useState } from "react";

const InputField = () => {
  const [enteredTodoText, setEnteredTodoText] = useState("");

  const dispatch = useDispatch();
  const onEnterHandler = (e) => {
    if (enteredTodoText === "") return;
    if (e.key === "Enter") {
      const todo = {
        text: enteredTodoText,
        id: new Date().getTime(),
        completed: false,
      };
      dispatch(userAction.addTodoList({ todo }));
      setEnteredTodoText("");
    }
  };

  return (
    <input
      type="text"
      placeholder="Create a new todo"
      className={styles.placeholder}
      onKeyDown={onEnterHandler}
      onChange={(e) => setEnteredTodoText(e.currentTarget.value)}
      value={enteredTodoText}
    />
  );
};

export default InputField;
