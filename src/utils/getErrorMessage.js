import { ErrorMessage } from '../constants/errorMessages';

export const getErrorMessage = (error) => {
  if (error?.customData?._tokenResponse?.error?.message) {
    const key = error.customData._tokenResponse.error.message;
    return ErrorMessage[key] ? ErrorMessage[key] : 'something went wrong';
  }

  return error.message;
};
