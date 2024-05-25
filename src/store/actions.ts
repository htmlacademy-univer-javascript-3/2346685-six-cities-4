import {createAction} from '@reduxjs/toolkit';
import { Actions, AuthStatus, PageRoutes } from '../constant/consts';
import { SelectedOfferType, OfferType } from '../constant/types';

export const filterCities = createAction(Actions.FILTER_CITIES, (textContent: string | null) => ({
  payload: textContent,
}));
export const filterOffers = createAction(Actions.FILTER_OFFERS);

export const loadOffers = createAction<OfferType[]>(Actions.LOAD_OFFERS);
export const loadOfferByID = createAction<SelectedOfferType>(Actions.LOAD_OFFER_BY_ID);
export const loadFavorites = createAction<OfferType[]>(Actions.LOAD_FAVORITES);

export const setLoadingStatus = createAction<boolean>(Actions.SET_LOADING_STATUS);
export const setError = createAction<string | null>('setError');
export const setAuth = createAction<AuthStatus>(Actions.SET_AUTH);

export const redirectRouteAction = createAction<PageRoutes>(Actions.REDIRECT_ROUTE);
