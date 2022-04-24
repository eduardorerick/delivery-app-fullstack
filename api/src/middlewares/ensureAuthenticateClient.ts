import { NextFunction, Request, Response } from "express";
import { verify } from "jsonwebtoken";

interface IPayload {
  sub: string;
}

export async function ensureAuthenticateClient(
  request: Request,
  response: Response,
  next: NextFunction
) {
  const authHeader = request.headers.authorization;

  if (!authHeader) {
    return response.status(401).json({
      message: "Token missing",
    });
  }

  const [bearer, token] = authHeader.split(" ");

  try {
    const { sub } = verify(token, process.env.HASH_CLIENT!) as IPayload;

    request.id_client = sub;

    next();
  } catch (err) {
    return response.status(401).json({
      message: "Invalid Token!",
    });
  }
}
