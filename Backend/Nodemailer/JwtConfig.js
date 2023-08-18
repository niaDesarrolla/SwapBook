const Jwt = require('jsonwebtoken');

const getToken = (payload) => {
    return Jwt.sign({
        data:payload
     },'SECRET', {expiresIn: '1h' });
}

const getTokenData = (token) => {
    let data = null;
    Jwt.verify(token, 'SECRET',(err, decoded) => {
        if(err){
            console.log('Error al obtene data del token');
        } else{
            data = decoded;
        }
    });
    return data;
}

module.exports = {
    getToken,
    getTokenData
}