import { Navigate } from 'react-router-dom';
import { PageRoutes, AuthStatus } from '../constant/consts';
import LoadingPage from '../pages/loading/loading';

type PrivateRouteProps = {
  authStatus: AuthStatus;
  children: JSX.Element;
  navigateTo: PageRoutes;
}

export default function PublicRoute({ authStatus, children, navigateTo }: PrivateRouteProps): JSX.Element {
  if (authStatus === AuthStatus.Unknown) {
    return (<LoadingPage/>);
  }

  return (
    authStatus === AuthStatus.NoAuth
      ? children
      : <Navigate to={navigateTo} />
  );
}
