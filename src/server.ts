import app from './app';
import {config} from './config/environment';
import {connectDB, closeDB} from './config/database';

const PORT = config.port || 3000;

const startServer = async () => {
    try {
        await connectDB();
        app.listen(PORT, () => {
            console.log(`Server is running on port ${PORT}`);
        });
    } catch (error) {
        console.error('Failed to start server:', error);
        process.exit(1);
    }
};

startServer()

process.on('SIGINT', async () => {
    try {
        await closeDB();
        process.exit(0);
    } catch (error) {
        console.error('Error during graceful shutdown:', error);
        process.exit(1);
    }
});