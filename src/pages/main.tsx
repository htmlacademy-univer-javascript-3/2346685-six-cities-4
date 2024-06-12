import { useMemo, useState } from 'react';
import { useAppSelector } from '../hooks';
import OfferList from '../components/cards/regular/offer-list';
import MapComponent from '../components/map';
import CitiesList from '../components/cities-list';
import { AuthStatus, SortBy } from '../constant/consts';
import useOffersSort from '../hooks/use-offers-sort';
import SortByForm from '../components/sorting-by-form';
import Header from '../components/header';
import LoadingPage from './loading/loading';
import { getAuthStatus } from '../store/user-reducer/selectors';
import { getLoadingStatus } from '../store/app-reducer/selectors';
import { getOffers, getSelectedCity } from '../store/offer-reducers/offer/selectors';


export default function MainPage(): JSX.Element {
  const [activeCardId, setActiveCard] = useState('0');
  const [selectedSort, selectSort] = useState<SortBy>(SortBy.Popular);

  const loadingStatus = useAppSelector(getLoadingStatus);
  const auth = useAppSelector(getAuthStatus);
  const selectedCity = useAppSelector(getSelectedCity);

  const offers = useAppSelector(getOffers);
  const filteredOffers = useMemo(
    () => offers.filter((offer) => offer.city.name === selectedCity),
    [offers, selectedCity]
  );
  const sortedOffers = useOffersSort(filteredOffers, selectedSort);

  if (loadingStatus || auth === AuthStatus.Unknown || !selectedCity) {
    return (
      <LoadingPage />
    );
  }

  return (
    <div className="page page--gray page--main">
      <Header />

      <main className="page__main page__main--index">
        <h1 className="visually-hidden">Cities</h1>
        <div className="tabs">
          <section className="locations container">
            <ul className="locations__list tabs__list">
              <CitiesList selectedCity={selectedCity} />
            </ul>
          </section>
        </div>
        <div className="cities">
          {
            filteredOffers.length > 0 ? (
              <div className="cities__places-container container">
                <section className="cities__places places">
                  <h2 className="visually-hidden">Places</h2>
                  <b className="places__found">{offers.length} place{offers.length !== 1 ? 's' : ''} to stay in {selectedCity}</b>
                  <SortByForm onClick={selectSort} sortByCurrent={selectedSort} />
                  <div className="cities__places-list places__list tabs__content">
                    <OfferList offers={sortedOffers} isMainScreen setActiveCard={setActiveCard} />
                  </div>
                </section>
                <div className="cities__right-section">
                  <MapComponent offers={offers} isMainScreen activeOfferId={activeCardId}
                    selectedCity={filteredOffers[0].city}
                  />
                </div>
              </div>
            ) : (
              <div className="cities__places-container cities__places-container--empty container">
                <section className="cities__no-places">
                  <div className="cities__status-wrapper tabs__content">
                    <b className="cities__status">No places to stay available</b>
                    <p className="cities__status-description">We could not find any property available at the moment in {selectedCity}</p>
                  </div>
                </section>
                <div className="cities__right-section"></div>
              </div>
            )
          }
        </div>
      </main>
    </div>
  );
}
