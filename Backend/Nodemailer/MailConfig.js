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

// Define el alcance adecuado para Gmail SMTP
const SCOPES = ["https://mail.google.com/"];

oauth2Client.setCredentials({
    refresh_token: process.env.REFRESH_TOKEN 
});


// Función para obtener el token de acceso
async function getAccessToken() {
    const tokenInfo = await oauth2Client.getAccessToken();

    console.log("Token Info:", tokenInfo);

    // Si el token está a punto de expirar o ha expirado, refresca el token
    if (tokenInfo.expiry_date < Date.now()) {
        const refreshedToken = await oauth2Client.refreshToken(process.env.REFRESH_TOKEN);
        oauth2Client.setCredentials(refreshedToken.credentials);
        return refreshedToken.credentials.access_token;
    }

    return tokenInfo.access_token;
}


const transporter = nodemailer.createTransport({
    service: "gmail",
    auth: {
        type: "OAuth2",
        user: email.usuario,
        clientId: process.env.ID_DE_CLIENTE, 
        clientSecret: process.env.SECRETO_DE_CLIENTE, 
        refreshToken: process.env.REFRESH_TOKEN, 

  }
});


const sendEmail = async (email, subject, html) => {
    try {
        const accessToken = await getAccessToken();
        await transporter.sendMail({
            from:`"SwapBook 👻" <${email.usuario}>`,
            to: email.usuario, 
            subject: "Hello ✔", 
            text: "Bienvenido a SwappBook", 
            html, // html body
            auth: {
                user: "sswapbook@gmail.com",
                refreshToken: process.env.REFRESH_TOKEN,
                accessToken,
                expires: 1484314697598,
            },
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
        <img src="./Public/logo.png" alt="">
        <h2>Hola ${nombre}</h2>
        <p>Para confirmar tu cuenta, ingresa al siguiente enlace</p>
        <a
           href= "http://localhost:8085/api/usuarios/confirm/${token}">
            Confirmar Cuenta</a>
    </div>
    `;
};

async function getAccessToken() {
    const tokenInfo = await oauth2Client.getAccessToken();

    console.log("Token Info:", tokenInfo); 
    
    // Si el token está a punto de expirar o ha expirado, refresca el token
    if (tokenInfo.expiry_date < Date.now()) {
      const refreshedToken = await oauth2Client.refreshToken(process.env.REFRESH_TOKEN);
      oauth2Client.setCredentials(refreshedToken.credentials);
      return refreshedToken.credentials.access_token;
    }
  
    return tokenInfo.access_token;
  }


module.exports = {
    sendEmail,
    getTemplate
};
