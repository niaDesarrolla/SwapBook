const { validationResult } = require('express-validator'); //es una función que se utiliza para obtener los resultados de la validación de los campos.


//Validación de usuariosPut
//La función validarCampos es un middleware que se utiliza para validar los campos de una solicitud utilizando express-validator. Si los campos no cumplen con las reglas de validación, se devuelve una respuesta con los errores de validación; de lo contrario, se pasa el control al siguiente middleware o manejador. Esta función puede ser reutilizada en diferentes rutas o controladores para validar campos en diversas solicitudes.
const validarCampos = (req, res, next) => { //Se define la función validarCampos con los parámetros (req, res, next). req
//Valido los campos utilizando express-validator

const errors = validationResult(req); //Dentro de la función validarCampos, se utiliza validationResult(req) para obtener los resultados de la validación de los campos en el cuerpo de la solicitud (req.body). La función validationResult toma la solicitud (req) como parámetro y devuelve un objeto con los resultados de la validación.
if (!errors.isEmpty()) { //Se verifica si hay errores de validación utilizando !errors.isEmpty(). Si hay errores, significa que los campos no cumplen con las reglas de validación establecidas con express-validator.
  return res.status(400).json({ errors: errors.array() });//Si se encuentran errores de validación, se devuelve una respuesta con un código de estado HTTP 400 (Bad Request) y una lista de errores en formato JSON utilizando res.status(400).json({ errors: errors.array() }). Los errores se obtienen en formato de array utilizando errors.array().
}
next();//Si no hay errores de validación, se llama a la función next() para pasar el control al siguiente middleware o manejador en la cadena de ejecución.
};

module.exports = {
    validarCampos,
}
