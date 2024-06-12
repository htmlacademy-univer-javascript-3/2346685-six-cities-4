import { useEffect, useState } from 'react';
import { useAppSelector } from '../../hooks';
import { getError } from '../../store/app-reducer/selectors';
import './error-message.css';

function ErrorMessage(): JSX.Element | null {
  const error = useAppSelector(getError);
  const [shouldDisplay, setShouldDisplay] = useState(false);

  useEffect(() => {
    if (error) {
      setShouldDisplay(true);
    } else {
      setShouldDisplay(false);
    }
  }, [error]);

  return (shouldDisplay)
    ? <div className="error-message">{error}</div>
    : null;

}

export default ErrorMessage;
