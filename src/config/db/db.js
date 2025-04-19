import mongoose from "mongoose";
import Confidence from "../dotenv/dotenv.js";

const Connection = async () => {
    const url = Confidence.Url_DB;

    try {
        await mongoose.connect(url);
        console.log("Mongo has been conected")
    } catch (error) {
        console.error(`Error connecting to MongoDB: ${err.message}`);
        process.exit(1);
    }
};

export default Connection;