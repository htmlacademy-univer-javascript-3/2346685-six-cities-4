import { AuthStatus, SliceNames } from '../../constant/consts';
import { State } from '../../constant/types';

export const getAuthStatus = (state: Pick<State, SliceNames.USER_REDUCER>): AuthStatus => state[SliceNames.USER_REDUCER].Auth;
