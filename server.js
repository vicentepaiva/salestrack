import express from 'express';
import cors from 'cors';
import connectDatabase from './config/database.js';
import PublicRoutes from './routes/PublicRoutes.js';
import PrivateRoutes from './routes/PrivateRoutes.js';

const app = express();
app.use(express.json());
app.use(cors());

app.get('/', (req, res) => {
    res.send('Hello World');
});

app.use(PublicRoutes);
app.use('/api', PrivateRoutes);

const startServer = async () => {
    try {
        await connectDatabase();
        app.listen(3000, () => {
            console.log('Server is listening on port 3000');
        });
    } catch (error) {
        console.error('Failed to start server:', error);
    }
}

startServer();
