import { ReviewType } from '../constant/types';
import Review from './review';

type ReviewListProps = {
    reviews: ReviewType[];
}

export default function ReviewsList({ reviews }: ReviewListProps): JSX.Element {
  return (
    <ul className="reviews__list">
      {reviews.map((review) => (
        <Review key={review.id} review={review}/>
      ))}
    </ul>
  );
}
