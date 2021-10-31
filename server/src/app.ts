// eslint-disable-next-line @typescript-eslint/no-var-requires
require('dotenv').config();

import express from 'express';
import mongoose from 'mongoose';
import cors from 'cors';
import helmet from 'helmet';

import { authRouter } from './routes/auth';
import { errorHandler } from './utils/error';

const main = async () => {
  await mongoose.connect(`${process.env.DB_URL}`, {
    useNewUrlParser: true,
    useUnifiedTopology: true
  });

  const app = express();

  app.use(helmet());
  app.use(cors());
  app.use(express.json({ limit: '1mb' }));

  app.use('/auth', authRouter);
  app.use(errorHandler);

  app.listen(process.env.PORT, () => {
    console.log(`[app]: http://localhost:${process.env.PORT}`);
  });
};

main().catch(err => {
  console.log(err);
});
