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
    exports.crear = (req, res) => {
        const nuevo = {
            nombre: req.body.nombre,
            precio: req.body.precio,
            stock: req.body.stock,
            stock_minimo: req.body.stock_minimo,
            categoria: req.body.categoria,
            activo: 1
        };
    
        Producto.crear(nuevo, (error, datos) => {
            if (error) return res.status(500).send({ mensaje: 'Error al registrar' });
            res.status(201).json(datos);
        });
    };
    
    exports.actualizar = (req, res) => {
        Producto.actualizar(req.params.id, req.body, (error, datos) => {
            if (error) return res.status(500).send({ mensaje: 'Error al actualizar' });
            res.json({ mensaje: 'Producto editado con éxito' });
        });
    };
    
    exports.eliminar = (req, res) => {
        Producto.eliminar(req.params.id, (error, datos) => {
            if (error) return res.status(500).send({ mensaje: 'Error al eliminar' });
            res.json({ mensaje: 'Producto desactivado' });
        });
    };
};
const Producto = require('../models/admin-productos.model');

