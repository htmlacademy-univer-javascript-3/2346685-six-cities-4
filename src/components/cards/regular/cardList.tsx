import { Offer } from '../../../constant/types';
import { useState } from 'react';
import OfferCard from './offerCard';

type OfferListProps = {
    offers: Offer[];
    setActiveCard: (id: number) => void;
}

export default function OfferList({ offers, setActiveCard }: OfferListProps) {
  return (
    <div className="cities__places-list places__list tabs__content">
      {offers.map((offer) =>
        <OfferCard onMouseOver={setActiveCard} offer={offer} key={offer.id} />)};
    </div>
  );
}
