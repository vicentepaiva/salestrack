import express from 'express';
import bcrypt from 'bcryptjs';
import UsuariosModel from '../models/UsuariosModel.js';

const router = express.Router();
const usuariosModel = new UsuariosModel();

router.post ('/', async (req,res) => {
    const { id, nome, login, senha } = req.body;

   try {
    const user = await usuariosModel.login( id, nome, login, senha);

    if(!user) {
        return res.status(404).json({ message: "Usuário não encontrado" });
    }

    const match = await bcrypt.compare(senha, user[0].senha);
    if (!match) {
        return res.status(401).json({ message: "Senha inválida" });
    }

    res.json({message: "Usuário autenticado com sucesso"})
   } catch (error) {
        return res.status(500).json({ error: error.message });
   }
});

export default router;