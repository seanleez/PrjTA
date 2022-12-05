import FavoriteBorderIcon from "@mui/icons-material/FavoriteBorder";
import ShoppingCartIcon from "@mui/icons-material/ShoppingCart";
import {
  Box,
  Button,
  Card,
  CardContent,
  CardMedia,
  Typography,
} from "@mui/material";
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
      <CardContent className={`${styles["content"]}`}>
        <Typography
          component={"div"}
          className={`${styles["infor"]} ${styles["price"]}`}
        >
          $ {price}
        </Typography>
        <Typography component={"div"} className={`${styles["infor"]}`}>
          <ShoppingCartIcon />
          {sale}
        </Typography>
        <Typography component={"div"} className={`${styles["infor"]}`}>
          <FavoriteBorderIcon />
          {like}
        </Typography>
      </CardContent>
      <Typography component={"div"} className={`${styles["title"]}`}>
        {title}
      </Typography>
      <Box className={`${styles["actions"]}`}>
        <Button className="primary-button">Buy Now</Button>
      </Box>
    </Card>
  );
};

export default ProductCard;
