const axios = require('axios');
const API_KEY = process.env.API_KEY; // Asegúrate de que API_KEY esté correctamente configurada
const BASE_URL = 'https://www.googleapis.com/books/v1/volumes';

exports.getBooks = async (req, res) => {
  try {
    console.log('Inicio del controlador getBooks');
    const title = req.query.title; // Obtener el título de la consulta desde los parámetros de la URL
    console.log('Título recibido:', title);

    if (!title) {
      return res.status(400).json({ error: 'Se requiere un título de libro para la búsqueda' });
    }

    const response = await axios.get(`${BASE_URL}?q=${encodeURIComponent(title)}&key=${API_KEY}`);
    console.log('Respuesta de API:', response.data);
    const data = response.data;

    const booksWithImageURL = data.items.map(book => {
      const volumeInfo = book.volumeInfo;
      return {
        title: volumeInfo.title,
        author: volumeInfo.authors ? volumeInfo.authors.join(', ') : 'Unknown Author',
        description: volumeInfo.description || 'No description available',
        imageURL: volumeInfo.imageLinks ? volumeInfo.imageLinks.thumbnail : '',
      };
    });
    console.log('Fin del controlador getBooks');

    res.json(booksWithImageURL);
  } catch (error) {
    console.error('Error al buscar libros:', error);
    res.status(500).json({ error: 'Error interno del servidor' });
  }
};