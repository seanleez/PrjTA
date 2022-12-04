import { Link } from "react-router-dom";
import logoIcon from "@assets/icons/logo-icon.svg";
import logoText from "@assets/icons/logo-text.png";

import styles from "./Header.module.scss";

const Header: React.FC = () => {
  return (
    <div className={styles.navbar}>
      <ul className={styles["nav-left"]}>
        <li>
          <Link to={"/"}>Home</Link>
        </li>
        <li>
          <Link to={"/contact"}>Contact</Link>
        </li>
        <li>
          <Link to={"/about-us"}>About Us</Link>
        </li>
      </ul>
      <Link to={"/"}>
        <div className={styles["logo-container"]}>
          <img src={logoIcon} alt="" />
          <img src={logoText} alt="" />
        </div>
      </Link>
      <ul className={styles["nav-right"]}>
        <li>
          <Link to={"/register"}>Sign Up</Link>
        </li>
        <li>
          <Link to={"/login"}>Login</Link>
        </li>
      </ul>
    </div>
  );
};

export default Header;
