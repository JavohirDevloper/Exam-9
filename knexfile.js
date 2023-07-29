import config from "./src/shared/config/index.js";

/**
 * @type { Object.<string, import("knex").Knex.Config> }
 */
export default {
  development: {
    client: "postgresql",
    connection: {
      port: config.db.port,
      database: config.db.name,
      user: "postgres",
      password: "1234",
    },
    pool: {
      min: 2,
      max: 10,
    },
    migrations: {
      tableName: "knex_migrations",
      directory: "db/migrations",
    },
    seeds: {
      directory: "db/seeds",
    },
  },

  staging: {
    client: "postgresql",
    connection: {
      port: config.db.port,
      database: config.db.name,
      user: "postgres",
      password: "1234",
    },
    pool: {
      min: 2,
      max: 10,
    },
    migrations: {
      tableName: "knex_migrations",
      directory: "db/migrations",
    },
    seeds: {
      directory: "db/seeds",
    },
  },

  production: {
    client: "postgresql",
    connection: {
      port: config.db.port,
      database: config.db.name,
      user: "postgres",
      password: "1234",
    },
    pool: {
      min: 2,
      max: 10,
    },
    migrations: {
      tableName: "knex_migrations",
      directory: "db/migrations",
    },
    seeds: {
      directory: "db/seeds",
    },
  },
};
