import React from 'react';
import { NavDropdown,CustomNav,NavLink} from 'quantanui';
import { Navbar } from 'quantanui';
import '../estilos/Navbar.css'

const BarraNavegacion = () => {

    return (
    <div className='contenedor-nav'>
    <Navbar expand="lg">
      <Navbar.Brand href="/" className="titulo">QuantanUi</Navbar.Brand>
          <CustomNav className="me-auto">
              <NavLink href="/">Home</NavLink>
              <NavLink href="/doc/documentacion/how-to-use">Documentacion</NavLink>
          </CustomNav>
      
  </Navbar>
  
  </div>

    );
};



export default BarraNavegacion