import Rating from "@components/common/Rating";
import styles from "./ReviewSection.module.scss";

interface IComment {
  title: string;
  ratingStar: number;
  content: string;
}

const REVIEW_COMMENTS: IComment[] = [
  {
    title: "The Doong",
    ratingStar: 4,
    content:
      "After search and buying a lot, I found this is the best mockups I have ever purchased to showcase my designs. You will also get bunch of different versions + extra designs. The seller also helped me a lot and reached out after my purchase and asked if I had any questions",
  },
  {
    title: "The Doong",
    ratingStar: 5,
    content:
      "After search and buying a lot, I found this is the best mockups I have ever purchased to showcase my designs. You will also get bunch of different versions + extra designs. The seller also helped me a lot and reached out after my purchase and asked if I had any questions",
  },
  {
    title: "The Doong",
    ratingStar: 0,
    content:
      "After search and buying a lot, I found this is the best mockups I have ever purchased to showcase my designs. You will also get bunch of different versions + extra designs. The seller also helped me a lot and reached out after my purchase and asked if I had any questions",
  },
  {
    title: "The Doong",
    ratingStar: 1,
    content:
      "After search and buying a lot, I found this is the best mockups I have ever purchased to showcase my designs. You will also get bunch of different versions + extra designs. The seller also helped me a lot and reached out after my purchase and asked if I had any questions",
  },
  {
    title: "The Doong",
    ratingStar: 3,
    content:
      "After search and buying a lot, I found this is the best mockups I have ever purchased to showcase my designs. You will also get bunch of different versions + extra designs. The seller also helped me a lot and reached out after my purchase and asked if I had any questions",
  },
];

const reviewInstance = (comment: IComment, index: number) => {
  return (
    <div key={index}>
      <div className={`${styles.userInfor}`}>
        <img src="" alt="" />
        <p className={`${styles.name}`}>{comment.title}</p>
      </div>
      <Rating ratingStar={comment.ratingStar} size="small" />
      <p>{comment.content}</p>
    </div>
  );
};

const ReviewSection: React.FC = () => {
  return (
    <div className={`${styles.reviewContainer}`}>
      <div className={`${styles.title}`}>Reviews</div>
      {REVIEW_COMMENTS.map((comment: IComment, index: number) => {
        return reviewInstance(comment, index);
      })}
    </div>
  );
};

export default ReviewSection;
