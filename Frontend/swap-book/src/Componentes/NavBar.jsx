import React, { useState } from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import { NavDropdown } from 'react-bootstrap';
import { Link } from 'react-router-dom';
import logo from '../Imagenes/logo.png';
import '../Styles/NavBar.css';
import '../Styles/Global.css';

function NavBar() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };

  return (
    <nav className="navbar navbar-expand-lg navbar-light bg-white">
      <div className="container">
      <div className="d-flex justify-content-start align-items-center">
        <div className='Logo text-center mt-3'>
        
                <img
                  src={logo}
                  alt="Logo"
                  height="50" // Ajusta el tamaño aquí
                />
        <div className='TextologoNav'>
        <h6 className="text-success">SwapBook</h6>
        </div>
        </div>
        </div>
       
       
        <button
          className={`navbar-toggler ${isMenuOpen ? '' : 'collapsed'}`}
          type="button"
          onClick={toggleMenu}
        >
          {/* Ícono de menú de hamburguesa */}
          <span className="navbar-toggler-icon"></span>
        </button>
        <div className={`collapse navbar-collapse ${isMenuOpen ? 'show' : ''}`} id="navbarNav">
          <ul className="navbar-nav ms-auto">
            <NavDropdown title="Opciones" id="basic-nav-dropdown" className= "mi-menu">
              <NavDropdown.Item as={Link} to="/PerfilUsuario">
                Mi perfil
              </NavDropdown.Item>
              <NavDropdown.Item as={Link} to="/EditarContraseña">
                Cambiar contraseña
              </NavDropdown.Item>
              <NavDropdown.Item as={Link} to="/Buscar">
                Buscar un libro
              </NavDropdown.Item>
              <NavDropdown.Item as={Link} to="/Buscar">
                Intercambiar un libro
              </NavDropdown.Item>
              <NavDropdown.Item as={Link} to="/Home">
                Home
              </NavDropdown.Item>
            </NavDropdown>
          </ul>
        </div>
      </div>
    </nav>
  );
}

export default NavBar;