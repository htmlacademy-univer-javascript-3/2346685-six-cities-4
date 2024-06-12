import { PayloadAction, createSlice } from '@reduxjs/toolkit';
import { OfferType } from '../../../constant/types';
import { CityString, SliceNames } from '../../../constant/consts';
import { fetchFavoriteOffersAction, fetchOffersAction } from '../../api-actions';

type OfferState = {
  selectedCity: string;
  offers: OfferType[];
  favoriteOffers: OfferType[];
}

const INITIAL_CITY = CityString.Paris;
const initialState: OfferState = {
  selectedCity: INITIAL_CITY,
  offers: [],
  favoriteOffers: [],
};

export const OfferSlice = createSlice({
  name: SliceNames.OfferReducer,
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
    loadFavorites: (state, action: PayloadAction<OfferType[]>) => {
      state.favoriteOffers = action.payload;
    },
  }, extraReducers(builder) {
    builder
      .addCase(fetchOffersAction.fulfilled, (state, action: PayloadAction<OfferType[]>) => {
        state.offers = action.payload;
      })
      .addCase(fetchFavoriteOffersAction.fulfilled, (state, action: PayloadAction<OfferType[]>) => {
        state.favoriteOffers = action.payload;
      });
  }
});

export const { setSelectedCity, loadOffers, loadFavorites } = OfferSlice.actions;
