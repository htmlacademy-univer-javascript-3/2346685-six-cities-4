import { SliceNames } from '../../../constant/consts';
import { OfferType, State } from '../../../constant/types';

export const getSelectedCity = (state: Pick<State, SliceNames.OfferReducer>): string => state[SliceNames.OfferReducer].selectedCity;

export const getOffers = (state: Pick<State, SliceNames.OfferReducer>): OfferType[] => state[SliceNames.OfferReducer].offers;
export const getFavoriteOffers = (state: Pick<State, SliceNames.OfferReducer>): OfferType[] => state[SliceNames.OfferReducer].favoriteOffers;
