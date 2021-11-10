import { sign } from 'jsonwebtoken';
import { Errors, errors, tokens } from './constants';
require('dotenv').config({ path: '../.env' });

export const handleError = (error: any) => {
  // add any other logging mechanism here e.g. Sentry
  throw error;
};

export const returnError = (error: keyof Errors) => {
  return errors[error];
};

export const generateAccessToken = (userId: string) => {
  const accessToken = sign(
    {
      userId,
      type: tokens.access.name,
      timestamp: Date.now()
    },
    process.env.APP_SECRET!,
    {
      expiresIn: tokens.access.expiry
    }
  );

  return accessToken;
};
