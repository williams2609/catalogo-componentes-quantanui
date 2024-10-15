import React from 'react'
import CopyButton from '../componentes/CopyButton'

function ToastNotifications() {
  return (
    <div className="doc">
      <div className="doc-header">
        <h1>Utilidad de Notificaciones (Toast)</h1>
        <p>
          Las notificaciones emergentes, o "toasts", son mensajes que aparecen brevemente en la pantalla 
          para informar al usuario sobre un evento o estado de la aplicación. Son útiles para mostrar 
          confirmaciones, advertencias o información importante sin interrumpir la experiencia del usuario.
        </p>

        <h2>1. Ejemplo de Clases de Notificaciones</h2>
        <p>
          A continuación se muestran ejemplos de cómo utilizar las clases de notificaciones:
        </p>

        <div className="fondo-table">
          <div className="table-row">
            <div className="table-cell"><strong>Clase</strong></div>
            <div className="table-cell">Descripción</div>
            <div className="table-cell">Código</div>
            <div className="table-cell">Ejemplo</div>
          </div>

          <div className="table-row">
            <div className="table-cell"><strong>.toast</strong></div>
            <div className="table-cell">Clase base para las notificaciones.</div>
            <div className="table-cell">
              <code>{`<div className="toast">Mensaje</div>`}</code>
            </div>
            <div className="table-cell">
              <div className="toast" style={{ padding: '1rem', backgroundColor: '#f8f9fa' }}>
                Mensaje de notificación
              </div>
            </div>
          </div>

          <div className="table-row">
            <div className="table-cell"><strong>.toast-header</strong></div>
            <div className="table-cell">Clase para el encabezado de la notificación.</div>
            <div className="table-cell">
              <code>{`<div className="toast-header">Encabezado</div>`}</code>
            </div>
            <div className="table-cell">
              <div className="toast" style={{ padding: '1rem', backgroundColor: '#f8f9fa' }}>
                <div className="toast-header">Encabezado de Notificación</div>
              </div>
            </div>
          </div>

          <div className="table-row">
            <div className="table-cell"><strong>.toast-body</strong></div>
            <div className="table-cell">Clase para el cuerpo de la notificación.</div>
            <div className="table-cell">
              <code>{`<div className="toast-body">Cuerpo del mensaje.</div>`}</code>
            </div>
            <div className="table-cell">
              <div className="toast" style={{ padding: '1rem', backgroundColor: '#f8f9fa' }}>
                <div className="toast-header">Encabezado de Notificación</div>
                <div className="toast-body">Cuerpo del mensaje de notificación.</div>
              </div>
            </div>
          </div>

          <div className="table-row">
            <div className="table-cell"><strong>.toast-success</strong></div>
            <div className="table-cell">Clase para notificaciones de éxito.</div>
            <div className="table-cell">
              <code>{`<div className="toast toast-success">Éxito</div>`}</code>
            </div>
            <div className="table-cell">
              <div className="toast toast-success" style={{ padding: '1rem', backgroundColor: '#d4edda' }}>
                Éxito: La operación fue exitosa.
              </div>
            </div>
          </div>

          <div className="table-row">
            <div className="table-cell"><strong>.toast-danger</strong></div>
            <div className="table-cell">Clase para notificaciones de error.</div>
            <div className="table-cell">
              <code>{`<div className="toast toast-danger">Error</div>`}</code>
            </div>
            <div className="table-cell">
              <div className="toast toast-danger" style={{ padding: '1rem', backgroundColor: '#f8d7da' }}>
                Error: Ocurrió un problema.
              </div>
            </div>
          </div>
        </div>

        <h2>2. Ejemplo Completo de Uso</h2>
        <CopyButton>
          {`import React from 'react';

function ToastExample() {
  return (
    <>
      <div className="toast">
        <div className="toast-header">
          <strong className="me-auto">Encabezado</strong>
          <button type="button" className="btn-close" aria-label="Close"></button>
        </div>
        <div className="toast-body">
          Cuerpo del mensaje de notificación.
        </div>
      </div>
      <div className="toast toast-success">
        <div className="toast-header">
          <strong className="me-auto">Éxito</strong>
          <button type="button" className="btn-close" aria-label="Close"></button>
        </div>
        <div className="toast-body">
          La operación fue exitosa.
        </div>
      </div>
      <div className="toast toast-danger">
        <div className="toast-header">
          <strong className="me-auto">Error</strong>
          <button type="button" className="btn-close" aria-label="Close"></button>
        </div>
        <div className="toast-body">
          Ocurrió un problema.
        </div>
      </div>
    </>
  );
}`}
        </CopyButton>

        <h3>Notas Adicionales</h3>
        <p>
          Las notificaciones emergentes son temporales y deben desaparecer automáticamente después de un tiempo 
          o pueden ser cerradas manualmente por el usuario. Asegúrate de que el contenido sea claro y conciso 
          para una mejor experiencia de usuario.
        </p>
      </div>
    </div>
  )
}

export default ToastNotifications