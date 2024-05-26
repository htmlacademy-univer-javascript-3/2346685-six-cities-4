import { PayloadAction, createSlice } from '@reduxjs/toolkit';
import { AuthStatus, SliceNames } from '../../constant/consts';
import { checkAuthAction, loginAction, logoutAction } from '../api-actions';

type UserState = {
  Auth: AuthStatus;
}

const initialState: UserState = {
  Auth: AuthStatus.Unknown,
};

export const UserSlice = createSlice({
  name: SliceNames.USER_REDUCER,
  initialState,
  reducers: {
    setAuth: (state, action: PayloadAction<AuthStatus>) => {
      state.Auth = action.payload;
    },
  },
  extraReducers(builder) {
    builder
      .addCase(checkAuthAction.fulfilled, (state) => {
        state.Auth = AuthStatus.Auth;
      })
      .addCase(checkAuthAction.rejected, (state) => {
        state.Auth = AuthStatus.NoAuth;
      })
      .addCase(loginAction.rejected, (state) => {
        state.Auth = AuthStatus.NoAuth;
      })
      .addCase(logoutAction.fulfilled, (state) => {
        state.Auth = AuthStatus.NoAuth;
      });
  }
});
