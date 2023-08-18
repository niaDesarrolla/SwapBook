const nodemailer = require("nodemailer");
const {google} =require("googleapis");
const OAuth2 = google.auth.OAuth2;


const email = {
    usuario: 'sswapbook@gmail.com'
};

//Credenciales OAuth 2.0
const oauth2Client = new OAuth2(
    process.env.ID_DE_CLIENTE,       
    process.env.SECRETO_DE_CLIENTE, 
    "http://localhost:8085/api/usuarios/confirm/${token}" // URL de redireccionamiento
);


oauth2Client.setCredentials({
    refresh_token: process.env.REFRESH_TOKEN 
});

const accessToken = oauth2Client.getAccessToken();

const transporter = nodemailer.createTransport({
    service: "gmail",
    auth: {
        type: "OAuth2",
        user: email.usuario,
        clientId: process.env.ID_DE_CLIENTE, 
        clientSecret: process.env.SECRETO_DE_CLIENTE, 
        refreshToken: process.env.REFRESH_TOKEN, 
        accessToken: accessToken
  }
});

const sendEmail = async (email, subject, html) => {
    try {

        await transporter.sendMail({
            from:`"SwapBook 👻" <${email.usuario}>`,
            to: email.usuario, 
            subject: "Hello ✔", 
            text: "Bienvenido a SwappBook", 
            html, // html body
          });
        
        
    } catch (error) {
        console.log('Algo no va bien con el email', error)
        
    }

}

const getTemplate = (nombre, token ) => {
    return `
    <head>
        <link rel="stylesheet=" href="./Style.css">
    </head>

    <div id="email_content">
        <img src="https://i.imgur.com/eboNR82.png" alt="">
        <h2>Hola ${nombre}</h2>
        <p>Para confirmar tu cuenta, ingresa al siguiente enlace</p>
        <a
           href= "http://localhost:8085/api/usuarios/Confirm/${token}">
            Confirmar Cuenta</a>
    </div>
    `;
}


module.exports = {
    sendEmail,
    getTemplate
};
