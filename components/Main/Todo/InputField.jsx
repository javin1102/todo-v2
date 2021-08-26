import styles from "./Todo.module.css";
import { userAction } from "../../../redux/user-slice";
import { useSelector, useDispatch } from "react-redux";
import { useState } from "react";

import axios from "axios";
const InputField = () => {
  const [enteredTodoText, setEnteredTodoText] = useState("");
  const { todoList } = useSelector((state) => state.user);
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

      //save to db by api post request
      const saveRequest = async () => {
        const data = JSON.stringify(todo);
        const response = await axios.post("/api/todo", data, {
          headers: {
            "Content-Type": "application/json",
          },
        });
      };
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
