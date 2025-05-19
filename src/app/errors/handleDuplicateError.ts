/* eslint-disable @typescript-eslint/no-explicit-any */
import STATUS_CODES from 'http-response-status-code';
import { IErrorSources, IGenericErrorResponse } from '../interface/error';


const handleDuplicateError = (err: any): IGenericErrorResponse => {
  const match = err.message.match(/"([^"]*)"/);
  const extractMessage = match && match[1];

  const errorSources: IErrorSources[] = [
    {
      path: err.keyValue,
      message: `${extractMessage} is already exists`,
    },
  ];
  return {
    statusCode: STATUS_CODES.CONFLICT,
    message: 'Conflict: Duplicate entry',
    errorSources,
  }
};

export default handleDuplicateError;