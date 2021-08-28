import axios from "axios";
import Layout from "../components/Layout";
import Main from "../components/Main/Main";
import router, { useRouter } from "next/router";
import { useSelector } from "react-redux";
import { useEffect } from "react";
const User = () => {
  const { googleId } = useSelector((state) => state.user);
  useEffect(() => {
    if (googleId === "") router.push("/");
  }, [googleId]);
  return (
    <Layout>
      <Main />
    </Layout>
  );
};

export default User;
