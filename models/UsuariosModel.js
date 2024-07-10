import { EntitySchema, getRepository } from 'typeorm';



const UsuariosSchema = new EntitySchema({
    name: "Usuario",
    tableName: "usuarios",
    columns: {
        id: {
            type: Number,
            primary: true,
            generated: true
        },
        nome: {
            type: String,
            length: 100
        },
        login: {
            type: String,
            length: 100
        },
        senha: {
            type: String,
            length: 255
        }
    }
});

class UsuariosModel {
    constructor() {
        this.repository = getRepository(UsuariosSchema);
    }

    async login(id, nome, login, senha) {
        return await this.repository.findOne({where: {id, nome, login, senha}});
    }
}

export default UsuariosModel;

