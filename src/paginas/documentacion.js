import React from 'react'
import '../estilos/documentacion.css'

import BarraNavegacion from '../componentes/BarraNavegacion'
import CopyButton from '../componentes/CopyButton'

function documentacion() {
  return (
    <div>
    <div className="doc">
      <header className="doc-header">
        <h1>Documentación del Catálogo de Componentes</h1>
        <p>Guía completa sobre cómo instalar, usar y personalizar los componentes disponibles en nuestro catálogo.</p>
      </header>

      <section className="instalacion">
        <h2>Instalación</h2>
        <p>Para instalar la librería, ejecuta el siguiente comando en tu terminal:</p>
        <CopyButton>
          {`npm i moduluxe`}
        </CopyButton>
        <p>O si prefieres usar Yarn:</p>
        <CopyButton>
          {`yarn add moduluxe`}
        </CopyButton>
      </section>

      <section className='instalacion-css'>
        <h2>Instalar Css</h2>
        <p>Para poder usar los componentes necesitaras importar sus estilos, 
          puedes importarlos en el index.js de tu App react de esta manera:
        </p>
        <CopyButton>
          {`import 'quantanui/lib/styles.css'`}
        </CopyButton>
        <p>También puedes hacerlo usando este código en tu HTML:</p>
        <CopyButton>
          {`<link rel="stylesheet" href="https://cdn.jsdelivr.net/npm/quantanui/lib/styles.css">`}
        </CopyButton>
      </section>

      <section className="uso-basico">
        <h2>Uso Básico</h2>
        <p>Una vez instalada la librería, puedes importar y usar los componentes de la siguiente manera:</p>
        <CopyButton>
          {`import { NombreDelComponente } from 'moduluxe';

function App() {
return (
  <div>
    <NombreDelComponente />
  </div>
);
}`}
        </CopyButton>
      </section>

      <section className="componentes-disponibles">
        <h2>Componentes Disponibles</h2>
        <p>A continuación, encontrarás una lista de los componentes que puedes utilizar:</p>
        <ul>
          <li><strong>Botón</strong> - Un botón reutilizable con soporte para diferentes estilos y acciones.</li>
          <li><strong>Navbar</strong> - Una barra de navegación que se puede personalizar completamente.</li>
          <li><strong>Modal</strong> - Un modal emergente fácil de configurar.</li>
        </ul>
      </section>

      <section className="ejemplo-completo">
        <h2>Ejemplo Completo</h2>
        <p>Aquí tienes un ejemplo más completo de cómo usar varios componentes juntos:</p>
        <CopyButton>
          {`import { Boton, Navbar, Modal } from 'nombre-de-tu-catalogo';

function App() {
return (
  <div>
    <Navbar />
    <Boton label="Haz clic aquí" />
    <Modal title="Ejemplo de Modal" content="Este es el contenido del modal." />
  </div>
);
}`}
        </CopyButton>
      </section>

      <footer className="doc-footer">
        <p>© 2024 Tu Catálogo de Componentes - <a href="mailto:info@tucatalogo.com">Contacto</a></p>
      </footer>
    </div>
  </div>
);
}


export default documentacion