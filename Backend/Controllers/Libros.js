
const Libros = require('../Models/Libros');


const LibrosGet = async (req, res) => {
  try {
    // Aquí realizo la lógica para buscar el usuario en la base de datos por su ID
    const librosId = req.params.id; //obtenemos el id del usuario de los paramétros de la URL
    if (librosId) { //si se proporciona Id buscamos el usuario eespecífico, pero si no, buscamos todos los usuarios
      const libro = await Libros.findById(librosId);
      // Utilizando el modelo Usuarios y su método de búsqueda por ID

      if (!libro) {
        return res.status(404).json({ error: 'Libro no encontrado' });
      }

      // Devuelvo la información del usuario encontrado en la respuesta
      res.json(libro);
    } else {
      const libros = await Libros.find();

      if (!libros || libros.length === 0) {
        return res.status(404).json({ error: 'Libros no encontrados' });
      }
      //Devuelvo la información de todos los usuarios en la respuesta
      res.json(libros);
    }

  } catch (error) {
    console.error('Error al obtener el libro por ID:', error);
    res.status(500).json({ error: 'Error interno del servidor' });
  }
};


const LibrosPost = async (req, res) => { //Esta línea define la función UsuariosPost con los parámetros: req y res. 
  //esta función esta envuelta en un bloque trycatch,que permite manejar cualquier excepcion que pueda ocurrir durante la ejecución de la función. Si ocurre un error dentro del bloque try, se captura en el bloque catch, lo que evita que la aplicacion se bloquee y permita que se envié una respuesta adecuada al cliente
  try {
    const {titulo, autor, edición, estado, librosId} = req.body; //se extraen los datos enviados en el cuerpo de la solicitud

    
    // Creo una nueva instancia de Libro con la información del body
    const LibrosNuevo = new Libros( {
      titulo: titulo,
      autor: autor,
      edición: edición,
      estado: estado,
      librosId: librosId
    }); //Se crea una nueva instancia del modelo de datos "Usuario" utilizando los datos almacenados en nuevoUsuario. Esto se asume que el modelo "Usuario" se define y se importa previamente en el archivo que contiene la función.
     console.log('guardando libro,', LibrosNuevo)
  
    // Guarda el usuario en la base de datos
    await LibrosNuevo.save(); //Se utiliza el método save() para guardar el nuevo usuario en la base de datos. Este método es asincrónico, por lo que se espera la resolución de la promesa utilizando await.
    // Devuelvo la respuesta con el usuario recién creado
    res.json({ mensaje: 'Libro creado con éxito', Libros: LibrosNuevo });// Si todo ha ido bien y el usuario se ha guardado exitosamente en la base de datos, se envía una respuesta JSON al cliente con un mensaje de éxito y los detalles del usuario recién creado.
  } catch (error) { // Si ocurre algún error durante el proceso de creación del usuario (por ejemplo, un error de validación o un problema con la base de datos), el control pasará al bloque catch y se capturará el error.
    console.error('Error al agregar el libro:', error); //En caso de que ocurra un error, se envía una respuesta con un código de estado HTTP 500 (Error interno del servidor) y un mensaje de error genérico. Esto permite que el cliente sepa que ha ocurrido un problema en el servidor y proporciona información para el registro y depuración del error.
    res.status(500).json({ error: 'Error interno del servidor' });
  }
};


const LibrosPut = async (req, res) => {
  try {
    const libroId = req.params.id; //Aquí se obtiene el id del usuario que se quiere actualizar desde los parámetros de la URL. Esto supone que el cliente está enviando el ID del usuario que se desea modificar como parte de la URL
    const { titulo, autor, edición, estado,...resto } = req.body; //En esta línea, se utiliza la destructuración para extraer las propiedades nombre, apellido, email, contraseña y cualquier otra propiedad adicional del objeto req.body. req.body
    //si la validación es exitosa y no hay errores Construyo el objeto con los datos a actualizar
    const data = { //Aquí se crea un nuevo objeto llamado data que contiene las propiedades extraídas (nombre, apellido, email, contraseña) y cualquier otra propiedad que haya quedado en el objeto resto. Este objeto data representa los datos que se utilizarán para actualizar el usuario en la base de datos.
      titulo, autor, edición, estado,...resto
    };
    
    //Ahora actualizamos ese usuario específico. En este caso lo guardamos en una variable para mostrar al usuario
      const libroActualizado = await Libros.findByIdAndUpdate(libroId, data, {
        new: true, //usamos el método de mongoose para actualizar el documento del libro en la colección de libros.
      });

      if (!libroActualizado) {
        return res.status(404).json({ error: 'Libro no encontrado' });
      }

      console.log(libroActualizado);
      res.json({ mensaje: 'Libro actualizado correctamente', libro: libroActualizado });
    } catch (error) {
      console.error('Error al actualizar el libro:', error);
      res.status(500).json({ error: 'Error interno del servidor' });
    }
    
  };

  const LibrosPatch = async (req, res) => {
    const libroId = req.params.id;
    const librosPatch = req.body; // Aquí se encuentran las propiedades a actualizar en el cuerpo de la solicitud

    try {
      const libroActualizado = await Libros.findByIdAndUpdate(
        libroId,
        librosPatch,
        { new: true }
      );

      if (!libroActualizado) {
        return res.status(404).json({ error: 'Libro no encontrado' });
      }

      res.json({ mensaje: 'Libro actualizado correctamente', libro: libroActualizado });
    } catch (error) {
      console.error('Error al actualizar el libro:', error);
      res.status(500).json({ error: 'Error interno del servidor' });
    }
  };

  const LibrosDelete = async (req, res) => {
    try {
      const libroId = req.params.id;

      // Verifico si el ID es válido utilizando el middleware validarID

      const libroEncontrado = await Libros.findById(libroId); //libros antes de finbyId es la referencia al modelo de libros 
      if (!libroEncontrado) {
        return res.status(404).json({ error: 'Libro no encontrado' });
      }

      // Actualizo el estado del usuario a false en la base de datos según su ID
      const libroActualizado = await Libros.findByIdAndUpdate(
        libroId,
        { activo: false },
        { new: true } // Para obtener el documento actualizado
      );

      if (!libroActualizado) {
        return res.status(404).json({ error: 'Libro no encontrado' });
      }

      res.json({ mensaje: 'Libro desactivado correctamente', libro: libroActualizado });
    } catch (error) {
      console.error('Error al eliminar el libro:', error);
      res.status(500).json({ error: 'Error interno del servidor' });
    }
  };

  //Si deseas realizar un borrado permanente, tendrías que usar el método Usuario.findByIdAndDelete() en lugar de Usuario.findByIdAndUpdate(). Este último método solo actualiza un campo específico del documento, mientras que findByIdAndDelete() elimina el documento de la base de datos de forma permanente.

  module.exports = {
    LibrosGet,
    LibrosPost,
    LibrosPut,
    LibrosDelete,
    LibrosPatch,

  };



