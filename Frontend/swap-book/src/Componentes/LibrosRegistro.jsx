import 'bootstrap/dist/css/bootstrap.min.css';
import { Container, Form, Button } from 'react-bootstrap';
import {Link} from 'react-router-dom';
import React, { useState } from 'react';
import axios from 'axios';

const LibrosRegistro = ({ addPostedBook }) => {
  const [titulo, setTitulo] = useState('');
  const [autor, setAutor] = useState('');
  const [edicion, setEdicion] = useState('');
  const [estado, setEstado] = useState('');
  const [envioExitoso, setEnvioExitoso] = useState(false);
  const [mensajeExito, setMensajeExito] = useState('');

  //  Llamada a la función addPostedBook después de recibir la respuesta del servidor
const handleSubmit = async (event) => {
  event.preventDefault();

  //  lógica para enviar los datos al backend
  try {
    const response = await axios.post("http://localhost:8085/api/libros", {
      titulo,
      autor,
      edicion,
      estado,
    });

      setEnvioExitoso(true);
      setMensajeExito("¡Su libro ha sido cargado con éxito!");
      // Restablecer los estados de los campos del formulario

// Se restablecen los estados de los campos del formulario
      setTitulo('');
      setAutor('');
      setEdicion('');
      setEstado('');

      // Llamada a la función para agregar el libro postado al estado del componente PerfilUsuario
     addPostedBook(response.data);
      // Manejar la respuesta del backend aquí
    } catch (error) {
      console.error('Error al buscar libros:', error);
    }
  };

  return (
    <div className="Registro">
      
        <Container className="mt-5">
      <h2 className="text-center">Carga los Detalles de tu Libro</h2>
      <Form onSubmit={handleSubmit}>
        <Form.Group className="mb-3" controlId="TítuloDelLibro">
          <Form.Label>Titulo del libro</Form.Label>
          <Form.Control
           type="text"
            placeholder="Ingrese el título del libro" 
            value={titulo}
            onChange={(e) => setTitulo(e.target.value)}
            />
        </Form.Group>
        <Form.Group className="mb-3" controlId="Autor">
          <Form.Label>Autor</Form.Label>
          <Form.Control 
          type="text"
           placeholder="Ingrese el autor"
           value={autor}
           onChange={(e) => setAutor(e.target.value)} 
           />
        </Form.Group>
        <Form.Group className="mb-3" controlId="Edición">
          <Form.Label>Edición</Form.Label>
          <Form.Control
           type="text"
            placeholder="Ingrese la edición" 
            value={edicion}
            onChange={(e) => setEdicion(e.target.value)}
            />
        </Form.Group>
        <Form.Group className="mb-3" controlId="contraseña">
          <Form.Label>Estado</Form.Label>
          <Form.Control 
          type="text" 
          placeholder="¿En qué estado se encuentra el libro?"
          value={estado}
          onChange={(e) => setEstado(e.target.value)}
           />
        </Form.Group>
        <Button type="submit" className="btn btn-secondary">
            Postear libro
          </Button>
        
      </Form>
    </Container>
    </div>

  );
}

export default LibrosRegistro;
