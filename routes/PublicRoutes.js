import express from 'express';
import Auth from '../midldlawares/Auth.js';


const publicRoutes = express.Router();

const auth = new Auth();
publicRoutes.post('/login', auth.login);



export default publicRoutes;