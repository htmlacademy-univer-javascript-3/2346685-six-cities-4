export const SERVER_BASE_URL = 'https://14.design.htmlacademy.pro/six-cities';
export const SERVER_API_CALL_TIMEOUT = 5000;
export const ERROR_TIMEOUT = 2500;

export enum PageRoutes {
    Main = '/',
    Login = '/login',
    Favorites = '/favorites',
    Offer = '/offer/:id',
    NotFound = '/404'
}

export enum APIRoutes {
    Offers = '/offers/',
    Reviews = '/comments/',
    Login = '/login/',
    Logout = '/logout/',
    FavoriteOffers = '/favorite/'
}

export enum AuthStatus {
    Auth = 'AUTH',
    NoAuth = 'NO_AUTH',
    Unknown = 'UNKNOWN',
}

export enum CityString {
    Amsterdam = 'Amsterdam',
    Cologne = 'Cologne',
    Paris = 'Paris',
    Dusseldorf = 'Dusseldorf',
    Brussels = 'Brussels',
    Hamburg = 'Hamburg',
}

export enum Actions {
    FilterCities = 'FILTER_CITIES',
    FilterOffers = 'FILTER_OFFERS',
    LoadOffers = 'LOAD_OFFERS',
    SetLoadingStatus = 'SET_LOADING_STATUS',
    LoadOfeerByID = 'LOAD_OFFER_BY_ID',
    SetAuth = 'SET_AUTH',
    RedirectRoute = 'REDIRECT_ROUTE',
    LoadFavorites = 'LOAD_FAVORITES',
}

export enum SortBy {
    Popular = 'Popular',
    PriceAsc = 'Price: low to high',
    PriceDesc = 'Price: high to low',
    TopRated = 'Top rated first',
}

export enum SliceNames {
    AppReducer = 'app-reducer',
    OfferReducer = 'offer-reducer',
    OfferByIdReducer = 'offer-by-id-reducer',
    UserReducer = 'user-reducer',
}

export const URL_MARKER_DEFAULT =
    './img/pin.svg';

export const URL_MARKER_CURRENT =
    './img/pin-active.svg';
