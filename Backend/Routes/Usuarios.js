const { Router } = require('express'); 
const router = Router();
const { body } = require('express-validator');


const { //importo los controladores 
  
  UsuariosPost,
  UsuariosGet,
  UsuariosPut,
  UsuariosPatch,
  UsuariosDelete,
} = require("../Controllers/Usuarios");



// Ruta para confirmar correo electrónico
//router.get('/confirm/:token', confirm);

//Aquí le envio información al serviidor (importamos) desde controllers 
router.get('/:id?',[
  // Validaciones con express-validator para el Get
  body('email').notEmpty().withMessage('El email no debe estar vacío'),
  body('contraseña').notEmpty().withMessage('La contraseña no debe estar vacía'),
], UsuariosGet); //ruta get para ver todos los usuarios

router.post('/',[//ruta para agregar un nuevo usuario
//validaciones con express-validator para el post
body('nombre').notEmpty().withMessage('El nombre es obligatorio'),
body('apellido').isFloat().withMessage('El apellido es obligatorio'),
body('email').isFloat().withMessage('El email es obligatorio'),
body('contraseña').isFloat().withMessage('La contraseña es obligatorio'),
], UsuariosPost);


// Nuevas rutas para PUT y DELETE con el middleware validarID
router.put('/:id', [
  // Validaciones con express-validator para el PUT
  body('nombre').notEmpty().withMessage('El nombre es obligatorio'),
  body('apellido').notEmpty().withMessage('El apellido es obligatorio'),
  body('email').notEmpty().withMessage('El email no debe estar vacío'),
  body('contraseña').notEmpty().withMessage('La contraseña debe teer mínimo 6 caracteres'),
], UsuariosPut);

router.patch('/:id', [
  // Validaciones con express-validator para el PUT
  body('email').notEmpty().withMessage('El email no debe estar vacío'),
  body('contraseña').notEmpty().withMessage('La contraseña debe teer mínimo 6 caracteres'),
], UsuariosPatch);

router.delete('/:id', UsuariosDelete);


module.exports = router; //aqui hago la exportación para que pueda ser importado y utilizado en el archivo ppal de la aplicacion app.js