import { createSlice } from "@reduxjs/toolkit/dist/createSlice";
import { AuthStatus } from "../../constant/consts";

type UserState = {
  Auth: AuthStatus;
}

const initialState: UserState = {
  Auth: AuthStatus.Unknown,
};

export const favoriteOffersData = createSlice({
  name: 'user-reducer',
  initialState,
  reducers: {
    setAuth: (state, action) => {
      state.Auth = action.payload;
    },
  },
  extraReducers(builder) {

  }
});
