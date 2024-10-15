import React, { useEffect, useState } from 'react';
import {CustomNav,NavLink} from 'quantanui';
import { Navbar } from 'quantanui';
import '../estilos/Navbar.css'

const BarraNavegacion = () => {
    const [darkMode, setDarkMode] = useState(() => {
        const savedTheme = localStorage.getItem('darkMode');
        return savedTheme === 'true'; // Convertir string a boolean
      });
    
      // Función para alternar el tema y guardarlo en localStorage
      const togleDarkMode = () => {
        setDarkMode((prevMode) => {
          const newMode = !prevMode;
          localStorage.setItem('darkMode', newMode); // Guardar en localStorage
          return newMode;
        });
      };
    
      // Cambiar la clase del body según el tema
      useEffect(() => {
        if (darkMode) {
          document.body.classList.add('dark-mode');
          document.body.classList.remove('light-mode');
        } else {
          document.body.classList.add('light-mode');
          document.body.classList.remove('dark-mode');
        }
      }, [darkMode]);
    return (
    <div className='contenedor-nav'>
        
    <Navbar expand="lg" >
    <div className='d-flex flex-row w-100 text-center align-items-center container p-0'>
      <Navbar.Brand href="/" className="titulo">QuantanUi</Navbar.Brand>
          <CustomNav className="me-auto w-30">
              <NavLink href="/">Home</NavLink>
              <NavLink href="/doc/documentacion/how-to-use">Documentacion</NavLink>
              
              </CustomNav>
              <CustomNav>

                <button className='m-0 margin p-2 border-light btn-modo rounded-40 btn-light shadow-blue 'onClick={togleDarkMode}style={{backgroundImage:'url("https://plus.unsplash.com/premium_photo-1701517617983-817872cdb362?q=80&w=1332&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D")',color:"gray"}}>{darkMode ? <i class="bi bi-lightbulb"></i> :<i class="bi bi-lightbulb-fill"></i>}</button>
              
              <NavLink href="/">v 0.4.1</NavLink>
            <NavLink href="https://github.com/williams2609/catalogo-componentes-quantanui"><i class="bi bi-github" style={{fontSize:"1.4rem"}}></i></NavLink>
            </CustomNav>
          </div>
  </Navbar>
  </div>
  

    );
};



export default BarraNavegacion