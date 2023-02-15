import { INavigationItem } from "@constants/interface";
import {
  AppRegistration,
  Dehaze,
  Home,
  Info,
  Login,
} from "@mui/icons-material";
import { IconButton } from "@mui/material";
import { useEffect, useRef, useState } from "react";
import { Link } from "react-router-dom";
import HeaderDropdown from "./HeaderDropdown";
import styles from "./NavigationSection.module.scss";

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

type TNavigation = {
  layout: string;
};

const NavigationList: React.FC<TNavigation> = ({ layout }) => {
  return (
    <ul
      className={`${styles.navigationList} ${
        layout ? styles.formHeader : styles.normalHeader
      }`}
    >
      {NAVIGATION_LIST.slice(0, 2).map((item: INavigationItem) => (
        <li key={item.path}>
          <Link to={item.path}>{item.label}</Link>
        </li>
      ))}
    </ul>
  );
};

const NavigationDropdown: React.FC = () => {
  const [openDropdown, setOpenDropdown] = useState<boolean>(false);
  const timeOutId = useRef<any>();

  useEffect(() => {
    if (openDropdown) {
      document.body.classList.add("overflow-hidden");
    } else {
      document.body.classList.remove("overflow-hidden");
    }
  }, [openDropdown]);

  const onBlurHandler = () => {
    timeOutId.current = setTimeout(() => {
      setOpenDropdown(false);
    });
  };

  const onFocusHandler = () => {
    clearTimeout(timeOutId.current);
  };

  return (
    <div
      className={`${styles.navigationContainer}`}
      onBlur={onBlurHandler}
      onFocus={onFocusHandler}
    >
      <IconButton onClick={() => setOpenDropdown(!openDropdown)}>
        <Dehaze />
      </IconButton>

      {openDropdown && (
        <HeaderDropdown open={openDropdown} list={NAVIGATION_LIST} />
      )}
    </div>
  );
};

const NavigationSection: React.FC<TNavigation> = ({ layout }) => {
  return (
    <>
      <NavigationList layout={layout} />
      <NavigationDropdown />
    </>
  );
};

export default NavigationSection;
