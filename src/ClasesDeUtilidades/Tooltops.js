import React from 'react'
import CopyButton from '../componentes/CopyButton'

function Tooltops() {
  return (
    <div className="doc">
      <div className="doc-header">
        <h1>Utilidad de Tooltips</h1>
        <p>
          Las clases de *tooltips* permiten mostrar mensajes emergentes cuando los usuarios 
          interactúan con un elemento. Son útiles para proporcionar descripciones o información adicional de manera sutil.
        </p>

        <h2>1. Ejemplos de Clases de Tooltips</h2>
        <p>
          A continuación se muestra una tabla con ejemplos de uso de las clases de tooltips:
        </p>

        <div className="fondo-table">
          <div className="table-row">
            <div className="table-cell"><strong>Clase</strong></div>
            <div className="table-cell">Descripción</div>
            <div className="table-cell">Código</div>
            <div className="table-cell">Ejemplo</div>
          </div>

          <div className="table-row">
            <div className="table-cell"><strong>.tooltip</strong></div>
            <div className="table-cell">Clase base para todos los tooltips.</div>
            <div className="table-cell">
              <code>{`<div class="tooltip">Elemento</div>`}</code>
            </div>
            <div className="table-cell">
              <div className="tooltip" style={{ display: 'inline-block' }}>
                Elemento con tooltip
                <span className="tooltip-text">Texto del tooltip</span>
              </div>
            </div>
          </div>

          <div className="table-row">
            <div className="table-cell"><strong>.tooltip-top</strong></div>
            <div className="table-cell">Muestra el tooltip en la parte superior del elemento.</div>
            <div className="table-cell">
              <code>{`<div class="tooltip tooltip-top">Elemento</div>`}</code>
            </div>
            <div className="table-cell">
              <div className="tooltip tooltip-top" style={{ display: 'inline-block' }}>
                Elemento con tooltip
                <span className="tooltip-text">Tooltip en la parte superior</span>
              </div>
            </div>
          </div>

          <div className="table-row">
            <div className="table-cell"><strong>.tooltip-bottom</strong></div>
            <div className="table-cell">Muestra el tooltip en la parte inferior del elemento.</div>
            <div className="table-cell">
              <code>{`<div class="tooltip tooltip-bottom">Elemento</div>`}</code>
            </div>
            <div className="table-cell">
              <div className="tooltip tooltip-bottom" style={{ display: 'inline-block' }}>
                Elemento con tooltip
                <span className="tooltip-text">Tooltip en la parte inferior</span>
              </div>
            </div>
          </div>

          <div className="table-row">
            <div className="table-cell"><strong>.tooltip-left</strong></div>
            <div className="table-cell">Muestra el tooltip a la izquierda del elemento.</div>
            <div className="table-cell">
              <code>{`<div class="tooltip tooltip-left">Elemento</div>`}</code>
            </div>
            <div className="table-cell">
              <div className="tooltip tooltip-left" style={{ display: 'inline-block' }}>
                Elemento con tooltip
                <span className="tooltip-text">Tooltip a la izquierda</span>
              </div>
            </div>
          </div>

          <div className="table-row">
            <div className="table-cell"><strong>.tooltip-right</strong></div>
            <div className="table-cell">Muestra el tooltip a la derecha del elemento.</div>
            <div className="table-cell">
              <code>{`<div class="tooltip tooltip-right">Elemento</div>`}</code>
            </div>
            <div className="table-cell">
              <div className="tooltip tooltip-right" style={{ display: 'inline-block' }}>
                Elemento con tooltip
                <span className="tooltip-text">Tooltip a la derecha</span>
              </div>
            </div>
          </div>
        </div>

        <h2>2. Ejemplo Completo de Uso</h2>
        <CopyButton>
          {`import React from 'react';

function TooltipExample() {
  return (
    <div>
      <div className="tooltip tooltip-top">
        Pasa el cursor aquí
        <span className="tooltip-text">Tooltip en la parte superior</span>
      </div>
      <div className="tooltip tooltip-bottom">
        Pasa el cursor aquí
        <span className="tooltip-text">Tooltip en la parte inferior</span>
      </div>
      <div className="tooltip tooltip-left">
        Pasa el cursor aquí
        <span className="tooltip-text">Tooltip a la izquierda</span>
      </div>
      <div className="tooltip tooltip-right">
        Pasa el cursor aquí
        <span className="tooltip-text">Tooltip a la derecha</span>
      </div>
    </div>
  );
}`}
        </CopyButton>

        <h3>Notas Adicionales</h3>
        <p>
          Los tooltips pueden ser personalizados aún más ajustando las posiciones, colores y transiciones 
          para que se integren con el diseño general de tu aplicación. 
          Asegúrate de usar las clases adecuadas para las posiciones deseadas.
        </p>
      </div>
    </div>
  )
}

export default Tooltops