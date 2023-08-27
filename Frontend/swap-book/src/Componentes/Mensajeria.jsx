import React from 'react';
import { Container, Form, Button } from 'react-bootstrap';

const Mensajeria = () => {
  return (
    <Container className="mt-5">
      <h2 className="text-center">Tu Mensajería</h2>
      <Form>
        <Form.Group className="mb-3">
          <Form.Label>Destinatario</Form.Label>
          <Form.Control type="text" placeholder="Nombre del destinatario" />
        </Form.Group>
        <Form.Group className="mb-3">
          <Form.Label>Asunto</Form.Label>
          <Form.Control type="text" placeholder="Asunto del mensaje" />
        </Form.Group>
        <Form.Group className="mb-3">
          <Form.Label>Mensaje</Form.Label>
          <Form.Control as="textarea" rows={4} placeholder="Escribe tu mensaje aquí" />
        </Form.Group>
        <div className="d-flex justify-content-end">
          <Button variant="primary" type="submit">
            Enviar Mensaje
          </Button>
        </div>
      </Form>
    </Container>
  );
};

export default Mensajeria;