import app from './app';
import { config } from './config/environment';
import mongoose from 'mongoose';

const PORT = config.port || 3000;

mongoose.connect(config.mongoUri as string)
    .then(() => {
        console.log('Connected to MongoDB');
        app.listen(PORT, () => {
            console.log(`Server is running on port ${PORT}`);
        });
    })
    .catch((error) => {
        console.error('Error connecting to MongoDB:', error);
        process.exit(1);
    });