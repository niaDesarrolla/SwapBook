import 'bootstrap/dist/css/bootstrap.min.css';
import { Link } from 'react-router-dom';
import logo from '../Imagenes/logo.png';
import { Container, Button } from 'react-bootstrap';
import React, { useState } from 'react';

const Buscar= () => {
  return (
    <div className="Buscar">
      {/* Main */}
      <Container className="container mt-5">
        <div className="row">
          <div className="col-md-6">
            <img src={logo} alt="Logo" className="img-fluid" />
          </div>
          <div className="col-md-6 d-flex align-items-center justify-content-end">
            {/* Enlace a la página de búsqueda */}
            <Link to="/BuscarLibro" className="btn btn-primary me-2">
              Quiero Buscar un libro
            </Link>
            {/* Enlace a la página de intercambio (mantén "#" si no deseas redirigir) */}
            <Link to="/LibrosRegistro" className="btn btn-secondary">
              Quiero intercambiar
            </Link>
          </div>
        </div>
        <div className="row mt-3">
          <div className="col-md-12 text-end">
            <h2>You have a book for someone, <br /> and someone has a book for you</h2>
          </div>
        </div>
      </Container>
    </div>
  );
}

export default Buscar;