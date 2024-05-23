import {createAction} from '@reduxjs/toolkit';
import { Actions } from './consts';

export const filterCities = createAction(Actions.FILTER_CITIES, (textContent: string | null) => ({
  payload: textContent,
}));

export const filterOffers = createAction(Actions.FILTER_OFFERS);
