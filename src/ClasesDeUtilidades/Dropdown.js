import React from 'react'
import CopyButton from '../componentes/CopyButton'

function Dropdown() {
  return (
    <div className="doc">
    <div className="doc-header">
      <h1>Utilidad de Dropdowns</h1>
      <p>
        Los dropdowns permiten seleccionar una opción de una lista desplegable, 
        lo que ayuda a mantener la interfaz limpia y ordenada.
      </p>

      <h2>1. Ejemplos de Clases de Dropdowns</h2>
      <p>
        A continuación se muestra una tabla con ejemplos de uso de las clases de dropdowns:
      </p>

      <div className="fondo-table">
        <div className="table-row">
          <div className="table-cell"><strong>Clase</strong></div>
          <div className="table-cell">Descripción</div>
          <div className="table-cell">Código</div>
          <div className="table-cell">Ejemplo</div>
        </div>

        <div className="table-row">
          <div className="table-cell"><strong>.dropdown</strong></div>
          <div className="table-cell">Contenedor principal para el dropdown.</div>
          <div className="table-cell">
            <code>{`<div class="dropdown">...</div>`}</code>
          </div>
          <div className="table-cell">
            <div className="dropdown">
              <button className="dropdown-toggle">
                Dropdown
              </button>
              <div className="dropdown-menu">
                <a className="dropdown-item" >Opción 1</a>
                <a className="dropdown-item" >Opción 2</a>
                <a className="dropdown-item" >Opción 3</a>
              </div>
            </div>
          </div>
        </div>

        <div className="table-row">
          <div className="table-cell"><strong>.dropdown-toggle</strong></div>
          <div className="table-cell">Botón que activa el dropdown.</div>
          <div className="table-cell">
            <code>{`<button class="dropdown-toggle">Dropdown</button>`}</code>
          </div>
          <div className="table-cell">
            <button className="dropdown-toggle">
              Opciones
            </button>
          </div>
        </div>

        <div className="table-row">
          <div className="table-cell"><strong>.dropdown-menu</strong></div>
          <div className="table-cell">Menú desplegable que se muestra al activar el botón.</div>
          <div className="table-cell">
            <code>{`<div class="dropdown-menu">...</div>`}</code>
          </div>
          <div className="table-cell">
            <div className="dropdown-menu">
              <a className="dropdown-item" >Opción 1</a>
              <a className="dropdown-item" >Opción 2</a>
            </div>
          </div>
        </div>

        <div className="table-row">
          <div className="table-cell"><strong>.dropdown-item</strong></div>
          <div className="table-cell">Elementos dentro del menú desplegable.</div>
          <div className="table-cell">
            <code>{`<a class="dropdown-item" >Opción</a>`}</code>
          </div>
          <div className="table-cell">
            <a className="dropdown-item" >Opción 1</a>
          </div>
        </div>
      </div>

      <h2>2. Ejemplo Completo de Uso</h2>
      <CopyButton>
        {`<div class="dropdown">
<button class="dropdown-toggle">
  Opciones
</button>
<div class="dropdown-menu">
  <a class="dropdown-item" >Opción 1</a>
  <a class="dropdown-item" >Opción 2</a>
  <a class="dropdown-item" >Opción 3</a>
</div>
</div>`}
      </CopyButton>

      <h3>Notas Adicionales</h3>
      <p>
        Asegúrate de agregar la lógica necesaria para manejar la apertura y cierre 
        del dropdown, así como los atributos de accesibilidad para una mejor experiencia del usuario.
      </p>
    </div>
  </div>
  )
}

export default Dropdown