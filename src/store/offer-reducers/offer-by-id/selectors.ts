import { SliceNames } from '../../../constant/consts';
import { OfferType, ReviewType, State } from '../../../constant/types';

export const getOfferInfo = (state: Pick<State, SliceNames.OFFER_BY_ID_REDUCER>): OfferType | null => state[SliceNames.OFFER_BY_ID_REDUCER].selectedOffer.offerInfo;

export const getNearby = (state: Pick<State, SliceNames.OFFER_BY_ID_REDUCER>): OfferType[] => state[SliceNames.OFFER_BY_ID_REDUCER].selectedOffer.nearby;

export const getReviews = (state: Pick<State, SliceNames.OFFER_BY_ID_REDUCER>): ReviewType[] | null => state[SliceNames.OFFER_BY_ID_REDUCER].selectedOffer.reviews;
