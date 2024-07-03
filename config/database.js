import { createConnection } from "typeorm";
import ormconfig from "../ormconfig.js";

const connectDatabase = async () => {
    try {
        await createConnection(ormconfig);
        console.log("Conectado ao banco de dados com sucesso");
    } catch (error) {
        console.log("Erro ao conectar ao banco de dados: ", error);
        throw error;
    }
}

export default connectDatabase;
