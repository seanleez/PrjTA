import styles from "./CategoryCard.module.scss";
import {
  Card,
  CardActionArea,
  CardMedia,
  CardContent,
  Typography,
  Paper,
} from "@mui/material";

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
            <Typography component={"div"}>{title}</Typography>
          </CardContent>
        </Paper>
      </CardActionArea>
    </Card>
  );
};

export default CategoryCard;
