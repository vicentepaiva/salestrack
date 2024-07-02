import Conexao from "../config/conexao.js";


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

const conexao = new Conexao();

class UsuariosController {

    async findAll(req, res) {
        try {
            const data = await conexao.qyuery("SELECT * FROM usuarios");
            return res.json(data);
        } catch (error) {
            return res.status(500).json({ error: error.message });
        }
    }

    async findOne(req, res) {
        const id = req.params.id;
        try {
            const data = await conexao.qyuery("SELECT * FROM usuarios WHERE id = $1", [id]);
                if(data.length === 0){
                    return res.status(404).json({ message: "Usuário não encontrado" });
                }
                return res.json(data);
        } catch (error) {
            return res.status(500).json({ error: error.message });
        }
    }

    async create(req, res) {
        const body = req.body;
        try {
            const data = await conexao.qyuery(
                "INSERT INTO usuarios (nome, email, senha) VALUES ($1, $2, $3) RETURNING *", [body.nome, body.email, body.senha]
                );
                return res.status(201).json(data);
        } catch (error) {
            return res.status(500).json({ error: error.message });
        }
    }

    async update(req, res) {
        const body = req.body;
        const id = req.params.id;
        try {
            const data = await conexao.qyuery(
                "UPDATE usuarios SET nome = $1, email = $2, senha = $3 WHERE id = $4 RETURNING *", [body.nome, body.email, body.senha, id]
            );
            if(data.length === 0){
                return res.status(404).json({ message: "Usuário não encontrado" });
            }
            return res.json(data);
        } catch (error) {
            return res.status(500).json({ error: error.message });
        }
    }

    async delete(req, res) {
        const id = req.params.id;
       try {
        const data = await conexao.qyuery("DELETE FROM usuarios WHERE id = $1 RETURNING *", [id]);
        if(data.length === 0){
            return res.status(404).json({ message: "Usuário não encontrado" });
        }
            return res.json(data);
       } catch (error) {
            return res.status(500).json({ error: error.message });
       }
    }
}

export default UsuariosController;