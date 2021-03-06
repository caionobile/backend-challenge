/**
 * Required External Modules
 */
import * as dotenv from 'dotenv';
import express from 'express';
import cors from 'cors';
import helmet from 'helmet';
import mongoose from 'mongoose';
import videos from '@routes/video';
import mid from '@middlewares/index';

dotenv.config();

/**
 * App Variables
 */
const PORT: number = parseInt(process.env.PORT, 10) || 3000;
const app = express();

/**
 * MongoDB Connection
 */
mongoose
  .connect(process.env.MONGO_CONNECTION_STRING, {
    useNewUrlParser: true,
    useUnifiedTopology: true,
    useCreateIndex: true,
  })
  .then(() => {
    console.log('Connection OK');
  })
  .catch((e: any) => {
    console.log(e);
  });

/**
 *  App Configuration
 */
app.use(helmet());
app.use(cors());
app.use(express.json());
app.use(mid);

/**
 * Server Activation
 */
app.listen(PORT, () => {
  console.log(`Listening to port: ${PORT}`);
});

app.use('/api/videos', videos);

export default app;
