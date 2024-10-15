import React from 'react'
import CopyButton from '../componentes/CopyButton'

function Grillas() {
  return (
    <div className="doc">
      <div className="doc-header">
        <h1>Utilidad de Grillas</h1>
        <p>
          Las clases de grillas permiten crear diseños de layout más avanzados y flexibles utilizando CSS Grid. 
          Con estas utilidades, puedes organizar elementos de manera responsiva y estructurada.
        </p>

        <h2>1. Ejemplos de Clases de Grillas</h2>
        <p>
          A continuación se muestra una tabla con ejemplos de uso de las clases de grillas:
        </p>

        <div className="fondo-table">
          <div className="table-row">
            <div className="table-cell"><strong>Clase</strong></div>
            <div className="table-cell">Descripción</div>
            <div className="table-cell">Código</div>
            <div className="table-cell">Ejemplo</div>
          </div>

          <div className="table-row">
            <div className="table-cell"><strong>.grid</strong></div>
            <div className="table-cell">Clase base para definir un contenedor de grilla.</div>
            <div className="table-cell">
              <code>{`<div class="grid">...</div>`}</code>
            </div>
            <div className="table-cell">
              <div className="grid" style={{ gap: '1rem', padding: '1rem' }}>
                <div style={{ backgroundColor: '#f0f0f0', padding: '1rem' }}>Elemento 1</div>
                <div style={{ backgroundColor: '#d0e0f0', padding: '1rem' }}>Elemento 2</div>
                <div style={{ backgroundColor: '#f0d0d0', padding: '1rem' }}>Elemento 3</div>
              </div>
            </div>
          </div>

          <div className="table-row">
            <div className="table-cell"><strong>.grid-cols-2</strong></div>
            <div className="table-cell">Para definir 2 columnas en la grilla.</div>
            <div className="table-cell">
              <code>{`<div class="grid grid-cols-2">...</div>`}</code>
            </div>
            <div className="table-cell">
              <div className="grid grid-cols-2" style={{ gap: '1rem', padding: '1rem' }}>
                <div style={{ backgroundColor: '#f0f0f0', padding: '1rem' }}>Elemento 1</div>
                <div style={{ backgroundColor: '#d0e0f0', padding: '1rem' }}>Elemento 2</div>
                <div style={{ backgroundColor: '#f0d0d0', padding: '1rem' }}>Elemento 3</div>
                <div style={{ backgroundColor: '#f0f0f0', padding: '1rem' }}>Elemento 4</div>
              </div>
            </div>
          </div>

          <div className="table-row">
            <div className="table-cell"><strong>.grid-cols-3</strong></div>
            <div className="table-cell">Para definir 3 columnas en la grilla.</div>
            <div className="table-cell">
              <code>{`<div class="grid grid-cols-3">...</div>`}</code>
            </div>
            <div className="table-cell">
              <div className="grid grid-cols-3" style={{ gap: '1rem', padding: '1rem' }}>
                <div style={{ backgroundColor: '#f0f0f0', padding: '1rem' }}>Elemento 1</div>
                <div style={{ backgroundColor: '#d0e0f0', padding: '1rem' }}>Elemento 2</div>
                <div style={{ backgroundColor: '#f0d0d0', padding: '1rem' }}>Elemento 3</div>
                <div style={{ backgroundColor: '#f0f0f0', padding: '1rem' }}>Elemento 4</div>
                <div style={{ backgroundColor: '#d0e0f0', padding: '1rem' }}>Elemento 5</div>
                <div style={{ backgroundColor: '#f0d0d0', padding: '1rem' }}>Elemento 6</div>
              </div>
            </div>
          </div>

          <div className="table-row">
            <div className="table-cell"><strong>.gap-2</strong></div>
            <div className="table-cell">Para establecer un gap de 0.5rem entre elementos de la grilla.</div>
            <div className="table-cell">
              <code>{`<div class="grid gap-2">...</div>`}</code>
            </div>
            <div className="table-cell">
              <div className="grid gap-2" style={{ gridTemplateColumns: 'repeat(3, 1fr)', padding: '1rem' }}>
                <div style={{ backgroundColor: '#f0f0f0', padding: '1rem' }}>Elemento 1</div>
                <div style={{ backgroundColor: '#d0e0f0', padding: '1rem' }}>Elemento 2</div>
                <div style={{ backgroundColor: '#f0d0d0', padding: '1rem' }}>Elemento 3</div>
              </div>
            </div>
          </div>
        </div>

        <h2>2. Ejemplo Completo de Uso</h2>
        <CopyButton>
          {`import React from 'react';

function GridExample() {
  return (
    <div className="grid grid-cols-3 gap-4">
      <div style={{ backgroundColor: '#f0f0f0', padding: '1rem' }}>Elemento 1</div>
      <div style={{ backgroundColor: '#d0e0f0', padding: '1rem' }}>Elemento 2</div>
      <div style={{ backgroundColor: '#f0d0d0', padding: '1rem' }}>Elemento 3</div>
      <div style={{ backgroundColor: '#f0f0f0', padding: '1rem' }}>Elemento 4</div>
      <div style={{ backgroundColor: '#d0e0f0', padding: '1rem' }}>Elemento 5</div>
      <div style={{ backgroundColor: '#f0d0d0', padding: '1rem' }}>Elemento 6</div>
    </div>
  );
}`}
        </CopyButton>

        <h3>Notas Adicionales</h3>
        <p>
          Puedes personalizar el diseño de la grilla cambiando el número de columnas y el espacio entre ellas. 
          Además, es recomendable ajustar la disposición en diferentes tamaños de pantalla utilizando las clases responsivas.
        </p>
      </div>
    </div>
  )
}

export default Grillas