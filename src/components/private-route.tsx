import { Navigate } from 'react-router-dom';
import { PageRoutes, AuthStatus } from '../constant/consts';

type PrivateRouteProps = {
    authStatus: AuthStatus;
    children: JSX.Element;
}

function PrivateRoute({ authStatus, children }: PrivateRouteProps): JSX.Element {
  return (
    authStatus === AuthStatus.Auth
      ? children
      : <Navigate to={PageRoutes.Login} />
  );
}

export default PrivateRoute;
