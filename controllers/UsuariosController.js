// Simulando um banco de dados na memória
let usuarios = [];

// Funções de CRUD
function findAll() {
    return usuarios;
}

function findOne(id) {
    return usuarios.find(u => u.id === parseInt(id));
}

function create(user) {
    user.id = usuarios.length + 1;
    usuarios.push(user);
    return user;
}

function update(user, id) {
    const index = usuarios.findIndex(u => u.id === parseInt(id));
    if (index !== -1) {
        usuarios[index] = { ...usuarios[index], ...user };
        return usuarios[index];
    }
    return null;
}

function deleteById(id) {
    const index = usuarios.findIndex(u => u.id === parseInt(id));
    if (index !== -1) {
        const user = usuarios.splice(index, 1);
        return user[0];
    }
    return null;
}

class UsuariosController {

    findAll(req, res) {
        const data = findAll();
        return res.json(data);
    }

    findOne(req, res) {
        const id = req.params.id;
        const data = findOne(id);
        return res.json(data);
    }

    create(req, res) {
        const body = req.body;
        const data = create(body);
        return res.json(data);
    }

    update(req, res) {
        const body = req.body;
        const id = req.params.id;
        const data = update(body, id);
        return res.json(data);
    }

    delete(req, res) {
        const id = req.params.id;
        const data = deleteById(id); 
        return res.json(data);
    }
}

export default UsuariosController;