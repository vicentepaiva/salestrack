import { EntitySchema } from 'typeorm';


const UsuariosModel = new EntitySchema({
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

export default UsuariosModel;

