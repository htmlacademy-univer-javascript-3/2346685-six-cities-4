import { SliceNames } from '../../constant/consts';
import { State } from '../../constant/types';

export const getLoadingStatus = (state: Pick<State, SliceNames.APP_REDUCER>): boolean => state[SliceNames.APP_REDUCER].loadingStatus;

export const getError = (state: Pick<State, SliceNames.APP_REDUCER>): string | null => state[SliceNames.APP_REDUCER].error;
