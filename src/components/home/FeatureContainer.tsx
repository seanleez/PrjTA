import {
  CategoryCard1,
  CategoryCard2,
  CategoryCard3,
  CategoryCard4,
  CategoryCard5,
} from "@assets/images";
import { Search } from "@mui/icons-material";
import { InputAdornment, TextField } from "@mui/material";
import { useState } from "react";
import CategoryCard from "./CategoryCard";
import styles from "./FeatureContainer.module.scss";

type TCategory = {
  imgSrc: string;
  title: string;
};

const LIST_CATEGORY_CARDS: TCategory[] = [
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
const FeatureContainer: React.FC = () => {
  const [activeIndex, setActiveIndex] = useState<number>(-1);

  const handleClickCard = (e: React.MouseEvent<HTMLDivElement>, i: number) => {
    if (activeIndex !== i) {
      setActiveIndex(i);
    }
  };

  return (
    <div className={`${styles.featureContainer}`}>
      <div className={`${styles.categoryContainer}`}>
        {LIST_CATEGORY_CARDS.map((card: TCategory, i: number) => (
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
      </div>
      <div className={`${styles.searchFieldContainer}`}>
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
      </div>
    </div>
  );
};

export default FeatureContainer;
