import styles from "./Todo.module.css";
import Image from "next/image";
import check from "../../../public/images/icon-check.svg";
import cross from "../../../public/images/icon-cross.svg";
import { useDispatch, useSelector } from "react-redux";
import { userAction } from "../../../redux/user-slice";
import { usePostTodo } from "../../../hooks/use-post-todo";
import { useEffect } from "react";
const TodoList = (props) => {
  const dispatch = useDispatch();
  const { theme, todoList } = useSelector((state) => state.user);

  const completedListStyle = props.completed ? styles["check-circle-bg"] : "";

  const completedCheckStyle = props.completed
    ? styles["d-block"]
    : styles["d-none"];

  const onClickHandler = async () => {
    dispatch(userAction.setHasCompletedList({ id: props.id }));
  };

  const onDeleteHandler = async () => {
    dispatch(userAction.removeTodoList({ id: props.id }));
  };

  const themeStyle =
    theme === "dark"
      ? styles["placeholder-bg-dark"]
      : styles["placeholder-bg-light"];

  const textColor = theme === "dark" ? "white" : "hsl(235, 19%, 35%)";

  return (
    <div className={`${styles.placeholder} ${themeStyle}`}>
      <div
        className={styles["check-circle"] + " " + completedListStyle}
        onClick={onClickHandler}
      >
        <div className={completedCheckStyle}>
          <Image src={check} alt="check" layout="responsive" />
        </div>
      </div>
      <p style={{ margin: 0, color: textColor }}>{props.text}</p>
      <div className={styles.cross} onClick={onDeleteHandler}>
        <Image src={cross} alt="check" layout="fixed" width={15} height={15} />
      </div>
    </div>
  );
};

export default TodoList;
