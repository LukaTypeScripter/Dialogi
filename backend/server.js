import express from "express";
import cookieParser from 'cookie-parser';
import dotenv from 'dotenv'
import connectDb from "./config/db.js";
import userRoutes from './routes/userRoutes.js'
import admin from './routes/adminRoutes.js'
import { errorHandler, notFound } from "./middleware/errorMiddleware.js";
import fileUpload from 'express-fileupload';
//setup
const app = express();
app.use(fileUpload());
dotenv.config()
const port = process.env.PORT || 5000;
app.use(express.json())
app.use(express.urlencoded({ extended: true }));
app.use(cookieParser())
app.use('/uploads', express.static('backend/uploads'));
connectDb()
app.get('/', (req, res) => {
  res.send('Hello World!');
});
app.use("/api/users",userRoutes)
app.use("/api/admin",admin)
app.use(notFound)
app.use(errorHandler)

// const insertionConnection = mongoose.createConnection(process.env.MONGO_URI, {
//   useNewUrlParser: true,
//   useUnifiedTopology: true,
//   dbName: "Cluster0"
// });

// insertionConnection.once("open", async () => {
//   try {
//     // Debug: Inspect the first entry in pagesData
//     console.log('First data entry:', pagesData[0]);

//     // Insert data into the database
//     await MainModel.insertMany(pagesData);
//     console.log('Data inserted successfully.');

//     // Close the insertion connection
//     insertionConnection.close();

//     // Start the main server
//     app.listen(port, () => {
//       console.log(`Server is listening on port: ${port}`);
//     });
//   } catch (error) {
//     console.error('Error inserting data into MongoDB:', error);
//   }
// });


app.listen(port, () => {
       console.log(`Server is listening on port: ${port}`);
      });