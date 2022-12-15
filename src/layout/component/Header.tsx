import Logo from "@assets/images/logo.png";
import { HeaderFeatures, HeaderDropdown } from "@components/layout/header";
import {
  AssignmentReturn,
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

export interface IItem {
  path: string;
  label: string;
  icon: React.ReactNode;
}

const IS_LOGIN = true;

const NAVIGATION_LIST: IItem[] = [
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
    icon: <AssignmentReturn />,
  },
  {
    path: "/login",
    label: "Login",
    icon: <Login />,
  },
];

const Header: React.FC<IHeader> = ({ layout }) => {
  const [openDropdown, setOpenDropdown] = useState<boolean>(false);
  const navigate = useNavigate();

  useEffect(() => {
    const body = document.body;
    body.classList.toggle("overflow-hidden");
  }, [openDropdown]);

  return (
    <>
      <div
        className={`${styles["header"]} ${
          layout ? styles["form-header"] : styles["normal-header"]
        }`}
      >
        <ul className={`${styles["navigation-list"]}`}>
          {NAVIGATION_LIST.slice(0, 2).map((item: IItem) => (
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
          <div className={`${styles["header-features"]}`}>
            <HeaderFeatures />
          </div>
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
