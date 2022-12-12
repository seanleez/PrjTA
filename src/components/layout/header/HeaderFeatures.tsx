import { ShoppingCart } from "@mui/icons-material";
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

const settings = ["Sign up", "Log in"];

const HeaderFeatures: React.FC = () => {
  const [anchorElMenu, setAnchorElUser] = useState<null | HTMLElement>(null);
  const navigate = useNavigate();
  const handleOpenActionMenu = (event: React.MouseEvent<HTMLElement>) => {
    setAnchorElUser(event.currentTarget);
  };

  const handleCloseActionMenu = (setting: string) => {
    console.log(setting);
    setAnchorElUser(null);
    if (typeof setting === "string") {
      if (setting === "Edit Information") {
        navigate("/edit-information");
      } else {
        // do st when log out
      }
    }
  };

  return (
    <>
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
          <IconButton size="small" onClick={handleOpenActionMenu} sx={{ p: 0 }}>
            <Avatar alt="Dong Le" />
          </IconButton>
        </Tooltip>
        <Menu
          sx={{ mt: "45px" }}
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
          {settings.map((setting) => (
            <MenuItem
              key={setting}
              onClick={() => handleCloseActionMenu(setting)}
            >
              <Typography>{setting}</Typography>
            </MenuItem>
          ))}
        </Menu>
      </Box>
    </>
  );
};

export default HeaderFeatures;
