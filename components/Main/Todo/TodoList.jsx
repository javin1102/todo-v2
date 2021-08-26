import styles from "./Todo.module.css";
import Image from "next/image";
import check from "../../../public/images/icon-check.svg";
import cross from "../../../public/images/icon-cross.svg";
const TodoList = () => {
  return (
    <div className={styles.placeholder}>
      <div className={`${styles["check-circle"]} ${styles["check-circle-bg"]}`}>
        <Image src={check} alt="check" layout="responsive" />
      </div>
      <p style={{ margin: 0 }}>Tes</p>
      <div className={styles.cross}>
        <Image src={cross} alt="check" layout="fixed" width={15} height={15} />
      </div>
    </div>
  );
};

export default TodoList;
