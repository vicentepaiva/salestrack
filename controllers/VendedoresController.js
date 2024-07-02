import Conexao from "../config/conexao.js";

const conexao = new Conexao();

class VendedoresController {

    async findAll(req, res) {
        try {
            const data = await conexao.query("SELECT * FROM vendedores");
            return res.json(data);
        } catch (error) {
            return res.status(500).json({ error: error.message})
        }
    }

    async findOne(req, res) {
        const id = req.params.id;
        try {
            const data = await conexao.query("SELECT * FROM vendedores WHERE id = $1", [id]);
            if(data.length === 0){
                return res.status(404).json({ message: "Vendedor não encontrado" });
            }
            return res.json(data);
        } catch (error) {
            return res.status(500).json({ error: error.message });
        }
    }

    async create(req, res) {
        const body = req.body;
        try {
            const data = await conexao.query(
                "INSERT INTO vendedores (nome, email, telefone) VALUES ($1, $2, $3) RETURNING *", [body.nome, body.email, body.telefone]
                );
            return res.json(data);
        } catch (error) {
            return res.status(500).json({ error: error.message });
        }
    }

    async update(req, res) {
        const body = req.body;
        const id = req.params.id;
        try {
            const data = await conexao.query(
                " UPDATE vendedores SET nome = $1, email = $2, telefone = $3 WHERE id = $4 RETURNING *", [body.nome, body.email, body.telefone, id]
            );
            if(data.length === 0){
                return res.status(404).json({ message: "Vendedor não encontrado" });
            }
            return res.json(data);
        } catch (error) {
            return res.status(500).json({ error: error.message });
        }
    }

    async delete(req, res) {
        const id = req.params.id;
        try {
            const data = await conexao.query("DELETE FROM vendedores WHERE id = $1", [id]);
            if(data.rowCount === 0){
                return res.status(404).json({ message: "Vendedor não encontrado" });
            }
            return res.status(201).json({ message: "Vendedor excluído com sucesso" });
        } catch (error) {
            return res.status(500).json({ error: error.message });
        }
    }
}

export default VendedoresController;
