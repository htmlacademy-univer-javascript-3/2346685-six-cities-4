export enum PageRoutes {
    Main = '/',
    Login = '/login',
    Favorites = '/favorites',
    Offer = '/offer/:id'
}

export enum AuthStatus {
    Auth = 'AUTH',
    NoAuth = 'NO_AUTH',
    Unknown = 'UNKNOWN'
}

export const URL_MARKER_DEFAULT =
    'https://assets.htmlacademy.ru/content/intensive/javascript-1/demo/interactive-map/pin.svg';

export const URL_MARKER_CURRENT =
    'https://assets.htmlacademy.ru/content/intensive/javascript-1/demo/interactive-map/main-pin.svg';

export const imageFolder: string = '/markup/img/';
