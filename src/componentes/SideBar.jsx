import { NavDropdown, NavLink } from 'quantanui'
import React, { useState } from 'react'
import '../estilos/sidebar.css'
function SideBar() {
    const [isOpen,setIsOpen]= useState(false);

const handleButton =()=>{
 setIsOpen(!isOpen)   
}

  return (
    <div>

        <div className={`boton-sidebar ${!isOpen && 'open'}`}onClick={handleButton}><i className={`bi ${isOpen ? "bi-x-lg closed":"bi-list"}`} style={{cursor:"pointer"}}></i></div>

        <aside className={`sidebar ${isOpen ? 'open' : 'closed'}`}>
            <NavDropdown title="Documentacion">
            <NavLink href="/doc/documentacion/how-to-use" >Como usar </NavLink>
                <NavLink href="/doc/documentacion/why-use" >Porqué Moduluxe?</NavLink>
                <NavLink href="/doc/documentacion/personalizacion" >Personalización</NavLink>
           </NavDropdown>
            <NavDropdown title="Componentes">
            <NavLink href="/doc/componentes/navbar" >Navbars</NavLink>
            </NavDropdown>
            <NavDropdown title="Colaboración">
                <NavLink href="/doc/colaboracion/colaborar">Como Colaborar</NavLink>
            </NavDropdown>
            <NavDropdown title="Clases">
                <NavLink href="/doc/clases/backgroundGd">Background-Gradient</NavLink>
                <NavLink href="/doc/clases/bgColor">Background-Color</NavLink>
                <NavLink href="/doc/clases/flexBox">FlexBox</NavLink>
                <NavLink href="/doc/clases/tablas">Tablas</NavLink>
                <NavLink href="/doc/clases/responsive">Responsive</NavLink>


            </NavDropdown>
        </aside>
  </div>

  )
}

export default SideBar