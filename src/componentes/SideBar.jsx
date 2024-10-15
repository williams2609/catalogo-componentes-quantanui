import { NavDropdown, NavLink } from 'quantanui'
import React, { useState } from 'react'
import '../estilos/sidebar.css'


function SideBar() {
    const [isOpen,setIsOpen]= useState(false);

const handleButton =()=>{
 setIsOpen(!isOpen)   
}

const [isDropdownOpen, setIsDropdownOpen] = useState(true); // Inicialmente abierto

const toggleDropdown = () => {
    setIsDropdownOpen(!isDropdownOpen);
};
  return (
    <div>

        <div className={`boton-sidebar ${!isOpen && 'open bg-transparent'}`}>
            <i className={`bi ${isOpen ? "bi-x-lg closed":"bi-list"}`} style={{cursor:"pointer"}} onClick={handleButton}></i>
            </div>

        <aside className={`sidebar ${isOpen ? 'open' : 'closed'}`}>
        <NavDropdown title="Documentacion" isOpen={isDropdownOpen} toggleDropdown={toggleDropdown}>
            <NavLink href="/doc/documentacion/how-to-use">Como usar </NavLink>
                <NavLink href="/doc/documentacion/why-use" >Porqué Moduluxe?</NavLink>
                <NavLink href="/doc/documentacion/personalizacion" >Personalización</NavLink>
           </NavDropdown>
            <NavDropdown title="Componentes">
            <NavLink href="/doc/componentes/navbar" >Navbars</NavLink>
            </NavDropdown>
            <NavDropdown title="Colaboración">
                <NavLink href="/doc/colaboracion/colaborar">Como Colaborar</NavLink>
            </NavDropdown>
            <NavDropdown title="Clases" mb-4>
                <NavLink href="/doc/clases/backgroundGd">Background-Gradient</NavLink>
                <NavLink href="/doc/clases/bgColor">Background-Color</NavLink>
                <NavLink href="/doc/clases/flexBox">FlexBox</NavLink>
                <NavLink href="/doc/clases/tablas">Tablas</NavLink>
                <NavLink href="/doc/clases/responsive">Responsive</NavLink>
                <NavLink href="/doc/clases/elementSize">Tamaños de Elementos</NavLink>
                <NavLink href="/doc/clases/borderRadius">Bordes Redondeados</NavLink>
                <NavLink href="/doc/clases/BoxShadow">Sombras de Caja</NavLink>
                <NavLink href="/doc/clases/estados">Estados</NavLink>
                <NavLink href="/doc/clases/visibilidad">Visibilidad</NavLink>
                <NavLink href="/doc/clases/animaciones">Animaciones</NavLink>
                <NavLink href="/doc/clases/botones">Botones</NavLink>
                <NavLink href="/doc/clases/cards">Cartas</NavLink>
                <NavLink href="/doc/clases/alert">Alert</NavLink>
                <NavLink href="/doc/clases/tooltips">Tooltips</NavLink>
                <NavLink href="/doc/clases/form">Form Controls</NavLink>
                <NavLink href="/doc/clases/validacionForm">Validacion Formulario</NavLink>
                <NavLink href="/doc/clases/texto-labels-form">Texto y Etiquetas Formularios</NavLink>
                <NavLink href="/doc/clases/grillas">Sistema de Grillas</NavLink>
                <NavLink href="/doc/clases/carrousel">Carrousel</NavLink>
                <NavLink href="/doc/clases/acordion">Accordión</NavLink>
                <NavLink href="/doc/clases/img-y-videos">Imagenes y Videos</NavLink>
                <NavLink href="/doc/clases/breadCrums">BreadCrumbs</NavLink>
                <NavLink href="/doc/clases/notificaciones">Notificaciones</NavLink>
                <NavLink href="/doc/clases/temas-fondo">Temas de Fondo</NavLink>
                <NavLink href="/doc/clases/Dropdown">Dropdown</NavLink>
                
              
            </NavDropdown>
        </aside>
  </div>

  )
}

export default SideBar