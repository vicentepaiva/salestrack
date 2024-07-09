import { EntitySchema } from 'typeorm';

const VendedoresModel = new EntitySchema({
    name: "Vendedor",
    tableName: "vendedores",
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
        }
    }
});

export default VendedoresModel;

