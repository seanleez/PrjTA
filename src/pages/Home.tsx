import {
  CategoryCard1,
  CategoryCard2,
  CategoryCard3,
  CategoryCard4,
  CategoryCard5,
} from "@assets/images";
import { CategoryCard } from "@components/layout";
import ProductCard from "@components/layout/ProductCard";
import KeyboardBackspaceIcon from "@mui/icons-material/KeyboardBackspace";
import SearchIcon from "@mui/icons-material/Search";
import { Box, Button, InputAdornment, TextField } from "@mui/material";
import React, { useState } from "react";
import styles from "./Home.module.scss";
interface ICategory {
  imgSrc: string;
  title: string;
}

const LIST_CATEGORY_CARDS: ICategory[] = [
  {
    imgSrc: CategoryCard1,
    title: "T-Shirt",
  },
  {
    imgSrc: CategoryCard2,
    title: "Template",
  },
  {
    imgSrc: CategoryCard3,
    title: "Mockup",
  },
  {
    imgSrc: CategoryCard4,
    title: "Custom",
  },
  {
    imgSrc: CategoryCard5,
    title: "Tumbler",
  },
];

const LIST_PRODUCT_CARDS = [
  {
    imgSrc: CategoryCard1,
    price: 2.99,
    sale: 999,
    like: 999,
    title:
      "Túi Xách Nữ Đeo Chéo Đeo Vai Đi Làm Đi Chơi Thời Trang Hàng Hiệu LUMALO STORE TX39",
  },
  {
    imgSrc: CategoryCard1,
    price: 2.99,
    sale: 999,
    like: 999,
    title: "T-Shirt",
  },
  {
    imgSrc: CategoryCard1,
    price: 2.99,
    sale: 999,
    like: 999,
    title: "T-Shirt",
  },
  {
    imgSrc: CategoryCard1,
    price: 2.99,
    sale: 999,
    like: 999,
    title: "T-Shirt",
  },
  {
    imgSrc: CategoryCard1,
    price: 2.99,
    sale: 999,
    like: 999,
    title: "T-Shirt",
  },
  {
    imgSrc: CategoryCard1,
    price: 2.99,
    sale: 999,
    like: 999,
    title: "T-Shirt",
  },
  {
    imgSrc: CategoryCard1,
    price: 2.99,
    sale: 999,
    like: 999,
    title: "T-Shirt",
  },
];

const Home: React.FC = () => {
  const [activeIndex, setActiveIndex] = useState<number>(-1);

  const handleClickCard = (e: React.MouseEvent<HTMLDivElement>, i: number) => {
    if (activeIndex !== i) {
      console.log(i);
      setActiveIndex(i);
    }
  };

  return (
    <>
      <Box className={`${styles["feature-container"]}`}>
        <Box className={`${styles["category-container"]}`}>
          {LIST_CATEGORY_CARDS.map((card: ICategory, i: number) => (
            <CategoryCard
              key={i}
              imgSrc={card.imgSrc}
              title={card.title}
              active={activeIndex === i}
              onClickCard={(e: React.MouseEvent<HTMLDivElement>) =>
                handleClickCard(e, i)
              }
            />
          ))}
        </Box>
        <Box className={`${styles["search-field-container"]}`}>
          <TextField
            placeholder="Find the image you need"
            InputProps={{
              startAdornment: (
                <InputAdornment position="start" sx={{ px: 1 }}>
                  <SearchIcon />
                </InputAdornment>
              ),
            }}
            className={`${styles["search-field"]}`}
          />
        </Box>
      </Box>
      <Box className={`${styles["products-container"]}`}>
        <div className={`${styles["title"]}`}>PRODUCTS OF INTEREST</div>
        <Box className={`${styles["product-cards"]}`}>
          {LIST_PRODUCT_CARDS.map((card: any, i: number) => (
            <ProductCard
              key={i}
              imgSrc={card.imgSrc}
              price={card.price}
              sale={card.sale}
              like={card.like}
              title={card.title}
            />
          ))}
        </Box>
      </Box>
      <Box className={`${styles["products-container"]}`}>
        <div className={`${styles["title"]}`}>PRODUCTS ON SALE</div>
        <Box className={`${styles["product-cards"]}`}>
          {LIST_PRODUCT_CARDS.map((card: any, i: number) => (
            <ProductCard
              key={i}
              imgSrc={card.imgSrc}
              price={card.price}
              sale={card.sale}
              like={card.like}
              title={card.title}
            />
          ))}
        </Box>
      </Box>
      <Box className={`${styles["products-container"]}`}>
        <div className={`${styles["title"]}`}>NEW PRODUCT</div>
        <Box className={`${styles["product-cards"]}`}>
          {LIST_PRODUCT_CARDS.map((card: any, i: number) => (
            <ProductCard
              key={i}
              imgSrc={card.imgSrc}
              price={card.price}
              sale={card.sale}
              like={card.like}
              title={card.title}
            />
          ))}
        </Box>
      </Box>
      <Button className={`primary-button ${styles["see-more"]}`}>
        See More <KeyboardBackspaceIcon />
      </Button>
    </>
  );
};

export default Home;
