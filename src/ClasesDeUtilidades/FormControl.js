import React from 'react'
import CopyButton from '../componentes/CopyButton'

function FormControl() {
  return (
    <div className="doc">
      <div className="doc-header">
        <h1>Utilidades de Inputs y Selects</h1>
        <p>
          Las clases de utilidad para inputs y selects permiten crear campos de 
          formulario altamente personalizables, incluyendo diferentes tamaños, 
          estilos y configuraciones para checkbox, radio buttons y grupos de entrada.
        </p>

        <h2>1. Ejemplos de Clases de Inputs y Selects</h2>
        <p>A continuación, se muestra una tabla con ejemplos de uso de las clases de formularios:</p>

        <div className="fondo-table">
          <div className="table-row">
            <div className="table-cell"><strong>Clase</strong></div>
            <div className="table-cell">Descripción</div>
            <div className="table-cell">Código</div>
            <div className="table-cell">Ejemplo</div>
          </div>

          <div className="table-row">
            <div className="table-cell"><strong>.form-control</strong></div>
            <div className="table-cell">Estilo base para inputs y selects.</div>
            <div className="table-cell">
              <code>{`<input type="text" class="form-control" placeholder="Nombre">`}</code>
            </div>
            <div className="table-cell">
              <input type="text" className="form-control" placeholder="Nombre" style={{ width: '100%' }} />
            </div>
          </div>

          <div className="table-row">
            <div className="table-cell"><strong>.form-check</strong></div>
            <div className="table-cell">Estilo para checkbox y radio buttons.</div>
            <div className="table-cell">
              <code>{`<div class="form-check"><input type="checkbox" class="form-check-input">`}</code>
            </div>
            <div className="table-cell">
              <div className="form-check">
                <input type="checkbox" className="form-check-input" id="check1" />
                <label className="form-check-label" htmlFor="check1">Opción</label>
              </div>
            </div>
          </div>

          <div className="table-row">
            <div className="table-cell"><strong>.input-group</strong></div>
            <div className="table-cell">Crea un grupo de entrada con varios elementos.</div>
            <div className="table-cell">
              <code>{`<div class="input-group"><input type="text" class="form-control">`}</code>
            </div>
            <div className="table-cell">
              <div className="input-group">
                <div className="input-group-prepend">
                  <span className="input-group-text">@</span>
                </div>
                <input type="text" className="form-control" placeholder="Usuario" />
              </div>
            </div>
          </div>

          <div className="table-row">
            <div className="table-cell"><strong>.custom-select</strong></div>
            <div className="table-cell">Select personalizado con estilo.</div>
            <div className="table-cell">
              <code>{`<select class="custom-select"><option>...</option></select>`}</code>
            </div>
            <div className="table-cell">
              <select className="custom-select">
                <option value="">Selecciona una opción</option>
                <option value="1">Opción 1</option>
                <option value="2">Opción 2</option>
              </select>
            </div>
          </div>

        </div>

        <h2>2. Ejemplo Completo de Uso</h2>
        <CopyButton>
          {`import React from 'react';

function InputExample() {
  return (
    <>
      <input type="text" className="form-control" placeholder="Nombre" />
      
      <div className="form-check">
        <input type="checkbox" className="form-check-input" id="exampleCheck1" />
        <label className="form-check-label" htmlFor="exampleCheck1">Check this</label>
      </div>

      <div className="input-group">
        <div className="input-group-prepend">
          <span className="input-group-text">@</span>
        </div>
        <input type="text" className="form-control" placeholder="Usuario" />
      </div>

      <select className="custom-select">
        <option value="">Selecciona una opción</option>
        <option value="1">Opción 1</option>
        <option value="2">Opción 2</option>
      </select>
    </>
  );
}`}
        </CopyButton>

        <h3>Notas Adicionales</h3>
        <p>
          Estas clases permiten personalizar y estructurar tus campos de formularios según las 
          necesidades del diseño. Puedes combinarlas para obtener resultados aún más detallados.
        </p>
      </div>
    </div>
  )
}

export default FormControl