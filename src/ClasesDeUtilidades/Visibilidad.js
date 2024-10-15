import React from 'react'

function Visibilidad() {
  return (
    <div className='doc'>
    <div className='doc-header'>
      <h1>Utilidad de Visibilidad</h1>
      <p>
        Las clases de visibilidad permiten controlar la presentación de elementos en la interfaz de usuario. 
        Esto incluye ocultar, mostrar, o cambiar la visibilidad de un elemento en función del contexto.
      </p>

      <h2>1. Ejemplos de Clases de Visibilidad</h2>
      <p>
        A continuación, se muestra una tabla con ejemplos de uso de las clases de visibilidad:
      </p>

      <div className="fondo-table">
        <div className="table-row">
          <div className="table-cell"><strong>Clase</strong></div>
          <div className="table-cell">Descripción</div>
          <div className="table-cell">Código</div>
          <div className="table-cell">Ejemplo</div>
        </div>
        <div className="table-row">
          <div className="table-cell"><strong>.is-hidden</strong></div>
          <div className="table-cell">Oculta el elemento</div>
          <div className="table-cell">
            <code>{`<div className="is-hidden">Este es un elemento oculto</div>`}</code>
          </div>
          <div className="table-cell">
            <div className="is-hidden" style={{display: 'none'}}>Este es un elemento oculto</div>
          </div>
        </div>
        <div className="table-row">
          <div className="table-cell"><strong>.is-visible</strong></div>
          <div className="table-cell">Asegura que el elemento sea visible</div>
          <div className="table-cell">
            <code>{`<div className="is-visible" style={{visibility: 'visible'}}>Este es un elemento visible</div>`}</code>
          </div>
          <div className="table-cell">
            <div className="is-visible" style={{visibility: 'visible'}}>Este es un elemento visible</div>
          </div>
        </div>
        <div className="table-row">
          <div className="table-cell"><strong>.is-invisible</strong></div>
          <div className="table-cell">Oculta el elemento pero ocupa espacio</div>
          <div className="table-cell">
            <code>{`<div className="is-invisible" style={{visibility: 'hidden'}}>Este es un elemento invisible</div>`}</code>
          </div>
          <div className="table-cell">
            <div className="is-invisible" style={{visibility: 'hidden'}}>Este es un elemento invisible</div>
          </div>
        </div>
        <div className="table-row">
          <div className="table-cell"><strong>.is-fade</strong></div>
          <div className="table-cell">Oculta el elemento con efecto de desvanecimiento</div>
          <div className="table-cell">
            <code>{`<div className="is-fade" style={{opacity: 0}}>Este es un elemento desvanecido</div>`}</code>
          </div>
          <div className="table-cell">
            <div className="is-fade" style={{opacity: 0}}>Este es un elemento desvanecido</div>
          </div>
        </div>
        <div className="table-row">
          <div className="table-cell"><strong>.is-show</strong></div>
          <div className="table-cell">Muestra el elemento con efecto de desvanecimiento</div>
          <div className="table-cell">
            <code>{`<div className="is-show" style={{opacity: 1}}>Este es un elemento visible</div>`}</code>
          </div>
          <div className="table-cell">
            <div className="is-show" style={{opacity: 1}}>Este es un elemento visible</div>
          </div>
        </div>
      </div>
    </div>
  </div>
  )
}

export default Visibilidad