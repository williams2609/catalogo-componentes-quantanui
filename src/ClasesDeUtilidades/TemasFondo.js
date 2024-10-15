import React from 'react'
import CopyButton from '../componentes/CopyButton'

function TemasFondo() {
  return (
    <div className="doc">
    <div className="doc-header">
      <h1>Cambio de Tema</h1>
      <p>
        Las clases para alternar entre modos claro y oscuro permiten personalizar la apariencia de tu 
        aplicación. Esto mejora la experiencia del usuario y ofrece opciones de visualización según sus 
        preferencias.
      </p>

      <h2>1. Ejemplo de Clases de Temas</h2>
      <p>
        A continuación se presentan ejemplos de cómo utilizar las clases para el cambio de tema:
      </p>

      <div className="fondo-table">
        <div className="table-row">
          <div className="table-cell"><strong>Clase</strong></div>
          <div className="table-cell">Descripción</div>
          <div className="table-cell">Código</div>
          <div className="table-cell">Ejemplo</div>
        </div>

        <div className="table-row">
          <div className="table-cell"><strong>.theme-light</strong></div>
          <div className="table-cell">Clase para el tema claro.</div>
          <div className="table-cell">
            <code>{`<div className="theme-light">Contenido en tema claro</div>`}</code>
          </div>
          <div className="table-cell">
            <div className="theme-light" style={{ padding: '1rem', backgroundColor: '#ffffff', color: '#000000' }}>
              Este es un ejemplo de contenido en tema claro.
            </div>
          </div>
        </div>

        <div className="table-row">
          <div className="table-cell"><strong>.theme-dark</strong></div>
          <div className="table-cell">Clase para el tema oscuro.</div>
          <div className="table-cell">
            <code>{`<div className="theme-dark">Contenido en tema oscuro</div>`}</code>
          </div>
          <div className="table-cell">
            <div className="theme-dark" style={{ padding: '1rem', backgroundColor: '#343a40', color: '#ffffff' }}>
              Este es un ejemplo de contenido en tema oscuro.
            </div>
          </div>
        </div>
      </div>

      <h2>2. Ejemplo Completo de Uso</h2>
      <CopyButton>
        {`import React, { useState } from 'react';

function ThemeToggleExample() {
const [isDark, setIsDark] = useState(false);

const toggleTheme = () => {
  setIsDark(!isDark);
};

return (
  <div className={isDark ? 'theme-dark' : 'theme-light'} style={{ padding: '1rem' }}>
    <button onClick={toggleTheme} className="btn btn-primary">
      Cambiar a {isDark ? 'Tema Claro' : 'Tema Oscuro'}
    </button>
    <p>
      Este es un ejemplo de contenido que cambia de tema según la selección del usuario.
    </p>
  </div>
);
}`}
      </CopyButton>

      <h3>Notas Adicionales</h3>
      <p>
        El cambio de tema puede implementarse a nivel global o local en componentes específicos. Asegúrate 
        de que el contraste y la legibilidad sean óptimos para una mejor experiencia de usuario.
      </p>
    </div>
  </div>
  )
}

export default TemasFondo