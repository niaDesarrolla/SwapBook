//import React, {useRef} from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import {Link} from 'react-router-dom';
import logo from '../Imagenes/logo.png';
import NavBar from '../Componentes/NavBar';
import '../Styles/Global.css';


const Home=()=> {
  return (

    <div className="Home">
      <NavBar/>

    {/* Main */}
    <div className="container mt-5">
    <div className="row">
      <div className="col-md-6">
        <img src={logo} alt="Logo" className="img-fluid" />
      </div>
    </div>
    <div className="row mt-3">
      <div className="col-md-12 text-center">
        <h2>Ve a la casilla de email y verifica tu correo electrónico</h2>
      </div>
    </div>
  </div>
  </div>
  

  );
}


export default Home;