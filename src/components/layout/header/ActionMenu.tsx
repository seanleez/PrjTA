import { Login } from "@mui/icons-material";
import { Tooltip, IconButton, Menu, MenuItem, Typography } from "@mui/material";
import { useState } from "react";
import { useNavigate } from "react-router-dom";

const settings = ["Sign up", "Log in"];

const ActionsMenu: React.FC = () => {
  const [anchorElMenu, setAnchorElUser] = useState<null | HTMLElement>(null);
  const navigate = useNavigate();
  const handleOpenActionMenu = (event: React.MouseEvent<HTMLElement>) => {
    setAnchorElUser(event.currentTarget);
  };

  const handleCloseActionMenu = (setting: string) => {
    console.log(setting);
    setAnchorElUser(null);
    if (typeof setting === "string") {
      if (setting === "Sign up") {
        navigate("/register");
      } else {
        navigate("/login");
      }
    }
  };

  return (
    <>
      <Tooltip title="Actions">
        <IconButton size="small" onClick={handleOpenActionMenu} sx={{ p: 0 }}>
          <Login />
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
    </>
  );
};

export default ActionsMenu;
