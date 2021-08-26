import Nav from "./Nav/Nav";
import styles from "./Main.module.css";
import Header from "./Header/Header";
import InputField from "./Todo/InputField";
const Main = () => {
  return (
    <>
      <Nav />
      <div className={styles["content-box-container"]}>
        <Header />
        <InputField />
      </div>
    </>
  );
};

export default Main;
