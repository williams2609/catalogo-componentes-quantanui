import React from 'react'
import CopyButton from '../componentes/CopyButton'

function ElementSize() {
  return (
    <div>
        <div className='doc'>
      <div className='doc-header'>
        <h1>Utilidad de Tamaños de Elementos</h1>
        <p>
          Las clases de tamaño permiten establecer dimensiones específicas para los elementos en tu aplicación, 
          ya sea en ancho o altura, usando tamaños relativos que se adaptan a diferentes resoluciones.
        </p>

        <h2>1. Ejemplos de Clases de Tamaño</h2>
        <p>
          A continuación, se muestra una tabla con ejemplos de uso de clases de tamaño:
        </p>

        <div className="color-table">
          <div className="table-row">
            <div className="table-cell"><strong>Clase</strong></div>
            <div className="table-cell">Descripción</div>
            <div className="table-cell">Ejemplo de Uso</div>
          </div>
          <div className="table-row">
            <div className="table-cell"><strong>.w-100</strong></div>
            <div className="table-cell">Ancho completo (100%)</div>
            <div className="table-cell"><code>{`<div className="w-100">Contenido a ancho completo</div>`}</code></div>
          </div>
          <div className="table-row">
            <div className="table-cell"><strong>.w-75</strong></div>
            <div className="table-cell">Ancho del 75%</div>
            <div className="table-cell"><code>{`<div className="w-75">75% de ancho</div>`}</code></div>
          </div>
          <div className="table-row">
            <div className="table-cell"><strong>.w-50</strong></div>
            <div className="table-cell">Ancho del 50%</div>
            <div className="table-cell"><code>{`<div className="w-50">50% de ancho</div>`}</code></div>
          </div>
          <div className="table-row">
            <div className="table-cell"><strong>.w-25</strong></div>
            <div className="table-cell">Ancho del 25%</div>
            <div className="table-cell"><code>{`<div className="w-25">25% de ancho</div>`}</code></div>
          </div>
          <div className="table-row">
            <div className="table-cell"><strong>.h-100</strong></div>
            <div className="table-cell">Altura completa (100%)</div>
            <div className="table-cell"><code>{`<div className="h-100">Contenido a altura completa</div>`}</code></div>
          </div>
          <div className="table-row">
            <div className="table-cell"><strong>.h-75</strong></div>
            <div className="table-cell">Altura del 75%</div>
            <div className="table-cell"><code>{`<div className="h-75">75% de altura</div>`}</code></div>
          </div>
          <div className="table-row">
            <div className="table-cell"><strong>.h-50</strong></div>
            <div className="table-cell">Altura del 50%</div>
            <div className="table-cell"><code>{`<div className="h-50">50% de altura</div>`}</code></div>
          </div>
          <div className="table-row">
            <div className="table-cell"><strong>.h-25</strong></div>
            <div className="table-cell">Altura del 25%</div>
            <div className="table-cell"><code>{`<div className="h-25">25% de altura</div>`}</code></div>
          </div>
          <div className="table-row">
            <div className="table-cell"><strong>.max-w-100</strong></div>
            <div className="table-cell">Ancho máximo (100%)</div>
            <div className="table-cell"><code>{`<div className="max-w-100">Máximo 100% de ancho</div>`}</code></div>
          </div>
          <div className="table-row">
            <div className="table-cell"><strong>.max-h-100</strong></div>
            <div className="table-cell">Altura máxima (100%)</div>
            <div className="table-cell"><code>{`<div className="max-h-100">Máximo 100% de altura</div>`}</code></div>
          </div>
        </div>

        <h2>2. Ejemplo Completo de Uso</h2>
        <CopyButton>
          {`import React from 'react';

function App() {
    return (
        <div>
            <div className="w-75 h-50 bg-primary">75% Ancho y 50% Alto</div>
            <div className="w-100 h-100 bg-success">100% Ancho y 100% Alto</div>
        </div>
    );
}`}
        </CopyButton>

        <h3>Notas Adicionales</h3>
        <p>Asegúrate de ajustar las clases de tamaño según sea necesario para que se integren con tu diseño general y estructura de la aplicación.</p>
      </div>
    </div>
    </div>
  )
}

export default ElementSize