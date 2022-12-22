import { ShoppingCart, Edit, Logout } from "@mui/icons-material";
import {
  Avatar,
  Box,
  IconButton,
  Menu,
  MenuItem,
  Tooltip,
  Typography,
} from "@mui/material";
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
  const navigate = useNavigate();

  const handleOpenActionMenu = (event: React.MouseEvent<HTMLElement>) => {
    setAnchorElUser(event.currentTarget);
  };

  const handleCloseActionMenu = (label: string) => {
    setAnchorElUser(null);
    if (typeof label === "string") {
      if (label === "Edit Information") {
        navigate("/edit-information");
      } else {
        // do st when log out
      }
    }
  };

  return (
    <div className={`${styles.headerFeatures}`}>
      <Tooltip title="Cart">
        <IconButton size="small" onClick={() => navigate("/cart")}>
          <ShoppingCart />
        </IconButton>
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
  );
};

export default HeaderFeatures;
