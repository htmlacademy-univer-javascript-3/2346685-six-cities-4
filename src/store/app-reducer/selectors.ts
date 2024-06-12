import { SliceNames } from '../../constant/consts';
import { State } from '../../constant/types';

export const getLoadingStatus = (state: Pick<State, SliceNames.AppReducer>): boolean => state[SliceNames.AppReducer].loadingStatus;

export const getError = (state: Pick<State, SliceNames.AppReducer>): string | null => state[SliceNames.AppReducer].error;
export const getErrorCode = (state: Pick<State, SliceNames.AppReducer>): number | null => state[SliceNames.AppReducer].errorCode;
