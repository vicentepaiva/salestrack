import express from 'express';
import auth from '../midldlawares/auth.js';
import UsuariosController from '../controllers/UsuariosController.js';

const router = express.Router();

router.get('/usuarios', auth, UsuariosController.findAll);
router.get('/usuarios/:id', auth, UsuariosController.findOne);
router.post('/usuarios', auth, UsuariosController.create);
router.put('/usuarios/:id', auth, UsuariosController.update);
router.delete('/usuarios/:id', auth, UsuariosController.delete);

export default router;

