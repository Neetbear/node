const mysql = require("mysql2/promise"); // object
const config = require('./config').db

const pool = mysql.createPool({
    host: config.host,
    port: config.port,
    user: config.user,
    password: config.password,
    database: config.dbname,
});

module.exports = pool