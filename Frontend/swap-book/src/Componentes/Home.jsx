//import React, {useRef} from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import {Link} from 'react-router-dom';
import logo from '../Imagenes/logo.png';
import { Container } from 'react-bootstrap';
import React from 'react';
import '../Styles.css/Home.css';


const Home=()=> {
  return (

    <div className="Home">
  
    {/* Main */}
    <div className="SwapBook text-center">
        <h1>SwapBook</h1>
    </div>
    <div className="container mt-5">
    <div className="row">
      <div className="col-md-6">
        <img src={logo} alt="Logo" className="img-fluid" style={{ height: '400px'}} />
      </div>
      <div className="col-md-6 d-flex align-items-center justify-content-center">
      <Link to="/InicioDeSesion" className="btn btn-primary me-2">Iniciar sesión</Link>
      <Link to="/Registro" className="btn btn-secondary">Registrarse</Link>
      </div>
    </div>
    <div className="row mt-3">
      <div className="col-md-12 text-end">
        <h3>You have a book for someone, <br /> 
          and someone has a book for you</h3>
      </div>
    </div>
  </div>
  </div>
  

  );
}


export default Home;