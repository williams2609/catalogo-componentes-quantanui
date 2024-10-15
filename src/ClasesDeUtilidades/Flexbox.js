import React from 'react'
import CopyButton from '../componentes/CopyButton'

function Flexbox() {
  return (
    <div className='doc'>
    <div className='doc-header'>
      <h1>Utilidad de Clases de Flexbox</h1>
      <p>
        Las clases de Flexbox permiten aplicar estilos de diseño flexibles a los componentes de tu aplicación, facilitando la alineación y distribución de los elementos en el espacio.
      </p>

      <h2>1. Ejemplos de Clases de Flexbox</h2>
      <p>
        A continuación, se muestra una tabla con ejemplos de uso de clases de Flexbox:
      </p>

      <div className="color-table">
        <div className="table-row">
          <div className="table-cell"><strong>Clase</strong></div>
          <div className="table-cell">Descripción</div>
          <div className="table-cell">Ejemplo de Uso</div>
        </div>
        <div className="table-row">
          <div className="table-cell"><strong>.d-flex</strong></div>
          <div className="table-cell">Aplicar display flex</div>
          <div className="table-cell"><code>{`<div className="d-flex">Contenido</div>`}</code></div>
        </div>
        <div className="table-row">
          <div className="table-cell"><strong>.justify-content-start</strong></div>
          <div className="table-cell">Alinear elementos al inicio</div>
          <div className="table-cell"><code>{`<div className="d-flex justify-content-start">Elemento 1</div>`}</code></div>
        </div>
        <div className="table-row">
          <div className="table-cell"><strong>.justify-content-center</strong></div>
          <div className="table-cell">Alinear elementos al centro</div>
          <div className="table-cell"><code>{`<div className="d-flex justify-content-center">Elemento 2</div>`}</code></div>
        </div>
        <div className="table-row">
          <div className="table-cell"><strong>.justify-content-end</strong></div>
          <div className="table-cell">Alinear elementos al final</div>
          <div className="table-cell"><code>{`<div className="d-flex justify-content-end">Elemento 3</div>`}</code></div>
        </div>
        <div className="table-row">
          <div className="table-cell"><strong>.align-items-start</strong></div>
          <div className="table-cell">Alinear elementos al inicio verticalmente</div>
          <div className="table-cell"><code>{`<div className="d-flex align-items-start">Elemento 4</div>`}</code></div>
        </div>
        <div className="table-row">
          <div className="table-cell"><strong>.align-items-center</strong></div>
          <div className="table-cell">Alinear elementos al centro verticalmente</div>
          <div className="table-cell"><code>{`<div className="d-flex align-items-center">Elemento 5</div>`}</code></div>
        </div>
        <div className="table-row">
          <div className="table-cell"><strong>.flex-column</strong></div>
          <div className="table-cell">Organizar elementos en columna</div>
          <div className="table-cell"><code>{`<div className="d-flex flex-column">Elemento 6</div>`}</code></div>
        </div>
        <div className="table-row">
          <div className="table-cell"><strong>.flex-row</strong></div>
          <div className="table-cell">Organizar elementos en fila</div>
          <div className="table-cell"><code>{`<div className="d-flex flex-row">Elemento 7</div>`}</code></div>
        </div>
      </div>

      <h2>2. Ejemplo Completo de Uso</h2>
      <CopyButton>
        {`import React from 'react';

function App() {
  return (
      <div className="d-flex justify-content-center align-items-center flex-column h-100">
          <div className="mb-3">Elemento 1</div>
          <div className="mb-3">Elemento 2</div>
          <div className="mb-3">Elemento 3</div>
      </div>
  );
}`}
      </CopyButton>

      <h3>Notas Adicionales</h3>
      <p>Asegúrate de que las clases de Flexbox estén correctamente definidas en tu CSS y ajusta los estilos según sea necesario para tu diseño.</p>
    </div>
  </div>
  )
}

export default Flexbox