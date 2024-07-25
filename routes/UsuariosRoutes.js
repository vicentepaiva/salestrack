import express from 'express';
import Auth from '../midldlawares/Auth.js';
import UsuariosController from '../controllers/UsuariosController.js';

const usuariosRoutes = express.Router();

usuariosRoutes.get('/usuarios', Auth, UsuariosController.findAll);
usuariosRoutes.get('/usuarios/:id', Auth, UsuariosController.findOne);
usuariosRoutes.post('/usuarios', Auth, UsuariosController.create);
usuariosRoutes.put('/usuarios/:id', Auth, UsuariosController.update);
usuariosRoutes.delete('/usuarios/:id', Auth, UsuariosController.delete);

export default usuariosRoutes;

