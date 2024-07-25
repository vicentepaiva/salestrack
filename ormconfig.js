import path from 'path';
import { fileURLToPath } from 'url';

const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);

const ormconfig = {
    type: "postgres",
    host: "localhost",
    port: 5432,
    username: "postgres",
    password: "password",
    database: "postgres",
    synchronize: true, // Não usar em produção
    logging: false,
    entities: [path.join(__dirname, 'models/*.js')], // Ajuste o caminho se necessário
    migrations: [path.join(__dirname, 'migrations/*.js')],
    subscribers: [path.join(__dirname, 'subscribers/*.js')],
    cli: {
        entitiesDir: "models",
        migrationsDir: "migrations",
        subscribersDir: "subscribers"
    }
};

export default ormconfig;

