const Producto = require('../models/admin-productos.model');

exports.obtenerProductos = (req, res) => {
    Producto.getAll((err, data) => {
        if (err) {
            res.status(500).send({
                message: err.message || "Ocurrió un error al obtener los productos."
            });
        } else {
            res.send(data);
        }
    });
};