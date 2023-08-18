const Usuario = require('../Models/Usuario');
const Libro = require('../Models/Libros');

exports.agregarLibroAUsuario = async (usuarioId, libroId) => {
  try {
    const usuario = await Usuario.findById(usuarioId);
    const libro = await Libro.findById(libroId);

    if (!usuario || !libro) {
      throw new Error('Usuario o libro no encontrado');
    }

    usuario.misLibros.push(libro._id);
    await usuario.save();

    return 'Libro agregado al usuario correctamente';
  } catch (error) {
    console.error(error);
    throw new Error('Error en el servidor');
  }
};