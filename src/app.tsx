import { Route, BrowserRouter, Routes } from 'react-router-dom';
import { useAppDispatch, useAppSelector } from './hooks';

import { AuthStatus, PageRoutes } from './constant/consts';

import FavoritesPage from './pages/favorites';
import LoginPage from './pages/login';
import OfferPage from './pages/offer';
import NotFoundPage from './pages/404/404';
import PrivateRoute from './components/private-route';
import MainPage from './pages/main';
import LoadingPage from './pages/loading/loading';
import { getFilteredOffers } from './store/offer-reducers/offer/selectors';
import { getAuthStatus } from './store/user-reducer/selectors';
import { getLoadingStatus } from './store/app-reducer/selectors';
import { fetchFavoriteOffersAction } from './store/api-actions';
import { useEffect } from 'react';

function App(): JSX.Element {
  const dispatch = useAppDispatch();

  const offers = useAppSelector(getFilteredOffers);
  const loadingStatus = useAppSelector(getLoadingStatus);
  const Auth = useAppSelector(getAuthStatus);

  useEffect(() => {
    if (Auth === AuthStatus.Auth) {
      dispatch(fetchFavoriteOffersAction());
    }
  }, [dispatch, Auth]);

  if (loadingStatus || Auth === AuthStatus.Unknown) {
    return (
      <LoadingPage />
    );
  }

  return (
    <BrowserRouter>
      <Routes>
        <Route
          path={PageRoutes.Main}
          element={<MainPage offers={offers} />}
        />
        <Route
          path={PageRoutes.Favorites}
          element={
            <PrivateRoute
              authStatus={Auth}
            >
              <FavoritesPage />
            </PrivateRoute>
          }
        />
        <Route
          path={PageRoutes.Login}
          element={<LoginPage />}
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
    </BrowserRouter>
  );
}

export default App;
