import Logo from "@assets/images/logo.png";
import { HeaderFeatures } from "@components/layout/header";
import ActionsMenu from "@components/layout/header/ActionMenu";
import HeaderDropdown from "@components/layout/header/HeaderDropdown";
import { Dehaze } from "@mui/icons-material";
import { Box, Button, Divider, IconButton } from "@mui/material";
import { useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import styles from "./Header.module.scss";
interface IHeader {
  layout?: string;
}

export interface IItem {
  path: string;
  label: string;
}

const IS_LOGIN = false;

const NAVIGATION_LIST: IItem[] = [
  {
    path: "/",
    label: "Home",
  },
  {
    path: "/about-us",
    label: "About Us",
  },
];

const Header: React.FC<IHeader> = ({ layout }) => {
  const [openDropdown, setOpenDropdown] = useState<boolean>(false);
  const navigate = useNavigate();

  return (
    <>
      <div
        className={`${styles["header"]} ${
          layout ? styles["form-header"] : styles["normal-header"]
        }`}
      >
        <ul>
          {NAVIGATION_LIST.map((item: IItem) => (
            <li key={item.path}>
              <Link to={item.path}>{item.label}</Link>
            </li>
          ))}
        </ul>
        <div className={`${styles["navigation-container"]}`}>
          <IconButton onClick={() => setOpenDropdown(true)}>
            <Dehaze />
          </IconButton>

          <HeaderDropdown
            open={openDropdown}
            list={NAVIGATION_LIST}
            onClose={() => setOpenDropdown(false)}
          />

          <Link to={"/"}>
            <img src={Logo} alt={Logo} />
          </Link>
        </div>
        {IS_LOGIN ? (
          <div className={`${styles["header-features"]}`}>
            <HeaderFeatures />
          </div>
        ) : (
          <div className={`${styles["actions"]}`}>
            <div className={`${styles["action-buttons"]}`}>
              <Button variant="contained" onClick={() => navigate("/register")}>
                Sign Up
              </Button>
              <Button variant="contained" onClick={() => navigate("/login")}>
                Login
              </Button>
            </div>

            <Box className={`${styles["action-icon"]}`}>
              <ActionsMenu />
            </Box>
          </div>
        )}
      </div>
      <Divider style={layout ? { display: "none" } : {}} />
    </>
  );
};

export default Header;
