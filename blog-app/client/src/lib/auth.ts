import { verify } from "jsonwebtoken";
import { NextResponse } from "next/server";

interface UserJWTPayload {
  jti: string;
  iat: number;
}

export const getJwtSecretKey = () => {
  const secret = process.env.JWT_SECRET;

  if (!secret || secret.length === 0) {
    throw new Error("The environment variable JWT_SECRET is not set.");
  }

  return secret;
};

export const verifyAuth = async (token: string) => {
  try {
    await verify(token, getJwtSecretKey());
    return NextResponse.next();
  } catch (error) {
    throw new Error("Your token has expired");
  }
};
