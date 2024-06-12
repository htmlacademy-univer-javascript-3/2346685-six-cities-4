import { Navigate } from 'react-router-dom';
import { PageRoutes, AuthStatus } from '../constant/consts';
import LoadingPage from '../pages/loading/loading';

type PrivateRouteProps = {
  authStatus: AuthStatus;
  children: JSX.Element;
}

function PrivateRoute({ authStatus, children }: PrivateRouteProps): JSX.Element {

  if (authStatus === AuthStatus.Unknown) {
    return (<LoadingPage/>);
  }

  return (
    authStatus === AuthStatus.Auth
      ? children
      : <Navigate to={PageRoutes.Login} />
  );
}

export default PrivateRoute;
