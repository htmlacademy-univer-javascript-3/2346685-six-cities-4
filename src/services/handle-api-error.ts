import { store } from '../store';
import { clearErrorAction } from '../store/api-actions';
import { setError, setErrorCode } from '../store/app-reducer/reducer';

export const processErrorHandle = (message: string, code: number): void => {
  store.dispatch(setError(message));
  store.dispatch(setErrorCode(code));

  store.dispatch(clearErrorAction());
};
