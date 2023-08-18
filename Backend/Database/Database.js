const mongoose = require('mongoose') //requerimos mongoose

const dbConnection = async()=>{ //función que ejecuta la conexion a la base de datos
    
    try {
       await mongoose.connect(process.env.CONNECTION_STRING);
       console.log('Base de datos online');

}catch (error){
   console.log(error);
   throw new Error('Error a la hora de iniciar la base de datos')
   //para que me muestre el error 
  }
};

module.exports = dbConnection; 