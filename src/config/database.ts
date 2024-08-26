import mongoose from 'mongoose';
import { config } from './environment';

export const connectDB = async (): Promise<void> => {
    try {
        await mongoose.connect(config.mongoUri as string);
        console.log('Connected to MongoDB');
    } catch (error) {
        console.error('MongoDB connection error:', error);
        process.exit(1);
    }
};

export const closeDB = async (): Promise<void> => {
    await mongoose.connection.close();
    console.log('MongoDB connection closed');
};