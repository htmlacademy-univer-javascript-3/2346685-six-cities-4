import { createSlice } from "@reduxjs/toolkit/dist/createSlice";

type AppState = {
  
  loadingStatus: boolean;
  error: string | null;
}

const initialState: AppState = {
  
  loadingStatus: false,
  error: null,
};

export const favoriteOffersData = createSlice({
  name: 'app-reducer',
  initialState,
  reducers: {
    setError: (state, action) => {
      state.error = action.payload;
    },
    setLoadingStatus: (state, action) => {
      state.loadingStatus = action.payload;
    },
  },
  extraReducers(builder) {

  }
});
