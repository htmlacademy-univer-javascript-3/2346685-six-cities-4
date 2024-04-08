export type Location = {
    id: number;
    name: string;
    latitude: number;
    longitude: number;
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
