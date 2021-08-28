import Signin from "../components/Signin/Signin";
import { useSelector } from "react-redux";
import { useRouter } from "next/router";
import { useEffect } from "react";
import Layout from "../components/Layout";
export default function Home(props) {
  const router = useRouter();
  const { googleId } = useSelector((state) => state.user);

  useEffect(() => {
    if (googleId) router.push(`/${googleId}`);
  }, [googleId]);
  return (
    <>
      <Layout>
        <Signin />
      </Layout>
    </>
  );
}
