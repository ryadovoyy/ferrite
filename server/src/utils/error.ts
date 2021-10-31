import { ErrorRequestHandler } from 'express';
import { ValidationError } from 'express-validator';

export class CustomError extends Error {
  status: number;
  data?: ValidationError[];

  constructor(status: number, message: string, data?: ValidationError[]) {
    super(message);

    if (Error.captureStackTrace) {
      Error.captureStackTrace(this, CustomError);
    }

    this.status = status;
    this.data = data;
    Object.setPrototypeOf(this, CustomError.prototype);
  }
}

export const errorHandler: ErrorRequestHandler = (error, _, res) => {
  console.log(error);

  const status = error.status || 500;
  const message = error.message;
  const data = error.data;

  res.status(status).json({ message, data });
};
