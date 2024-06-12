import { store } from '../store';

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
    name: string;
    avatarUrl: string;
    isPro: boolean;
}

export type OfferType = {
    id: string;
    title: string;
    description: string;
    type: string;
    price: number;
    bedrooms: number;
    maxAdults: number;
    goods: string[];
    host: UserType;
    city: CityType;
    location: LocationType;
    isPremium: boolean;
    isFavorite: boolean;
    previewImage: string;
    images: string[];
    rating: number;
}

export type SelectedOfferType = {
    offerInfo: OfferType | null;
    rNearby: OfferType[];
    reviews: ReviewType[];
}

export type ReviewType = {
    id: number;
    user: UserType;
    date: string;
    comment: string;
    rating: number;
}

export type SignInData = {
    login: string;
    password: string;
}

export type UserAccountData = {
    id: number;
    email: string;
    token: string;
}

export type CommentData = {
    comment: string;
    rating: number | null;
}


export type State = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;
