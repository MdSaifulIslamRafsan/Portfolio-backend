import { Request, Response, NextFunction } from 'express';
import { JwtPayload } from 'jsonwebtoken';
import STATUS_CODES from 'http-response-status-code';



import AppError from '../errors/AppError';
import { verifyToken } from '../modules/auth/auth.utils';
import { User } from '../modules/user/user.model';
import { TUserRoles } from '../modules/auth/auth.interface';

const auth = (...requiredRoles: TUserRoles[]) => {
  return async (req: Request, res: Response, next: NextFunction) => {
    try {
      const authHeader = req.headers.authorization;

      if (!authHeader || !authHeader.startsWith('Bearer ')) {
        throw new AppError(STATUS_CODES.UNAUTHORIZED, 'Authorization token missing or malformed');
      }

      const token = authHeader.split(' ')[1];
  

      // Verify token
      const decoded = verifyToken(token, process.env.JWT_ACCESS_SECRET as string);

      const { userId, role } = decoded;

      // Check user existence
      const user = await User.findById(userId);
      if (!user) {
        throw new AppError(STATUS_CODES.NOT_FOUND, 'User not found');
      }

      

      // Check for required role
      if (requiredRoles.length > 0 && !requiredRoles.includes(role)) {
        throw new AppError(STATUS_CODES.FORBIDDEN, 'You are not authorized to access this resource');
      }

      // Attach user info to request
      req.user = decoded as JwtPayload;

      next();
    } catch (error) {
      next(error);
    }
  };
};

export default auth;
