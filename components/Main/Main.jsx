import Nav from "./Nav/Nav";
import styles from "./Main.module.css";
import Header from "./Header/Header";
import Content from "./Todo/Content";
import StateManager from "./StateManager/StateManager";
import { usePostTodo } from "../../hooks/use-post-todo";
import { useGetTodo } from "../../hooks/use-get-todo";
import { useEffect } from "react";
let firstLoad = true;
const Main = () => {
  const { sendRequest: postRequest } = usePostTodo();
  const { sendRequest: getRequest } = useGetTodo();
  useEffect(async () => {
    await getRequest();
    firstLoad = false;
    return () => {
      console.log("hi");
    };
  }, []);

  useEffect(() => {
    if (!firstLoad) postRequest();
  }, [postRequest]);

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
