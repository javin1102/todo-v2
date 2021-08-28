import DarkTopBG from "../public/images/bg-desktop-dark.jpg";
import LightTopBG from "../public/images/bg-desktop-light.jpg";
import { useSelector } from "react-redux";
import Image from "next/image";
import MyHead from "./MyHead";
const Layout = (props) => {
  const { theme } = useSelector((state) => state.user);
  const backgroundImage = theme === "dark" ? DarkTopBG : LightTopBG;
  const backgroundColor = theme === "dark" ? "dark-bg" : "light-bg";
  return (
    <>
      <MyHead />
      <div className={`body-container ${backgroundColor}`}>
        <div className="bg-image">
          <Image
            src={backgroundImage}
            alt="Top BG"
            layout="fill"
            objectFit="cover"
          />
        </div>
        {props.children}
      </div>
    </>
  );
};

export default Layout;
