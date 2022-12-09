import { Rating } from "@components/common";
import styles from "./DescriptionSection.module.scss";

const ImageDetail: React.FC = () => {
  return (
    <div className={`${styles["description"]}`}>
      <p className={`${styles["title"]}`}>
        Merry and Bright SVG PNG Digital Download File Merry and Bright SVG PNG
        Digital Download File
      </p>
      <Rating ratingStar={5} size="large" />
      <p className={`${styles["sub-title"]}`}>What you will get</p>
      <p>&bull; You will receive a PNG format file.</p>
      <p>&bull; Image resolution 300pdi.</p>
      <p></p>
      <p className={`${styles["sub-title"]}`}>
        Note : NO PHYSICAL PRODUCTS ARE SENDED
      </p>
      <p className={`${styles["sub-title"]}`}>Describe</p>
      <p>
        This is a backgroundless PNG design, suitable for printing sublimation
        products, it will be a great design to print on cups, shirts,... it will
        make printed products unique and more impressive. Perfect for your
        family on holiday.
      </p>
      <p className={`${styles["sub-title"]}`}>Commit</p>
      <p>&bull; High quality images, no blurry images.</p>
      <p>
        &bull; The images are all made by us, suitable for printing and selling
        products on Amazon and Etsy.
      </p>
      <p>&bull; There are no stolen images and we also condemn this action .</p>
      <p className={`${styles["sub-title"]}`}>Permission to use</p>
      <p>
        &bull; When you make a purchase you can use them for personal printing
        or print them and sell as your SME.
      </p>
      <p>&bull; You may not use them for resale in digital form anywhere.</p>
      <p className={`${styles["sub-title"]}`}>How to purchase</p>
      <p>
        You can put them in the cart and pay using the payment gateways we
        provide, the packages will be sent to your mail for you to download
        them.
      </p>
      <p className={`${styles["sub-title"]}`}>Can you get a refund?</p>
      <p>
        Since this is a digital product, we will not refund you, we will
        properly compensate you in many ways if our product is not as described.
        You can contact us in many ways and guarantee your rights.
      </p>
      <p className={`${styles["sub-title"]}`}>Thanks!</p>
    </div>
  );
};

export default ImageDetail;
