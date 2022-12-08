import {
  Card,
  CardActionArea,
  CardContent,
  CardMedia,
  Paper,
} from "@mui/material";
import styles from "./CategoryCard.module.scss";

interface ICategoryCard {
  imgSrc: string;
  title: string;
  active?: boolean;
  onClickCard: React.MouseEventHandler<HTMLDivElement>;
}

const CategoryCard: React.FC<ICategoryCard> = ({
  imgSrc,
  title,
  active,
  onClickCard,
}) => {
  return (
    <Card
      className={`${styles["card-container"]} ${
        active ? styles["active"] : ""
      }`}
      onClick={onClickCard}
    >
      <CardActionArea>
        <CardMedia component="img" image={imgSrc} alt={imgSrc} />
        <Paper elevation={5} className={`${styles["title"]}`}>
          <CardContent>
            <div>{title}</div>
          </CardContent>
        </Paper>
      </CardActionArea>
    </Card>
  );
};

export default CategoryCard;
