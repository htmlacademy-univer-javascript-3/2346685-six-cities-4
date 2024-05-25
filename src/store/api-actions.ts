import { AxiosInstance } from 'axios';
import { APIRoutes, AuthStatus, ERROR_TIMEOUT, PageRoutes } from '../constant/consts';
import { createAsyncThunk } from '@reduxjs/toolkit';
import { OfferType, ReviewType, SignInData, UserAccountData } from '../constant/types';
import { State, AppDispatch } from '../constant/types';
import { filterOffers, loadFavorites, loadOfferByID, loadOffers, redirectRouteAction, setAuth, setError, setLoadingStatus } from './actions';
import { dropToken, saveToken } from '../services/token';
import { store } from '.';
import { saveUserEmail } from '../services/user-email';

export const fetchOffersAction = createAsyncThunk<void, undefined, {
  dispatch: AppDispatch;
  state: State;
  extra: AxiosInstance;
}>('fetchOffers', async (_arg, { dispatch, extra: api }) => {

  dispatch(setLoadingStatus(true));
  const { data } = await api.get<OfferType[]>(APIRoutes.Offers);
  dispatch(setLoadingStatus(false));

  dispatch(loadOffers(data));
  dispatch(filterOffers());
},
);

export const fetchOfferByIDAction = createAsyncThunk<void, { id: string }, {
  dispatch: AppDispatch;
  state: State;
  extra: AxiosInstance;
}>('fetchOfferByID', async ({ id }, { dispatch, extra: api }) => {

  dispatch(setLoadingStatus(true));
  try {
    var { data: offerInfo } = await api.get<OfferType>(`${APIRoutes.Offers}/${id}`); //eslint-disable-line no-var
    var { data: nearby } = await api.get<OfferType[]>(`${APIRoutes.Offers}/${id}/nearby`); //eslint-disable-line no-var
    var { data: reviews } = await api.get<ReviewType[]>(`${APIRoutes.Reviews}/${id}`); //eslint-disable-line no-var
  } catch {
    dispatch(setError('404'));
    return;
  } finally {
    dispatch(setLoadingStatus(false));
  }

  dispatch((loadOfferByID({ offerInfo, nearby, reviews })));
},
);

export const fetchFavoriteOffersAction = createAsyncThunk<void, undefined, {
  dispatch: AppDispatch;
  state: State;
  extra: AxiosInstance;
}>(
  'fetchFavoriteOffers', async (_arg, { dispatch, extra: api }) => {
    dispatch(setLoadingStatus(true));
    const { data } = await api.get<OfferType[]>(APIRoutes.FavoriteOffers);
    dispatch(setLoadingStatus(false));

    dispatch(loadFavorites(data));
  },
);

export const setOfferFavoriteStatusAction = createAsyncThunk<OfferType, {
  id: string;
  favoriteStatus: string;
},
  {
    dispatch: AppDispatch;
    state: State;
    extra: AxiosInstance;
  }>(
    'setOfferFavoriteStatus',
    async ({ id, favoriteStatus }, { dispatch, extra: api }) => {
      const { data } = await api.post<OfferType>(`${APIRoutes.FavoriteOffers + id.toString()}/${favoriteStatus}`);
      dispatch(fetchFavoriteOffersAction());

      return data;
    }
  );

export const checkAuthAction = createAsyncThunk<void, undefined, {
  dispatch: AppDispatch;
  state: State;
  extra: AxiosInstance;
}>(
  'user/checkAuth',
  async (_arg, { dispatch, extra: api }) => {
    try {
      await api.get(APIRoutes.Login);
      dispatch(setAuth(AuthStatus.Auth));
    } catch {
      dispatch(setAuth(AuthStatus.NoAuth));
    }
  },
);

export const loginAction = createAsyncThunk<void, SignInData, {
  dispatch: AppDispatch;
  state: State;
  extra: AxiosInstance;
}>(
  'user/login',
  async ({ login: email, password }, { dispatch, extra: api }) => {
    const { data: { token } } = await api.post<UserAccountData>(APIRoutes.Login, { email, password });
    saveToken(token);
    dispatch(setAuth(AuthStatus.Auth));

    saveUserEmail(email);
    dispatch(redirectRouteAction(PageRoutes.Main));
  },
);

export const logoutAction = createAsyncThunk<void, undefined, {
  dispatch: AppDispatch;
  state: State;
  extra: AxiosInstance;
}>(
  'user/logout',
  async (_arg, { dispatch, extra: api }) => {
    await api.delete(APIRoutes.Logout);
    dropToken();
    dispatch(setAuth(AuthStatus.NoAuth));
  },
);

export const clearErrorAction = createAsyncThunk(
  'clearError',
  () => {
    setTimeout(
      () => store.dispatch(setError(null)),
      ERROR_TIMEOUT,
    );
  },
);