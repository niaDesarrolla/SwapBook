
//const {confirm} = require('../Nodemailer/ConfirmEmail');
const Usuario = require('../Models/Usuario');
const {encriptarContraseña} = require('../Middlewares/BcryptUtils');
const {AgregarLibroAUsuario} = require('../Controllers/LibrosUsuarios');
const {getToken, getTokenData} = require('../Nodemailer/JwtConfig');
const {getTemplate, sendEmail} = require('../Nodemailer/MailConfig');
const { v4: uuidv4 } = require('uuid');



const UsuariosGet = async (req, res) => {
  try {
    // Aquí realizo la lógica para buscar el usuario en la base de datos por su ID
    const usuarioId = await req.params.id; //obtenemos el id del usuario de los paramétros de la URL
    
    if (usuarioId) { //si se proporciona Id buscamos el usuario eespecífico, pero si no, buscamos todos los usuarios
      const usuario = await Usuario.findById(usuarioId);
      // Utilizando el modelo Usuarios y su método de búsqueda por ID
    

      if (!usuario) {
        return res.status(404).json({ error: 'Usuario no encontrado' });
      }

      res.json(usuario); // Enviar la información del usuario encontrado
    } else {
      const usuarios = await Usuario.find();
    
  
        if (!usuarios || usuarios.length === 0) {
          return res.status(404).json({ error: 'Usuarios no encontrados' });
        }

         //Devuelvo la información de todos los usuarios en la respuesta
      res.json(usuarios);
    }
   } catch (error) {
    console.error('Error al obtener el usuario por ID:', error);
    res.status(500).json({ error: 'Error interno del servidor' });
  }
};

const UsuariosPost = async (req, res) => { //Esta línea define la función UsuariosPost con los parámetros: req y res. 
  //esta función esta envuelta en un bloque trycatch,que permite manejar cualquier excepcion que pueda ocurrir durante la ejecución de la función. Si ocurre un error dentro del bloque try, se captura en el bloque catch, lo que evita que la aplicacion se bloquee y permita que se envié una respuesta adecuada al cliente
  try {
    const {nombre, apellido, email, contraseña, usuarioId} = req.body; //se extraen los datos enviados en el cuerpo de la solicitud
    
    //Bcrypt
    // Encripta la contraseña utilizando la función encriptarContraseña
    const contraseñaEncriptada = await encriptarContraseña(contraseña);
    
    // Creo una nueva instancia de Usuario con la información del body
    const usuarioNuevo = new Usuario({ 
      nombre: nombre,
      apellido: apellido,
      email: email,
      contraseña: contraseñaEncriptada,
      usuarioId: usuarioId}); //Se crea una nueva instancia del modelo de datos "Usuario" utilizando los datos almacenados en nuevoUsuario. Esto se asume que el modelo "Usuario" se define y se importa previamente en el archivo que contiene la función.
    

        // Guarda el usuario en la base de datos
    await usuarioNuevo.save(); //Se utiliza el método save() para guardar el nuevo usuario en la base de datos. Este método es asincrónico, por lo que se espera la resolución de la promesa utilizando await.
    // Devuelvo la respuesta con el usuario recién creado
    res.json({ mensaje: 'Usuario creado con éxito', usuario: usuarioNuevo });// Si todo ha ido bien y el usuario se ha guardado exitosamente en la base de datos, se envía una respuesta JSON al cliente con un mensaje de éxito y los detalles del usuario recién creado.
      
    //Funcionalidades de Nodemailer
  //Generar el código
  const code = uuidv4();
  //Generar token
  const token = getToken ({email, code});

  //Obtener un template
  const template = getTemplate(nombre, token);
  //Enviar el email
  await sendEmail({usuario:email}, 'este es un email de prueba', template);

  } catch (error) { // Si ocurre algún error durante el proceso de creación del usuario (por ejemplo, un error de validación o un problema con la base de datos), el control pasará al bloque catch y se capturará el error.
    console.error('Error al agregar el usuario:', error); //En caso de que ocurra un error, se envía una respuesta con un código de estado HTTP 500 (Error interno del servidor) y un mensaje de error genérico. Esto permite que el cliente sepa que ha ocurrido un problema en el servidor y proporciona información para el registro y depuración del error.
    res.status(500).json({ error: 'Error interno del servidor' });
  }
};

//Función para agregar un libro a un usuario eespecífico

exports.agregarLibro = async (req, res) => {
  try {
    const usuarioId = req.params.usuarioId;
    const libroId = req.body.libroId; // Supongamos que el ID del libro está en el cuerpo de la solicitud

    // Llamamos a la función AgregarLibroAUsuario para agregar el libro al usuario
    const mensaje = await AgregarLibroAUsuario(usuarioId, libroId);

    // Puedes hacer otras operaciones relacionadas con la respuesta aquí
    res.status(200).json({ mensaje });
  } catch (error) {
    console.error(error);
    res.status(500).json({ mensaje: 'Error en el servidor' });
  }
};



