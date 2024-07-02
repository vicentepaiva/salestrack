import UsuariosModel from "../models/UsuariosModel.js";

class UsuarioService {
    async findAll() {
        return await UsuariosModel.findAll();
    }

    async fundById(id) {
        return await UsuariosModel.findById(id);
    }

    async create(data) {
        return await UsuariosModel.create(data);
    }

    async update(data, id) {
        return await UsuariosModel.update(data, id);
    }

    async delete(id) {
        return await UsuariosModel.delete(id);
    }
}

export default UsuarioService;