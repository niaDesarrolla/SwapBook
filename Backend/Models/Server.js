//requerimos express
const express = require ('express'); 
const cors = require('cors');
const dbConnection = require('../Database/Database')
const Libros = require('../Routes/Libros');//no estoy segura de si esta importación va aquí

//Iniciamos una clase llamada servidor
class Server {
   constructor () {
       this.app = express() //Crea una instancia de Express, el framework de Node.js que se utiliza para construir aplicaciones web.
       this.port = process.env.PORT;//Asigna el valor del puerto en el que tu servidor escuchará las solicitudes. El valor se toma de la variable de entorno PORT definida en tu sistema.
       this.usuariosPath = "/api/usuarios";//Define la ruta inicial para las páginas de usuario.ruta ppal de nuestra páginas.Esto se utilizará más adelante en la configuración de rutas.
       //Middlewares
       this.middlewares(); //Llama al método middlewares(), que configura los middlewares que se ejecutarán antes de que las solicitudes lleguen a las rutas.
      //Rutas de mi aplicación
       this.routes(); //Llama al método routes(), que configura las rutas de tu aplicación.
       //se ejecuta la base de datos
       this.conectarDB();//Llama al método conectarDB(), que se encarga de establecer la conexión con la base de datos.
      
  }
//va a disparra adentro la funcion DB conection de la hoja database.js

  async conectarDB(){//hago la función que se ejecuta cando se instancia la case server
    await dbConnection();
  }
  //Definimos los métodos

  middlewares() {
    //Estos middlewares serán ejecutados antes de que las solicitudes lleguen a las rutas
    //CORS
    this.app.use(cors());

    //Lectura y parseo del body
    this.app.use(express.json()); 

    //Directorio Público
    this.app.use(express.static("public")); 
  }

  //Aquí nos traemos en nuestra función routes esas rutas que creamos
  routes() {
    this.app.use(this.usuariosPath, require("../Routes/Usuarios")); // configura las rutas de tu servidor para manejar las rutas relacionadas con los usuarios. Cada vez que una solicitud llega a una ruta que comienza con this.usuariosPath, el enrutador utilizará las definiciones de ruta contenidas en el archivo Usuarios.js para manejar la solicitud y enviar una respuesta adecuada.
    //El método use se utiliza para montar funciones de middleware en la ruta especificada. En otras palabras, es una forma de agregar funcionalidad a las rutas de tu servidor.
    this.app.use('/api/Libros', Libros);//está utilizando las rutas y controladores definidos en el archivo Libros.js
  }

  listen() {
    this.app.listen(this.port, () => {
      console.log("Servidor corriendo en puerto", this.port);
    });
  }
}

module.exports = Server;
