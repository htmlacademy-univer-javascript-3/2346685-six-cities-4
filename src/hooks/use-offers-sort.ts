import { SortBy } from '../constant/consts';
import { OfferType } from '../constant/types';

const compareFuncs: { [key in SortBy]: (a: OfferType, b: OfferType) => number } = {
  [SortBy.Popular]: () => 0,
  [SortBy.TopRated]: (a: OfferType, b: OfferType) => b.rating - a.rating,
  [SortBy.PriceAsc]: (a: OfferType, b: OfferType) => a.price - b.price,
  [SortBy.PriceDesc]: (a: OfferType, b: OfferType) => b.price - a.price
};

export default function useOffersSort(offers: OfferType[], sortBy: SortBy) {
  if (sortBy === SortBy.Popular as SortBy) {
    return offers;
  }
  // Make a copy and sort
  return [...offers].sort(compareFuncs[sortBy]);
}
