import NextIcon from "@assets/icons/next-icon.svg";
import PreviousIcon from "@assets/icons/previous-icon.svg";
import { Background, CategoryCard1 } from "@assets/images";
import { Button, IconButton } from "@mui/material";
import { Carousel } from "react-responsive-carousel";
import "react-responsive-carousel/lib/styles/carousel.min.css";
import { useNavigate } from "react-router-dom";
import styles from "./CarouselContainer.module.scss";

const IMAGES: string[] = [Background, CategoryCard1, Background, CategoryCard1];

const renderArrow =
  (direction: string) =>
  (onClickHandler: () => void, shouldBeEnabled: boolean) => {
    if (!shouldBeEnabled) {
      return;
    }

    const styles = {
      position: "absolute",
      top: "45%",
      zIndex: 2,
      width: "50px",
      height: "50px",
      border: "none",
      backgroundColor: "white",
      padding: "0",
    } as any;

    if (direction === "prev") {
      styles.left = 10;
    } else {
      styles.right = 10;
    }

    return (
      <IconButton onClick={onClickHandler} style={styles}>
        <img src={direction === "prev" ? PreviousIcon : NextIcon} alt="" />
      </IconButton>
    );
  };

const CarouselContainer: React.FC = () => {
  const navigate = useNavigate();
  return (
    <div className={`${styles["container"]}`}>
      <Carousel
        showArrows={true}
        emulateTouch
        swipeable
        showStatus={false}
        useKeyboardArrows
        infiniteLoop
        renderArrowPrev={renderArrow("prev")}
        renderArrowNext={renderArrow("next")}
      >
        {IMAGES.map((image: string, index: number) => (
          <div key={index}>
            <img src={image} />
          </div>
        ))}
      </Carousel>
      <div className={`${styles["actions"]}`}>
        <Button className={"primary-button"} onClick={() => navigate("/cart")}>
          Buy Now
        </Button>
        <div className={`${styles["price-tag"]}`}>
          <p>1.99$</p>
          <p>2.99$</p>
        </div>
      </div>
    </div>
  );
};

export default CarouselContainer;
