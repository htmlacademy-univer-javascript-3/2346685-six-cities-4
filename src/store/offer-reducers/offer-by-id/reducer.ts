import { PayloadAction, createSlice } from '@reduxjs/toolkit';
import { ReviewType, SelectedOfferType } from '../../../constant/types';
import { SliceNames } from '../../../constant/consts';
import { fetchOfferByIDAction, sendOfferCommentAction } from '../../api-actions';

type OfferByIDState = {
  selectedOffer: SelectedOfferType;
}

const initialState: OfferByIDState = {
  selectedOffer: {
    offerInfo: null,
    rNearby: [],
    reviews: []
  },
};

export const OfferByIDSlice = createSlice({
  name: SliceNames.OfferByIdReducer,
  initialState,
  reducers: {
  },
  extraReducers(builder) {
    builder
      .addCase(fetchOfferByIDAction.fulfilled, (state, action: PayloadAction<SelectedOfferType>) => {
        state.selectedOffer = action.payload;
      })
      .addCase(sendOfferCommentAction.fulfilled, (state, action: PayloadAction<ReviewType>) => {
        state.selectedOffer.reviews = [...state.selectedOffer.reviews, action.payload];
      });
  }
});
