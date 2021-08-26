import styles from "./Todo.module.css";
import Image from "next/image";
import check from "../../../public/images/icon-check.svg";
import cross from "../../../public/images/icon-cross.svg";
import { useEffect, useState } from "react";
import { useDispatch } from "react-redux";
import { userAction } from "../../../redux/user-slice";
const TodoList = (props) => {
  const dispatch = useDispatch();
  const completedListStyle = props.completed ? styles["check-circle-bg"] : "";
  const completedCheckStyle = props.completed
    ? styles["d-block"]
    : styles["d-none"];
  const onClickHandler = () => {
    dispatch(userAction.setHasCompletedList({ id: props.id }));
  };
  const onDeleteHandler = () => {
    dispatch(userAction.removeTodoList({ id: props.id }));
  };

  return (
    <div className={styles.placeholder}>
      <div
        className={styles["check-circle"] + " " + completedListStyle}
        onClick={onClickHandler}
      >
        <div className={completedCheckStyle}>
          <Image src={check} alt="check" layout="responsive" />
        </div>
      </div>
      <p style={{ margin: 0 }}>{props.text}</p>
      <div className={styles.cross} onClick={onDeleteHandler}>
        <Image src={cross} alt="check" layout="fixed" width={15} height={15} />
      </div>
    </div>
  );
};

export default TodoList;
