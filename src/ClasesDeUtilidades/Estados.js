import React from 'react'

function Estados() {
  return (
    <div className='doc'>
      <div className='doc-header'>
        <h1>Utilidad de Estados</h1>
        <p>
          Las clases de estado permiten representar diferentes condiciones en diversos elementos, 
          como activación, desactivación, carga, éxito, error y más. Esto ayuda a brindar una 
          mejor experiencia de usuario y a indicar claramente el estado de interacción.
        </p>

        <h2>1. Ejemplos de Clases de Estados</h2>
        <p>
          A continuación, se muestra una tabla con ejemplos de uso de las clases de estado:
        </p>

        <div className="fondo-table">
          <div className="table-row">
            <div className="table-cell"><strong>Clase</strong></div>
            <div className="table-cell">Descripción</div>
            <div className="table-cell">Código</div>
            <div className="table-cell">Ejemplo</div>
          </div>
          <div className="table-row">
            <div className="table-cell"><strong>.is-active</strong></div>
            <div className="table-cell">Estado activo</div>
            <div className="table-cell">
              <code>{`<div className="is-active">Activo</div>`}</code>
            </div>
            <div className="table-cell">
              <div className="is-active">Activo</div>
            </div>
          </div>
          <div className="table-row">
            <div className="table-cell"><strong>.is-disabled</strong></div>
            <div className="table-cell">Estado deshabilitado</div>
            <div className="table-cell">
              <code>{`<div className="is-disabled">Deshabilitado</div>`}</code>
            </div>
            <div className="table-cell">
              <div className="is-disabled">Deshabilitado</div>
            </div>
          </div>
          <div className="table-row">
            <div className="table-cell"><strong>.is-loading</strong></div>
            <div className="table-cell">Estado cargando</div>
            <div className="table-cell">
              <code>{`<div className="is-loading">Cargando...</div>`}</code>
            </div>
            <div className="table-cell">
              <div className="is-loading"></div>
            </div>
          </div>
          <div className="table-row">
            <div className="table-cell"><strong>.is-success</strong></div>
            <div className="table-cell">Estado de éxito</div>
            <div className="table-cell">
              <code>{`<div className="is-success">Éxito</div>`}</code>
            </div>
            <div className="table-cell">
              <div className="is-success">Éxito</div>
            </div>
          </div>
          <div className="table-row">
            <div className="table-cell"><strong>.is-error</strong></div>
            <div className="table-cell">Estado de error</div>
            <div className="table-cell">
              <code>{`<div className="is-error">Error</div>`}</code>
            </div>
            <div className="table-cell">
              <div className="is-error">Error</div>
            </div>
          </div>
          <div className="table-row">
            <div className="table-cell"><strong>.is-warning</strong></div>
            <div className="table-cell">Estado de advertencia</div>
            <div className="table-cell">
              <code>{`<div className="is-warning">Advertencia</div>`}</code>
            </div>
            <div className="table-cell">
              <div className="is-warning">Advertencia</div>
            </div>
          </div>
          <div className="table-row">
            <div className="table-cell"><strong>.is-info</strong></div>
            <div className="table-cell">Estado de información</div>
            <div className="table-cell">
              <code>{`<div className="is-info">Información</div>`}</code>
            </div>
            <div className="table-cell">
              <div className="is-info">Información</div>
            </div>
          </div>
          <div className="table-row">
            <div className="table-cell"><strong>.is-hidden</strong></div>
            <div className="table-cell">Estado oculto</div>
            <div className="table-cell">
              <code>{`<div className="is-hidden" style={{display: 'none'}}>Oculto</div>`}</code>
            </div>
            <div className="table-cell">
              <div className="is-hidden" style={{display: 'none'}}>Oculto</div>
            </div>
          </div>
          <div className="table-row">
            <div className="table-cell"><strong>.is-visible</strong></div>
            <div className="table-cell">Estado visible</div>
            <div className="table-cell">
              <code>{`<div className="is-visible" style={{visibility: 'visible'}}>Visible</div>`}</code>
            </div>
            <div className="table-cell">
              <div className="is-visible" style={{visibility: 'visible'}}>Visible</div>
            </div>
          </div>
          <div className="table-row">
            <div className="table-cell"><strong>.is-invisible</strong></div>
            <div className="table-cell">Estado invisible</div>
            <div className="table-cell">
              <code>{`<div className="is-invisible" style={{visibility: 'hidden'}}>Invisible</div>`}</code>
            </div>
            <div className="table-cell">
              <div className="is-invisible" style={{visibility: 'hidden'}}>Invisible</div>
            </div>
          </div>
          <div className="table-row">
            <div className="table-cell"><strong>.is-highlighted</strong></div>
            <div className="table-cell">Estado resaltado</div>
            <div className="table-cell">
              <code>{`<div className="is-highlighted">Resaltado</div>`}</code>
            </div>
            <div className="table-cell">
              <div className="is-highlighted">Resaltado</div>
            </div>
          </div>
          <div className="table-row">
            <div className="table-cell"><strong>.is-selected</strong></div>
            <div className="table-cell">Estado seleccionado</div>
            <div className="table-cell">
              <code>{`<div className="is-selected">Seleccionado</div>`}</code>
            </div>
            <div className="table-cell">
              <div className="is-selected">Seleccionado</div>
            </div>
          </div>
          <div className="table-row">
            <div className="table-cell"><strong>.is-transitioning</strong></div>
            <div className="table-cell">Estado de transición</div>
            <div className="table-cell">
              <code>{`<div className="is-transitioning">Transición</div>`}</code>
            </div>
            <div className="table-cell">
              <div className="is-transitioning">Transición</div>
            </div>
          </div>
          <div className="table-row">
            <div className="table-cell"><strong>.is-loading-text</strong></div>
            <div className="table-cell">Estado de carga de texto</div>
            <div className="table-cell">
              <code>{`<span className="is-loading-text">Cargando...</span>`}</code>
            </div>
            <div className="table-cell">
              <span className="is-loading-text">Cargando...</span>
            </div>
          </div>
          <div className="table-row">
            <div className="table-cell"><strong>.is-error-message</strong></div>
            <div className="table-cell">Estado de mensaje de error</div>
            <div className="table-cell">
              <code>{`<span className="is-error-message">¡Error!</span>`}</code>
            </div>
            <div className="table-cell">
              <span className="is-error-message">¡Error!</span>
            </div>
          </div>
          <div className="table-row">
            <div className="table-cell"><strong>.is-success-message</strong></div>
            <div className="table-cell">Estado de mensaje de éxito</div>
            <div className="table-cell">
              <code>{`<span className="is-success-message">¡Éxito!</span>`}</code>
            </div>
            <div className="table-cell">
              <span className="is-success-message">¡Éxito!</span>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}

export default Estados