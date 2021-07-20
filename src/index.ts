/**
 * Required External Modules
 */
import * as dotenv from "dotenv";
import express from "express";
import cors from "cors";
import helmet from "helmet";
import mongoose from "mongoose";
dotenv.config();

/**
 * App Variables
 */
const PORT: number = parseInt(process.env.PORT as string, 10) || 3000;
const app = express();

/**
 * MongoDB Connection
 */
mongoose
  .connect(process.env.MONGO_CONNECTION_STRING as string, {
    useNewUrlParser: true,
    useUnifiedTopology: true,
    useCreateIndex: true,
  })
  .then(() => {
    console.log("Connection OK");
  })
  .catch((e) => {
    console.log(e);
  });

/**
 *  App Configuration
 */
app.use(helmet());
app.use(cors());
app.use(express.json());

/**
 * Server Activation
 */
app.listen(PORT, () => {
  console.log(`Listening to port: ${PORT}`);
});
