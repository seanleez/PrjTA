import StarIcon from "@assets/icons/star-icon.svg";
import styles from "./Rating.module.scss";

const TOTAL_STARS = 5;

interface IRating {
  ratingStar: number;
  size: "large" | "small";
}

const renderStarArray = (num: number, mode?: "inactive") => {
  if (num === 0) return <></>;

  const starArray: any = Array.from({ length: num }, (_, index: number) => {
    return (
      <img
        key={index}
        src={StarIcon}
        alt={StarIcon}
        className={`${mode === "inactive" ? styles["inactive"] : ""}`}
      />
    );
  });
  return <>{starArray}</>;
};

const Rating: React.FC<IRating> = ({ ratingStar, size }) => {
  return (
    <div className={`${styles["rating"]} ${styles[size]}`}>
      {renderStarArray(ratingStar)}
      {renderStarArray(TOTAL_STARS - ratingStar, "inactive")}
    </div>
  );
};

export default Rating;
