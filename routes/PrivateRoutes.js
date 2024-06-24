import express from 'express';


const PrivateRoutes = express.Router();


PrivateRoutes.use((req, res, next) => {
    console.log('Private route hit');
    next();
});

export default PrivateRoutes;