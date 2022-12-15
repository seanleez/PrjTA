import { List, ListItem } from "@mui/material";
import { IItem } from "layout/component/Header";
import { useNavigate } from "react-router-dom";
import styles from "./HeaderDropdown.module.scss";
interface IHeaderDropdown {
  open: boolean;
  list: IItem[];
  onClose: () => void;
}

const HeaderDropdown: React.FC<IHeaderDropdown> = ({ open, list, onClose }) => {
  const navigate = useNavigate();

  const handleClickItem = (path: string) => {
    navigate(path);
    onClose();
  };

  return (
    <>
      <div className={`${styles.headerDropdown} ${open ? styles.open : ""}`}>
        <List sx={{ pt: 0 }}>
          {list.map((item: IItem) => (
            <ListItem
              key={item.path}
              onClick={() => handleClickItem(item.path)}
            >
              {item.icon}
              <span>{item.label}</span>
            </ListItem>
          ))}
        </List>
      </div>
      <div
        className={`${styles.backdrop} ${open ? styles.open : ""}`}
        onClick={onClose}
      />
    </>
  );
};

export default HeaderDropdown;
