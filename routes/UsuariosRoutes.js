import express from 'express';
import Auth from '../midldlawares/Auth.js';
import UsuariosController from '../controllers/UsuariosController.js';

const router = express.Router();

router.get('api/usuarios', Auth, UsuariosController.findAll);
router.get('api/usuarios/:id', Auth, UsuariosController.findOne);
router.post('api/usuarios', Auth, UsuariosController.create);
router.put('api/usuarios/:id', Auth, UsuariosController.update);
router.delete('api/usuarios/:id', Auth, UsuariosController.delete);

export default router;

