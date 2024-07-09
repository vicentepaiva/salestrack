import { getRepository } from 'typeorm';
import UsuariosModel from '../models/UsuariosModel.js';

class UsuarioService {
    async findAll() {
        const userRepository = getRepository(UsuariosModel);
        return await userRepository.find();
    }

    async findOne(id) {
        const userRepository = getRepository(UsuariosModel);
        return await userRepository.findOne(id);
    }

    async create(userData) {
        const userRepository = getRepository(UsuariosModel);
        const newUser = userRepository.create(userData);
        return await userRepository.save(newUser);
    }

    async update(id, userData) {
        const userRepository = getRepository(UsuariosModel);
        await userRepository.update(id, userData);
        return await userRepository.findOne(id);
    }

    async delete(id) {
        const userRepository = getRepository(UsuariosModel);
        await userRepository.delete(id);
    }
}

export default UsuarioService;