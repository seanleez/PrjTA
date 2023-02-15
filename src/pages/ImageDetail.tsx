import {
  CarouselContainer,
  DescriptionSection,
  FeatureSection,
  ReviewSection,
} from "@components/image-detail";
import styles from "./ImageDetail.module.scss";
const ImageDetail: React.FC = () => {
  return (
    <div className={`${styles.container}`}>
      <div className={`${styles.imageSection}`}>
        <CarouselContainer />
        <FeatureSection />
      </div>
      <DescriptionSection />
      <ReviewSection />
    </div>
  );
};

export default ImageDetail;
