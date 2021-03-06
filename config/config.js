const dotenv = require("dotenv");

// Call dotenv configuration
dotenv.config();

module.exports = {
  development: {
    username: "root",
    password: process.env.password,
    database: "workout_db",
    host: "127.0.0.1",
    dialect: "mysql"
  },
  test: {
    username: "root",
    password: null,
    database: "workout_db",
    host: "127.0.0.1",
    dialect: "mysql"
  },
  production: {
    use_env_variable: "JAWSDB_URL", // eslint-disable-line
    dialect: "mysql"
  }
};
