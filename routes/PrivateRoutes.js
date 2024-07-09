import express from 'express';
import jwt from 'jsonwebtoken';
import 'dotenv/config.js';
import UsuariosRoutes from './UsuariosRoutes.js';

const PrivateRoutes = express.Router();

PrivateRoutes.use((req, res, next) => {
    const logged = false;
    const token = req.headers.token;
    if(token) {
        try {
            const check = jwt.verify(token, process.env.APP_KEY);
            if(check) {
                logged = true;
            }
        } catch (error) {
            logged = false;
        }
    }

    if( logged === false ) {
        return res.status(401).json({
            msg: 'Acesso negado'
        });
    }
    next();
});
PrivateRoutes.use(UsuariosRoutes);

export default PrivateRoutes;