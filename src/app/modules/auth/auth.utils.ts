import jwt, { JwtPayload, Secret } from 'jsonwebtoken';
import { Types } from 'mongoose';

export const createToken = (
  jwtPayload: { userId: Types.ObjectId; role: string },
  secret: Secret,
  expiresIn:  number,
) => {
  
  return jwt.sign(jwtPayload, secret, {
    expiresIn: expiresIn as  number,
  });
};

export const verifyToken = (token: string, secret: string) => {
  return jwt.verify(token, secret) as JwtPayload;
};