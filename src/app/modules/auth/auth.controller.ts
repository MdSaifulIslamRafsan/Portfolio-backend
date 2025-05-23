import catchAsync from '../../utils/catchAsync';
import sendResponse from '../../utils/sendResponse';
import STATUS_CODES from 'http-response-status-code';
import { AuthService } from './auth.service';

const login = catchAsync(async (req, res) => {
  const userInfo = req.body;
  const result = await AuthService.loginFormDb(userInfo);

  const { accessToken, refreshToken } = result;
  res.cookie('refreshToken', refreshToken, {
    httpOnly: true,
    secure: process.env.NODE_ENV === 'production',
    sameSite: 'strict',
    maxAge: 7 * 24 * 60 * 60 * 1000,
  });

  sendResponse(res, {
    success: true,
    statusCode: STATUS_CODES.OK,
    message: 'Login successful',
    data: { accessToken },
  });
});
const refreshToken = catchAsync(async (req, res) => {
  const { refreshToken } = req.cookies;

  const result = await AuthService.refreshTokenFromCookie(refreshToken);
  sendResponse(res, {
    success: true,
    statusCode: STATUS_CODES.OK,
    message: 'Token refreshed successfully',
    data: result,
  });
});

const logout = catchAsync((req, res) => {
  res
    .clearCookie('refreshToken', {
      httpOnly: true,
      secure: process.env.NODE_ENV === 'production',
      sameSite: 'strict',
    })
    .status(200)
    .json({ success: true, message: 'Logged out successfully' });
});

export const AuthController = {
  login,
  refreshToken,
  logout,
};