const UsuariosPut = async (req, res) => {
  try {
    const usuarioId = req.params.id; //Aquí se obtiene el id del usuario que se quiere actualizar desde los parámetros de la URL. Esto supone que el cliente está enviando el ID del usuario que se desea modificar como parte de la URL
    const { nombre, apellido, email, contraseña, ...resto } = req.body; //En esta línea, se utiliza la destructuración para extraer las propiedades nombre, apellido, email, contraseña y cualquier otra propiedad adicional del objeto req.body. req.body
    //si la validación es exitosa y no hay errores Construyo el objeto con los datos a actualizar
    const data = { //Aquí se crea un nuevo objeto llamado data que contiene las propiedades extraídas (nombre, apellido, email, contraseña) y cualquier otra propiedad que haya quedado en el objeto resto. Este objeto data representa los datos que se utilizarán para actualizar el usuario en la base de datos.
      _id: usuarioId, nombre, apellido, email, contraseña, ...resto
    };

    
    //Validación con bcryptsjs
    //hacemos una pregunta para implementar bcrypt
    if (contraseña) {//si desde el body me enviaran un password.//Si el usuario escriió que quiere actualizar su contraseña
    
      const contraseñaEncriptada = encriptarContraseña(contraseña);//para ello hacemos una variable salt.//primero ejecutamos bcrypt con el método genSaltSync.Aquí le estamos diciendo que me genere un string salt de manera síncrona. Esto va a hacer que javascript detenga ahí la lectura y espere a que esto se ejecute.Por defecto este genSaltSync utiliza 10 rondas, /luego modifico la propiedad password//¿Cómo accedo a  esa propiedad password? lo hago llamando al objeto resto y la propiedad password misma para asignarele un nuevo valor
      data.contraseña = contraseñaEncriptada;// //volvemos a llamar bcrypt y le pedimos que aplique el metodo hashSync. hash
    }
    
    //Ahora actualizamos ese usuario específico. En este caso lo guardamos en una variable para mostrar al usuario
      const usuarioActualizado = await Usuario.findByIdAndUpdate(usuarioId, data, {
        new: true, //usamos el método de mongoose para llamar a la colección user y le pasamos dos parametros: el id y el nombre
      });

      if (!usuarioActualizado) {
        return res.status(404).json({ error: 'Usuario no encontrado' });
      }

      console.log(usuarioActualizado);
      res.json({ mensaje: 'Usuario actualizado correctamente', usuario: usuarioActualizado });
    } catch (error) {
      console.error('Error al actualizar su cuenta:', error);
      res.status(500).json({ error: 'Error interno del servidor' });
    }
    
  };

  const UsuariosPatch = async (req, res) => {
    const usuarioId = req.params.id;
    const usuariosPatch = req.body; // Aquí se encuentran las propiedades a actualizar en el cuerpo de la solicitud

    try {
      const usuarioActualizado = await Usuario.findByIdAndUpdate(
        usuarioId,
        usuariosPatch,
        { new: true }
      );

      if (usuariosPatch.contraseña) {
    
        const contraseñaEncriptada = encriptarContraseña(usuariosPatch.contraseña);
        usuariosPatch.contraseña = contraseñaEncriptada;
      }

      if (!usuarioActualizado) {
        return res.status(404).json({ error: 'Usuario no encontrado' });
      }

      res.json({ mensaje: 'Usuario actualizado correctamente', usuario: usuarioActualizado });
    } catch (error) {
      console.error('Error al actualizar el usuario:', error);
      res.status(500).json({ error: 'Error interno del servidor' });
    }
  };

  const UsuariosDelete = async (req, res) => {
    try {
      const usuarioId = req.params.id;

      // Verifico si el ID es válido utilizando el middleware validarID

      const usuarioEncontrado = await Usuario.findById(usuarioId);
      if (!usuarioEncontrado) {
        return res.status(404).json({ error: 'Usuario no encontrado' });
      }

      // Actualizo el estado del usuario a false en la base de datos según su ID
      const usuarioActualizado = await Usuario.findByIdAndUpdate(
        usuarioId,
        { activo: false },
        { new: true } // Para obtener el documento actualizado
      );

      if (!usuarioActualizado) {
        return res.status(404).json({ error: 'Usuario no encontrado' });
      }

      res.json({ mensaje: 'Su cueta ha sido desactivada correctamente', usuario: usuarioActualizado });
    } catch (error) {
      console.error('Error al eliminar la cuenta:', error);
      res.status(500).json({ error: 'Error interno del servidor' });
    }
  };

  //Si deseas realizar un borrado permanente, tendrías que usar el método Usuario.findByIdAndDelete() en lugar de Usuario.findByIdAndUpdate(). Este último método solo actualiza un campo específico del documento, mientras que findByIdAndDelete() elimina el documento de la base de datos de forma permanente.

  module.exports = {
    UsuariosGet,
    UsuariosPost,
    UsuariosPut,
    UsuariosDelete,
    UsuariosPatch,
  };



