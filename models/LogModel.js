import { EntitySchema } from 'typeorm';

const LogModel = new EntitySchema({
    name: "Log",
    tableName: "logs",
    columns: {
        id: {
            type: Number,
            primary: true,
            generated: true
        },
        mensagem: {
            type: String,
            length: 255
        },
        tipo: {
            type: String,
            length: 50
        }
    }
});

export default LogModel;