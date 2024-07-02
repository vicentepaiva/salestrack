import express from 'express';
import authMiddleware from '../middleware/auth.js';
import UsuariosController from '../controllers/UsuariosController.js';

const router = express.Router();

router.get('/usuarios', UsuariosController.findAll);
router.get('/usuarios/:id', UsuariosController.findById);
router.post('/usuarios', authMiddleware, UsuariosController.create);
router.put('/usuarios/:id', authMiddleware, UsuariosController.update);
router.delete('/usuarios/:id', authMiddleware, UsuariosController.delete);

export default router;
