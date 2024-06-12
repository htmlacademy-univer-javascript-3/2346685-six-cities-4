import { PayloadAction, createSlice } from '@reduxjs/toolkit';
import { SliceNames } from '../../constant/consts';
import { clearErrorAction, fetchOfferByIDAction, fetchOffersAction } from '../api-actions';

type AppState = {
  loadingStatus: boolean;
  error: string | null;
  errorCode: number | null;
}

const initialState: AppState = {
  loadingStatus: false,
  error: null,
  errorCode: null
};

export const AppReducer = createSlice({
  name: SliceNames.AppReducer,
  initialState,
  reducers: {
    setError: (state, action: PayloadAction<AppState['error']>) => {
      state.error = action.payload;
    },
    setErrorCode: (state, action: PayloadAction<AppState['errorCode']>) => {
      state.errorCode = action.payload;
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
        state.errorCode = null;
      });
  }
});

export const { setError, setErrorCode, setLoadingStatus } = AppReducer.actions;
