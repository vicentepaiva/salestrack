import express from 'express';
import Auth from '../midldlawares/Auth.js';
import UsuariosController from '../controllers/UsuariosController.js';

const router = express.Router();

router.get('/usuarios', Auth, UsuariosController.findAll);
router.get('/usuarios/:id', Auth, UsuariosController.findOne);
router.post('/usuarios', Auth, UsuariosController.create);
router.put('/usuarios/:id', Auth, UsuariosController.update);
router.delete('/usuarios/:id', Auth, UsuariosController.delete);

export default router;

