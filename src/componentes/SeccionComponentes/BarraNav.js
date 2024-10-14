import React from 'react'
import CopyButton from '../CopyButton'
import { NavDropdown, NavLink,Navbar,CustomNav } from 'quantanui'
import '../estilos componentes/barranav.css'

function BarraNav() {
  return (
    <div className='doc'>
      <section className="doc-header">
        <h2>Uso del Componente Navbar</h2>
        <p>A continuación, se muestra Varios Componentes Navbar <strong>Navbar</strong> en tu aplicación:</p>
        <h3>Navbar Fondo Blanco</h3>
        <Navbar expand="lg" className="bg-tertiary">
                <Navbar.Brand href="#home">QuantanUi</Navbar.Brand>
                <Navbar.Toggle />
                <Navbar.Collapse>
                    <CustomNav className="me-auto bg-tertiary">
                        <NavLink href="#home">Home</NavLink>
                        <NavLink href="#link">Link</NavLink>
                        <NavDropdown title="Dropdown">
                            <NavLink href="#action/3.1">Action</NavLink>
                            <NavLink href="#action/3.2">Another action</NavLink>
                            <NavLink href="#action/3.3">Something</NavLink>
                            <hr className="dropdown-divider" />
                            <NavLink href="#action/3.4">Separated link</NavLink>
                        </NavDropdown>
                    </CustomNav>
                </Navbar.Collapse>
            </Navbar>


        <h3>Ejemplo de Uso</h3>
        <CopyButton>
        
          {`import React from 'react';
import { Navbar, NavLink, NavDropdown } from 'moduluxe'; // Asegúrate de importar correctamente

function App() {
    return (
        <Navbar expand="lg" className="bg-tertiary">
            <Navbar.Brand href="#home">react-libreria</Navbar.Brand>
            <Navbar.Toggle />
            <Navbar.Collapse>
                <CustomNav className="me-auto bg-tertiary">
                    <NavLink href="#home">Home</NavLink>
                    <NavLink href="#link">Link</NavLink>
                    <NavDropdown title="Dropdown">
                        <NavLink href="#action/3.1">Action</NavLink>
                        <NavLink href="#action/3.2">Another action</NavLink>
                        <NavLink href="#action/3.3">Something</NavLink>
                        <hr className="dropdown-divider" />
                        <NavLink href="#action/3.4">Separated link</NavLink>
                    </NavDropdown>
                </CustomNav>
            </Navbar.Collapse>
        </Navbar>
    );
}`}
        </CopyButton>
  
        <div className="navbar-demo">
          
        </div>

        <h3>Notas Adicionales</h3>
        <p>Asegúrate de ajustar las propiedades según sea necesario y personaliza los estilos para que se integren con tu diseño general.</p>
      </section>
    </div>
  )
}

export default BarraNav