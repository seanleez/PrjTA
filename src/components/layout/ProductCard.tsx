import FavoriteBorderIcon from "@mui/icons-material/FavoriteBorder";
import ShoppingCartIcon from "@mui/icons-material/ShoppingCart";
import { Box, Card, CardContent, CardMedia } from "@mui/material";
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
      <div className={`${styles["title"]}`}>{title}</div>
      <CardContent className={`${styles["content"]}`}>
        <div className={`${styles["price"]}`}>${price}</div>
        <Box className={`${styles["infor-container"]}`}>
          <div className={`${styles["infor"]}`}>
            <ShoppingCartIcon />
            {sale}
          </div>
          <div className={`${styles["infor"]}`}>
            <FavoriteBorderIcon />
            {like}
          </div>
        </Box>
      </CardContent>
    </Card>
  );
};

export default ProductCard;
