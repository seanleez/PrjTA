import { CategoryCard1 } from "@assets/images";
import { KeyboardBackspace } from "@mui/icons-material";
import { Button } from "@mui/material";
import ProductCard from "./ProductCard";
import styles from "./ProductSection.module.scss";

const LIST_PRODUCT_CARDS = [
  {
    imgSrc: CategoryCard1,
    price: 2.99,
    sale: "2k8",
    title:
      "Túi Xách Nữ Đeo Chéo Đeo Vai Đi Làm Đi Chơi Thời Trang Hàng Hiệu LUMALO STORE TX39",
  },
  {
    imgSrc: CategoryCard1,
    price: 2.99,
    sale: 9,
    title: "T-Shirt",
  },
  {
    imgSrc: CategoryCard1,
    price: 2.99,
    sale: 999,
    title: "T-Shirt",
  },
  {
    imgSrc: CategoryCard1,
    price: 2.99,
    sale: "1k",
    title: "T-Shirt",
  },
  {
    imgSrc: CategoryCard1,
    price: 2.99,
    sale: 999,
    title: "T-Shirt",
  },
];

const SECTION_LIST = ["Product of interest", "Product on sale", "New Product"];

const ProductSection: React.FC = () => {
  return (
    <>
      {SECTION_LIST.map((section: string, i: number) => (
        <div key={i} className={`${styles.productsContainer}`}>
          <div className={`${styles.title}`}>{section}</div>
          <div className={`${styles.productCards}`}>
            {LIST_PRODUCT_CARDS.map((card: any, i: number) => (
              <ProductCard
                key={i}
                imgSrc={card.imgSrc}
                price={card.price}
                sale={card.sale}
                title={card.title}
              />
            ))}
          </div>
          <Button className={`primary-button ${styles.seeMore}`}>
            <span>See More</span>
            <KeyboardBackspace />
          </Button>
        </div>
      ))}
    </>
  );
};

export default ProductSection;
