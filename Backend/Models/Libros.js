const { Schema, model } = require('mongoose');

const LibrosSchema = new Schema({
 
  titulo: {
    type: String,
    required: [true, "El nombre  es obligatorio"]
  },

  autor: {
    type: String,
    required: [true, "El autor es obligatoria"]
  },
  
  edición: {
    type: Number,

  },

  estado: {
    type: String,
  },

  imagenURL: {
    type: String,
  },

  activo: {
    type: Boolean,
    default: true, // campo para indicar si el libro está activo o no
  },

  //crear un array que aloje los libros que ese usuario va guardando e la base de datos
//ouner del usuario que lo subio
});

const Libros = model('Libros', LibrosSchema);

module.exports = Libros;