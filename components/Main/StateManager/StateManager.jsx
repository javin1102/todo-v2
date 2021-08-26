import styles from "./StateManager.module.css";
import { useDispatch, useSelector } from "react-redux";
import { userAction } from "../../../redux/user-slice";

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

  const onClickHandler = (value) => {
    dispatch(userAction.setDisplayType({ displayType: value }));
    addActiveStyle(value);

    //count active todo list item on current state
    let i = 0;
    todoList.forEach((todo) => {
      if (
        (!todo.completed && value === "completed") ||
        (todo.completed && value === "active")
      )
        return;
      i++;
      setActiveNumber(i);
    });
  };

  useEffect(() => {
    addActiveStyle(displayType);
  }, []);

  useEffect(() => {
    if (displayType === "all") setActiveNumber(todoList.length);
  }, [todoList]);

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
      <span style={{ cursor: "pointer", color: textColor }}>
        Clear Completed
      </span>
    </div>
  );
};

export default StateManager;
