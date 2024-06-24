import Conexao from "../config/conexao";

class LogModel {

    async findAll() {
        const con = new Conexao();
        const sql = "SELECT * FROM log";
        const dados = {};
        const resultados = await con.query(sql, dados);
        return resultados;
    }

    async findOne(id) {
        const con = new Conexao();
        const sql = "SELECT * FROM log WHERE id = ?" + id;
        const dados = {};
        const resultados = await con.query(sql, dados);
        return resultados;
    }

    async create(data){
        const con = new Conexao();
        const sql = "INSERT INTO logs SET ";
        const dados = data;
        const resultados = await con.query(sql, dados);
        return resultados;
    }

    async update(data){
        const con = new Conexao();
        const sql = "UPDATE log SET mensagem = ?, tipo = ? WHERE id = ?";
        const dados = data;
        const resultados = await con.query(sql, dados);
        return resultados;
    }

    async delete(id){
        const con = new Conexao();
        const sql = "DELETE FROM log WHERE id = ?" + id;
        const dados = {};
        const resultados = await con.query(sql, dados);
        return resultados;
    }

}