const db = require('../config/db');

const Producto = {};

// Obtener todos los productos
Producto.getAll = (result) => {
    db.query('SELECT * FROM productos', (err, res) => {
        if (err) {
            console.log("Error consultando productos: ", err);
            result(err, null);
            return;
        }
        result(null, res);
    });
};

module.exports = Producto;