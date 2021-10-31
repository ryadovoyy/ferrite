import { RequestHandler } from 'express';
import { validationResult } from 'express-validator';
import jwt from 'jsonwebtoken';
import bcrypt from 'bcryptjs';

import { User } from '../entities/User';
import { CustomError } from '../utils/error';

export const signup: RequestHandler = async (req, res, next) => {
  const errors = validationResult(req);

  try {
    if (!errors.isEmpty()) {
      const error = new CustomError(422, 'Validation failed.', errors.array());
      throw error;
    }

    const email = req.body.email;
    const password = req.body.password;
    const hashedPassword = await bcrypt.hash(password, 10);

    const user = new User({
      email,
      password: hashedPassword
    });

    const result = await user.save();
    res.status(201).json({ message: 'User created!', userId: result._id });
  } catch (err) {
    next(err);
  }
};

export const login: RequestHandler = async (req, res, next) => {
  const email = req.body.email;
  const password = req.body.password;

  try {
    const user = await User.findOne({ email });
    if (!user) {
      const error = new CustomError(
        401,
        'A user with this email could not be found.'
      );
      throw error;
    }

    const isPasswordEqual = await bcrypt.compare(password, user.password);
    if (!isPasswordEqual) {
      const error = new CustomError(401, 'Wrong password!');
      throw error;
    }

    const token = jwt.sign(
      {
        email: user.email,
        userId: user._id.toString()
      },
      `${process.env.JWT_SECRET}`,
      { expiresIn: '1h' }
    );

    res.status(200).json({ token, userId: user._id.toString() });
  } catch (err) {
    next(err);
  }
};
