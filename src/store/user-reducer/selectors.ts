import { AuthStatus, SliceNames } from '../../constant/consts';
import { State } from '../../constant/types';

export const getAuthStatus = (state: Pick<State, SliceNames.UserReducer>): AuthStatus => state[SliceNames.UserReducer].auth;
