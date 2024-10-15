import React from 'react'
import CopyButton from '../componentes/CopyButton'

function BoxShadow() {
  return (
    <div className='doc'>
    <div className='doc-header'>
      <h1>Utilidad de Sombras de Caja</h1>
      <p>
        Las clases de sombras de caja permiten agregar efectos de sombra a los elementos, 
        proporcionando profundidad y enfoque visual. Puedes utilizar diferentes intensidades 
        de sombras según sea necesario para mejorar el diseño de tu interfaz.
      </p>

      <h2>1. Ejemplos de Clases de Sombras de Caja</h2>
      <p>
        A continuación, se muestra una tabla con ejemplos de uso de las clases de sombra de caja:
      </p>

      <div className="fondo-table">
        <div className="table-row">
          <div className="table-cell"><strong>Clase</strong></div>
          <div className="table-cell">Descripción</div>
          <div className="table-cell">Código</div>
          <div className="table-cell">Ejemplo</div>
        </div>
        <div className="table-row">
          <div className="table-cell"><strong>.shadow-sm</strong></div>
          <div className="table-cell">Sombra pequeña</div>
          <div className="table-cell">
            <code>{`<div className="shadow-sm p-3 mb-2 bg-light">Sombra pequeña</div>`}</code>
          </div>
          <div className="table-cell">
            <div className="shadow-sm p-3 mb-2 bg-light">Sombra pequeña</div>
          </div>
        </div>
        <div className="table-row">
          <div className="table-cell"><strong>.shadow</strong></div>
          <div className="table-cell">Sombra estándar</div>
          <div className="table-cell">
            <code>{`<div className="shadow p-3 mb-2 bg-light">Sombra estándar</div>`}</code>
          </div>
          <div className="table-cell">
            <div className="shadow p-3 mb-2 bg-light">Sombra estándar</div>
          </div>
        </div>
        <div className="table-row">
          <div className="table-cell"><strong>.shadow-lg</strong></div>
          <div className="table-cell">Sombra grande</div>
          <div className="table-cell">
            <code>{`<div className="shadow-lg p-3 mb-2 bg-light">Sombra grande</div>`}</code>
          </div>
          <div className="table-cell">
            <div className="shadow-lg p-3 mb-2 bg-light">Sombra grande</div>
          </div>
        </div>
        <div className="table-row">
          <div className="table-cell"><strong>.shadow-xl</strong></div>
          <div className="table-cell">Sombra extra grande</div>
          <div className="table-cell">
            <code>{`<div className="shadow-xl p-3 mb-2 bg-light">Sombra extra grande</div>`}</code>
          </div>
          <div className="table-cell">
            <div className="shadow-xl p-3 mb-2 bg-light">Sombra extra grande</div>
          </div>
        </div>
        <div className="table-row">
          <div className="table-cell"><strong>.shadow-2xl</strong></div>
          <div className="table-cell">Sombra 2x</div>
          <div className="table-cell">
            <code>{`<div className="shadow-2xl p-3 mb-2 bg-light">Sombra 2x</div>`}</code>
          </div>
          <div className="table-cell">
            <div className="shadow-2xl p-3 mb-2 bg-light">Sombra 2x</div>
          </div>
        </div>
        <div className="table-row">
          <div className="table-cell"><strong>.shadow-focus</strong></div>
          <div className="table-cell">Sombra de enfoque</div>
          <div className="table-cell">
            <code>{`<div className="shadow-focus p-3 mb-2 bg-light">Sombra de enfoque</div>`}</code>
          </div>
          <div className="table-cell">
            <div className="shadow-focus p-3 mb-2 bg-light">Sombra de enfoque</div>
          </div>
        </div>
        <div className="table-row">
          <div className="table-cell"><strong>.shadow-hover</strong></div>
          <div className="table-cell">Sombra al pasar el cursor</div>
          <div className="table-cell">
            <code>{`<div className="shadow-hover p-3 mb-2 bg-light">Sombra al pasar el cursor</div>`}</code>
          </div>
          <div className="table-cell">
            <div className="shadow-hover p-3 mb-2 bg-light">Sombra al pasar el cursor</div>
          </div>
        </div>
        <div className="table-row">
          <div className="table-cell"><strong>.shadow-right</strong></div>
          <div className="table-cell">Sombra a la derecha</div>
          <div className="table-cell">
            <code>{`<div className="shadow-right p-3 mb-2 bg-light">Sombra a la derecha</div>`}</code>
          </div>
          <div className="table-cell">
            <div className="shadow-right p-3 mb-2 bg-light">Sombra a la derecha</div>
          </div>
        </div>
        <div className="table-row">
          <div className="table-cell"><strong>.shadow-left</strong></div>
          <div className="table-cell">Sombra a la izquierda</div>
          <div className="table-cell">
            <code>{`<div className="shadow-left p-3 mb-2 bg-light">Sombra a la izquierda</div>`}</code>
          </div>
          <div className="table-cell">
            <div className="shadow-left p-3 mb-2 bg-light">Sombra a la izquierda</div>
          </div>
        </div>
        <div className="table-row">
          <div className="table-cell"><strong>.shadow-top</strong></div>
          <div className="table-cell">Sombra arriba</div>
          <div className="table-cell">
            <code>{`<div className="shadow-top p-3 mb-2 bg-light">Sombra arriba</div>`}</code>
          </div>
          <div className="table-cell">
            <div className="shadow-top p-3 mb-2 bg-light">Sombra arriba</div>
          </div>
        </div>
        <div className="table-row">
          <div className="table-cell"><strong>.shadow-bottom</strong></div>
          <div className="table-cell">Sombra abajo</div>
          <div className="table-cell">
            <code>{`<div className="shadow-bottom p-3 mb-2 bg-light">Sombra abajo</div>`}</code>
          </div>
          <div className="table-cell">
            <div className="shadow-bottom p-3 mb-2 bg-light">Sombra abajo</div>
          </div>
        </div>
        <div className="table-row">
          <div className="table-cell"><strong>.shadow-soft</strong></div>
          <div className="table-cell">Sombra difusa</div>
          <div className="table-cell">
            <code>{`<div className="shadow-soft p-3 mb-2 bg-light">Sombra difusa</div>`}</code>
          </div>
          <div className="table-cell">
            <div className="shadow-soft p-3 mb-2 bg-light">Sombra difusa</div>
          </div>
        </div>
        <div className="table-row">
          <div className="table-cell"><strong>.shadow-red</strong></div>
          <div className="table-cell">Sombra roja</div>
          <div className="table-cell">
            <code>{`<div className="shadow-red p-3 mb-2 bg-light">Sombra roja</div>`}</code>
          </div>
          <div className="table-cell">
            <div className="shadow-red p-3 mb-2 bg-light">Sombra roja</div>
          </div>
        </div>
        <div className="table-row">
          <div className="table-cell"><strong>.shadow-green</strong></div>
          <div className="table-cell">Sombra verde</div>
          <div className="table-cell">
            <code>{`<div className="shadow-green p-3 mb-2 bg-light">Sombra verde</div>`}</code>
          </div>
          <div className="table-cell">
            <div className="shadow-green p-3 mb-2 bg-light">Sombra verde</div>
          </div>
        </div>
        <div className="table-row">
          <div className="table-cell"><strong>.shadow-blue</strong></div>
          <div className="table-cell">Sombra azul</div>
          <div className="table-cell">
            <code>{`<div className="shadow-blue p-3 mb-2 bg-light">Sombra azul</div>`}</code>
          </div>
          <div className="table-cell">
            <div className="shadow-blue p-3 mb-2 bg-light">Sombra azul</div>
          </div>
        </div>
        <div className="table-row">
          <div className="table-cell"><strong>.shadow-yellow</strong></div>
          <div className="table-cell">Sombra amarilla</div>
          <div className="table-cell">
            <code>{`<div className="shadow-yellow p-3 mb-2 bg-light">Sombra amarilla</div>`}</code>
          </div>
          <div className="table-cell">
            <div className="shadow-yellow p-3 mb-2 bg-light">Sombra amarilla</div>
          </div>
        </div>
        <div className="table-row">
          <div className="table-cell"><strong>.shadow-dark</strong></div>
          <div className="table-cell">Sombra oscura</div>
          <div className="table-cell">
            <code>{`<div className="shadow-dark p-3 mb-2 bg-light">Sombra oscura</div>`}</code>
          </div>
          <div className="table-cell">
            <div className="shadow-dark p-3 mb-2 bg-light">Sombra oscura</div>
          </div>
        </div>
      </div>
    </div>
  </div>
  )
}

export default BoxShadow