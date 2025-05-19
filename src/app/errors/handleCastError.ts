import mongoose from 'mongoose';

import STATUS_CODES from 'http-response-status-code';
import { IErrorSources, IGenericErrorResponse } from '../interface/error';

const handleCastError = (
  err: mongoose.Error.CastError
): IGenericErrorResponse => {
  const statusCode = STATUS_CODES.BAD_REQUEST;
  const errorSources: IErrorSources[] = [
    {
      path: err.path,
      message: err.message,
    },
  ];

  return {
    statusCode,
    message: 'Invalid data type or format encountered.',
    errorSources,
  };
};

export default handleCastError;
