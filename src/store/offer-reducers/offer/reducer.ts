import { createSlice } from "@reduxjs/toolkit/dist/createSlice";
import { CityType, OfferType } from "../../../constant/types";
import { CityString } from "../../../constant/consts";

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

export const favoriteOffersData = createSlice({
  name: 'offer-reducer',
  initialState,
  reducers: {
    setSelectedCity: (state, action) => {
      state.selectedCity = action.payload;
    },
    loadOffers: (state, action) => {
      state.offers = action.payload;
      state.cityData = state.offers[0].city;
    },
    filterOffers: (state) => {
      state.filteredOffers = state.offers.filter((offer) => offer.city.name === state.cityData?.name);
    },
    loadFavorites: (state, action) => {
      state.favoriteOffers = action.payload;
    },
  }
});
