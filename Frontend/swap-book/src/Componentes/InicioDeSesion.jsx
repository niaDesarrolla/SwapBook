
import 'bootstrap/dist/css/bootstrap.min.css';
import { Container, Form, } from 'react-bootstrap';
import { Link, useHistory } from 'react-router-dom';
import React, { useState } from 'react';
import '../Styles/Global.css';

const InicioDeSesion = () => {

  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  // const [registroExitoso, setRegistroExitoso] = useState(false);

  const handleSubmit = async (e) => {
    e.preventDefault();

    // Realizar la petición GET al backend para verificar las credenciales
    try {
     
      // const response = await fetch(`/api/verificar-credenciales?email=${email}&password=${password}`);
      // const data = await response.json();

      // Si la respuesta indica éxito
      // if (data.mensaje === 'Usuario creado con éxito') {
      //   setRegistroExitoso(true);
      //    // Resetear los campos después de un registro exitoso
      //    setEmail('');
      //    setPassword('');
       
      
      // }
    
    } catch (error) {
      console.error('Error al verificar credenciales:', error);
    }
  };



  return (
    <div className="InicioDeSesion">
      <Container className="mt-5">
        <h2 className="text-center">Inicia sesión</h2>

        <Form onSubmit={handleSubmit}>
          <Form.Group className="mb-3" controlId="nombre">
            <Form.Label>Email</Form.Label>
            <Form.Control
              type="text"
              placeholder="Ingrese su nombre"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
            />
          </Form.Group>
          <Form.Group className="mb-3" controlId="contraseña">
            <Form.Label>Contraseña</Form.Label>
            <Form.Control
              type="text"
              placeholder="Ingrese su apellido"
              value={password}
              onChange={(e) => setPassword(e.target.value)} />
          </Form.Group>
          <button type="submit" className="btn btn-secondary">Enviar Formulario
          </button>
        </Form>

        {/* {registroExitoso && (
      <div className="alert alert-success" role="alert">
        Su registro ha sido exitoso
      </div>
        )} */}
      </Container>
    </div>
  );
}

export default InicioDeSesion;
