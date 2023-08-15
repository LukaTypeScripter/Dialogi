import express from "express";
import cookieParser from 'cookie-parser';
import dotenv from 'dotenv'
import connectDb from "./config/db.js";
import userRoutes from './routes/userRoutes.js'
import { errorHandler, notFound } from "./middleware/errorMiddleware.js";
//setup
const app = express();
dotenv.config()
const port = process.env.PORT || 5000;
app.use(express.json())
app.use(express.urlencoded({extended:true}))
app.use(cookieParser())

connectDb()
app.get('/', (req, res) => {
  res.send('Hello World!');
});
app.use("/api/users",userRoutes)
app.use(notFound)
app.use(errorHandler)
app.listen(port, () => {
  console.log(`Example app listening at http://localhost:${port}`);
});