import styles from "./StateManager.module.css";
import { useDispatch } from "react-redux";
import { userAction } from "../../../redux/user-slice";
const StateManager = () => {
  const dispatch = useDispatch();
  const onClickHandler = (value) => {
    dispatch(userAction.setDisplayType({ displayType: value }));
  };
  return (
    <div className={styles.placeholder}>
      <span
        className={`${styles.span}`}
        onClick={onClickHandler.bind(null, "all")}
      >
        All
      </span>
      <span
        className={`${styles.span}`}
        onClick={onClickHandler.bind(null, "active")}
      >
        Active
      </span>
      <span
        className={`${styles.span}`}
        onClick={onClickHandler.bind(null, "completed")}
      >
        Completed
      </span>
    </div>
  );
};

export default StateManager;
