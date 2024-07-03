module.exports = {
    type: "postgres",
    host: "localhost",
    port: 5432,
    username: "admin",
    password: "bcf7e7d1",
    database: "postgres",
    synchronize: true, // Não use em produção
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
