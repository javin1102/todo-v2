import styles from "./Todo.module.css";
import { userAction } from "../../../redux/user-slice";
import { useDispatch, useSelector } from "react-redux";
import { usePostTodo } from "../../../hooks/use-post-todo";
import { useEffect, useState } from "react";

const InputField = () => {
  const [enteredTodoText, setEnteredTodoText] = useState("");
  const { theme, todoList } = useSelector((state) => state.user);
  const dispatch = useDispatch();

  const onEnterHandler = async (e) => {
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

  const themeStyle =
    theme === "dark"
      ? styles["placeholder-bg-dark"]
      : styles["placeholder-bg-light"];

  const textColor = theme === "dark" ? "white" : "hsl(235, 19%, 35%)";

  return (
    <input
      type="text"
      placeholder="Create a new todo"
      className={`${styles.placeholder} ${themeStyle}`}
      onKeyDown={onEnterHandler}
      onChange={(e) => setEnteredTodoText(e.currentTarget.value)}
      value={enteredTodoText}
      style={{ color: textColor }}
    />
  );
};

export default InputField;
