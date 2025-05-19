import mongoose from "mongoose";

import STATUS_CODES from 'http-response-status-code';
import { IErrorSources, IGenericErrorResponse } from "../interface/error";
const handleValidationError = (err : mongoose.Error.ValidationError ) : IGenericErrorResponse =>{

    const statusCode = STATUS_CODES.BAD_REQUEST;
    const errorSources : IErrorSources[] = Object.values(err.errors).map((value : mongoose.Error.ValidatorError | mongoose.Error.CastError ) => {
        return {
            path: value.path,
            message : value.message
        }
    });

    return {
        statusCode,
        message: "Validation error",
        errorSources
    }
}

export default handleValidationError;