import Nav from "./Nav/Nav";
import styles from "./Main.module.css";
import Header from "./Header/Header";
import Content from "./Todo/Content";
import StateManager from "./StateManager/StateManager";
const Main = () => {
  return (
    <>
      <Nav />
      <div className={styles["content-box-container"]}>
        <Header />
        <Content />
        <StateManager />
      </div>
    </>
  );
};

export default Main;
