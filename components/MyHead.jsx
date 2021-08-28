import Head from "next/head";
const MyHead = () => {
  return (
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
  );
};

export default MyHead;
