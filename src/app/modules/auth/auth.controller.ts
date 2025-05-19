import catchAsync from "../../utils/catchAsync";
import sendResponse from "../../utils/sendResponse";
import STATUS_CODES from 'http-response-status-code'
import { AuthService } from "./auth.service";



const login = catchAsync(async(req, res) => {
    const userInfo = req.body;
    const result = await AuthService.loginFormDb(userInfo)

     sendResponse(res, {
        success: true,
        statusCode: STATUS_CODES.OK,
        message: 'Login successful',
        data: result,
      });
})
const refreshToken = catchAsync(async (req , res) => {
  const {refreshToken} = req.cookies;

  const result = await AuthService.refreshTokenFromCookie(refreshToken)
  sendResponse(res , {
    success: true,
    statusCode: STATUS_CODES.OK,
    message: 'Token refreshed successfully',
    data: result,
  })
})

export const AuthController = {
    login,
    refreshToken
}