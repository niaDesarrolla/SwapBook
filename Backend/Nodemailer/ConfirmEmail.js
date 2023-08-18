const { UsuariosGet } = require('../Controllers/Usuarios');
const { getTokenData } = require('./JwtConfig');
const Usuarios = require('../Models/Usuario');

//Función para confirmació de email
const confirm = async (req, res) =>{
    try {
  
      //obtener el token
  
      const {token} = req.params;
  
      //verificar la data 
      const data = await getTokenData(token);
  
      if(data === null){
        return res.json({
          success: false,
          msj: 'Error al obtener data'
        });
      }
  
      console.log(data);
  
      const {email, code} = data.data;
      //Verificar existencia del usuario
      const user = await Usuarios.findOne({
        email}) || null;
        
        if (user === null) {
          return res.json({
            success: false,
            msj: 'Usuario no existe'
          });
        }
  
      //verificar el código
      if(code !== user.code){
        return res.redirect('/Error.html');
      }
      
  
      //Actualizar usuario
      user.status = 'VERIFIED';
      console.log('Antes de guardar:', user);
      await user.save();
      console.log('Después de guardar:', user);
  
      //Redireccionar a la confirmación
      await UsuariosGet(req, res);
      return res.redirect('/Confirm.html');
  
      
    } catch (error) {
      console.log(error);
      return res.json({
        success:false,
        msj: 'Error al confirmar usuario'
      });
      
    }
  }

  module.exports = {
    confirm
  }