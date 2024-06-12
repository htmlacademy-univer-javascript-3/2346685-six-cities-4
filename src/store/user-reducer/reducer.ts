import { PayloadAction, createSlice } from '@reduxjs/toolkit';
import { AuthStatus, SliceNames } from '../../constant/consts';
import { checkAuthAction, loginAction, logoutAction } from '../api-actions';

type UserState = {
  auth: AuthStatus;
}

const initialState: UserState = {
  auth: AuthStatus.Unknown,
};

export const UserSlice = createSlice({
  name: SliceNames.UserReducer,
  initialState,
  reducers: {
    setAuth: (state, action: PayloadAction<AuthStatus>) => {
      state.auth = action.payload;
    },
  },
  extraReducers(builder) {
    builder
      .addCase(checkAuthAction.fulfilled, (state) => {
        state.auth = AuthStatus.Auth;
      })
      .addCase(checkAuthAction.rejected, (state) => {
        state.auth = AuthStatus.NoAuth;
      })
      .addCase(loginAction.rejected, (state) => {
        state.auth = AuthStatus.NoAuth;
      })
      .addCase(logoutAction.fulfilled, (state) => {
        state.auth = AuthStatus.NoAuth;
      });
  }
});
