import { CarouselContainer } from "@components/layout/image-detail";
import { DescriptionSection } from "@components/layout/image-detail";
import { ReviewSection } from "@components/layout/image-detail";
import styles from "./ImageDetail.module.scss";
const ImageDetail: React.FC = () => {
  return (
    <div className={`${styles["container"]}`}>
      <div className={`${styles["image-section"]}`}>
        <CarouselContainer />
        <DescriptionSection />
      </div>
      <ReviewSection />
    </div>
  );
};

export default ImageDetail;
