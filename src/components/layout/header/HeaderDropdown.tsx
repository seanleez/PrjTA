import { Dialog, List, ListItem, ListItemText } from "@mui/material";
import { IItem } from "layout/component/Header";
import { useNavigate } from "react-router-dom";

interface IHeaderDropdown {
  open: boolean;
  list: IItem[];
  onClose: () => void;
}

const HeaderDropdown: React.FC<IHeaderDropdown> = ({ open, list, onClose }) => {
  const navigate = useNavigate();
  const handleClose = () => {
    onClose();
  };

  const handleClickItem = (path: string) => {
    navigate(path);
    onClose();
  };

  return (
    <Dialog className="header-dropdown" open={open} onClose={handleClose}>
      <List sx={{ pt: 0 }}>
        {list.map((item: IItem) => (
          <ListItem key={item.path} onClick={() => handleClickItem(item.path)}>
            <ListItemText primary={item.label} />
          </ListItem>
        ))}
      </List>
    </Dialog>
  );
};

export default HeaderDropdown;
