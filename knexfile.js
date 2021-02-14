const { username, password, db, port, table } = require("./config");

const connection = `postgresql://${username}:${password}@${db}:${port}/${table}`

module.exports = {
  client: "pg",
  connection,
  pool: {
    min: 2,
    max: 10,
  },
  migrations: {
    directory: "./data/migrations",
  },
  seeds: {
    directory: "./data/seeds",
  },
};
