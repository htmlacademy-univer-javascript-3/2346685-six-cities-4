import FavoritesList from '../components/cards/favorite/favorite-list';
import Header from '../components/header';
import { OfferType } from '../constant/types';
import { uniqueBy } from '../constant/utils';
import { useAppSelector } from '../hooks';
import { getLoadingStatus } from '../store/app-reducer/selectors';
import { getFavoriteOffers } from '../store/offer-reducers/offer/selectors';
import LoadingPage from './loading/loading';

function FavoritesPage(): JSX.Element {
  const favorites = useAppSelector(getFavoriteOffers);

  const loadingStatus = useAppSelector(getLoadingStatus);
  if (loadingStatus) {
    return (<LoadingPage/>);
  }

  return (
    <div className={`page ${favorites.length === 0 ? 'page--favorites-empty' : ''}`}>
      <Header />
      {
        favorites.length === 0 ? (
          <main className="page__main page__main--favorites page__main--favorites-empty">
            <div className="page__favorites-container container">
              <section className="favorites favorites--empty">
                <h1 className="visually-hidden">Favorites (empty)</h1>
                <div className="favorites__status-wrapper">
                  <b className="favorites__status">Nothing yet saved.</b>
                  <p className="favorites__status-description">Save properties to narrow down search or plan your future trips.</p>
                </div>
              </section>
            </div>
          </main>
        ) : (
          <main className="page__main page__main--favorites">
            <div className="page__favorites-container container">
              <section className="favorites">
                <h1 className="favorites__title">Saved listing</h1>
                <ul className="favorites__list">
                  {
                    uniqueBy<OfferType, string>(favorites, (item: OfferType) => item.city.name).map(({ city }) => (
                      <li className="favorites__locations-items" key={city.name}>
                        <div className="favorites__locations locations locations--current">
                          <div className="locations__item">
                            <a className="locations__item-link" href="/">
                              <span>{city.name}</span>
                            </a>
                          </div>
                        </div>
                        <FavoritesList offers={favorites.filter((offer) => (offer.city.name === city.name))} />
                      </li>
                    ))
                  }
                </ul>
              </section>
            </div>
          </main >
        )
      }
      <footer className="footer container">
        <a className="footer__logo-link" href="main.html">
          <img className="footer__logo" src="img/logo.svg" alt="6 cities logo" width="64" height="33" />
        </a>
      </footer>
    </div >
  );
}

export default FavoritesPage;
