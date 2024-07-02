import Conexao from "../config/conexao.js";

class VendedoresModel {

    async findAll() {
        const con = new Conexao();
        const sql = "SELECT * FROM vendedores";
        const resultados = await con.query(sql, []);
        return resultados;
    }

    async findById(id) {
        const con = new Conexao();
        const sql = "SELECT * FROM vendedores WHERE id = $1";
        const dados = [id];
        const resultados = await con.query(sql, dados);
        return resultados;
    }

    async create(data){
        const con = new Conexao();
        const { nome, email } = data;
        const sql = "INSERT INTO vendedores (nome, email) VALUES ($1, $2) RETURNING *";
        const dados = [nome, email];
        const resultados = await con.query(sql, dados);
        return resultados;
    }

    async update(data){
        const con = new Conexao();
        const { id, nome, email } = data;
        const sql = "UPDATE vendedores SET nome = $2, email = $3 WHERE id = $1 RETURNING *";
        const dados = [id, nome, email];
        const resultados = await con.query(sql, dados);
        return resultados;
    }

    async delete(id){
        const con = new Conexao();
        const sql = "DELETE FROM vendedores WHERE id = $1";
        const dados = [id];
        const resultados = await con.query(sql, dados);
        return resultados;
    }

}

export default VendedoresModel;