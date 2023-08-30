import 'bootstrap/dist/css/bootstrap.min.css';
import { Link } from 'react-router-dom';
import logo from '../Imagenes/logo.png';
import { Container, Button } from 'react-bootstrap';
import React, { useState } from 'react';
import '../Styles/Buscar.css'
import '../Styles/Global.css';

const Buscar= () => {
  return (
    <div className="Buscar">
      {/* Main */}
      <div className="SwapBook text-center">
        <h1 className='titulo'>SwapBook</h1>
    </div>
      <div className="container mt-5">
        <div className="row align-items-center">
          <div className="col-md-6">
            <img src={logo} alt="Logo" className="img-fluid"  style={{ height: '300px'}}  />
          </div>

          <div className="col-md-6 d-flex flex-column align-items-center ">
            {/* Enlace a la página de búsqueda */}
            <div className="botones mb-2">
            <Link to="/BuscarLibro" className="btn btn-primary me-2">
              Quiero Buscar un libro
            </Link>
            {/* Enlace a la página de intercambio (mantén "#" si no deseas redirigir) */}
            <Link to="/LibrosRegistro" className="btn btn-secondary">
              Quiero intercambiar
            </Link>
            </div>
            <h3 className='slogan text-center mt-2'>You have a book for someone, <br /> and someone has a book for you</h3>
          </div>
        </div>
       
      </div>
    </div>
  );
}

export default Buscar;