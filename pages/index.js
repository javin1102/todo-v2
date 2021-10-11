import Signin from "../components/Signin/Signin";
import { useSelector } from "react-redux";
import { useRouter } from "next/router";
import { useEffect } from "react";
import { getSession } from "next-auth/client";
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

export const getServerSideProps = async (context) => {
  const session = await getSession(context);

  return {
    props: {
      session,
    },
  };
};
