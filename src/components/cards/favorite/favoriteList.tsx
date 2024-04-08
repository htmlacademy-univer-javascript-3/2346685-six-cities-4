import { Offer } from '../../../constant/types';
import FavoriteCard from './favoriteCard';

export type OfferListProps = {
    offers: Offer[];
}

export default function FavoritesList({ offers }: OfferListProps) {
  // eslint-disable-next-line @typescript-eslint/no-unused-vars
  return (
    <div className="favorites__places">
      {offers.map((offer) =>
        <FavoriteCard offer={offer} key={offer.id} />)}
    </div>
  );
}
