import styles from "./Header.module.css";
import sun from "../../../public/images/icon-sun.svg";
import Image from "next/image";
import ClipLoader from "react-spinners/ClipLoader";
const Header = () => {
  return (
    <>
      <div className={styles["header-container"]}>
        <div className={styles.left}>
          <h1 className={styles["heading-1"]}>TODO</h1>
          <ClipLoader />
        </div>

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
