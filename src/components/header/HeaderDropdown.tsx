import { INavigationItem } from "@constants/interface";
import { List, ListItem } from "@mui/material";
import { useNavigate } from "react-router-dom";
import styles from "./HeaderDropdown.module.scss";
interface IHeaderDropdown {
  open: boolean;
  list: INavigationItem[];
}

const HeaderDropdown: React.FC<IHeaderDropdown> = ({ open, list }) => {
  const navigate = useNavigate();

  const handleClickItem = (path: string) => {
    navigate(path);
  };

  return (
    <>
      <div className={`${styles.headerDropdown} ${open ? styles.open : ""}`}>
        <List sx={{ pt: 0 }}>
          {list
            .filter((item: INavigationItem) => !item.isHidden)
            .map((item: INavigationItem) => (
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
      <div className={`${styles.backdrop} ${open ? styles.open : ""}`} />
    </>
  );
};

export default HeaderDropdown;
