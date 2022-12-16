import Logo from "@assets/images/logo.png";
import { HeaderDropdown, HeaderFeatures } from "@components/layout/header";
import { INavigationItem } from "@constants/interface";
import {
  AppRegistration,
  Dehaze,
  Home,
  Info,
  Login,
} from "@mui/icons-material";
import { Button, Divider, IconButton } from "@mui/material";
import { useEffect, useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import styles from "./Header.module.scss";
interface IHeader {
  layout?: string;
}

const IS_LOGIN = true;

const NAVIGATION_LIST: INavigationItem[] = [
  {
    path: "/",
    label: "Home",
    icon: <Home />,
  },
  {
    path: "/about-us",
    label: "About Us",
    icon: <Info />,
  },
  {
    path: "/register",
    label: "Sign up",
    icon: <AppRegistration />,
    isHidden: IS_LOGIN,
  },
  {
    path: "/login",
    label: "Login",
    icon: <Login />,
    isHidden: IS_LOGIN,
  },
];

const Header: React.FC<IHeader> = ({ layout }) => {
  const [openDropdown, setOpenDropdown] = useState<boolean>(false);
  const navigate = useNavigate();

  useEffect(() => {
    const body = document.body;
    if (openDropdown) {
      body.classList.add("overflow-hidden");
    } else {
      body.classList.remove("overflow-hidden");
    }
  }, [openDropdown]);

  return (
    <>
      <div
        className={`${styles["header"]} ${
          layout ? styles["form-header"] : styles["normal-header"]
        }`}
      >
        <ul className={`${styles["navigation-list"]}`}>
          {NAVIGATION_LIST.slice(0, 2).map((item: INavigationItem) => (
            <li key={item.path}>
              <Link to={item.path}>{item.label}</Link>
            </li>
          ))}
        </ul>
        <div className={`${styles["navigation-container"]}`}>
          <IconButton onClick={() => setOpenDropdown(!openDropdown)}>
            <Dehaze />
          </IconButton>

          <HeaderDropdown
            open={openDropdown}
            list={NAVIGATION_LIST}
            onClose={() => setOpenDropdown(false)}
          />

          <img
            src={Logo}
            alt={Logo}
            onClick={() => {
              if (openDropdown) return;
              navigate("/");
            }}
          />
        </div>

        {IS_LOGIN ? (
          <HeaderFeatures />
        ) : (
          <div className={`${styles["actions"]}`}>
            <Button variant="contained" onClick={() => navigate("/register")}>
              Sign Up
            </Button>
            <Button variant="contained" onClick={() => navigate("/login")}>
              Login
            </Button>
          </div>
        )}
      </div>
      <Divider style={layout ? { display: "none" } : {}} />
    </>
  );
};

export default Header;
