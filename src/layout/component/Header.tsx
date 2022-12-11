import { Link, useNavigate } from "react-router-dom";
import styles from "./Header.module.scss";
import LogoWithText from "@assets/images/logo-with-text.png";
import {
  Avatar,
  Box,
  Button,
  IconButton,
  Menu,
  MenuItem,
  Tooltip,
  Typography,
} from "@mui/material";
import { ShoppingCart } from "@mui/icons-material";
import { useState } from "react";
interface IHeader {
  layout?: string;
}

const IS_LOGIN = false;

const settings = ["Edit Information", "Log out"];

const Header: React.FC<IHeader> = ({ layout }) => {
  const [anchorElUser, setAnchorElUser] = useState<null | HTMLElement>(null);
  const navigate = useNavigate();

  const handleOpenUserMenu = (event: React.MouseEvent<HTMLElement>) => {
    setAnchorElUser(event.currentTarget);
  };

  const handleCloseUserMenu = (setting: string) => {
    console.log(setting);
    setAnchorElUser(null);
    if (typeof setting === "string") {
      if (setting === "Edit Information") {
        navigate("/edit-information");
      } else {
        localStorage.clear();
      }
    }
  };

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

      {IS_LOGIN ? (
        <div className={`${styles["header-features"]}`}>
          <Tooltip title="Cart">
            <IconButton
              size="small"
              sx={{ p: 0 }}
              onClick={() => navigate("/cart")}
            >
              <ShoppingCart />
            </IconButton>
          </Tooltip>
          <Box>
            <Tooltip title="Open settings">
              <IconButton
                size="small"
                onClick={handleOpenUserMenu}
                sx={{ p: 0 }}
              >
                <Avatar alt="Dong Le" />
              </IconButton>
            </Tooltip>
            <Menu
              sx={{ mt: "45px" }}
              anchorEl={anchorElUser}
              anchorOrigin={{
                vertical: "top",
                horizontal: "right",
              }}
              keepMounted
              transformOrigin={{
                vertical: "top",
                horizontal: "right",
              }}
              open={Boolean(anchorElUser)}
              onClose={handleCloseUserMenu}
            >
              {settings.map((setting) => (
                <MenuItem
                  key={setting}
                  onClick={() => handleCloseUserMenu(setting)}
                >
                  <Typography>{setting}</Typography>
                </MenuItem>
              ))}
            </Menu>
          </Box>
        </div>
      ) : (
        <div className={`${styles["header-actions"]}`}>
          <Button variant="contained" onClick={() => navigate("/register")}>
            Sign Up
          </Button>
          <Button variant="contained" onClick={() => navigate("/login")}>
            Login
          </Button>
        </div>
      )}
    </div>
  );
};

export default Header;
