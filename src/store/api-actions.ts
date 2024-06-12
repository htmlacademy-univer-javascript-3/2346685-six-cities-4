import { AxiosInstance } from 'axios';
import { APIRoutes, ERROR_TIMEOUT, PageRoutes } from '../constant/consts';
import { createAsyncThunk } from '@reduxjs/toolkit';
import { CommentData, OfferType, ReviewType, SelectedOfferType, SignInData, UserAccountData } from '../constant/types';
import { State, AppDispatch } from '../constant/types';
import { redirectRouteAction } from './actions';
import { dropToken, saveToken } from '../services/token';
import { saveUserEmail } from '../services/user-email';

export const fetchOffersAction = createAsyncThunk<OfferType[], undefined, {
  dispatch: AppDispatch;
  state: State;
  extra: AxiosInstance;
}>(
  'fetchOffers',
  async (_arg, { extra: api }) => {
    const { data } = await api.get<OfferType[]>(APIRoutes.Offers);
    return data;
  },
);

export const fetchOfferByIDAction = createAsyncThunk<SelectedOfferType, { id: string }, {
  dispatch: AppDispatch;
  state: State;
  extra: AxiosInstance;
}>(
  'fetchOfferByID',
  async ({ id }, { extra: api }) => {
    const { data: offerInfo } = await api.get<OfferType>(`${APIRoutes.Offers}/${id}`);
    const { data: nearby } = await api.get<OfferType[]>(`${APIRoutes.Offers}/${id}/nearby`);
    const { data: reviews } = await api.get<ReviewType[]>(`${APIRoutes.Reviews}/${id}`);

    return { offerInfo, rNearby: nearby, reviews };
  },
);

export const fetchFavoriteOffersAction = createAsyncThunk<OfferType[], undefined, {
  dispatch: AppDispatch;
  state: State;
  extra: AxiosInstance;
}>(
  'fetchFavoriteOffers',
  async (_arg, { extra: api }) => {
    const { data } = await api.get<OfferType[]>(APIRoutes.FavoriteOffers);
    return data;
  },
);

export const setOfferFavoriteStatusAction = createAsyncThunk<OfferType, {
  id: string;
  favoriteStatus: boolean;
},
  {
    dispatch: AppDispatch;
    state: State;
    extra: AxiosInstance;
  }>(
    'setOfferFavoriteStatus',
    async ({ id, favoriteStatus }, { dispatch, extra: api }) => {
      const { data } = await api.post<OfferType>(`${APIRoutes.FavoriteOffers + id.toString()}/${Number(favoriteStatus)}`);
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
  async (_arg, { extra: api }) => {
    await api.get(APIRoutes.Login);
  },
);

export const loginAction = createAsyncThunk<void, SignInData, {
  dispatch: AppDispatch;
  state: State;
  extra: AxiosInstance;
}>(
  'user/login',
  async ({ login: email, password }, { dispatch, extra: api }) => {
    const { data } = await api.post<UserAccountData>(APIRoutes.Login, { email, password });
    saveToken(data.token);
    saveUserEmail(data.email);
    dispatch(redirectRouteAction(PageRoutes.Main));
  },
);

export const logoutAction = createAsyncThunk<void, undefined, {
  dispatch: AppDispatch;
  state: State;
  extra: AxiosInstance;
}>(
  'user/logout',
  async (_arg, { extra: api }) => {
    await api.delete(APIRoutes.Logout);
    dropToken();
  },
);

export const sendOfferCommentAction = createAsyncThunk<ReviewType, {
  id: string;
  commentData: CommentData;
  resetFormData: () => void;
    }, {
  dispatch: AppDispatch;
  state: State;
  extra: AxiosInstance;
}>(
    'sendOfferComment',
    async ({ id, resetFormData, commentData }, { extra: api }) => {
      const { data } = await api.post<ReviewType>(APIRoutes.Reviews + id, commentData);
      resetFormData();
      return data;
    });

export const clearErrorAction = createAsyncThunk(
  'clearError',
  async () => {
    await new Promise((resolve) => setTimeout(resolve, ERROR_TIMEOUT));
  },
);
