import 'bootstrap/dist/css/bootstrap.min.css';
import { Container, Form, Button } from 'react-bootstrap';
import {Link} from 'react-router-dom';
import React, { useState } from 'react';
import axios from 'axios';


const LibrosRegistro = () => {
  const [titulo, setTitulo] = useState('');
  const [autor, setAutor] = useState('');
  const [edicion, setEdicion] = useState('');
  const [estado, setEstado] = useState('');


const handleSubmit = async (event) => {
  event.preventDefault();

  //  lógica para enviar los datos al backend
  try {
    const response = await axios.post("http://localhost:8085/api/libros", {
      params:{
      titulo,
      autor,
      edicion,
      estado
    
  }
    });

      // Manejar la respuesta del backend aquí
    } catch (error) {
      console.error('Error al buscar libros:', error);
    }
  };

  return (
    <div className="Registro">
      
        <Container className="mt-5">
      <h2 className="text-center">Carga los detalles de tu libro</h2>
      <Form>
        <Form.Group className="mb-3" controlId="Título del libro">
          <Form.Label>Titulo del libro</Form.Label>
          <Form.Control type="text" placeholder="Ingrese sel título del libro" />
        </Form.Group>
        <Form.Group className="mb-3" controlId="Autor">
          <Form.Label>Autor</Form.Label>
          <Form.Control type="text" placeholder="Ingrese el autoro" />
        </Form.Group>
        <Form.Group className="mb-3" controlId="Edición">
          <Form.Label>Edición</Form.Label>
          <Form.Control type="email" placeholder="Ingrese la edición" />
        </Form.Group>
        <Form.Group className="mb-3" controlId="contraseña">
          <Form.Label>Estado</Form.Label>
          <Form.Control type="password" placeholder="¿En qué estado se encuentra el libro?" />
        </Form.Group>
        <Link to="/buscar" className="btn btn-secondary">Postear libro</Link>
      </Form>
    </Container>
    </div>

  );
}

export default LibrosRegistro;
