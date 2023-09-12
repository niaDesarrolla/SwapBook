import 'bootstrap/dist/css/bootstrap.min.css';
import { Container, Form, Button } from 'react-bootstrap';
import {Link} from 'react-router-dom';
import React, { useState } from 'react';
import axios from 'axios';
import '../Styles/Global.css';

const Registro = () => {
  const [nombre, setNombre] = useState('');
  const [apellido, setApellido] = useState('');
  const [email, setEmail] = useState('');
  const [contraseña, setContraseña] = useState('');

const handleSubmit = async (event) => {
  event.preventDefault();

  //  lógica para enviar los datos al backend
  try {
    const backendResponse = await axios.post("https://swap-book-six.vercel.app/api/usuarios", {
      nombre,
      apellido,
      email,
      contraseña,
    });

    // Aquí puedes manejar la respuesta del servidor si es necesario

       // Restablecer los estados para borrar los campos
       setNombre('');
       setApellido('');
       setEmail('');
       setContraseña('');
       
    // Redireccionar o mostrar un mensaje de éxito
  } catch (error) {
    console.error('Error al enviar el formulario:', error);
   
  }
};

return (
  <div className="Registro">
    <Container className="mt-5">
      <h2 className="text-center">Registro</h2>
      <Form onSubmit={handleSubmit}>
        <Form.Group className="mb-3" controlId="nombre">
          <Form.Label>Nombre</Form.Label>
          <Form.Control
            type="text"
            placeholder="Ingrese su nombre"
            value={nombre}
            onChange={(e) => setNombre(e.target.value)}
          />
        </Form.Group>
        <Form.Group className="mb-3" controlId="apellido">
            <Form.Label>Apellido</Form.Label>
            <Form.Control
              type="text"
              placeholder="Ingrese su apellido"
              value={apellido}
              onChange={(e) => setApellido(e.target.value)}
            />
          </Form.Group>
          <Form.Group className="mb-3" controlId="email">
            <Form.Label>Email</Form.Label>
            <Form.Control
              type="email"
              placeholder="Ingrese su email"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
            />
          </Form.Group>
          <Form.Group className="mb-3" controlId="contraseña">
            <Form.Label>Contraseña</Form.Label>
            <Form.Control
              type="password"
              placeholder="Ingrese su contraseña"
              value={contraseña}
              onChange={(e) => setContraseña(e.target.value)}
            />
          </Form.Group>
          
        
          <Button type="submit" className="btn btn-secondary">
            Enviar Formulario
          </Button>
      </Form>
    
    </Container>
  </div>
);
};

export default Registro;



