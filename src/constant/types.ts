export type LocationType = {
    latitude: number;
    longitude: number;
    zoom: number;
}

export type CityType = {
    id: number;
    name: string;
    location: LocationType;
}

export type UserType = {
    id: string;
    name: string;
    avatar: string;
    isPro: boolean;
}

export type OfferType = {
    id: number;
    type: string;
    name: string;
    description: string;
    price: number;
    city: CityType;
    location: LocationType;
    rating: number;
    isPremium: boolean;
    preview: string;
    isFavorite: boolean;

    owner: UserType;
    photos: string[];
    amenities: string[];
    maxAdults: number;
    bedrooms: number;
}

export type ReviewType = {
    id: number;
    user: UserType;
    offerId: number;
    date: string;
    comment: string;
    rating: number;
}
