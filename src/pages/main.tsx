import { OfferType } from '../constant/types';
import { useState } from 'react';
import { useAppSelector } from '../hooks';
import OfferList from '../components/cards/regular/offer-list';
import MapComponent from '../components/map';
import CitiesList from '../components/cities-list';
import { SortBy } from '../constant/consts';
import useOffersSort from '../hooks/use-offers-sort';
import SortByForm from '../components/sorting-by-form';
import Header from '../components/header';
import { getCityData } from '../store/offer-reducers/offer/selectors';

export type MainPageProps = {
  offers: OfferType[];
};

export default function MainPage({ offers }: MainPageProps): JSX.Element {
  const [activeCardId, setActiveCard] = useState('0');
  const selectedCity = useAppSelector(getCityData);

  if (!selectedCity) {
    throw new Error('City Data is null');
  }

  const [selectedSort, selectSort] = useState<SortBy>(SortBy.Popular);
  const sortedOffers = useOffersSort(offers, selectedSort);

  return (
    <div className="page page--gray page--main">
      <Header />

      <main className="page__main page__main--index">
        <h1 className="visually-hidden">Cities</h1>
        <div className="tabs">
          <section className="locations container">
            <ul className="locations__list tabs__list">
              <CitiesList selectedCity={selectedCity}/>
            </ul>
          </section>
        </div>
        <div className="cities">
          <div className="cities__places-container container">
            <section className="cities__places places">
              <h2 className="visually-hidden">Places</h2>
              <b className="places__found">{offers.length} place{offers.length !== 1 ? 's' : ''} to stay in {selectedCity.name}</b>
              <SortByForm onClick={selectSort} sortByCurrent={selectedSort}/>
              <div className="cities__places-list places__list tabs__content">
                <OfferList offers={sortedOffers} isMainScreen setActiveCard={setActiveCard}/>
              </div>
            </section>
            <div className="cities__right-section">
              <MapComponent offers={offers} isMainScreen activeOfferId={activeCardId} selectedCity={selectedCity}/>
            </div>
          </div>
        </div>
      </main>
    </div>
  );
}
