import { OfferType } from '../../../constant/types';
import { Link, useNavigate } from 'react-router-dom';
import { getStarsFromRating } from '../../../constant/utils';
import { useAppDispatch, useAppSelector } from '../../../hooks';
import { setOfferFavoriteStatusAction } from '../../../store/api-actions';
import { getAuthStatus } from '../../../store/user-reducer/selectors';
import { useState } from 'react';
import { AuthStatus, PageRoutes } from '../../../constant/consts';

export type OfferCardParams = {
  offer: OfferType;
  onMouseOver?: (id: string) => void;
  isMainScreen: boolean;
}

export default function OfferCard({ offer, onMouseOver, isMainScreen }: OfferCardParams): JSX.Element {
  const dispatch = useAppDispatch();

  const authStatus = useAppSelector(getAuthStatus);
  const [isFavoriteOffer, setFavoriteOffer] = useState<boolean | null>(offer.isFavorite);

  const navigate = useNavigate();
  const handleFavoriteButtonClick = () => {
    if (authStatus !== AuthStatus.Auth) {
      navigate(PageRoutes.Login);
    } else {
      dispatch(setOfferFavoriteStatusAction({ id: offer.id, favoriteStatus: !isFavoriteOffer }));
      setFavoriteOffer(!isFavoriteOffer);
    }
  };

  return (
    <article className={isMainScreen ? 'cities__card place-card' : 'near-places__card place-card'}
      id={offer.id.toString()}
      onMouseOver={(evt) => {
        const target = evt.currentTarget as HTMLElement;
        if (onMouseOver) {
          onMouseOver(target.id);
        }
      }}
      onMouseLeave={() => {
        if (onMouseOver) {
          onMouseOver('');
        }
      }}
    >
      {
        (offer.isPremium && isMainScreen) ? (
          <div className="place-card__mark">
            <span>Premium</span>
          </div>
        ) : ('')
      }
      <div className={isMainScreen ? 'near-places__image-wrapper place-card__image-wrapper' : 'cities__image-wrapper place-card__image-wrapper'}>
        <Link to={`/offer/${offer.id}`} state={offer}>
          <img className="place-card__image" src={offer.previewImage} width="260" height="200" alt="Place image" />
        </Link>
      </div>
      <div className="place-card__info">
        <div className="place-card__price-wrapper">
          <div className="place-card__price">
            <b className="place-card__price-value">&euro;{offer.price}</b>
            <span className="place-card__price-text">&#47;&nbsp;night</span>
          </div>
          <button className={`place-card__bookmark-button ${isFavoriteOffer ? 'place-card__bookmark-button--active' : ''} button`} onClick={handleFavoriteButtonClick} type="button">
            <svg className="place-card__bookmark-icon" width="18" height="19">
              <use xlinkHref="#icon-bookmark"></use>
            </svg>
            <span className="visually-hidden">To bookmarks</span>
          </button>
        </div>
        <div className="place-card__rating rating">
          <div className="place-card__stars rating__stars">
            <span style={{ width: getStarsFromRating(offer.rating) }}></span>
            <span className="visually-hidden">Rating</span>
          </div>
        </div>
        <h2 className="place-card__name">
          <Link to={`/offer/${offer.id}`} state={offer}>{offer.title}</Link>
        </h2>
        <p className="place-card__type">{offer.type}</p>
      </div>
    </article>
  );
}
