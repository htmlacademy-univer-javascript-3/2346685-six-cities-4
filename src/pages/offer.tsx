import { useNavigate, useParams } from 'react-router-dom';
import ReviewForm from '../components/reviewForm';
import { getStarsFromRating } from '../constant/utils';
import { useEffect, useState } from 'react';
import ReviewsList from '../components/reviewList';
import OfferList from '../components/cards/regular/offerList';
import MapComponent from '../components/map';
import { useAppDispatch, useAppSelector } from '../hooks';
import { clearErrorAction, fetchOfferByIDAction } from '../store/api-actions';
import LoadingPage from './loading/loading';
import { PageRoutes } from '../constant/consts';
import Header from '../components/header';

export default function OfferScreen(): JSX.Element {
  const { id } = useParams<{ id: string }>();

  const selectedOffer = useAppSelector((state) => state.selectedOffer);
  const loadingStatus = useAppSelector((state) => state.loadingStatus);
  const error = useAppSelector((state) => state.error);

  const [activeCardID, setActiveCardID] = useState('0');
  const selectedCity = useAppSelector((state) => state.selectedCity);

  const navigate = useNavigate();
  const dispatch = useAppDispatch();
  useEffect(() => {
    if (error === '404') {
      navigate(PageRoutes.NotFound);
      dispatch(clearErrorAction());
    }
  }, [error, navigate, dispatch]);

  if (loadingStatus || !selectedOffer || !selectedOffer.offerInfo) {
    // In case offer is not loaded(for example page was reloaded) dispatch another loader
    if (!loadingStatus) {
      if (id) {
        dispatch(fetchOfferByIDAction({ id: id }));
      }
    }

    return (
      <LoadingPage />
    );
  }

  const { offerInfo, nearby, reviews } = selectedOffer;

  const { type, title, description, price, rating, isPremium, isFavorite, host, images,
    goods: amenities, maxAdults, bedrooms } = offerInfo;

  return (
    <div className="page">
      <Header />

      <main className="page__main page__main--offer">
        <section className="offer">
          <div className="offer__gallery-container container">
            <div className="offer__gallery">
              {images.map((image) => (
                (
                  <div className="offer__image-wrapper" key={image}>
                    <img className="offer__image" src={image} alt="studio" />
                  </div>
                )
              ))}
              <div className="offer__image-wrapper">
                <img
                  className="offer__image"
                  src="img/apartment-01.jpg"
                  alt="Photo studio"
                />
              </div>
            </div>
          </div>
          <div className="offer__container container">
            <div className="offer__wrapper">
              <div className="offer__mark">
                <span>{isPremium ? 'Premium' : ''}</span>
              </div>
              <div className="offer__name-wrapper">
                <h1 className="offer__name">{title}</h1>
                <button className={`offer__bookmark-button button ${isFavorite ? 'offer__bookmark-button--active' : ''}`} type="button">
                  <svg className="offer__bookmark-icon" width="31" height="33">
                    <use xlinkHref="#icon-bookmark"></use>
                  </svg>
                  <span className="visually-hidden">To bookmarks</span>
                </button>
              </div>
              <div className="offer__rating rating">
                <div className="offer__stars rating__stars">
                  <span style={{ width: getStarsFromRating(rating) }}></span>
                  <span className="visually-hidden">Rating</span>
                </div>
                <span className="offer__rating-value rating__value">{rating}</span>
              </div>
              <ul className="offer__features">
                <li className="offer__feature offer__feature--entire">
                  {type}
                </li>
                <li className="offer__feature offer__feature--bedrooms">
                  {`${bedrooms} Bedrooms`}
                </li>
                <li className="offer__feature offer__feature--adults">
                  {`Max ${maxAdults} adults`}
                </li>
              </ul>
              <div className="offer__price">
                <b className="offer__price-value">&euro;{price}</b>
                <span className="offer__price-text">&nbsp;night</span>
              </div>
              <div className="offer__inside">
                <h2 className="offer__inside-title">What&apos;s inside</h2>
                <ul className="offer__inside-list">
                  {amenities.map((amenity) => (
                    <li className="offer__inside-item" key={amenity}>
                      {amenity}
                    </li>
                  ))}
                </ul>
              </div>
              <div className="offer__host">
                <h2 className="offer__host-title">Meet the host</h2>
                <div className="offer__host-user user">
                  <div className="offer__avatar-wrapper offer__avatar-wrapper--pro user__avatar-wrapper">
                    <img
                      className="offer__avatar user__avatar"
                      src={host.avatarUrl}
                      width="74"
                      height="74"
                      alt="Host avatar"
                    />
                  </div>
                  <span className="offer__user-name">{host.name}</span>
                  <span className="offer__user-status">{host.isPro ? 'Pro' : ''}</span>
                </div>
                <div className="offer__description">
                  {description.split('.').map((sentence) => (
                    <p className="offer__text" key={sentence}>
                      {sentence}
                    </p>
                  ))}
                </div>
              </div>
              <section className="offer__reviews reviews">
                <h2 className="reviews__title">Reviews &middot; <span className="reviews__amount">{reviews?.length}</span></h2>
                <ReviewsList reviews={reviews} />
                <ReviewForm />
              </section>
            </div>
          </div>
          <MapComponent isMainScreen={false} offers={nearby.slice(0, 3)} activeOfferId={activeCardID} selectedCity={selectedCity} />
        </section>
        <div className="container">
          <section className="near-places places">
            <h2 className="near-places__title">
              Other places in the neighborhood
            </h2>
            <div className="near-places__list places__list">
              <OfferList offers={nearby.slice(0, 3)} setActiveCard={setActiveCardID} isMainScreen={false} />
            </div>
          </section>
        </div>
      </main>
    </div>
  );
}
