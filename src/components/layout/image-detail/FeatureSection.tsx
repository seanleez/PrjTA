import { Rating } from "@components/common";
import { Button } from "@mui/material";
import { useNavigate } from "react-router-dom";
import styles from "./FeatureSection.module.scss";

const FeatureSection: React.FC = () => {
  const navigate = useNavigate();

  return (
    <>
      <div className={`${styles.description}`}>
        <p className={`${styles.title}`}>
          Merry and Bright SVG PNG Digital Download File Merry and Bright SVG
          PNG Digital Download File
        </p>
        <div className={styles.rating}>
          <Rating ratingStar={5} size="small" />
          <span>2243 sold</span>
        </div>
        <div className={`${styles.priceTag}`}>
          <span>1.99$</span>
          <span>2.99$</span>
          <span>{"(20% off)"}</span>
        </div>

        <div className={`${styles.inforSection}`}>
          <p className={`${styles.subTitle}`}>What you will get:</p>
          <p>&bull; You will receive a PNG format file.</p>
          <p>&bull; Image resolution 300pdi.</p>
        </div>

        <div className={`${styles.actions}`}>
          <Button
            className={`${styles.addToCart}`}
            onClick={() => navigate("/cart")}
          >
            Add to Cart
          </Button>
          <Button className="primary-button" onClick={() => navigate("/cart")}>
            Buy Now
          </Button>
        </div>
      </div>
    </>
  );
};

export default FeatureSection;
