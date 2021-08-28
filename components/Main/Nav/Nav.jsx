import { signOut, useSession } from "next-auth/client";
import styles from "./Nav.module.css";
import { userAction } from "../../../redux/user-slice";
import { useDispatch } from "react-redux";
import { useEffect } from "react";
import { useRouter } from "next/router";
const Nav = () => {
  const [session, loading] = useSession();
  const dispatch = useDispatch();
  const router = useRouter();
  useEffect(() => {
    if (session) dispatch(userAction.setId({ googleId: session.id }));
  });
  const logoutHandler = () => {
    signOut();
    dispatch(userAction.reset());
    localStorage.removeItem("g-auth");
    router.push("/");
  };

  return (
    <>
      {session && (
        <div className={styles.container}>
          {!!session.id && (
            <h3 className={styles.h3}>Welcome {session.user.name}</h3>
          )}
          <button onClick={logoutHandler} className={styles.button}>
            Sign out
          </button>
        </div>
      )}
    </>
  );
};

export default Nav;
