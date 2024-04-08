export type Location = {
    latitude: number;
    longitude: number;
    zoom: number;
}

export type City = {
    id: number;
    name: string;
    location: Location;
}

export type User = {
    id: string;
    name: string;
    avatar: string;
    isPro: boolean;
}

export type Offer = {
    id: number;
    type: string;
    name: string;
    description: string;
    price: number;
    city: City;
    location: Location;
    rating: number;
    isPremium: boolean;
    preview: string;
    isFavorite: boolean;

    owner: User;
    photos: string[];
    amenities: string[];
    maxAdults: number;
    bedrooms: number;
}

export type Review = {
    id: number;
    user: User;
    offerId: number;
    date: string;
    comment: string;
    rating: number;
}
