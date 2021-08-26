import Nav from "./Nav/Nav";
import styles from "./Main.module.css";
import Header from "./Header/Header";
import Content from "./Todo/Content";
import StateManager from "./StateManager/StateManager";
import { usePostTodo } from "../../hooks/use-post-todo";
import { useGetTodo } from "../../hooks/use-get-todo";
import { useEffect } from "react";
import ClipLoader from "react-spinners/ClipLoader";
import { useSelector } from "react-redux";
let firstLoad = true;
const Main = () => {
  const { sendRequest: postRequest } = usePostTodo();
  const { sendRequest: getRequest } = useGetTodo();
  const { isLoading } = useSelector((state) => state.message);
  const { theme } = useSelector((state) => state.user);
  useEffect(async () => {
    await getRequest();
    firstLoad = false;
  }, []);

  useEffect(() => {
    if (!firstLoad) postRequest();
  }, [postRequest]);
  const loadingColor = theme === "dark" ? "#ffffff" : "#000000";
  return (
    <>
      {isLoading && firstLoad ? (
        <div className={styles.loading}>
          <ClipLoader color={loadingColor} />
        </div>
      ) : (
        <>
          <Nav />
          <div className={styles["content-box-container"]}>
            <Header />
            <Content />
            <StateManager />
          </div>
        </>
      )}
    </>
  );
};

export default Main;
