const { Router } = require('express'); 
const router = Router();

// Importar el controlador que define la lógica para las rutas de prueba
const pruebaController = require('./controllers/pruebaController');

// Definir la ruta de prueba
router.get('/', pruebaController.mostrarMensaje);

module.exports = router;