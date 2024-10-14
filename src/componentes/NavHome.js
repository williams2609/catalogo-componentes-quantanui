import React from 'react'
import { CustomNav,NavLink,Navbar } from 'quantanui';

function NavHome() {
  return (
    <div>
        <Navbar expand="lg">
      <Navbar.Brand href="/" className="titulo">QuantanUi</Navbar.Brand>
          <CustomNav className="me-auto">
              <NavLink href="/">Home</NavLink>
              <NavLink href="/doc/documentacion/how-to-use">Documentacion</NavLink>
          </CustomNav>
      
  </Navbar>
    </div>
  )
}

export default NavHome