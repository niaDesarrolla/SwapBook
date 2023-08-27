
import 'bootstrap/dist/css/bootstrap.min.css';
import { Container, Form,} from 'react-bootstrap';
import {Link} from 'react-router-dom';


const InicioDeSesion=() =>{
  
  return (
    <div className="InicioDeSesion">
      
        <Container className="mt-5">
      <h2 className="text-center">Inicia sesión</h2>
      <Form>
        <Form.Group className="mb-3" controlId="nombre">
          <Form.Label>Email</Form.Label>
          <Form.Control type="text" placeholder="Ingrese su nombre" />
        </Form.Group>
        <Form.Group className="mb-3" controlId="apellido">
          <Form.Label>Contraseña</Form.Label>
          <Form.Control type="text" placeholder="Ingrese su apellido" />
        </Form.Group>
        <Link to="/buscar" className="btn btn-secondary">Enviar Formulario</Link>
      </Form>
    </Container>
    </div>

  );
}

export default InicioDeSesion;
