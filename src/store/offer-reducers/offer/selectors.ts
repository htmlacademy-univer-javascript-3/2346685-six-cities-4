import { SliceNames } from '../../../constant/consts';
import { CityType, OfferType, State } from '../../../constant/types';

export const getSelectedCity = (state: Pick<State, SliceNames.OFFER_REDUCER>): string => state[SliceNames.OFFER_REDUCER].selectedCity;

export const getCityData = (state: Pick<State, SliceNames.OFFER_REDUCER>): CityType | null => state[SliceNames.OFFER_REDUCER].cityData;

export const getOffers = (state: Pick<State, SliceNames.OFFER_REDUCER>): OfferType[] => state[SliceNames.OFFER_REDUCER].offers;

export const getFilteredOffers = (state: Pick<State, SliceNames.OFFER_REDUCER>): OfferType[] => state[SliceNames.OFFER_REDUCER].filteredOffers;

export const getFavoriteOffers = (state: Pick<State, SliceNames.OFFER_REDUCER>): OfferType[] => state[SliceNames.OFFER_REDUCER].favoriteOffers;
