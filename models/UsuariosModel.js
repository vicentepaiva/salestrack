import { EntitySchema } from 'typeorm';

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
        email: {
            type: String,
            length: 100
        },
        senha: {
            type: String,
            length: 255
        }
    }
});

export default UsuariosSchema;


