// Acá nos falta express y el router
const express = require('express');

// Aća nos falta traer el controller
const controlador = require('../controllers/mainController'); 
const router = express.Router();

// Acá definimos las rutas
router.get('/', controlador.index);
router.get('/detalleMenu/:id', controlador.detalleMenu);

// Acá exportamos el resultado
module.exports = router;