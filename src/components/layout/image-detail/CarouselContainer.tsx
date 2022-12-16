import NextIcon from "@assets/icons/next-icon.svg";
import PreviousIcon from "@assets/icons/previous-icon.svg";
import { Background, CategoryCard1 } from "@assets/images";
import { IconButton } from "@mui/material";
import { Carousel } from "react-responsive-carousel";
import "react-responsive-carousel/lib/styles/carousel.min.css";
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

// const renderIndicator = (
//   onClickHandler: (
//     e: React.MouseEvent<Element, MouseEvent> | React.KeyboardEvent<Element>,
//   ) => void,
//   isSelected: boolean,
//   index: number,
//   label: string,
// ) => {
//   const style = {
//     width: "10px",
//     height: "10px",
//     borderRadius: "50%",
//     backgroundColor: isSelected ? "var(--black)" : "var(--white)",
//     border: "1px solid black",
//     padding: 0,
//     margin: "0 2px",
//   };
//   return (
//     <button style={style} onClick={onClickHandler} onKeyDown={onClickHandler} />
//   );
// };

const CarouselContainer: React.FC = () => {
  return (
    <div className={`${styles.container}`}>
      <Carousel
        showArrows={true}
        emulateTouch
        swipeable
        showStatus={false}
        showIndicators={false}
        useKeyboardArrows
        infiniteLoop
        renderArrowPrev={renderArrow("prev")}
        renderArrowNext={renderArrow("next")}
        // renderIndicator={renderIndicator}
      >
        {IMAGES.map((image: string, index: number) => (
          <div key={index}>
            <img src={image} />
          </div>
        ))}
      </Carousel>
    </div>
  );
};

export default CarouselContainer;
