import { Route, BrowserRouter, Routes } from 'react-router-dom';
import { useAppSelector } from './hooks';

import { AuthStatus, PageRoutes } from './constant/consts';

import FavoritesPage from './pages/favorites';
import LoginPage from './pages/login';
import OfferPage from './pages/offer';
import NotFoundPage from './pages/404/404';
import PrivateRoute from './components/privateRoute';
import MainPage from './pages/main';
import reviews from './mocks/reviews';

function App(): JSX.Element {
  const offers = useAppSelector((state)=>state.offers);

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
              authStatus={AuthStatus.Auth}
            >
              <FavoritesPage offers={offers}/>
            </PrivateRoute>
          }
        />
        <Route
          path={PageRoutes.Login}
          element={<LoginPage />}
        />
        <Route
          path={PageRoutes.Offer}
          element={<OfferPage offers={offers} reviews={reviews}/>}
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
