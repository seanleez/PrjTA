import { Link, useNavigate } from "react-router-dom";
import styles from "./Header.module.scss";
import LogoWithText from "@assets/images/logo-with-text.png";
import { Button } from "@mui/material";
import { ShoppingCart } from "@mui/icons-material";
interface IHeader {
  layout?: string;
}

const Header: React.FC<IHeader> = ({ layout }) => {
  const navigate = useNavigate();
  return (
    <div
      className={`${styles["header"]} ${
        layout ? styles["form-header"] : styles["normal-header"]
      }`}
    >
      <ul>
        <li>
          <Link to={"/"}>Home</Link>
        </li>
        <li>
          <Link to={"/about-us"}>About Us</Link>
        </li>
      </ul>
      <div>
        <Link to={"/"}>
          <img src={LogoWithText} alt={LogoWithText} />
        </Link>
      </div>

      <div className={`${styles["header-actions"]}`}>
        <Link to={"/cart"}>
          <ShoppingCart />
        </Link>

        <Button variant="contained" onClick={() => navigate("/register")}>
          Sign Up
        </Button>
        <Button variant="contained" onClick={() => navigate("/login")}>
          Login
        </Button>
      </div>
    </div>
  );
};

export default Header;
