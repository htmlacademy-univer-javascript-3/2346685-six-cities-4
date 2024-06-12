import { SliceNames } from '../../../constant/consts';
import { OfferType, ReviewType, State } from '../../../constant/types';

export const getOfferInfo = (state: Pick<State, SliceNames.OfferByIdReducer>): OfferType | null => state[SliceNames.OfferByIdReducer].selectedOffer.offerInfo;

export const getNearby = (state: Pick<State, SliceNames.OfferByIdReducer>): OfferType[] => state[SliceNames.OfferByIdReducer].selectedOffer.rNearby;

export const getReviews = (state: Pick<State, SliceNames.OfferByIdReducer>): ReviewType[] | null => state[SliceNames.OfferByIdReducer].selectedOffer.reviews;
