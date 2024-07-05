const mysql = require('mysql2');

const connection = mysql.cresteConnection({
    host: 'localhost',
    user: 'root',
    password: 'password',
    database: 'crud_db'
});

connection.connect((err) => {
    if (err) throw err;
    console.log('connected to the MySQL server.');
});

module.exports = connection;