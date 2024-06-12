import { ReviewType } from '../constant/types';
import Review from './review';

type ReviewListProps = {
    reviews: ReviewType[];
}

export default function ReviewsList({ reviews }: ReviewListProps): JSX.Element {
  const reviewsSlice = reviews.slice(0, 10).sort((lhs, rhs) => Date.parse(rhs.date) - Date.parse(lhs.date));

  return (
    <ul className="reviews__list">
      {reviewsSlice.map((review) => (
        <Review key={review.id} review={review}/>
      ))}
    </ul>
  );
}
