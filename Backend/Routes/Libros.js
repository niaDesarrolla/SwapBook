const { Router } = require('express'); 
const router = Router();
const { body } = require('express-validator');


const { //importo los controladores 
  
  LibrosPost,
  LibrosGet,
  LibrosPut,
  LibrosPatch,
  LibrosDelete,
  
} = require("../Controllers/Libros");

//Aquí le envio información al serviidor (importamos) desde controllers 
router.get('/:id?',[
  // Validaciones con express-validator para el Get
  body('título').notEmpty().withMessage('El título no debe estar vacío'),
  body('autor').notEmpty().withMessage('El autorno debe estar vacía'),
  
], LibrosGet); //ruta get para ver todos los usuarios

router.post('/',[//ruta para agregar un nuevo usuario
//validaciones con express-validator para el post
body('titulo').notEmpty().withMessage('El título es obligatorio'),
body('autor').isFloat().withMessage('El autor es obligatorio'),
body('edición').isFloat().withMessage('La edición es obligatorio'),
body('estado').isFloat().withMessage('El estado es obligatorio'),
], LibrosPost);


// Nuevas rutas para PUT y DELETE con el middleware validarID
router.put('/:id', [
  // Validaciones con express-validator para el PUT
body('titulo').notEmpty().withMessage('El título es obligatorio'),
body('autor').isFloat().withMessage('El autor es obligatorio'),
body('edición').isFloat().withMessage('La edición es obligatorio'),
body('estado').isFloat().withMessage('El estado es obligatorio'),
 
], LibrosPut);

router.patch('/:id', [
  // Validaciones con express-validator para el PUT
  body('edición').notEmpty().withMessage('El email no debe estar vacío'),
  body('estado').notEmpty().withMessage('La contraseña debe teer mínimo 6 caracteres'),
], LibrosPatch);

router.delete('/:id', LibrosDelete);


module.exports = router; //aqui hago la exportación para que pueda ser importado y utilizado en el archivo ppal de la aplicacion app.js