
require ('dotenv').config();
const Server = require('./Models/Server'); 
//const ServerDatabase = require('../database/database'); 
const express = require('express');
const app = express();
const server = new Server();

// Ruta de prueba "/"
app.get('/', (req, res) => {
    res.send('Hello, World!');
  });


server.listen();

                 