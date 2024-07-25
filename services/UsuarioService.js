import AppDataSource from '../config/database.js';
import UsuariosSchema from '../models/UsuariosModel.js'; // Certifique-se de que o nome está correto

class UsuarioService {
    constructor() {
        this.repository = AppDataSource.getRepository(UsuariosSchema);
    }

    async findAll() {
        return await this.repository.find();
    }

    async findOne(id) {
        return await this.repository.findOne({ where: { id } });
    }

    async create(userData) {
        const newUser = this.repository.create(userData);
        return await this.repository.save(newUser);
    }

    async update(id, userData) {
        await this.repository.update(id, userData);
        return await this.repository.findOne({ where: { id } });
    }

    async delete(id) {
        await this.repository.delete(id);
    }

    async Auth(email, senha) {
        return await this.repository.findOne({ where: { email, senha } });
    }
}

export default UsuarioService;
