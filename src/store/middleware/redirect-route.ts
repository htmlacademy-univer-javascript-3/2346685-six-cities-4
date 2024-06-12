import {PayloadAction} from '@reduxjs/toolkit';
import {Middleware} from 'redux';
import { rootReducer } from '../root-reducer';
import { createBrowserHistory } from 'history';
import { Actions } from '../../constant/consts';

type Reducer = ReturnType<typeof rootReducer>;

const browserHistory = createBrowserHistory();

export const redirectRouteMiddleware: Middleware<unknown, Reducer> =
  () =>
    (next) =>
      (action: PayloadAction<string>) => {
        if (action.type === Actions.RedirectRoute as string) {
          browserHistory.push(action.payload);
          window.location.href = action.payload;
        }

        return next(action);
      };
