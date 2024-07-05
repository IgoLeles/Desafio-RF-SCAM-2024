const db = require('./db');

const Empregado = {
    create: (data, callback) => {
        const sql = 'INSERT INTO empregados (nome, email, cargo) VALUES (?, ?, ?)';
        db.query(sql, [data.nome, data.email, data.cargo], callback);
    },
    findAll: (callback) => {
        const sql = 'SELECT * FROM empregados';
        db.query(sql, callback);
    },
    findById: (id, callback) => {
        const sql = 'SELECT * FROM empregados WHERE id = ?';
        db.query(sql, [id], callback);
    },
    update: (id, data, callback) => {
        const sql = 'UPDATE empregados SET nome = ?, email = ?, cargo = ? WHERE id = ?';
        db.query(sql, [data.nome, data.email, data.cargo, id], callback);
    },
    delete: (id, callback) => {
        const sql = 'DELETE FROM empregados WHERE id = ?';
        db.query(sql, [id], callback);
    }
};

module.exports = Empregado;
