import React from 'react'
import { useNavigate } from 'react-router-dom';
import NavHome from '../componentes/NavHome';

function Home() {
    const navigate = useNavigate()
 
  const handleDocumentationClick = () => {
    navigate('/doc/documentacion/how-to-use'); // Cambiar a la sección de documentación
  };
  return (
    <div> 
        <header className="App-header" style={{marginTop:"150px"}}>
    <h1>Bienvenido a Nuestro Catálogo de Componentes</h1>
    <p>Explora nuestros componentes reutilizables y mejora tu desarrollo.</p>
    <div className="button-container">
      
      <button className="explore-button btn btn-primary" onClick={handleDocumentationClick} >Documentación</button>
      <button className="view-components-button btn btn-secondary">Ver Información de Componentes</button>
    
    </div>
  </header>

  <section id="info-section" className="info-section">
    <h2>¿Qué son los Componentes?</h2>
    <p>
      Nuestros componentes son elementos reutilizables que facilitan el desarrollo de tus aplicaciones. 
      Cada componente está diseñado para ser flexible, fácil de usar y se adapta a tus necesidades.
    </p>
    <p>
      Explora nuestra biblioteca y descubre cómo cada componente puede ayudarte a mejorar tu flujo de trabajo y productividad.
    </p>
  </section>

  <footer className="App-footer">
    <p>Contacto: info@tucatalogo.com</p>
    <p>&copy; 2024 Tu Catálogo de Componentes</p>
  </footer>
  </div>
  )
}

export default Home