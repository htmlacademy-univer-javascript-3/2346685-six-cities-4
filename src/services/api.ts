import axios, { AxiosError, AxiosInstance, AxiosResponse } from 'axios';
import { SERVER_BASE_URL, SERVER_API_CALL_TIMEOUT } from '../constant/consts';
import { StatusCodes } from 'http-status-codes';
import { processErrorHandle } from './handle-api-error';
import { getToken } from './token';

type DetailMessageType = {
  type: string;
  message: string;
}

const StatusCodeMapping: Record<number, boolean> = {
  [StatusCodes.BAD_REQUEST]: true,
  [StatusCodes.UNAUTHORIZED]: true,
  [StatusCodes.NOT_FOUND]: true
};

const shouldDisplayError = (response: AxiosResponse) => !!StatusCodeMapping[response.status];

export const createAPI = (): AxiosInstance => {
  const api = axios.create({
    baseURL: SERVER_BASE_URL,
    timeout: SERVER_API_CALL_TIMEOUT,
  });

  api.interceptors.request.use(
    (config) => {
      const token = getToken();

      if (token && config.headers) {
        config.headers['x-token'] = token;
      }

      return config;
    },
  );

  api.interceptors.response.use(
    (response) => response,
    (error: AxiosError<DetailMessageType>) => {
      if (error.response && shouldDisplayError(error.response)) {
        const detailMessage = (error.response.data);

        processErrorHandle(detailMessage.message, error.response.status);
      }

      throw error;
    }
  );

  return api;
};
