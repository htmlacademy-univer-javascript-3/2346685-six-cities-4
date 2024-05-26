import { PayloadAction, createSlice } from '@reduxjs/toolkit';
import { SelectedOfferType } from '../../../constant/types';
import { SliceNames } from '../../../constant/consts';
import { fetchOfferByIDAction } from '../../api-actions';

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

export const OfferByIDSlice = createSlice({
  name: SliceNames.OFFER_BY_ID_REDUCER,
  initialState,
  reducers: {
  },
  extraReducers(builder) {
    builder
      .addCase(fetchOfferByIDAction.fulfilled, (state, action: PayloadAction<SelectedOfferType>) => {
        state.selectedOffer = action.payload;
      });
  }
});
