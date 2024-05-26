import { combineReducers } from '@reduxjs/toolkit';
import { AppReducer as AppSlice } from './app-reducer/reducer';
import { OfferSlice } from './offer-reducers/offer/reducer';
import { OfferByIDSlice } from './offer-reducers/offer-by-id/reducer';
import { UserSlice } from './user-reducer/reducer';
import { SliceNames } from '../constant/consts';

export const rootReducer = combineReducers({
  [SliceNames.APP_REDUCER]: AppSlice.reducer,
  [SliceNames.OFFER_REDUCER]: OfferSlice.reducer,
  [SliceNames.OFFER_BY_ID_REDUCER]: OfferByIDSlice.reducer,
  [SliceNames.USER_REDUCER]: UserSlice.reducer,
});
