import React from 'react'
import CopyButton from '../componentes/CopyButton'

function FormsLabels() {
  return (
    <div className="doc">
      <div className="doc-header">
        <h1>Utilidad de Etiquetas y Descripciones</h1>
        <p>
          Las clases de etiquetas y descripciones permiten mejorar la usabilidad de los formularios. 
          Facilitan la identificación de los campos y proporcionan información adicional sobre lo que se debe ingresar.
        </p>

        <h2>1. Ejemplos de Clases de Etiquetas y Descripciones</h2>
        <p>
          A continuación se muestra una tabla con ejemplos de uso de las clases de etiquetas y descripciones:
        </p>

        <div className="fondo-table">
          <div className="table-row">
            <div className="table-cell"><strong>Clase</strong></div>
            <div className="table-cell">Descripción</div>
            <div className="table-cell">Código</div>
            <div className="table-cell">Ejemplo</div>
          </div>

          <div className="table-row">
            <div className="table-cell"><strong>.form-label</strong></div>
            <div className="table-cell">Clase para etiquetas de formulario.</div>
            <div className="table-cell">
              <code>{`<label class="form-label">Etiqueta</label>`}</code>
            </div>
            <div className="table-cell">
              <label className="form-label">Nombre</label>
            </div>
          </div>

          <div className="table-row">
            <div className="table-cell"><strong>.form-text</strong></div>
            <div className="table-cell">Clase para textos de ayuda en formularios.</div>
            <div className="table-cell">
              <code>{`<div class="form-text">Texto de ayuda</div>`}</code>
            </div>
            <div className="table-cell">
              <div className="form-text">Este campo es obligatorio.</div>
            </div>
          </div>

          <div className="table-row">
            <div className="table-cell"><strong>.is-valid</strong></div>
            <div className="table-cell">Clase para indicar un campo válido.</div>
            <div className="table-cell">
              <code>{`<input class="form-control is-valid" />`}</code>
            </div>
            <div className="table-cell">
              <input className="form-control is-valid" placeholder="Campo válido" />
            </div>
          </div>

          <div className="table-row">
            <div className="table-cell"><strong>.is-invalid</strong></div>
            <div className="table-cell">Clase para indicar un campo inválido.</div>
            <div className="table-cell">
              <code>{`<input class="form-control is-invalid" />`}</code>
            </div>
            <div className="table-cell">
              <input className="form-control is-invalid" placeholder="Campo inválido" />
            </div>
          </div>
        </div>

        <h2>2. Ejemplo Completo de Uso</h2>
        <CopyButton>
          {`import React from 'react';

function FormExample() {
  return (
    <form>
      <div className="mb-3">
        <label htmlFor="exampleInput" className="form-label">Nombre</label>
        <input type="text" className="form-control is-valid" id="exampleInput" placeholder="Ingresa tu nombre" />
        <div className="form-text">Este campo es obligatorio.</div>
      </div>

      <div className="mb-3">
        <label htmlFor="exampleInputInvalid" className="form-label">Correo Electrónico</label>
        <input type="email" className="form-control is-invalid" id="exampleInputInvalid" placeholder="Ingresa tu correo" />
        <div className="form-text">Por favor, ingresa un correo electrónico válido.</div>
      </div>
    </form>
  );
}`}
        </CopyButton>

        <h3>Notas Adicionales</h3>
        <p>
          Asegúrate de usar estas clases para mejorar la experiencia del usuario en los formularios. 
          También puedes personalizar los estilos según las necesidades de tu diseño.
        </p>
      </div>
    </div>
  )
}

export default FormsLabels