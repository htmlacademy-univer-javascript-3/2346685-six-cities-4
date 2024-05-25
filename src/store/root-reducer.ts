import { createReducer } from '@reduxjs/toolkit';
import { AuthStatus, CityString } from '../constant/consts';
import { CityType, OfferType, SelectedOfferType } from '../constant/types';
import { filterOffers, filterCities, loadOffers, setLoadingStatus, loadOfferByID, setError, setAuth, loadFavorites } from './actions';
import { cities } from '../mocks/cities';

type StateType = {
  Auth: AuthStatus;
  selectedCity: CityType;
  offers: OfferType[];
  filteredOffers: OfferType[];
  favoriteOffers: OfferType[];
  selectedOffer: SelectedOfferType;
  loadingStatus: boolean;
  error: string | null;
}

const INITIAL_CITY = CityString.PARIS;
const initialState: StateType = {
  Auth: AuthStatus.Unknown,
  selectedCity: cities[INITIAL_CITY],
  offers: [],
  filteredOffers: [],
  favoriteOffers: [],
  selectedOffer: { offerInfo: null, nearby: [], reviews: [] },
  loadingStatus: false,
  error: null,
};

export const reducer = createReducer(initialState, (builder) => {
  builder
    .addCase(filterCities, (state, action) => {
      state.selectedCity = cities[action.payload as CityString];
    })
    .addCase(filterOffers, (state) => {
      state.filteredOffers = state.offers.filter((offer) => offer.city.name === state.selectedCity.name);
    })
    .addCase(loadOffers, (state, { payload }) => {
      state.offers = payload;
    })
    .addCase(loadFavorites, (state, { payload }) => {
      state.favoriteOffers = payload;
    })
    .addCase(setLoadingStatus, (state, { payload }) => {
      state.loadingStatus = payload;
    })
    .addCase(loadOfferByID, (state, { payload }) => {
      state.selectedOffer = payload;
    })
    .addCase(setError, (state, action) => {
      state.error = action.payload;
    })
    .addCase(setAuth, (state, action) => {
      state.Auth = action.payload;
    });
});
