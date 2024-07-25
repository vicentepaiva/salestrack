import UsuarioService from '../services/UsuarioService.js';
import Helpers from '../helpers/Helpers.js'// Certifique-se de que o caminho está correto
import jwt from 'jsonwebtoken';
import 'dotenv/config.js';

class Auth {
    async login(req, res) {
        const { email, senha } = req.body;
        const hashSenha = Helpers.getHash(senha);
        const usuarioService = new UsuarioService();
        const dados = await usuarioService.Auth(email, hashSenha);

        if (dados) {
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

export default Auth;

