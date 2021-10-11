import styles from "./StateManager.module.css";
import { useDispatch, useSelector } from "react-redux";
import { userAction } from "../../../redux/user-slice";
import { usePostTodo } from "../../../hooks/use-post-todo";
import { useEffect } from "react";
import { useState } from "react";

const addActiveStyle = (displayType) => {
  const el = document.querySelectorAll("span");

  el.forEach((e) => {
    e.classList.remove(`${styles.active}`);
    if (e.textContent.toLowerCase() === displayType) {
      e.classList.add(`${styles.active}`);
    }
  });
};

const StateManager = () => {
  const { displayType, theme, todoList } = useSelector((state) => state.user);
  const [activeNumber, setActiveNumber] = useState();
  const dispatch = useDispatch();
  const { sendRequest: postRequest } = usePostTodo();
  const onClickHandler = (value) => {
    dispatch(userAction.setDisplayType({ displayType: value }));
    addActiveStyle(value);
  };

  const deleteAllCompletedHandler = async () => {
    dispatch(userAction.removeAllCompleted());
  };

  useEffect(() => {
    addActiveStyle(displayType);
  }, []);

  useEffect(() => {
    if (displayType === "all") setActiveNumber(todoList.length);
  }, [todoList]);

  // useEffect(async () => {
  //   if (todoList.length > 0) await postRequest();
  // }, [postRequest, todoList]);

  useEffect(() => {
    if (displayType === "completed") {
      const completedList = todoList.filter((todo) => todo.completed);
      setActiveNumber(completedList.length);
    }
    if (displayType === "active") {
      const activeList = todoList.filter((todo) => !todo.completed);
      setActiveNumber(activeList.length);
    }
    if (displayType === "all") {
      setActiveNumber(todoList.length);
    }
  }, [displayType, activeNumber, todoList]);

  const themeStyle =
    theme === "dark"
      ? styles["placeholder-bg-dark"]
      : styles["placeholder-bg-light"];

  const textColor = theme === "dark" ? "white" : "hsl(235, 19%, 35%)";

  return (
    <div className={`${styles.placeholder} ${themeStyle}`}>
      <span style={{ color: textColor }}>{activeNumber} items left</span>
      <div className={styles.middle}>
        <span
          className={`${styles.span}`}
          onClick={onClickHandler.bind(null, "all")}
          style={{ color: textColor }}
        >
          All
        </span>
        <span
          className={`${styles.span}`}
          onClick={onClickHandler.bind(null, "active")}
          style={{ color: textColor }}
        >
          Active
        </span>
        <span
          className={`${styles.span}`}
          onClick={onClickHandler.bind(null, "completed")}
          style={{ color: textColor }}
        >
          Completed
        </span>
      </div>
      <span
        style={{ cursor: "pointer", color: textColor }}
        onClick={deleteAllCompletedHandler}
      >
        Clear Completed
      </span>
    </div>
  );
};

export default StateManager;
