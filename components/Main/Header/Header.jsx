import styles from "./Header.module.css";
import sun from "../../../public/images/icon-sun.svg";
import Image from "next/image";
import ClipLoader from "react-spinners/ClipLoader";
import { useSelector } from "react-redux";
const Header = () => {
  const { isLoading } = useSelector((state) => state.message);
  return (
    <>
      <div className={styles["header-container"]}>
        <div className={styles.left}>
          <h1 className={styles["heading-1"]}>TODO</h1>
          {isLoading && <ClipLoader />}
          {!isLoading && (
            <h3 style={{ color: "hsl(234, 39%, 85%)", fontSize: ".8rem" }}>
              saved
            </h3>
          )}
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
