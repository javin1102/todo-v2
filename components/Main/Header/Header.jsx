import styles from "./Header.module.css";
import sun from "../../../public/images/icon-sun.svg";
import Image from "next/image";
const Header = () => {
  return (
    <>
      <div className={styles["header-container"]}>
        <h1 className={styles["heading-1"]}>TODO</h1>
        <Image
          src={sun}
          alt="sunImage"
          objectFit="cover"
          layout="fixed"
          width="25px"
          height="25px"
        />
      </div>
    </>
  );
};

export default Header;
