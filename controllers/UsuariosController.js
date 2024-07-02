import UsuarioService from "../services/UsuarioService.js";

class UsuariosController {
    async findAll(req, res) {
        const users = await UsuarioService.findAll();
        return res.json(users);
    }

    async findById(req, res) {
        const user = await UsuarioService.findById(req.params.id);
        return res.json(user);
    }

    async create(req, res) {
        const user = await UsuarioService.create(req.body);
        return res.status(201).json(user);
    }

    async update(req, res) {
        const user = await UsuarioService.update(req.params.id, req.body);
        return res.json(user);
    }

    async delete(req, res) {
        await UsuarioService.delete(req.params.id);
        return res.status(204).send();
    }
}

export default new UsuariosController();
