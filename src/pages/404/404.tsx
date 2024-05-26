import './404.css';

import { useNavigate } from 'react-router-dom';
import { PageRoutes } from '../../constant/consts';
import { useCallback, useEffect } from 'react';

function NotFoundPage(): JSX.Element {
  const navigate = useNavigate();
  const returnToMain = useCallback((event: KeyboardEvent) => {
    if (event.key === 'Enter') {
      navigate(PageRoutes.Main);
    }
  }, [navigate]);

  useEffect(() => {
    document.addEventListener('keydown', returnToMain, false);
    return () => {
      document.removeEventListener('keydown', returnToMain, false);
    };
  }, [returnToMain]);

  return (
    <div className="page404">
      <div className='container404'>
        <span className="title">404 Not Found</span>
        <p>
                    A wild 404-PAGE appeared!<br />
                    This means that your browser was able to communicate with your given server, but the server could not find
                    what was requested.<br /><br />
                    * Make sure the url is correct.<br />
                    * Don&apos;t panic.
        </p>
        <div>Press Enter to continue _</div>
      </div>
    </div>
  );
}

export default NotFoundPage;
