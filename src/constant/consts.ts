export const SERVER_BASE_URL = 'https://14.design.htmlacademy.pro/six-cities';
export const SERVER_API_CALL_TIMEOUT = 5000;
export const ERROR_TIMEOUT = 5000;

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
    AMSTERDAM = 'Amsterdam',
    COLOGNE = 'Cologne',
    PARIS = 'Paris',
    DUSSELDORF = 'Dusseldorf',
    BRUSSELS = 'Brussels',
    HAMBURG = 'Hamburg',
}

export enum Actions {
    FILTER_CITIES = 'FILTER_CITIES',
    FILTER_OFFERS = 'FILTER_OFFERS',
    LOAD_OFFERS = 'LOAD_OFFERS',
    SET_LOADING_STATUS = 'SET_LOADING_STATUS',
    LOAD_OFFER_BY_ID = 'LOAD_OFFER_BY_ID',
    SET_AUTH = 'SET_AUTH',
    REDIRECT_ROUTE = 'REDIRECT_ROUTE',
    LOAD_FAVORITES = 'LOAD_FAVORITES',
}

export enum SortBy {
    Popular = 'Popular',
    PriceAsc = 'Price: low to high',
    PriceDesc = 'Price: high to low',
    TopRated = 'Top rated first',
}

export enum SliceNames {
    APP_REDUCER = 'app-reducer',
    OFFER_REDUCER = 'offer-reducer',
    OFFER_BY_ID_REDUCER = 'offer-by-id-reducer',
    USER_REDUCER = 'user-reducer',
}

export const URL_MARKER_DEFAULT =
    'https://assets.htmlacademy.ru/content/intensive/javascript-1/demo/interactive-map/pin.svg';

export const URL_MARKER_CURRENT =
    'https://assets.htmlacademy.ru/content/intensive/javascript-1/demo/interactive-map/main-pin.svg';

export const imageFolder: string = '/markup/img/';
