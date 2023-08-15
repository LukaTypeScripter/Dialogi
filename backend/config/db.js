import mongoose from "mongoose";


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


export default connectDb;