// eslint-disable-next-line @typescript-eslint/no-var-requires
require('dotenv').config();

import express from 'express';
import mongoose from 'mongoose';

const main = async () => {
  await mongoose.connect(`${process.env.DB_URL}`, {
    useNewUrlParser: true,
    useUnifiedTopology: true
  });

  const app = express();

  app.use(express.json());

  app.listen(process.env.PORT, () => {
    console.log(`[app]: http://localhost:${process.env.PORT}`);
  });
};

main().catch(err => {
  console.log(err);
});
