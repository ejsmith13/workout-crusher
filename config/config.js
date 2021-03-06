const dotenv = require("dotenv");
const mysql = require("mysql");
var connection;

// Call dotenv configuration
dotenv.config();

if (process.env.JAWSDB_URL) {
  connection = mysql.createConnection(process.env.JAWSDB_URL);
} else {
  connection = mysql.createConnection({
    username: "root",
    password: process.env.password,
    database: "workout_db",
    host: "localhost",
    dialect: "mysql"
  });
}

// connection.connect();

module.exports = connection;
