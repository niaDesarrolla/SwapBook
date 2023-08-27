import React, {useState} from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import { Container, Row, Col, Card, Carousel, Form} from 'react-bootstrap';
import logo from '../Imagenes/logo.png';
import {Link} from 'react-router-dom';
import { Button } from 'react-bootstrap';
import 'bootstrap/dist/css/bootstrap.min.css';
import retrato from '../Imagenes/retrato.jpg';
import persona from '../Imagenes/persona.jpg';
import imagen from '../Imagenes/imagen.jpg';
import usuario from '../Imagenes/usuario.jpg';
import axios from 'axios';

const PerfilUsuario = () => {

  const [intercambiarIndex, setIntercambiarIndex] = useState(0);
  const [buscarIndex, setBuscarIndex] = useState(0);
    // Funcionalidades para el boton buscar
  const [showSearchBox, setShowSearchBox] = useState(false);
  const [searchTitle, setSearchTitle] = useState('');

  const handleIntercambiarSelect = (selectedIndex) => {
    setIntercambiarIndex(selectedIndex);
  };

  const handleBuscarSelect = (selectedIndex) => {
    setBuscarIndex(selectedIndex);
  };
  
  const handleSearchClick = () => {
    setShowSearchBox(true);
  };

 // Estado para los resultados de búsqueda
 const [searchResults, setSearchResults] = useState([]);

  const handleSearchSubmit = async (event) => {
    event.preventDefault();
    try {
      const searchResults = await axios.get(`http://localhost:8085/api/ApiGoogleBooks`);
      console.log('Resultados de la búsqueda:', searchResults.data);
      setSearchResults(searchResults.data);
  } catch (error) {
    console.error('Error al buscar el libro:', error);
  }
};

  const handlePostBook = async (event) => {
    event.preventDefault();
    try {
      const response = await axios.post("http://localhost:8085/api/libros", {
        // Datos que deseas enviar al backend
      });
      console.log('Respuesta del servidor:', response.data);
      // Puedes mostrar un mensaje de éxito u otra acción
    } catch (error) {
      console.error('Error al enviar el libro:', error);
    }
  };


  // const searchBookByTitle = async (title) => {
  //   try {
  //     const response = await axios.get(`http://localhost:8085/api/ApiGoogleBooks?title=${title}`);
  //     return response.data;
  //   } catch (error) {
  //     throw error;
  //   }
  // };

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
            <h2>Nombre de Usuario</h2>
          </Col>
        </Row>
      </Container>

      <Container className="mt-4">
        <Row>
          <Col md={6}>
            <Card className="mb-3">
              <Card.Body>
                <h3>Mis Libros Favoritos</h3>
                <hr />
                {/* Agrega aquí los campos para Mis Libros Favoritos */}
              </Card.Body>
            </Card>
            <Card className="mb-3">
              <Card.Body>
                <h3>Mis Intereses</h3>
                <hr />
                {/* Agrega aquí los campos para Mis Intereses */}
              </Card.Body>
            </Card>
          </Col>

          <Col md={6}>
          <h3>Para Intercambiar</h3>
            <Card className="mb-3">
              {/* Seccion d ebúsqueda y posteo de libros */}
              <Card.Body>
                <Carousel 
                  activeIndex={intercambiarIndex}
                  onSelect={handleIntercambiarSelect}
                  nextIcon={<span className="carousel-control-next-icon" />}
                  prevIcon={<span className="carousel-control-prev-icon" />}
                >
                     {searchResults.map((result, index) => (
                    <Carousel.Item key={index}>
                      {/* Renderizar el contenido de cada resultado de búsqueda */}
                      <h4>{result.title}</h4>
                      {/* ... otros detalles */}
                      <img src={result.image} alt={result.title} />
                    {/* Contenido del primer carrusel */}
              
                  </Carousel.Item>
                ))}
                </Carousel>
              </Card.Body>
            
            </Card>
            <Button variant="primary" onClick={handlePostBook}>
                    Postea tu libro
            </Button>

            <h3>En Busca De</h3>
            <Card className="mb-3">
              <Card.Body>
                <Carousel
                   activeIndex={buscarIndex}
                   onSelect={handleBuscarSelect}
                   nextIcon={<span className="carousel-control-next-icon" />}
                   prevIcon={<span className="carousel-control-prev-icon" />}
                 > 
                  <Carousel.Item>
                    {/* Contenido del primer carrusel */}
                  </Carousel.Item>
                  <Carousel.Item>
                    {/* Contenido del segundo carrusel */}
                  </Carousel.Item>
                  {/* Agrega más elementos Carousel.Item según sea necesario */}
                </Carousel>
              
              </Card.Body>
           
            </Card>
            {showSearchBox ? (
            <Form onSubmit={handleSearchSubmit} className="mt-3">
              <Form.Group controlId="searchTitle" >
                <Form.Control
                  type="text"
                  placeholder="Escribe el título del libro"
                  value={searchTitle}
                  onChange={(e) => setSearchTitle(e.target.value)}
                />
              </Form.Group>
              {/* Este boton dispara el evento onsubmit del formulario que llama a handleSearchSubmit */}
              <Button type="submit" variant="primary">
                Buscar
              </Button>
            </Form>
          ) : (
            // Se activa cuando se abre la barra de busqueda y envia la info al back
            <Button variant="primary" onClick={handleSearchClick}>
              Buscar
            </Button>
          )}
          </Col>
        </Row>
      </Container>

      <Container className="mt-4">
        <Row>
          <Col className="text-center">
            <p>Esto es lo que opinan los miembros de la comunidad SwapBook sobre Anahis</p>
          </Col>
        </Row>
      </Container>

{/* Imágenes de los otros perfiles */}
<Container className="mt-4">
        <Row>
          <Col md={4} className="d-flex justify-content-center">
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
                  }}/>
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

       {/* Casilla para ingresar comentario */}
       {/* Casilla para ingresar comentario */}
       <Container className="mt-4">
        <Row className="justify-content-center">
          <Col md={6}>
          <h3 className="text-center">Deja un mensaje a Anahi</h3>
            <Form>
              <Form.Group controlId="comment">
                <Form.Control as="textarea" rows={3} placeholder="Escribe tu comentario aquí..." />
              </Form.Group>
              <div className="text-center">
                <Button variant="primary">Enviar</Button>
              </div>
            </Form>
          </Col>
        </Row>
      </Container>
      </div>

  );
};

export default PerfilUsuario;