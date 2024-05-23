import {createReducer} from '@reduxjs/toolkit';
import { CityString } from '../constant/consts';
import { offers } from '../mocks/offers';
import { CityType, OfferType } from '../constant/types';
import { filterOffers, filterCities } from '../constant/actions';
import { cities } from '../mocks/cities';


type initialStateType = {
  selectedCity: CityType;
  offers: OfferType[];
}

const INITIAL_CITY = CityString.PARIS;
const initialState: initialStateType = {
  selectedCity: cities[INITIAL_CITY],
  offers: offers.filter((offer) => offer.city.name === (INITIAL_CITY as string)),
};

export const reducer = createReducer(initialState, (builder) => {
  builder
    .addCase(filterCities, (state, action) => {
      state.selectedCity = cities[action.payload as CityString];
    })
    .addCase(filterOffers, (state) => {
      state.offers = offers.filter((offer)=> offer.city.name === state.selectedCity.name);
    });
});
