//import React, {useRef} from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import {Link} from 'react-router-dom';
import logo from '../Imagenes/logo.png';
import React from 'react';
import '../Styles/Home.css';


const Home=()=> {
  return (

    <div className="Home">
  
    {/* Main */}
    <div className="SwapBook text-center">
        <h1 className='titulo'>SwapBook</h1>
    </div>
    <div className="container mt-5">
    <div className="row align-items-center">
      <div className="col-md-6">
        <img src={logo} alt="Logo" className="logo img-fluid" style={{ height: '300px'}} />
      </div>
     
     <div className="col-md-6 d-flex flex-column align-items-center ">
     <div className="botones mb-2">
      <Link to="/InicioDeSesion" className="btn btn-primary me-2">Iniciar sesión</Link>
      <Link to="/Registro" className="btn btn-secondary">Registrarse</Link>
      </div>
      <h3 className='slogan text-center mt-2'>You have a book for someone, <br /> 
          and someone has a book for you!</h3>
      </div>
    </div>
  
  </div>
  </div>
  

  );
}


export default Home;