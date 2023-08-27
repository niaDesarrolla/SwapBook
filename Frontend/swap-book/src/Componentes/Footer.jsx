import React from 'react';
import { Container, Row, Col } from 'react-bootstrap';
import logo from '../Imagenes/logo.png';

const Footer = () => {
  return (
    <footer className="bg-white text-center py-4">
      <Container>
        <Row>
          <Col>
            <div className="d-flex justify-content-start align-items-center">
              <div className="text-center mt-3">
                <img
                  src={logo}
                  alt="Logo"
                  height="50" // Ajusta el tamaño aquí
                />
              </div>
            </div>
          </Col>
          <Col>
            <div className="d-flex justify-content-center align-items-center">
              <p className="m-0">
                Todos los derechos reservados, sitio creado por Niafiola Cartaya 08/2023
              </p>
            </div>
          </Col>

          {/* Íconos */}
          <Col>
            <div className="d-flex justify-content-end align-items-center">
              <a
                href="https://github.com/niaDesarrolla"
                target="_blank"
                rel="noopener noreferrer"
                className="text-light d-inline ms-2"
              >
                <img
                  src={require ('../Imagenes/github.svg').default}
                  alt="GitHub"
                  height="30"
                  className="me-2"
                />
                GitHub
              </a>
              <a
                href="https://www.linkedin.com/in/niafiola-cartaya-42b073267/"
                target="_blank"
                rel="noopener noreferrer"
                className="text-light ms-2"
              >
                <img
                  src={require ('../Imagenes/linkedin.svg').default}
                  alt="linkedin"
                  height="30"
                  className="me-2"
                />
                Linkedin
              </a>
            </div>
          </Col>
          <Col>
          </Col>
        </Row>
      </Container>
    </footer>
  );
};

export default Footer;


