import { OfferType } from '../../../constant/types';
import FavoriteCard from './favorite-card';

export type OfferListProps = {
    offers: OfferType[];
}

export default function FavoritesList({ offers }: OfferListProps): JSX.Element {
  // eslint-disable-next-line @typescript-eslint/no-unused-vars
  return (
    <div className="favorites__places">
      {offers.map((offer) =>
        <FavoriteCard offer={offer} key={offer.id} />)}
    </div>
  );
}
