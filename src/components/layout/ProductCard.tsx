import FavoriteBorderIcon from "@mui/icons-material/FavoriteBorder";
import ShoppingCartIcon from "@mui/icons-material/ShoppingCart";
import { Box, Card, CardContent, CardMedia, Typography } from "@mui/material";
import styles from "./ProductCard.module.scss";

interface IProductCard {
  imgSrc: string;
  price: number;
  sale: string;
  like: number;
  title: string;
}

const ProductCard: React.FC<IProductCard> = ({
  imgSrc,
  price,
  sale,
  like,
  title,
}) => {
  return (
    <Card className={`${styles["card"]}`}>
      <CardMedia component="img" image={imgSrc} alt={imgSrc} />
      <Typography component={"div"} className={`${styles["title"]}`}>
        {title}
      </Typography>
      <CardContent className={`${styles["content"]}`}>
        <Typography component={"div"} className={`${styles["price"]}`}>
          ${price}
        </Typography>
        <Box className={`${styles["infor-container"]}`}>
          <Typography component={"div"} className={`${styles["infor"]}`}>
            <ShoppingCartIcon />
            {sale}
          </Typography>
          <Typography component={"div"} className={`${styles["infor"]}`}>
            <FavoriteBorderIcon />
            {like}
          </Typography>
        </Box>
      </CardContent>
    </Card>
  );
};

export default ProductCard;
