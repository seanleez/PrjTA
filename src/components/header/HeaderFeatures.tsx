import { useAppDispatch, useAppSelector } from "@hooks/reduxToolkitHooks";
import { Edit, Logout, ShoppingCart } from "@mui/icons-material";
import {
  Avatar,
  Badge,
  Box,
  Button,
  IconButton,
  Menu,
  MenuItem,
  Tooltip,
  Typography,
} from "@mui/material";
import { logOut } from "@redux/slices/authSlice";
import { useState } from "react";
import { useNavigate } from "react-router-dom";
import styles from "./HeaderFeatures.module.scss";
interface INavigationItem {
  label: string;
  icon: React.ReactNode;
}

const NAVIGATION_LIST: INavigationItem[] = [
  {
    label: "Edit Information",
    icon: <Edit />,
  },
  {
    label: "Log out",
    icon: <Logout />,
  },
];

const HeaderFeatures: React.FC = () => {
  const [anchorElMenu, setAnchorElUser] = useState<null | HTMLElement>(null);
  const dispatch = useAppDispatch();
  const navigate = useNavigate();
  const isLogin = useAppSelector((state) => state.auth.isLogin);
  const handleOpenActionMenu = (event: React.MouseEvent<HTMLElement>) => {
    setAnchorElUser(event.currentTarget);
  };

  const handleCloseActionMenu = (label: string) => {
    setAnchorElUser(null);
    if (typeof label === "string") {
      if (label === "Edit Information") {
        navigate("/edit-information");
      } else {
        dispatch(logOut());
      }
    }
  };

  return (
    <>
      {isLogin ? (
        <div className={`${styles.headerFeatures}`}>
          <Tooltip title="Cart">
            <Badge
              overlap="circular"
              anchorOrigin={{ vertical: "top", horizontal: "right" }}
              badgeContent={
                <Avatar className={styles.notification} alt="3" src="dummy" />
              }
              className={styles.badgeCard}
              onClick={() => navigate("/cart")}
            >
              <ShoppingCart />
            </Badge>
          </Tooltip>
          <Box>
            <Tooltip title="Your account">
              <IconButton
                size="small"
                onClick={handleOpenActionMenu}
                className={`${styles.avatar}`}
              >
                <Avatar alt="Dong Le" />
              </IconButton>
            </Tooltip>
            <Menu
              sx={{ mt: "45px", p: 0 }}
              anchorEl={anchorElMenu}
              anchorOrigin={{
                vertical: "top",
                horizontal: "right",
              }}
              keepMounted
              transformOrigin={{
                vertical: "top",
                horizontal: "right",
              }}
              open={Boolean(anchorElMenu)}
              onClose={handleCloseActionMenu}
            >
              {NAVIGATION_LIST.map((item: INavigationItem, index: number) => (
                <MenuItem
                  key={index}
                  onClick={() => handleCloseActionMenu(item.label)}
                >
                  {item.icon}
                  <Typography sx={{ ml: "5px" }}>{item.label}</Typography>
                </MenuItem>
              ))}
            </Menu>
          </Box>
        </div>
      ) : (
        <div className={`${styles.actions}`}>
          <Button variant="contained" onClick={() => navigate("/register")}>
            Sign Up
          </Button>
          <Button variant="contained" onClick={() => navigate("/login")}>
            Login
          </Button>
        </div>
      )}
    </>
  );
};

export default HeaderFeatures;
