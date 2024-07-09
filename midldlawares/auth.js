import UsuariosModel from '../models/UsuariosModel.js';
import jwt from 'jsonwebtoken';
import 'dotenv/config.js';



class auth {
    async login(req, res) {
        const usuarioModel = new UsuariosModel();
        const { email, senha } = req.body;
        const dados = await usuarioModel.login(email, senha);

        if(dados) {
            const user = {
                id: dados.id,
                nome: dados.nome,
                email: dados.email
            }
            const token = jwt.sign(user, process.env.APP_KEY);
            const data = {
                msg: 'Usuário logado com sucesso',
                token: token
            }
            return res.json(data);
        }

        return res.status(403).json({
            msg: 'Email ou senha inválidos'
        });
    }

}

export default auth;