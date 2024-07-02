import Conexao from '../config/conexao.js';

class UsuariosModel {
    async findAll() {
        const con = new Conexao();
        const sql = 'SELECT * FROM usuarios';
        return await con.query(sql);
    }

    async findById(id) {
        const con = new Conexao();
        const sql = 'SELECT * FROM usuarios WHERE id = $1';
        return await con.query(sql, [id]);
    }

    async create(data) {
        const con = new Conexao();
        const sql = 'INSERT INTO usuarios (nome, login, senha) VALUES ($1, $2, $3) RETURNING *';
        return await con.query(sql, [data.nome, data.login, data.senha]);
    }

    async update(id, data) {
        const con = new Conexao();
        const sql = 'UPDATE usuarios SET nome = $1, login = $2, senha = $3 WHERE id = $4 RETURNING *';
        return await con.query(sql, [data.nome, data.login, data.senha, id]);
    }

    async delete(id) {
        const con = new Conexao();
        const sql = 'DELETE FROM usuarios WHERE id = $1';
        return await con.query(sql, [id]);
    }
}

export default new UsuariosModel();
