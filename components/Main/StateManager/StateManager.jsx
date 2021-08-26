import styles from "./StateManager.module.css";
const StateManager = () => {
  return (
    <div className={styles.placeholder}>
      <span className={`${styles.span}`}>All</span>
      <span className={`${styles.span}`}>Active</span>
      <span className={`${styles.span}`}>Completed</span>
    </div>
  );
};

export default StateManager;
