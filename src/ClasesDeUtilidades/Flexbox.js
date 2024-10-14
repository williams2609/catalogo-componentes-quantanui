import React from 'react'
import CopyButton from '../componentes/CopyButton'

function Flexbox() {
  return (
    <div className='doc'>
      <div className='doc-header'>
        <h1>Utilidad de Clases Responsivas</h1>
        <p>
          Las clases responsivas permiten aplicar estilos específicos a diferentes tamaños de pantalla, asegurando que tu aplicación se vea bien en cualquier dispositivo.
        </p>

        <h2>1. Ejemplos de Clases Responsivas</h2>
        <p>
          A continuación, se muestra una tabla con ejemplos de uso de clases responsivas:
        </p>

        <div className="responsive-table">
          <div className="table-row">
            <div className="table-cell"><strong>Clase</strong></div>
            <div className="table-cell">Descripción</div>
            <div className="table-cell">Ejemplo de Uso</div>
          </div>
          <div className="table-row">
            <div className="table-cell"><strong>.mb-3</strong></div>
            <div className="table-cell">Margen inferior de 3 unidades</div>
            <div className="table-cell"><code>{`<div className="mb-3">Contenido</div>`}</code></div>
          </div>
          <div className="table-row">
            <div className="table-cell"><strong>.mb-md-5</strong></div>
            <div className="table-cell">Margen inferior de 5 unidades en pantallas medianas</div>
            <div className="table-cell"><code>{`<div className="mb-md-5">Contenido</div>`}</code></div>
          </div>
          <div className="table-row">
            <div className="table-cell"><strong>.p-2</strong></div>
            <div className="table-cell">Relleno de 2 unidades</div>
            <div className="table-cell"><code>{`<div className="p-2">Contenido</div>`}</code></div>
          </div>
          <div className="table-row">
            <div className="table-cell"><strong>.text-left</strong></div>
            <div className="table-cell">Texto alineado a la izquierda</div>
            <div className="table-cell"><code>{`<div className="text-left">Texto</div>`}</code></div>
          </div>
          <div className="table-row">
            <div className="table-cell"><strong>.w-50</strong></div>
            <div className="table-cell">Ancho del 50%</div>
            <div className="table-cell"><code>{`<div className="w-50">Contenido</div>`}</code></div>
          </div>
          <div className="table-row">
            <div className="table-cell"><strong>.d-none</strong></div>
            <div className="table-cell">Oculta el elemento</div>
            <div className="table-cell"><code>{`<div className="d-none">Contenido</div>`}</code></div>
          </div>
          <div className="table-row">
            <div className="table-cell"><strong>.d-block</strong></div>
            <div className="table-cell">Muestra el elemento como bloque</div>
            <div className="table-cell"><code>{`<div className="d-block">Contenido</div>`}</code></div>
          </div>
          <div className="table-row">
            <div className="table-cell"><strong>.text-center</strong></div>
            <div className="table-cell">Texto centrado</div>
            <div className="table-cell"><code>{`<div className="text-center">Texto</div>`}</code></div>
          </div>
        </div>

        <h2>2. Ejemplo Completo de Uso</h2>
        <CopyButton>
          {`import React from 'react';

function App() {
    return (
        <>
            <h3>Ejemplo de Clases Responsivas</h3>
            <div className="mb-3">Contenido con margen inferior de 3 unidades</div>
            <div className="mb-md-5">Contenido con margen inferior de 5 unidades en pantallas medianas</div>
            <div className="p-2">Contenido con relleno de 2 unidades</div>
            <div className="text-left">Texto alineado a la izquierda</div>
            <div className="w-50">Contenido con ancho del 50%</div>
            <div className="d-none">Este contenido está oculto</div>
            <div className="d-block">Este contenido se muestra como bloque</div>
            <div className="text-center">Texto centrado</div>
        </>
    );
}`}
        </CopyButton>

        <h3>Notas Adicionales</h3>
        <p>Asegúrate de que las clases responsivas estén correctamente definidas en tu CSS y ajusta los estilos según sea necesario para tu diseño.</p>
      </div>
    </div>
  )
}

export default Flexbox