import { signIn, useSession } from "next-auth/client";
import { userAction } from "../../redux/user-slice";
import { useDispatch } from "react-redux";
import { useEffect } from "react";
import styles from "./Signin.module.css";
import google from "../../public/images/icon-google.svg";
import Image from "next/image";
const Signin = () => {
  const [session, loading] = useSession();
  const dispatch = useDispatch();
  useEffect(() => {
    if (session) dispatch(userAction.setId({ googleId: session.id }));
  });

  return (
    <>
      {!session && (
        <div
          className={styles["signin-box-container"]}
          onClick={() => signIn("google")}
        >
          <Image src={google} layout="fixed" />
          <h3 className={styles.h3}>Sign in with google</h3>
        </div>
      )}
    </>
  );
};

export default Signin;
