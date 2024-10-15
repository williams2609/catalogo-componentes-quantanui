import React from 'react'
import CopyButton from '../componentes/CopyButton'

function Alert() {
  return (
    <div className="doc">
  <div className="doc-header">
    <h1>Utilidad de Alertas</h1>
    <p>
      Las clases de alertas permiten crear mensajes visuales que destacan 
      información importante como éxitos, errores, advertencias e información adicional. 
      Se utilizan para captar la atención del usuario y mostrar mensajes relevantes.
    </p>

    <h2>1. Ejemplos de Clases de Alertas</h2>
    <p>
      A continuación se muestra una tabla con ejemplos de uso de las clases de alertas:
    </p>

    <div className="fondo-table">
      <div className="table-row">
        <div className="table-cell"><strong>Clase</strong></div>
        <div className="table-cell">Descripción</div>
        <div className="table-cell">Código</div>
        <div className="table-cell">Ejemplo</div>
      </div>

      <div className="table-row">
        <div className="table-cell"><strong>.alert</strong></div>
        <div className="table-cell">Clase base para todas las alertas.</div>
        <div className="table-cell">
          <code>{`<div class="alert">Mensaje</div>`}</code>
        </div>
        <div className="table-cell">
          <div className="alert" style={{ backgroundColor: '#f8f9fa', padding: '1rem' }}>
            Mensaje de alerta
          </div>
        </div>
      </div>

      <div className="table-row">
        <div className="table-cell"><strong>.alert-success</strong></div>
        <div className="table-cell">Para alertas de éxito.</div>
        <div className="table-cell">
          <code>{`<div class="alert alert-success">Éxito</div>`}</code>
        </div>
        <div className="table-cell">
          <div className="alert alert-success" style={{ padding: '1rem' }}>
            ¡Éxito! Operación realizada correctamente.
          </div>
        </div>
      </div>

      <div className="table-row">
        <div className="table-cell"><strong>.alert-danger</strong></div>
        <div className="table-cell">Para alertas de error o peligro.</div>
        <div className="table-cell">
          <code>{`<div class="alert alert-danger">Error</div>`}</code>
        </div>
        <div className="table-cell">
          <div className="alert alert-danger" style={{ padding: '1rem' }}>
            ¡Error! Algo salió mal.
          </div>
        </div>
      </div>

      <div className="table-row">
        <div className="table-cell"><strong>.alert-warning</strong></div>
        <div className="table-cell">Para alertas de advertencia.</div>
        <div className="table-cell">
          <code>{`<div class="alert alert-warning">Advertencia</div>`}</code>
        </div>
        <div className="table-cell">
          <div className="alert-warning" style={{ padding: '1rem' }}>
            ¡Advertencia! Revisa esta información.
          </div>
        </div>
      </div>

      <div className="table-row">
        <div className="table-cell"><strong>.alert-info</strong></div>
        <div className="table-cell">Para alertas informativas.</div>
        <div className="table-cell">
          <code>{`<div class="alert alert-info">Información</div>`}</code>
        </div>
        <div className="table-cell">
          <div className="alert-info" style={{ padding: '1rem' }}>
            Información importante para el usuario.
          </div>
        </div>
      </div>

      <div className="table-row">
        <div className="table-cell"><strong>.alert-light</strong></div>
        <div className="table-cell">Para alertas ligeras con fondo claro.</div>
        <div className="table-cell">
          <code>{`<div class="alert alert-light">Alerta ligera</div>`}</code>
        </div>
        <div className="table-cell">
          <div className="alert-light" style={{ padding: '1rem',}}>
            Mensaje ligero
          </div>
        </div>
      </div>

      <div className="table-row">
        <div className="table-cell"><strong>.alert-dark</strong></div>
        <div className="table-cell">Para alertas con un fondo oscuro.</div>
        <div className="table-cell">
          <code>{`<div class="alert alert-dark">Alerta oscura</div>`}</code>
        </div>
        <div className="table-cell">
          <div className="alert alert-dark" style={{ padding: '1rem', backgroundColor: '#d6d8d9' }}>
            Mensaje oscuro
          </div>
        </div>
      </div>
    </div>

    <h2>2. Ejemplo Completo de Uso</h2>
    <CopyButton>
      {`import React from 'react';

function AlertExample() {
  return (
    <>
      <div className="alert alert-success">
        ¡Éxito! Operación realizada correctamente.
      </div>
      <div className="alert alert-danger">
        ¡Error! Algo salió mal.
      </div>
      <div className="alert alert-warning">
        ¡Advertencia! Revisa esta información.
      </div>
      <div className="alert alert-info">
        Información importante para el usuario.
      </div>
    </>
  );
}`}
    </CopyButton>

    <h3>Notas Adicionales</h3>
    <p>
      Cada alerta puede incluir un botón de cierre y puede personalizarse 
      agregando más clases o modificando sus estilos con CSS según las necesidades del diseño.
    </p>
  </div>
</div>
  )
}

export default Alert