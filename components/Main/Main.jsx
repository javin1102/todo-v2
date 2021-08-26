import Nav from "./Nav/Nav";
import styles from "./Main.module.css";
import Header from "./Header/Header";
import Content from "./Todo/Content";
const Main = () => {
  return (
    <>
      <Nav />
      <div className={styles["content-box-container"]}>
        <Header />
        <Content />
      </div>
    </>
  );
};

export default Main;
