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
];

const reviewInstance = (comment: IComment, i: number) => {
  return (
    <div key={i}>
      <p className={`${styles["subtitle"]}`}>{comment.title}</p>
      <Rating ratingStar={comment.ratingStar} />
      <p>{comment.content}</p>
    </div>
  );
};

const ReviewSection: React.FC = () => {
  return (
    <div className={`${styles["review-container"]}`}>
      {REVIEW_COMMENTS.map((comment: IComment, i: number) => {
        return reviewInstance(comment, i);
      })}
    </div>
  );
};

export default ReviewSection;
