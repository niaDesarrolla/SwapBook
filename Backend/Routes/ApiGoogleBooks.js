const express = require('express');
const { Router } = require("express");
const router = Router();


const { getBooks} = require("../Controllers/ApiGoogleBooks");

  router.get('/books/title', getBooks);

module.exports = router;