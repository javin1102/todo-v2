import Image from "next/image";
import Head from "next/head";
import DarkTopBG from "../public/images/bg-desktop-dark.jpg";
import Signin from "../components/Signin/Signin";
import { useSelector } from "react-redux";
import { useSession } from "next-auth/client";
import Main from "../components/Main/Main";
export default function Home() {
  const [session, loading] = useSession();
  const { googleId } = useSelector((state) => state.user);
  const renderComponent = !session || !googleId ? <Signin /> : <Main />;
  return (
    <>
      <Head>
        <link rel="preconnect" href="https://fonts.googleapis.com" />
        <link
          rel="preconnect"
          href="https://fonts.gstatic.com"
          crossOrigin="true"
        />
        {/*  eslint-disable-next-line @next/next/no-page-custom-font */}
        <link
          href="https://fonts.googleapis.com/css2?family=Josefin+Sans:wght@400;700&display=swap"
          rel="stylesheet"
        />
      </Head>

      <div className="body-container">
        <div className="bg-image">
          <Image src={DarkTopBG} alt="Top BG" layout="fill" objectFit="cover" />
        </div>
        {!loading && renderComponent}
      </div>
    </>
  );
}
