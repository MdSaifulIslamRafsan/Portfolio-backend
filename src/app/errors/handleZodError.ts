import { ZodIssue, ZodError } from "zod";

import STATUS_CODES from 'http-response-status-code';
import { IErrorSources, IGenericErrorResponse } from "../interface/error";

const handleZodError = (err : ZodError) : IGenericErrorResponse => {
    const statusCode = STATUS_CODES.BAD_REQUEST;
    const errorSources : IErrorSources[] = err.issues.map((issue: ZodIssue) => {
      return {
        path: issue?.path[issue.path.length - 1],
        message: issue.message,
      };
    });

    return {
      statusCode,
      message: 'Validation error',
      errorSources
    };
};

export default handleZodError