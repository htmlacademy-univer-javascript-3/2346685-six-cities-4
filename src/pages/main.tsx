import { OfferType } from '../constant/types';
import { useState } from 'react';
import { useAppSelector } from '../hooks';
import OfferList from '../components/cards/regular/offerList';
import MapComponent from '../components/map';
import CitiesList from '../components/citiesList';
import { SortBy } from '../constant/consts';
import useOffersSort from '../hooks/useOffersSort';
import SortByForm from '../components/sortingByForm';

export type MainPageProps = {
  offers: OfferType[];
};

export default function MainPage({ offers }: MainPageProps): JSX.Element {
  const [activeCardId, setActiveCard] = useState(1);
  const selectedCity = useAppSelector((state)=>state.selectedCity);

  const [selectedSort, selectSort] = useState<SortBy>(SortBy.Popular);
  const sortedOffers = useOffersSort(offers, selectedSort);

  return (
    <div className="page page--gray page--main">
      <header className="header">
        <div className="container">
          <div className="header__wrapper">
            <div className="header__left">
              <a className="header__logo-link header__logo-link--active">
                <img className="header__logo" src="img/logo.svg" alt="6 cities logo" width="81" height="41" />
              </a>
            </div>
            <nav className="header__nav">
              <ul className="header__nav-list">
                <li className="header__nav-item user">
                  <a className="header__nav-link header__nav-link--profile" href="#">
                    <div className="header__avatar-wrapper user__avatar-wrapper">
                    </div>
                    <span className="header__user-name user__name">Oliver.conner@gmail.com</span>
                    <span className="header__favorite-count">3</span>
                  </a>
                </li>
                <li className="header__nav-item">
                  <a className="header__nav-link" href="#">
                    <span className="header__signout">Sign out</span>
                  </a>
                </li>
              </ul>
            </nav>
          </div>
        </div>
      </header>

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
