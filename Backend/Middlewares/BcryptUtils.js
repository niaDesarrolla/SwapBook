const bcryptjs = require('bcryptjs');

// Encriptación de contraseña para usuariosPut
const encriptarContraseña = (contraseña) => {
    const salt = bcryptjs.genSaltSync();
    const hash = bcryptjs.hashSync(contraseña, salt);
    return hash;
  };
  
  module.exports = {encriptarContraseña };