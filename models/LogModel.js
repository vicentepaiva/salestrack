import Conexao from "../config/conexao.js";

class LogModel {

    async findAll() {
        const con = new Conexao();
        const sql = "SELECT * FROM logs";
        const dados = [];
        const resultados = await con.query(sql, dados);
        return resultados;
    }

    async findOne(id) {
        const con = new Conexao();
        const sql = "SELECT * FROM logs WHERE id = $1";
        const dados = [id];
        const resultados = await con.query(sql, dados);
        return resultados;
    }

    async create(data) {
        const con = new Conexao();
        const { mensagem, tipo } = data;
        const sql = "INSERT INTO logs (mensagem, tipo) VALUES ($1, $2) RETURNING *";
        const dados = [mensagem, tipo];
        const resultados = await con.query(sql, dados);
        return resultados;
    }

    async update(data) {
        const con = new Conexao();
        const { id, mensagem, tipo } = data;
        const sql = "UPDATE logs SET mensagem = $1, tipo = $2 WHERE id = $3 RETURNING *";
        const dados = [mensagem, tipo, id];
        const resultados = await con.query(sql, dados);
        return resultados;
    }

    async delete(id) {
        const con = new Conexao();
        const sql = "DELETE FROM logs WHERE id = $1";
        const dados = [id];
        const resultados = await con.query(sql, dados);
        return resultados;
    }

}

export default LogModel;