const { Sequelize } = require('sequelize');
const mysql2 = require('mysql2');
const config = require('./config').db;

const sequelize = new Sequelize({
    database: config.dbname,
    username: config.user,
    host: config.host,
    port: config.port,
    password :config.password,
    dialect: config.dbms,
    pool: {
        max: 5, // 최대 연결 수
        min: 0, // 최소 연결 수
        idle: 10000, // 유휴 상태 유지 시간 (10초)
    },
    dialectModule: mysql2, // mysql2 사용
});

// 데이터베이스 연결
sequelize
    .authenticate()
    .then(() => {
        console.log('Database connection has been established successfully.');
})
    .catch((err) => {
        console.error('Unable to connect to the database:', err);
});

module.exports = sequelize;