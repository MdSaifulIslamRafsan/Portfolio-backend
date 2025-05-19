import express from 'express';
import { AuthController } from './auth.controller';
import validateRequest from '../../middleware/validateRequest';
import { AuthValidation } from './auth.validation';

// import bcrypt from 'bcrypt';
// import { User } from '../user/user.model';

const router = express.Router();

router.post('/login',validateRequest(AuthValidation.loginUserValidation), AuthController.login);
router.post(
    '/refresh-token',
  
    AuthController.refreshToken,
  );

// router.post('/register', async (req, res) => {
//   const userinfo = req.body;
//   const hashPassword = await bcrypt.hash(userinfo.password, 10);

//   const result =await User.create({...userinfo, password: hashPassword});
//   res.send(result)
// });

export const AuthRoutes = router;
