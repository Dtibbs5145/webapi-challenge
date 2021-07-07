// Update with your config settings.

module.exports = {

  development: {
    client: 'sqlite3',
    useNullAsDefault: true,
    connection: {
      filename: './data/chores.db3',
    }
  },
    pool: {
      afterCreate: (conn, done) => {
        conn.run('PRAGMA foreign_keys = ON', done);
      },
    },
    migrations: {
      tableName: 'knex_migrations',
      directory: './data/migrations'
  },
    seeds: {
      directory: './data/seeds'
    },
  };
