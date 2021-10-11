import styles from "./Header.module.css";
import sun from "../../../public/images/icon-sun.svg";
import moon from "../../../public/images/icon-moon.svg";
import Image from "next/image";
import ClipLoader from "react-spinners/ClipLoader";
import { useSelector, useDispatch } from "react-redux";
import { userAction } from "../../../redux/user-slice";
import { usePostTodo } from "../../../hooks/use-post-todo";
import { useEffect } from "react";
const Header = () => {
  const { isLoading } = useSelector((state) => state.message);
  const { theme, todoList } = useSelector((state) => state.user);
  const dispatch = useDispatch();
  const { sendRequest: postRequest } = usePostTodo();

  const themeHandler = async () => {
    const themeText = theme === "dark" ? "light" : "dark";
    dispatch(userAction.setThemeType({ theme: themeText }));
  };

  useEffect(async () => {
    if (todoList.length > 0) await postRequest();
  }, [postRequest, todoList]);
  const themeImage = theme === "dark" ? sun : moon;

  return (
    <>
      <div className={styles["header-container"]}>
        <div className={styles.left}>
          <h1 className={styles["heading-1"]}>TODO</h1>
          {isLoading && <ClipLoader color="#ffffff" />}
          {!isLoading && (
            <h3 style={{ color: "hsl(234, 39%, 85%)", fontSize: ".8rem" }}>
              saved
            </h3>
          )}
        </div>
        <div style={{ cursor: "pointer" }} onClick={themeHandler}>
          <Image
            src={themeImage}
            alt="sunImage"
            objectFit="cover"
            layout="fixed"
            width="25px"
            height="25px"
          />
        </div>
      </div>
    </>
  );
};

export default Header;
