import Conexao from "../config/conexao";

class VendedoresModel {

    async findAll() {
        const con = new Conexao();
        const sql = "SELECT * FROM vendedores";
        const resultados = await con.query(sql, {});
        return resultados;
    }

    async findById(id) {
        const con = new Conexao();
        const sql = "SELECT * FROM vendedores WHERE id = ?" + id;
        const dados = {};
        const resultados = await con.query(sql, dados);
        return resultados;
    }

    async create(data){
        const con = new Conexao();
        const sql = "INSERT INTO vendedores SET "; 
        const dados = data;
        const resultados = await con.query(sql, dados);
        return resultados;
    }

    async update(data){
        const con = new Conexao();
        const sql = "UPDATE vendedores SET ? WHERE id = ?";
        const dados = data;
        const resultados = await con.query(sql, dados);
        return resultados;
    }

    async delete(id){
        const con = new Conexao();
        const sql = "DELETE FROM vendedores WHERE id = ?" + id;
        const dados = {};
        const resultados = await con.query(sql, dados);
        return resultados;
    }

};

export default VendedoresModel;