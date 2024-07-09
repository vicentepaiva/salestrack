const ormconfig = {
    type: "postgres",
    host: "localhost",
    port: 5432,
    username: "admin",
    password: "password",
    database: "postgres",
    synchronize: true, // Não usar em produção
    logging: false,
    entities: ["models/*.js"],
    migrations: ["migrations/*.js"],
    subscribers: ["subscribers/*.js"],
    cli: {
        entitiesDir: "models",
        migrationsDir: "migrations",
        subscribersDir: "subscribers"
    }
};

export default ormconfig;
