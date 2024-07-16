import { connect } from "mongoose";
import dotenv from 'dotenv'

dotenv.config();

console.log(`Database name: ${process.env.DB_NAME}`)

const connectDB = async () => {
    try {
        await connect(`mongodb://localhost:27017/${process.env.DB_NAME}`);
        console.log('MongoDB connected');
    } catch (error) {
        console.error('MongoDB connection error:', error);
        process.exit(1);
    }
};

export default connectDB;