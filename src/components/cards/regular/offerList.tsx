import { OfferType } from '../../../constant/types';
import OfferCard from './offerCard';

type OfferListProps = {
    offers: OfferType[];
    setActiveCard: (id: number) => void;
    isMainScreen: boolean;
}

export default function OfferList({ offers, setActiveCard, isMainScreen }: OfferListProps) {
  return (
    <div className="cities__places-list places__list tabs__content">
      {offers.map((offer) =>
        <OfferCard onMouseOver={setActiveCard} offer={offer} isMainScreen={isMainScreen} key={offer.id} />)};
    </div>
  );
}
