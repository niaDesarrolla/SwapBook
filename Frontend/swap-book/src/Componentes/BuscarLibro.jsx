import 'bootstrap/dist/css/bootstrap.min.css';
import { Container, Form, Button, Card } from 'react-bootstrap';
import React, { useState } from 'react';
import axios from 'axios';
import '../Styles/Global.css';

const BuscarLibro = () => {
  const [idOrTitulo, setIdOrTitulo] = useState('');
  const [libroEncontrado, setLibroEncontrado] = useState(null);

  const handleSubmit = async (event) => {
    event.preventDefault();

    try {
      const response = await axios.get(`http://localhost:8085/api/libros/${idOrTitulo}`);

      setLibroEncontrado(response.data);
    } catch (error) {
      console.error('Error al buscar el libro:', error);
      setLibroEncontrado(null);
    }
  };

  return (
    <Container className="mt-5">
      <h2 className="text-center">Busca un Libro por ID</h2>
      <Form onSubmit={handleSubmit}>
        <Form.Group className="mb-3" controlId="idOrTitulo">
          <Form.Label>Ingresa el ID del libro</Form.Label>
          <Form.Control
            type="text"
            placeholder="Escribe aquí"
            value={idOrTitulo}
            onChange={(e) => setIdOrTitulo(e.target.value)}
          />
        </Form.Group>
        <Button type="submit" className="btn btn-primary">
          Buscar
        </Button>
      </Form>
      {libroEncontrado && (
        <Card className="mt-3">
          <Card.Body>
            <Card.Title>Información del Libro Encontrado:</Card.Title>
            <Card.Text>ID: {libroEncontrado.id}</Card.Text>
            <Card.Text>Título: {libroEncontrado.titulo}</Card.Text>
            <Card.Text>Autor: {libroEncontrado.autor}</Card.Text>
            <Card.Text>Estado: {libroEncontrado.estado}</Card.Text>
            {/* Agrega más campos si es necesario */}
          </Card.Body>
        </Card>
      )}
    </Container>
  );
}

export default BuscarLibro;