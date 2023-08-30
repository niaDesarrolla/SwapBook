import React, { useState } from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import { Container, Row, Col, Card, Carousel, Form } from 'react-bootstrap';
import { Link } from 'react-router-dom';
import { Button } from 'react-bootstrap';
import axios from 'axios';
import '../Styles/IntercambioLibro.css'

const IntercambiarLibro = ({ postedBooks, intercambiarIndex, handleIntercambiarSelect }) => {
  
const [searchTerm, setSearchTerm] = useState('');
const [searchResults, setSearchResults] = useState([]);
const [showResults, setShowResults] = useState(false);
const [successMessage, setSuccessMessage] = useState("");


const handlePostBook = async (event) => {
    event.preventDefault();
    try {
      const response = await axios.post("http://localhost:8085/api/libros", {
        // Datos para enviar al backend
        titulo: "Titulo del libro",
        autor: "Autor del libro",
        edicion: "Edicion del libro",
        estado: "Estado del libro"
      });

      // Actualizar el estado con los datos del nuevo libro
      setSuccessMessage("Libro postado exitosamente");
      setSearchResults([...searchResults, response.data]);
      console.log('Respuesta del servidor:', response.data);

    } catch (error) {
      console.error('Error al enviar el libro:', error);
    }
  };
    // funciones para manejar el cambio en el input del buscador y el envío del formulario:
    const handleSearchChange = (event) => {
        setSearchTerm(event.target.value);
      };

    return (

        <Container>
            <div className md={6} >
              <h4>Para Intercambiar</h4>
              <Link to="/LibrosRegistro" className="boton-registro btn btn-secondary">Registra tu Libro</Link>
            </div>
            <br />

        <Card className="mb-3 carrusel-derecha">
             {/* Botón y casilla de búsqueda */}   
        <Card.Body>
          <Carousel
            activeIndex={intercambiarIndex}
            onSelect={handleIntercambiarSelect}
            nextIcon={<span className="carousel-control-next-icon" style={{ color: 'black', fontSize: '24px' }} />}
            prevIcon={<span className="carousel-control-prev-icon" style={{ color: 'black', fontSize: '24px' }} />}
          >
            
            {postedBooks.map((book, index) => (
              <Carousel.Item key={index}>
                <h4>{book.titulo}</h4>
                <p>{book.autor}</p>
                <p>{book.edicion}</p>
                <p>{book.estado}</p>
                {/* ... otros detalles */}
              </Carousel.Item>
                            ))}
                        </Carousel>
                    </Card.Body>
                </Card>
                </Container>
    )
}

export default IntercambiarLibro;