import Image from "next/image";
import Head from "next/head";
import DarkTopBG from "../public/images/bg-desktop-dark.jpg";
import Header from "../components/Header/Header";
import SignButton from "../components/SignButton/SignButton";

export default function Home() {
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
        {/*box content container*/}
        <div className="content-box-container">{/* <Header /> */}</div>
        <div className="sign-box">
          <SignButton text="Sign Up" />
        </div>
      </div>
    </>
  );
}
