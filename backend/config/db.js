import mongoose from "mongoose";
import MainModel from "../model/mainModels.js";
import { pagesData } from "../data/data.js"; 

//@desc connecting mongoDB DATABASE
const connectDb = async () => {
try {
    const connect = await mongoose.connect(process.env.MONGO_URI);
    console.log(`mongoDb Connected ${connect.connection.host}`);
} catch (error) {
    console.error(`error ${error.message}`);
    process.exit(1);
}
}

// newDocument
//     .save()
//     .then(savedDocument => {
//         console.log('Document saved:', savedDocument);
//     })
//     .catch(error => {
//         console.error('Error saving document:', error);
//     });
export default connectDb;