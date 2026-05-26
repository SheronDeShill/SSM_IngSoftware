const db = require('../config/db');

const findUserByEmail = (email) => {
    return new Promise((resolve, reject) => {
        db.query('SELECT * FROM usuarios WHERE email = ?', [email], (err, results) => {
            if(err) reject(err);
            else resolve(results);
        });
    });
};

const createUser = (nombre_usuario, email, contrasena, rol = 'vendedor') => {
    return new Promise((resolve, reject) => {
        db.query(
            'INSERT INTO usuarios (nombre_usuario, email, contrasena, rol) VALUES (?, ?, ?, ?)',
            [nombre_usuario, email, contrasena, rol],
            (err, result) => {
                if (err) reject(err);
                else resolve(result);
            }
        );
    });
};

module.exports = {
    findUserByEmail,
    createUser
};