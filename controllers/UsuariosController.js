import UsuarioService from '../services/UsuarioService.js';

const usuarioService = new UsuarioService();

class UsuariosController {
    async findAll(req, res) {
        try {
            const usuarios = await usuarioService.findAll();
            return res.json(usuarios);
        } catch (error) {
            console.error('Erro ao buscar usuários:', error);
            return res.status(500).json({ error: 'Erro interno do servidor' });
        }
    }

    async findOne(req, res) {
        const { id } = req.params;
        try {
            const usuario = await usuarioService.findOne(id);
            if (!usuario) {
                return res.status(404).json({ error: 'Usuário não encontrado' });
            }
            return res.json(usuario);
        } catch (error) {
            console.error('Erro ao buscar usuário por ID:', error);
            return res.status(500).json({ error: 'Erro interno do servidor' });
        }
    }

    async create(req, res) {
        const userData = req.body;
        try {
            const newUsuario = await usuarioService.create(userData);
            return res.status(201).json({
                message: 'Usuário criado com sucesso',
                id: newUsuario.id
            });
        } catch (error) {
            console.error('Erro ao criar usuário:', error);
            return res.status(500).json({ error: 'Erro interno do servidor' });
        }
    }

    async update(req, res) {
        const { id } = req.params;
        const userData = req.body;
        try {
            const updatedUsuario = await usuarioService.update(id, userData);
            if (!updatedUsuario) {
                return res.status(404).json({ error: 'Usuário não encontrado' });
            }
            return res.json({
                message: 'Usuário atualizado com sucesso',
                usuario: updatedUsuario.id
            });
        } catch (error) {
            console.error('Erro ao atualizar usuário:', error);
            return res.status(500).json({ error: 'Erro interno do servidor' });
        }
    }

    async delete(req, res) {
        const { id } = req.params;
        try {
            await usuarioService.delete(id);
            return res.status(204).end();
        } catch (error) {
            console.error('Erro ao deletar usuário:', error);
            return res.status(500).json({ error: 'Erro interno do servidor' });
        }
    }
}

export default new UsuariosController();
