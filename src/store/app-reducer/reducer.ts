import { PayloadAction, createSlice } from '@reduxjs/toolkit';
import { SliceNames } from '../../constant/consts';
import { clearErrorAction, fetchOfferByIDAction, fetchOffersAction } from '../api-actions';

type AppState = {
  loadingStatus: boolean;
  error: string | null;
}

const initialState: AppState = {
  loadingStatus: false,
  error: null,
};

export const AppReducer = createSlice({
  name: SliceNames.APP_REDUCER,
  initialState,
  reducers: {
    setError: (state, action: PayloadAction<string>) => {
      state.error = action.payload;
    },
    setLoadingStatus: (state, action: PayloadAction<boolean>) => {
      state.loadingStatus = action.payload;
    },
  },
  extraReducers(builder) {
    builder
      .addCase(fetchOffersAction.pending, (state) => {
        state.loadingStatus = true;
      })
      .addCase(fetchOffersAction.fulfilled, (state) => {
        state.loadingStatus = false;
      })
      .addCase(fetchOffersAction.rejected, (state) => {
        state.loadingStatus = false;
      })
      .addCase(fetchOfferByIDAction.pending, (state) => {
        state.loadingStatus = true;
      })
      .addCase(fetchOfferByIDAction.fulfilled, (state) => {
        state.loadingStatus = false;
      })
      .addCase(fetchOfferByIDAction.rejected, (state) => {
        state.loadingStatus = false;
      })
      .addCase(clearErrorAction.fulfilled, (state) => {
        state.error = null;
      });
  }
});

export const { setError, setLoadingStatus } = AppReducer.actions;
