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
    })
// REGISTRAR
Producto.crear = (nuevo, resultado) => {
    db.query('INSERT INTO productos SET ?', nuevo, (error, respuesta) => {
        if (error) return resultado(error, null);
        resultado(null, { id: respuesta.insertId, ...nuevo });
    });
};

// EDITAR
Producto.actualizar = (id, datos, resultado) => {
    db.query(
        'UPDATE productos SET nombre=?, precio=?, stock=?, stock_minimo=?, categoria=? WHERE idproducto=?',
        [datos.nombre, datos.precio, datos.stock, datos.stock_minimo, datos.categoria, id],
        (error, respuesta) => {
            if (error) return resultado(error, null);
            resultado(null, respuesta);
        }
    );
};

// ELIMINAR
Producto.eliminar = (id, resultado) => {
    db.query('UPDATE productos SET activo = 0 WHERE idproducto = ?', [id], (error, respuesta) => {
        if (error) return resultado(error, null);
        resultado(null, respuesta);
    });
};

module.exports = Producto;
};

module.exports = Producto;