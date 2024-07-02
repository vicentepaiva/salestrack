import Conexao from "../config/conexao.js";

class UsuariosModel {

    paginate(pagina_atual, total_por_pagina, total_registros) {
        let qtde_paginas = parseInt(total_registros / total_por_pagina);
        let resto_divisao = total_registros % total_por_pagina;

        if(resto_divisao > 0) {
            qtde_paginas++;
        }

        let offset = 0;
        if(pagina_atual > 1) {
            const pagina = pagina_atual - 1;
            offset = pagina * total_por_pagina;
        }

        const dados_paginacao = {
            limit: total_por_pagina,
            offset: offset,
            qtde_paginas: qtde_paginas
        };
        return dados_paginacao;
    }

    async login(login, senha) {
        const con = new Conexao();
        const sql = "SELECT * FROM usuarios WHERE login = $1 AND senha = $2";
        const dados = [login, senha];
        const resultados = await con.query(sql, dados);
        return resultados;
    }

    async getTotalRegister() {
        const con = new Conexao();
        const sql = "SELECT count(id) as total FROM usuarios";
        const dados = [];
        const paginas = await con.query(sql, dados);
        return paginas;
    }

    async findAll(page, pesquisa) {
        const paginas = await this.getTotalRegister();
        const paginacao = this.paginate(page, 5, paginas[0].total);

        let sql = `SELECT * FROM usuarios LIMIT $1 OFFSET $2`;
        let dados = [paginacao.limit, paginacao.offset];

        if (pesquisa) {
            sql = `
                SELECT * 
                FROM usuarios 
                WHERE 
                nome ILIKE $1
                OR login ILIKE $1
                LIMIT $2 
                OFFSET $3`;
            dados = [`%${pesquisa}%`, paginacao.limit, paginacao.offset];
        }

        const con = new Conexao();
        const resultados = await con.query(sql, dados);
        return resultados;
    }

    async findOne(id) {
        const con = new Conexao();
        const sql = "SELECT * FROM usuarios WHERE id = $1";
        const dados = [id];
        const resultados = await con.query(sql, dados);
        return resultados;
    }

    async create(data) {
        const con = new Conexao();
        const { nome, login, senha } = data;
        const sql = "INSERT INTO usuarios (nome, login, senha) VALUES ($1, $2, $3) RETURNING *";
        const dados = [nome, login, senha];
        const resultados = await con.query(sql, dados);
        return resultados;
    }

    async update(data, id) {
        const con = new Conexao();
        const { nome, login, senha } = data;
        const sql = "UPDATE usuarios SET nome = $1, login = $2, senha = $3 WHERE id = $4 RETURNING *";
        const dados = [nome, login, senha, id];
        const resultados = await con.query(sql, dados);
        return resultados;
    }

    async delete(id) {
        const con = new Conexao();
        const sql = "DELETE FROM usuarios WHERE id = $1";
        const dados = [id];
        const resultados = await con.query(sql, dados);
        return resultados;
    }
}

export default UsuariosModel;