import Image from "next/image";
import Head from "next/head";
import DarkTopBG from "../public/images/bg-desktop-dark.jpg";
import LightTopBG from "../public/images/bg-desktop-light.jpg";
import Signin from "../components/Signin/Signin";
import { useSelector } from "react-redux";
import { useSession } from "next-auth/client";
import Main from "../components/Main/Main";
import ClipLoader from "react-spinners/ClipLoader";
export default function Home() {
  const [session, loading] = useSession();
  const { googleId, theme } = useSelector((state) => state.user);
  const { isLoading } = useSelector((state) => state.message);
  const renderComponent = !session || !googleId ? <Signin /> : <Main />;
  const backgroundImage = theme === "dark" ? DarkTopBG : LightTopBG;
  const backgroundColor = theme === "dark" ? "dark-bg" : "light-bg";

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

      <div className={`body-container ${backgroundColor}`}>
        <div className="bg-image">
          <Image
            src={backgroundImage}
            alt="Top BG"
            layout="fill"
            objectFit="cover"
          />
        </div>

        {!loading && renderComponent}
      </div>
    </>
  );
}
