import {PayloadAction} from '@reduxjs/toolkit';
import {Middleware} from 'redux';
import { reducer } from '../root-reducer';
import { createBrowserHistory } from 'history';

type Reducer = ReturnType<typeof reducer>;

const browserHistory = createBrowserHistory();

export const redirectRouteMiddleware: Middleware<unknown, Reducer> =
  () =>
    (next) =>
      (action: PayloadAction<string>) => {
        if (action.type === 'REDIRECT_ROUTE') {
          browserHistory.push(action.payload);
        }

        return next(action);
      };
