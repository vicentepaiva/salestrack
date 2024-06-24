import express from 'express';

const PublicRoutes = express.Router();

PublicRoutes.use((req, res, next) => {
    console.log('Public route hit');
    next();
});

export default PublicRoutes;