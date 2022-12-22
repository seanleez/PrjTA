import {
  CategoryCard1,
  CategoryCard2,
  CategoryCard3,
  CategoryCard4,
  CategoryCard5,
} from "@assets/images";
import { CategoryCard, ProductCard } from "@components/layout";
import { KeyboardBackspace, Search } from "@mui/icons-material";
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
      <Box className={`${styles.featureContainer}`}>
        <Box className={`${styles.categoryContainer}`}>
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
        <Box className={`${styles.searchFieldContainer}`}>
          <TextField
            placeholder="Find the image you need"
            InputProps={{
              startAdornment: (
                <InputAdornment position="start" sx={{ px: 1 }}>
                  <Search />
                </InputAdornment>
              ),
            }}
            className={`${styles.searchField}`}
          />
        </Box>
      </Box>
      {SECTION_LIST.map((section: string) => (
        <Box className={`${styles.productsContainer}`}>
          <div className={`${styles.title}`}>{section}</div>
          <Box className={`${styles.productCards}`}>
            {LIST_PRODUCT_CARDS.map((card: any, i: number) => (
              <ProductCard
                key={i}
                imgSrc={card.imgSrc}
                price={card.price}
                sale={card.sale}
                title={card.title}
              />
            ))}
          </Box>
        </Box>
      ))}

      <Button className={`primary-button ${styles["see-more"]}`}>
        See More <KeyboardBackspace />
      </Button>
    </>
  );
};

export default Home;
