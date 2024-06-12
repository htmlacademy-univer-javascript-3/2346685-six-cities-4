import {createAction} from '@reduxjs/toolkit';
import { Actions, PageRoutes } from '../constant/consts';

export const redirectRouteAction = createAction<PageRoutes>(Actions.RedirectRoute);
