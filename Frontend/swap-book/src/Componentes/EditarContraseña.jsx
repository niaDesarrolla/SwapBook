
import 'bootstrap/dist/css/bootstrap.min.css';
import { Container, Form, Button} from 'react-bootstrap';
import React, { useState } from 'react';
import axios from 'axios';
import { useRef } from 'react';
import '../Styles/Global.css';

const EditarContraseña = () => {
  const [email, setEmail] = useState('');
  const [contraseña, setContraseña] = useState('');
  const formRef = useRef(null); 

const handleSubmit = async (event) => {
  event.preventDefault();

  const isProduction = process.env.NODE_ENV === 'production'
const apiUrl = isProduction
  ? process.env.REACT_APP_BACKEND_URL // URL de producción en Vercel
  : 'http://localhost:8085'; // URL local en desarrollo
  // URL local en desarrollo

  //  lógica para enviar los datos al backend
  try {
    const backendResponse = await axios.patch(`${apiUrl}/api/usuarios`, {
      email: email,
      contraseña: contraseña,
    });

    // Aquí puedes manejar la respuesta del servidor si es necesario

    // Redireccionar o mostrar un mensaje de éxito
    formRef.current.reset();
    setEmail(''); // Restablece el estado email
    setContraseña(''); // Restablece el estado contraseña
  } catch (error) {
    console.error('Error al enviar el formulario:', error);
  }
};
  
  // Recargar el formulario usando la referenci

  return (
    <div className="EditarContraseña">
      
        <Container className="mt-5">
      <h2 className="text-center">Cambia tu contraseña</h2>
      <Form onSubmit= {handleSubmit}  ref={formRef}> 
        <Form.Group className="mb-3" controlId="nombre">
          <Form.Label>Email</Form.Label>
          <Form.Control
           type="text" 
           placeholder="Ingrese su nombre"
           value={email}
          onChange={(e) => setEmail(e.target.value)}
            />
        </Form.Group>
        <Form.Group className="mb-3" controlId="apellido">
          <Form.Label>Contraseña nueva</Form.Label>
          <Form.Control 
          type="text"
           placeholder="Ingrese su acontraseña" 
           value={contraseña}
          onChange={(e) => setContraseña(e.target.value)}
           />
        </Form.Group>
        <Button type= "submit" className="btn btn-secondary">
          Cambiar Contraseña
          </Button>
      </Form>
    </Container>
    </div>

  );
}

export default EditarContraseña;
