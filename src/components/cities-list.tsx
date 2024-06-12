import { Link } from 'react-router-dom';
import { CityString } from '../constant/consts';
import { useAppDispatch } from '../hooks';
import { setSelectedCity } from '../store/offer-reducers/offer/reducer';

type CitiesListProps = {
  selectedCity: string | null;
}

export default function CitiesList({ selectedCity }: CitiesListProps): JSX.Element {
  const dispatch = useAppDispatch();

  return (
    <ul className="locations__list tabs__list" onClick={(evt) => {
      const target = evt.target as HTMLElement;
      if (target.tagName !== 'SPAN') {
        return;
      }
      dispatch(setSelectedCity(target.textContent));
    }}
    >
      <li className="locations__item">
        <Link className={`locations__item-link tabs__item ${selectedCity === CityString.Paris ? 'tabs__item--active' : ''}`} to="#">
          <span>Paris</span>
        </Link>
      </li>
      <li className="locations__item">
        <Link className={`locations__item-link tabs__item ${selectedCity === CityString.Cologne ? 'tabs__item--active' : ''}`} to="#">
          <span>Cologne</span>
        </Link>
      </li>
      <li className="locations__item">
        <Link className={`locations__item-link tabs__item ${selectedCity === CityString.Brussels ? 'tabs__item--active' : ''}`} to="#">
          <span>Brussels</span>
        </Link>
      </li>
      <li className="locations__item">
        <Link className={`locations__item-link tabs__item ${selectedCity === CityString.Amsterdam ? 'tabs__item--active' : ''}`} to="#">
          <span>Amsterdam</span>
        </Link>
      </li>
      <li className="locations__item">
        <Link className={`locations__item-link tabs__item ${selectedCity === CityString.Hamburg ? 'tabs__item--active' : ''}`} to="#">
          <span>Hamburg</span>
        </Link>
      </li>
      <li className="locations__item">
        <Link className={`locations__item-link tabs__item ${selectedCity === CityString.Dusseldorf ? 'tabs__item--active' : ''}`} to="#">
          <span>Dusseldorf</span>
        </Link>
      </li>
    </ul>
  );
}
