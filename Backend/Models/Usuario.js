const { Schema, model } = require('mongoose');

const UsuarioSchema = new Schema({
  
  nombre: {
    type: String,
    required: [true, "El nombre  es obligatorio"]
  },
  apellido: {
    type: String,
    required: [true, "El apellido es obligatoria"]
  },
  
  email: {
    type: String,
    required: [true, "El email es obligatorio"]
  },

  contraseña: {
    type: String,
    required: [true, "La contraseña es obligatoria"]
  },

  //ID de objetos en mongoose
  misLibros: [{
    type: Schema.Types.ObjectId, // Tipo de datos para IDs de objetos
    ref: 'Libros' // Nombre del modelo de libros
    
  }]
  ///sector propietario y el libro guarde el id del propietario
  //crear un array que aloje los libros que ese usuario va guardando e la base de datos
});

const Usuario = model('Usuario', UsuarioSchema);

module.exports = Usuario;

// la hoja de modelo de usuario (User Model) representa cómo se estructura un objeto de usuario en la base de datos, incluyendo sus campos, tipos de datos y reglas de validación, y puede contener métodos para interactuar con los datos en la base de datos. Es una parte esencial de la capa de datos en el patrón MVC y ayuda a mantener la consistencia y estructura en la manipulación de los datos de usuario en la aplicación.