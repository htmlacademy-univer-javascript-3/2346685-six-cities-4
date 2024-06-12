import { combineReducers } from '@reduxjs/toolkit';
import { AppReducer as AppSlice } from './app-reducer/reducer';
import { OfferSlice } from './offer-reducers/offer/reducer';
import { OfferByIDSlice } from './offer-reducers/offer-by-id/reducer';
import { UserSlice } from './user-reducer/reducer';
import { SliceNames } from '../constant/consts';

export const rootReducer = combineReducers({
  [SliceNames.AppReducer]: AppSlice.reducer,
  [SliceNames.OfferReducer]: OfferSlice.reducer,
  [SliceNames.OfferByIdReducer]: OfferByIDSlice.reducer,
  [SliceNames.UserReducer]: UserSlice.reducer,
});
