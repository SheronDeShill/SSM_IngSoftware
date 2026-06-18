const express = require('express');
const router = express.Router();
const productoController = require('../controllers/admin-productos.controller');

// Ruta para obtener todos los productos: GET /api/productos
router.get('/', productoController.obtenerProductos);

module.exports = router;