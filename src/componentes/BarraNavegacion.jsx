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
          <NavLink href="https://github.com/williams2609/catalogo-componentes-quantanui"><i class="bi bi-github"></i></NavLink>
         
  </Navbar>
  
  </div>

    );
};



export default BarraNavegacion