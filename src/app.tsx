import { Route, Routes } from 'react-router-dom';
import { useAppDispatch, useAppSelector } from './hooks';
import { AuthStatus, PageRoutes } from './constant/consts';
import FavoritesPage from './pages/favorites';
import LoginPage from './pages/login';
import OfferPage from './pages/offer';
import NotFoundPage from './pages/404/404';
import PrivateRoute from './components/private-route';
import MainPage from './pages/main';
import { getAuthStatus } from './store/user-reducer/selectors';
import { fetchFavoriteOffersAction } from './store/api-actions';
import { useEffect } from 'react';
import PublicRoute from './components/public-route';
import HistoryRouter from './components/history-router';
import browserHistory from './services/browser-history';

export default function App(): JSX.Element {
  const dispatch = useAppDispatch();
  const auth = useAppSelector(getAuthStatus);

  useEffect(() => {
    if (auth === AuthStatus.Auth) {
      dispatch(fetchFavoriteOffersAction());
    }
  }, [dispatch, auth]);

  return (
    <HistoryRouter history={browserHistory}>
      <Routes>
        <Route
          path={PageRoutes.Main}
          element={<MainPage />}
        />
        <Route
          path={PageRoutes.Favorites}
          element={
            <PrivateRoute authStatus={auth}>
              <FavoritesPage />
            </PrivateRoute>
          }
        />
        <Route
          path={PageRoutes.Login}
          element={
            <PublicRoute authStatus={auth} navigateTo={PageRoutes.Favorites}>
              <LoginPage />
            </PublicRoute>
          }
        />
        <Route
          path={PageRoutes.Offer}
          element={<OfferPage />}
        />
        <Route
          path='*'
          element={<NotFoundPage />}
        />
      </Routes>
    </HistoryRouter>
  );
}
