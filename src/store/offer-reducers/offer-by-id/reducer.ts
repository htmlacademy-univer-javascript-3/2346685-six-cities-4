import { createSlice } from "@reduxjs/toolkit/dist/createSlice";
import { SelectedOfferType } from "../../../constant/types";

type OfferByIDState = {
  selectedOffer: SelectedOfferType;
}

const initialState: OfferByIDState = {
  selectedOffer: {
    offerInfo: null,
    nearby: [],
    reviews: []
  },
};

export const favoriteOffersData = createSlice({
  name: 'offer-by-id-reducer',
  initialState,
  reducers: {
    oadOfferByID: (state, { payload }) => {
      state.selectedOffer = payload;
    },
  }
});
