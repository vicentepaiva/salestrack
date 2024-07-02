import UsuarioService from "../services/UsuarioService.js";


// Funções de CRUD
// function findAll() {
//     return usuarios;
// }

// function findOne(id) {
//     return usuarios.find(u => u.id === parseInt(id));
// }

// function create(user) {
//     user.id = usuarios.length + 1;
//     usuarios.push(user);
//     return user;
// }

// function update(user, id) {
//     const index = usuarios.findIndex(u => u.id === parseInt(id));
//     if (index !== -1) {
//         usuarios[index] = { ...usuarios[index], ...user };
//         return usuarios[index];
//     }
//     return null;
// }

// function deleteById(id) {
//     const index = usuarios.findIndex(u => u.id === parseInt(id));
//     if (index !== -1) {
//         const user = usuarios.splice(index, 1);
//         return user[0];
//     }
//     return null;
// }





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
