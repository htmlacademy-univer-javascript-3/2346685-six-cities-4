import { Offer } from '../../../constant/types';
import { useState } from 'react';
import OfferCard from './offerCard';

type OfferListProps = {
    offers: Offer[];
}

export default function OfferList({ offers }: OfferListProps) {
  // eslint-disable-next-line @typescript-eslint/no-unused-vars
  const [activeCardId, setActiveCard] = useState(-1);

  return (
    <div className="cities__places-list places__list tabs__content">
      {offers.map((offer) =>
        <OfferCard onMouseOver={setActiveCard} offer={offer} key={offer.id} />)};
    </div>
  );
}
