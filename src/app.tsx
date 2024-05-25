import { Route, BrowserRouter, Routes } from 'react-router-dom';
import { useAppDispatch, useAppSelector } from './hooks';

import { AuthStatus, PageRoutes } from './constant/consts';

import FavoritesPage from './pages/favorites';
import LoginPage from './pages/login';
import OfferPage from './pages/offer';
import NotFoundPage from './pages/404/404';
import PrivateRoute from './components/privateRoute';
import MainPage from './pages/main';
import LoadingPage from './pages/loading/loading';
import { fetchFavoriteOffersAction } from './store/api-actions';
import { useEffect } from 'react';

function App(): JSX.Element {
  const dispatch = useAppDispatch();

  const offers = useAppSelector((state) => state.filteredOffers);
  const Auth = useAppSelector((state) => state.Auth);
  const loadingStatus = useAppSelector((state) => state.loadingStatus);

  useEffect(() => {
    if (Auth === AuthStatus.Auth) {
      dispatch(fetchFavoriteOffersAction());
    }
  }, [Auth, dispatch]);

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
              <FavoritesPage offers={offers} />
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
