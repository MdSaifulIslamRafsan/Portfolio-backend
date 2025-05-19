import AppError from '../../errors/AppError';
import { User } from '../user/user.model';
import { TLogin } from './auth.interface';
import STATUS_CODES from 'http-response-status-code';
import bcrypt from 'bcrypt';
import { createToken, verifyToken } from './auth.utils';
import config from '../../config';

const loginFormDb = async (userInfo: TLogin) => {
  const { email, password } = userInfo;
  const user = await User.findOne({ email });

  if (!user) {
    throw new AppError(STATUS_CODES.NOT_FOUND, 'User not found');
  }
  const isMatch = await bcrypt.compare(password, user.password);
  if (!isMatch) {
    throw new AppError(STATUS_CODES.UNAUTHORIZED, 'Invalid credentials');
  }

  const jwtPayload = {
    userId: user._id,
    role: user.role,
  };
  const accessToken = createToken(
    jwtPayload,
    config.jwt_access_secret as string,
    Number(config.jwt_access_expires_in)
  );

  const refreshToken = createToken(
    jwtPayload,
    config.jwt_refresh_secret as string,
    Number(config.jwt_refresh_expires_in)
  );

  return {
    accessToken,
    refreshToken,
  };
};

const refreshTokenFromCookie = async (refreshToken: string) => {
  const decoded = verifyToken(
    refreshToken,
    config.jwt_refresh_secret as string
  );
  const { userId } = decoded;
  const user = await User.findOne({ _id: userId });
  if (!user) {
    throw new AppError(STATUS_CODES.FORBIDDEN, 'User not found');
  }

  const jwtPayload = {
    userId: user._id,
    role: user.role,
  };

  const accessToken = createToken(
    jwtPayload,
    config.jwt_access_secret as string,
    Number(config.jwt_access_expires_in)
  );
  return {
    accessToken,
  };
};

export const AuthService = {
  loginFormDb,
  refreshTokenFromCookie,
};
