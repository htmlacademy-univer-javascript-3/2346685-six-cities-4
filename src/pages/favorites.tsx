import FavoritesList from '../components/cards/favorite/favoriteList';
import Header from '../components/header';
import { OfferType } from '../constant/types';
import { uniqueBy } from '../constant/utils';

type FavoritesProps = {
  offers: OfferType[];
}

function FavoritesPage({ offers }: FavoritesProps): JSX.Element {
  const favorites = offers.filter((offer) => offer.isFavorite);

  return (
    <div className="page">
      <Header/>

      <main className="page__main page__main--favorites">
        <div className="page__favorites-container container">
          <section className="favorites">
            <h1 className="favorites__title">Saved listing</h1>
            <ul className="favorites__list">
              {
                uniqueBy<OfferType, number>(favorites, (item: OfferType) => item.city.id).map(({ city }) => (
                  <li className="favorites__locations-items" key={city.id}>
                    <div className="favorites__locations locations locations--current">
                      <div className="locations__item">
                        <a className="locations__item-link" href="/">
                          <span>{city.name}</span>
                        </a>
                      </div>
                    </div>
                    <FavoritesList offers={offers.filter((offer) => (offer.city.id === city.id))} />
                  </li>
                ))
              }
            </ul>
          </section>
        </div>
      </main >
      <footer className="footer container">
        <a className="footer__logo-link" href="main.html">
          <img className="footer__logo" src="img/logo.svg" alt="6 cities logo" width="64" height="33" />
        </a>
      </footer>
    </div >
  );
}

export default FavoritesPage;
