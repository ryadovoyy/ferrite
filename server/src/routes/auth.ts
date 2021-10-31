import express from 'express';
import { body } from 'express-validator';

import { User } from '../entities/User';
import { signup, login } from '../controllers/auth';

export const authRouter = express.Router();

authRouter.post(
  '/signup',
  [
    body('email')
      .isEmail()
      .withMessage('Please enter a valid email.')
      .custom(async value => {
        const user = await User.findOne({ email: value });
        if (user) {
          return Promise.reject('This email already exists!');
        }
      })
      .normalizeEmail(),
    body('password').trim().isLength({ min: 12 })
  ],
  signup
);

authRouter.post('/login', login);
