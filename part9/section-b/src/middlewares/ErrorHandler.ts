import { NextFunction, Request, Response } from "express";
import { ClientError } from "../utils/throwError";

const ErrorHandler = (
  err: Error,
  _req: Request,
  res: Response,
  _next: NextFunction,
) => {
  console.log(err);
  const [statusCode, message]: [number, string] =
    err instanceof ClientError
      ? [err.status, err.message]
      : [500, "internal server error"];
  res.status(statusCode).json({ error: message });
};

export { ErrorHandler };
