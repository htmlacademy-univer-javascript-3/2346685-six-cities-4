import { PayloadAction, createSlice } from '@reduxjs/toolkit';
import { CityType, OfferType } from '../../../constant/types';
import { CityString, SliceNames } from '../../../constant/consts';
import { fetchFavoriteOffersAction, fetchOffersAction } from '../../api-actions';

type OfferState = {
  selectedCity: string;
  cityData: CityType | null;
  offers: OfferType[];
  filteredOffers: OfferType[];
  favoriteOffers: OfferType[];
}

const INITIAL_CITY = CityString.PARIS;
const initialState: OfferState = {
  selectedCity: INITIAL_CITY,
  cityData: null,
  offers: [],
  filteredOffers: [],
  favoriteOffers: [],
};

export const OfferSlice = createSlice({
  name: SliceNames.OFFER_REDUCER,
  initialState,
  reducers: {
    setSelectedCity: (state, action: PayloadAction<string | null>) => {
      if (action.payload) {
        state.selectedCity = action.payload;
      } else {
        state.selectedCity = INITIAL_CITY;
      }
    },
    loadOffers: (state, action: PayloadAction<OfferType[]>) => {
      state.offers = action.payload;
    },
    filterOffers: (state) => {
      state.filteredOffers = state.offers.filter((offer) => offer.city.name === state.selectedCity);
      state.cityData = state.filteredOffers[0].city;
    },
  },
  extraReducers(builder) {
    builder
      .addCase(fetchOffersAction.fulfilled, (state, action: PayloadAction<OfferType[]>) => {
        OfferSlice.caseReducers.loadOffers(state, action);
        OfferSlice.caseReducers.filterOffers(state);
      })
      .addCase(fetchFavoriteOffersAction.fulfilled, (state, action: PayloadAction<OfferType[]>) => {
        state.favoriteOffers = action.payload;
      });
  }
});

export const {setSelectedCity, loadOffers, filterOffers} = OfferSlice.actions;
