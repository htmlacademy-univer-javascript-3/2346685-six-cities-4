import { Link } from 'react-router-dom';
import { CityString } from '../constant/consts';
import { useAppDispatch } from '../hooks';
import { filterOffers, filterCities } from '../constant/actions';
import { CityType } from '../constant/types';

type CitiesListProps = {
  selectedCity: CityType | null;
}


export default function CitiesList({ selectedCity }: CitiesListProps): JSX.Element {
  const dispatch = useAppDispatch();

  return (
    <ul className="locations__list tabs__list" onClick={(evt) => {
      const target = evt.target as HTMLElement;
      if (target.tagName !== 'SPAN') {
        return;
      }
      dispatch(filterCities(target.textContent));
      dispatch(filterOffers());
    }}
    >
      <li className="locations__item">
        <Link className={`locations__item-link tabs__item ${selectedCity?.name === CityString.PARIS ? 'tabs__item--active' : ''}`} to="#">
          <span>Paris</span>
        </Link>
      </li>
      <li className="locations__item">
        <Link className={`locations__item-link tabs__item ${selectedCity?.name === CityString.COLOGNE ? 'tabs__item--active' : ''}`} to="#">
          <span>Cologne</span>
        </Link>
      </li>
      <li className="locations__item">
        <Link className={`locations__item-link tabs__item ${selectedCity?.name === CityString.BRUSSELS ? 'tabs__item--active' : ''}`} to="#">
          <span>Brussels</span>
        </Link>
      </li>
      <li className="locations__item">
        <Link className={`locations__item-link tabs__item ${selectedCity?.name === CityString.AMSTERDAM ? 'tabs__item--active' : ''}`} to="#">
          <span>Amsterdam</span>
        </Link>
      </li>
      <li className="locations__item">
        <Link className={`locations__item-link tabs__item ${selectedCity?.name === CityString.HAMBURG ? 'tabs__item--active' : ''}`} to="#">
          <span>Hamburg</span>
        </Link>
      </li>
      <li className="locations__item">
        <Link className={`locations__item-link tabs__item ${selectedCity?.name === CityString.DUSSELDORF ? 'tabs__item--active' : ''}`} to="#">
          <span>Dusseldorf</span>
        </Link>
      </li>
    </ul>
  );
}
