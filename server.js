import express from 'express'; 
import cors from 'cors';
import PublicRoutes from './routes/PublicRoutes.js';
import PrivateRoutes from './routes/PrivateRoutes.js';
import UsuariosRoutes from './routes/UsuariosRoutes.js';
import VendedoresRoutes from './routes/VendedoresRoutes.js';

const app = express();
app.use(express.json());
app.use(cors());

app.get('/', (req, res) => {
    res.send('Hello World');
});

app.use('/public', PublicRoutes);
app.use('/private', PrivateRoutes);
app.use('/users', UsuariosRoutes);
app.use('/sellers', VendedoresRoutes);

app.use((req, res) => {
    res.status(404).json({ error: 'Not found' });
});

app.listen(3000, () => {
    console.log('Server is listening on port 3000');
});
