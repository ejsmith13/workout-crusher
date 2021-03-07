// const dotenv = require("dotenv");
// const mysql = require("mysql");
// var connection;

// // Call dotenv configuration
// dotenv.config();

// if (process.env.JAWSDB_URL) {
//   connection = mysql.createConnection(process.env.JAWSDB_URL);
// } else {
//   connection = mysql.createConnection({
//     development: {
//       username: "root",
//       password: process.env.password,
//       database: "passport_demo",
//       host: "127.0.0.1",
//       dialect: "mysql"
//     },
//     test: {
//       username: "root",
//       password: null,
//       database: "database_test",
//       host: "127.0.0.1",
//       dialect: "mysql"
//     },
//     production: {
//       use_env_variable: "JAWSDB_URL", // eslint-disable-line
//       dialect: "mysql"
//     }
//   });
// }

// connection.connect();

// module.exports = connection;
