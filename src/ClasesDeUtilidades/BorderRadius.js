import React from 'react'
import CopyButton from '../componentes/CopyButton'

function BorderRadius() {
  return (
    <div className='doc'>
    <div className='doc-header'>
      <h1>Utilidad de Bordes Redondeados</h1>
      <p>
        Las clases de borde redondeado permiten aplicar un radio específico a los bordes de los elementos,
        creando esquinas suaves y estilizadas en tu diseño.
      </p>

      <h2>1. Ejemplos de Clases de Borde Redondeado</h2>
      <p>
        A continuación, se muestra una tabla con ejemplos de uso de clases de borde redondeado:
      </p>

      <div className="color-table">
        <div className="table-row">
          <div className="table-cell"><strong>Clase</strong></div>
          <div className="table-cell">Descripción</div>
          <div className="table-cell">Ejemplo de Uso</div>
        </div>
        <div className="table-row">
          <div className="table-cell"><strong>.rounded-0</strong></div>
          <div className="table-cell">Sin bordes redondeados</div>
          <div className="table-cell"><code>{`<div className="rounded-0">Sin redondeo</div>`}</code></div>
        </div>
        <div className="table-row">
          <div className="table-cell"><strong>.rounded-1</strong></div>
          <div className="table-cell">Bordes ligeramente redondeados</div>
          <div className="table-cell"><code>{`<div className="rounded-1">Redondeado 1</div>`}</code></div>
        </div>
        <div className="table-row">
          <div className="table-cell"><strong>.rounded-2</strong></div>
          <div className="table-cell">Bordes con redondeo moderado</div>
          <div className="table-cell"><code>{`<div className="rounded-2">Redondeado 2</div>`}</code></div>
        </div>
        <div className="table-row">
          <div className="table-cell"><strong>.rounded-3</strong></div>
          <div className="table-cell">Bordes redondeados</div>
          <div className="table-cell"><code>{`<div className="rounded-3">Redondeado 3</div>`}</code></div>
        </div>
        <div className="table-row">
          <div className="table-cell"><strong>.rounded-4</strong></div>
          <div className="table-cell">Bordes redondeados bastante</div>
          <div className="table-cell"><code>{`<div className="rounded-4">Redondeado 4</div>`}</code></div>
        </div>
        <div className="table-row">
          <div className="table-cell"><strong>.rounded-5</strong></div>
          <div className="table-cell">Bordes muy redondeados</div>
          <div className="table-cell"><code>{`<div className="rounded-5">Redondeado 5</div>`}</code></div>
        </div>
        <div className="table-row">
          <div className="table-cell"><strong>.rounded-circle</strong></div>
          <div className="table-cell">Elementos en forma de círculo</div>
          <div className="table-cell"><code>{`<div className="rounded-circle">Círculo</div>`}</code></div>
        </div>
        <div className="table-row">
          <div className="table-cell"><strong>.rounded-pill</strong></div>
          <div className="table-cell">Elementos en forma de píldora</div>
          <div className="table-cell"><code>{`<div className="rounded-pill">Píldora</div>`}</code></div>
        </div>
      </div>

      <h2>2. Ejemplo Completo de Uso</h2>
      <CopyButton>
        {`import React from 'react';

function App() {
  return (
      <div>
          <div className="rounded-3 bg-primary text-white p-2">Bordes redondeados 3</div>
          <div className="rounded-pill bg-success text-white p-2">Forma de píldora</div>
          <div className="rounded-circle bg-danger text-white p-2" style={{ width: '100px', height: '100px' }}>Círculo</div>
      </div>
  );
}`}
      </CopyButton>

      <h3>Notas Adicionales</h3>
      <p>Asegúrate de ajustar las clases de borde redondeado según sea necesario para que se integren con tu diseño general y estructura de la aplicación.</p>
    </div>
  </div>
  )
}

export default BorderRadius