import React, { useState } from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import { Container, Row, Col, Card, Carousel, Form } from 'react-bootstrap';
import logo from '../Imagenes/logo.png';
import { Link } from 'react-router-dom';
import { Button } from 'react-bootstrap';
import retrato from '../Imagenes/retrato.jpg';
import persona from '../Imagenes/persona.jpg';
import imagen from '../Imagenes/imagen.jpg';
import usuario from '../Imagenes/usuario.jpg';
import axios from 'axios';
import '../Styles/PerfilUsuario.css';
import '../Styles/CarruselBuscar.css'
import IntercambiarLibro from '../Componentes/IntercambiarLibro';
import LibrosRegistro from '../Componentes/LibrosRegistro';
import '../Styles/Global.css';


const isProduction = process.env.NODE_ENV === 'production'
  const apiUrl = isProduction
  ? process.env.REACT_APP_BACKEND_URL // URL de producción en Vercel
  : 'http://localhost:8085'; // URL local en desarrollo
  // URL local en desarrollo

  
const PerfilUsuario = () => {

  // Estados y funciones relacionados con la búsqueda y publicación
  const [postedBooks, setPostedBooks] = useState([]);
  const [intercambiarIndex, setIntercambiarIndex] = useState(0);
  const [buscarIndex, setBuscarIndex] = useState(0);
  const [successMessage, setSuccessMessage] = useState("");

  // Estado para almacenar los libros posteados
  // Estado para los resultados de búsqueda
  const [searchTerm, setSearchTerm] = useState('');
  const [searchResults, setSearchResults] = useState([]);
  const [showResults, setShowResults] = useState(false)
  // Funcionalidades para el boton buscar
  const [showSearchBox, setShowSearchBox] = useState(false);
  const [searchTitle, setSearchTitle] = useState('');
  const [favoriteBookText, setFavoriteBookText] = useState('');
  // Función para agregar un libro postado al estado
  const addPostedBook = (book) => {
    setPostedBooks([...postedBooks, book]);
  };

  const handleIntercambiarSelect = (selectedIndex) => {
    setIntercambiarIndex(selectedIndex);
  };

  const handleBuscarSelect = (selectedIndex) => {
    setBuscarIndex(selectedIndex);
  };

  const handleSearchClick = () => {
    setShowSearchBox(true);
  };


  // funciones para manejar el cambio en el input del buscador y el envío del formulario:
  const handleSearchChange = (event) => {
    setSearchTerm(event.target.value);
  };

  const handleSearchSubmit = async (event) => {
    event.preventDefault();
    try {
      const response = await axios.get(`${apiUrl}/api/ApiGoogleBooks/books/title`, {
        params: {
          title: searchTerm  // Utiliza el término de búsqueda actual aquí
        }
      });
      console.log('Resultados de la búsqueda:', response.data);
      setSearchResults(response.data);
      setShowResults(true);
    } catch (error) {
      console.error('Error al buscar el libro:', error);
    }
  };

  const handleFavoriteBookChange = (event) => {
    setFavoriteBookText(event.target.value);
  };

  const handlePostFavoriteBook = async (event) => {
    event.preventDefault();
    try {
      // Realiza alguna acción con el texto ingresado, como enviarlo al servidor
      // y luego actualizar el estado o mostrar un mensaje de éxito.
      // Por ejemplo:
      console.log('Texto del libro favorito:', favoriteBookText);
      setFavoriteBookText('');
    } catch (error) {
      console.error('Error al postear el libro favorito:', error);
    }
  };


  return (
    <div className="PerfilUsuario">

      <Container className="mt-4">
        <Row>
          <Col md={3}>
            <div className="text-center">
              <img src={retrato} alt="Foto de perfil" className="img-fluid rounded-circle mb-3"
                style={{
                  width: '180px',
                  height: '180px',
                  objectFit: 'cover', // Asegura que la imagen se ajuste correctamente
                }} />
            </div>
          </Col>
          <Col md={9}>
            <h2 className='Nombre'>Nombre de Usuario</h2>
          </Col>
        </Row>
      </Container>

      <Container className="mt-4">
        <Row>
          <Col md={6}>
            <Card className="mb-3 izquierda text-center">
              <Card.Body>
                <h3>Mis Libros Favoritos</h3>
                <hr />
                {/* Sección para escribir  */}
                {/* <Form onSubmit={handlePostFavoriteBook}>
                  <Form.Group controlId="favoriteBook">
                    <Form.Control
                      as="textarea"
                      rows={3}
                      placeholder="Escribe tus libros favoritos aquí..."
                      value={favoriteBookText}
                      onChange={handleFavoriteBookChange}
                    /> */}
                {/* </Form.Group>
                  <Button type="submit" variant="primary">
                    Postear Libro Favorito
                  </Button>
                </Form> */}
                {/* Agrega aquí los campos para Mis Libros Favoritos */}
              </Card.Body>
            </Card>
            <Card className="mb-3 izquierda text-center">
              <Card.Body>
                <h3>Mis Intereses</h3>
                <hr />
                {/* Agrega aquí los campos para Mis Intereses */}
              </Card.Body>
            </Card>
          </Col>

          {/* Carrusels */}
        
          <Col md={6} >
            
            <IntercambiarLibro
              postedBooks={postedBooks}
              intercambiarIndex={intercambiarIndex}
              handleIntercambiarSelect={handleIntercambiarSelect}
            />
         
            {/* SEGUNDA TARJETA PARA BUSCAR LIBRO DESDE LA API */}
            {/* Botón y casilla de búsqueda */}
            <div className="mt-3">
              <h4>En busca de</h4>
              <Form onSubmit={handleSearchSubmit}>
                <Form.Group controlId="searchTitle">
                  <Form.Control
                    type="text"
                    placeholder="Escribe el título del libro"
                    value={searchTerm}
                    onChange={handleSearchChange}
                  />
                </Form.Group>
                <Button type="submit" variant="primary" className="boton-buscar">
                  Buscar
                </Button>
              </Form>
              <br />
            </div>

            <Card className="mb-3 carrusel-derecha">
              <Card.Body className="card-body-scrollable">
                {searchResults.map((book, index) => (
                  <div key={index} className="resultado-libro">
                    <div className="libro-imagen">
                      <img src={book.imageURL} alt={book.title} />
                    </div>
                    <div className="libro-detalles">
                      <h5>{book.title}</h5>
                      <p>Autor: {book.author}</p>
                      <p>Descripción: {book.description}</p>
                    </div>
                  </div>
                ))}
              </Card.Body>
            </Card>
          </Col>
          
        </Row>
      </Container>

      {/* Sección Comentarios */}

      <Container className=" mt-4">
        <Row>
          <Col className=" comunidad text-center">
            <h4>Esto es lo que opinan los miembros de la comunidad SwapBook sobre ti</h4>
          </Col>
        </Row>
      </Container>

      {/* Imágenes de los otros perfiles */}
      <Container className=" mt-4">
        <Row>
          <Col md={4} className="seguidoresd-flex justify-content-center">
            <div className="rounded-circle overflow-hidden"
              style={{
                width: '80px', // Ajusta el tamaño de la imagen
                height: '80px', // Ajusta el tamaño de la imagen
              }}>
              <img src={persona} alt="Imagen 1" className="img-fluid"
                style={{
                  width: '80px', // Ajusta el tamaño de la imagen
                  height: '80px', // Ajusta el tamaño de la imagen
                }} />
            </div>
          </Col>
          <Col md={4} className="d-flex justify-content-center">
            <div className="rounded-circle overflow-hidden">
              <img src={imagen} alt="Imagen 2" className="img-fluid"
                style={{
                  width: '80px', // Ajusta el tamaño de la imagen
                  height: '80px', // Ajusta el tamaño de la imagen
                }} />
            </div>
          </Col>
          <Col md={4} className="d-flex justify-content-center">
            <div className="rounded-circle overflow-hidden">
              <img src={usuario} alt="Imagen 3" className="img-fluid"
                style={{
                  width: '80px', // Ajusta el tamaño de la imagen
                  height: '80px', // Ajusta el tamaño de la imagen
                }} />
            </div>
          </Col>
        </Row>
      </Container>

      {/* CASILLA DE COMENTARIOS */}
      <Container className="mt-4">
        <Row className="justify-content-center">
          <Col md={6}>
            <h3 className=" mensaje text-center">Dejale un mensaje a </h3>
            <Form>
              <Form.Group controlId="comment">
                <Form.Control as="textarea" rows={3} placeholder="Escribe tu comentario aquí..." />
              </Form.Group>
              <div className="text-center">
                <Button variant="primary" className="boton-enviar">Enviar</Button>
              </div>
            </Form>
          </Col>
        </Row>
      </Container>
    </div >

  );
};

export default PerfilUsuario;