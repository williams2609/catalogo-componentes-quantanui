import React from 'react'
import CopyButton from '../componentes/CopyButton'

function ValidacionForm() {
  return (
    <div className="doc">
      <div className="doc-header">
        <h1>Utilidad de Formularios</h1>
        <p>
          Las clases de formulario permiten crear formularios interactivos y accesibles. 
          Los formularios se pueden validar utilizando clases específicas que indican el 
          estado de los campos, mostrando si son válidos o inválidos, y proporcionando 
          mensajes de retroalimentación para el usuario.
        </p>

        <h2>1. Ejemplos de Clases de Validación de Formularios</h2>
        <p>A continuación se muestra una tabla con ejemplos de uso de las clases de validación:</p>

        <div className="fondo-table">
          <div className="table-row">
            <div className="table-cell"><strong>Clase</strong></div>
            <div className="table-cell">Descripción</div>
            <div className="table-cell">Código</div>
            <div className="table-cell">Ejemplo</div>
          </div>

          <div className="table-row">
            <div className="table-cell"><strong>.is-valid</strong></div>
            <div className="table-cell">Indica que el campo es válido.</div>
            <div className="table-cell">
              <code>{`<input type="text" class="form-control is-valid" />`}</code>
            </div>
            <div className="table-cell">
              <input type="text" className="form-control is-valid" placeholder="Campo válido" style={{ width: '100%' }} />
              <div className="valid-feedback">¡Correcto!</div>
            </div>
          </div>

          <div className="table-row">
            <div className="table-cell"><strong>.is-invalid</strong></div>
            <div className="table-cell">Indica que el campo es inválido.</div>
            <div className="table-cell">
              <code>{`<input type="text" class="form-control is-invalid" />`}</code>
            </div>
            <div className="table-cell">
              <input type="text" className="form-control is-invalid" placeholder="Campo inválido" style={{ width: '100%' }} />
              <div className="invalid-feedback">Por favor, ingrese un valor válido.</div>
            </div>
          </div>

          <div className="table-row">
            <div className="table-cell"><strong>.valid-feedback</strong></div>
            <div className="table-cell">Mensaje que aparece cuando el campo es válido.</div>
            <div className="table-cell">
              <code>{`<div class="valid-feedback">¡Correcto!</div>`}</code>
            </div>
            <div className="table-cell">
              <input type="text" className="form-control is-valid" placeholder="Campo válido" style={{ width: '100%' }} />
              <div className="valid-feedback">¡Correcto!</div>
            </div>
          </div>

          <div className="table-row">
            <div className="table-cell"><strong>.invalid-feedback</strong></div>
            <div className="table-cell">Mensaje que aparece cuando el campo es inválido.</div>
            <div className="table-cell">
              <code>{`<div class="invalid-feedback">Por favor, ingrese un valor válido.</div>`}</code>
            </div>
            <div className="table-cell">
              <input type="text" className="form-control is-invalid" placeholder="Campo inválido" style={{ width: '100%' }} />
              <div className="invalid-feedback">Por favor, ingrese un valor válido.</div>
            </div>
          </div>
        </div>

        <h2>2. Ejemplo Completo de Validación de Formularios</h2>
        <CopyButton>
          {`import React from 'react';

function FormValidationExample() {
  return (
    <form>
      <div className="mb-3">
        <label htmlFor="validationInput" className="form-label">Campo de texto válido</label>
        <input type="text" className="form-control is-valid" id="validationInput" value="Campo válido" required />
        <div className="valid-feedback">
          ¡Correcto!
        </div>
      </div>

      <div className="mb-3">
        <label htmlFor="validationInput2" className="form-label">Campo de texto inválido</label>
        <input type="text" className="form-control is-invalid" id="validationInput2" value="" required />
        <div className="invalid-feedback">
          Por favor, ingrese un valor válido.
        </div>
      </div>
    </form>
  );
}`}
        </CopyButton>

        <h3>Notas Adicionales</h3>
        <p>
          Utiliza las clases <code>.is-valid</code> y <code>.is-invalid</code> para mostrar estados de validación.
          Además, los elementos <code>.valid-feedback</code> y <code>.invalid-feedback</code> permiten añadir mensajes 
          para los usuarios. Asegúrate de incluir las clases correctamente para proporcionar una experiencia accesible 
          y visualmente clara.
        </p>
      </div>
    </div>
  )
}

export default ValidacionForm