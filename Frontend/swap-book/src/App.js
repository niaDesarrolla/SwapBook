import React from 'react';
import {BrowserRouter as Router, Routes, Route, } from 'react-router-dom'
import Home from './Componentes/Home';
import InicioDeSesion from './Componentes/InicioDeSesion';
import Registro from './Componentes/Registro';
import Buscar from './Componentes/Buscar';
import NavBar from './Componentes/NavBar';
import Footer from './Componentes/Footer';
import Mensajeria from './Componentes/Mensajeria';
import PerfilUsuario from './Componentes/PerfilUsuario';
import LibrosRegistro from './Componentes/LibrosRegistro';
import EditarContraseña from './Componentes/EditarContraseña';
import BuscarLibro from './Componentes/BuscarLibro';
import IntercambiarLibro from './Componentes/IntercambiarLibro';


function App () {
  return (

    <Router>
      <NavBar/>
    
    <Routes>
    <Route path = "/" element = {<Home/>} />
    <Route path="/InicioDeSesion" element={<InicioDeSesion />} />
    <Route path="/Registro" element={<Registro />} />
    <Route path="/Buscar" element={<Buscar />} />
    <Route path="/Mensajeria" element={<Mensajeria />} />
    <Route path="/PerfilUsuario" element={<PerfilUsuario/>}/>
    <Route path="/LibrosRegistro" element={<LibrosRegistro/>}/>
    <Route path="/EditarContraseña" element={<EditarContraseña/>}/>
    <Route path="/BuscarLibro" element={<BuscarLibro/>}/>
    <Route path="/IntercambiarLibro" element={<IntercambiarLibro/>}/>
  </Routes>

    <Footer/>
  </Router>
  );

 

}

export default App;