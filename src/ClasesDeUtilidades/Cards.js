import React from 'react'
import CopyButton from '../componentes/CopyButton'

function Cards() {
  return (
    <div className="doc">
      <div className="doc-header">
        <h1>Utilidad de Tarjetas</h1>
        <p>
          Las clases de tarjeta permiten crear componentes visuales organizados que pueden contener contenido diverso como texto, imágenes y botones. Son ideales para mostrar información de manera atractiva y estructurada.
        </p>

        <h2>1. Ejemplos de Clases de Tarjeta</h2>
        <p>
          A continuación se muestra una tabla con ejemplos de uso de las clases de tarjeta:
        </p>

        <div className="fondo-table">
          <div className="table-row">
            <div className="table-cell"><strong>Clase</strong></div>
            <div className="table-cell">Descripción</div>
            <div className="table-cell">Código</div>
            <div className="table-cell">Ejemplo</div>
          </div>

          <div className="table-row">
            <div className="table-cell"><strong>.card</strong></div>
            <div className="table-cell">Clase base para crear una tarjeta.</div>
            <div className="table-cell">
              <code>{`<div class="card">Contenido de la tarjeta</div>`}</code>
            </div>
            <div className="table-cell">
              <div className="card" style={{ width: '18rem' }}>
                Contenido de la tarjeta
              </div>
            </div>
          </div>

          <div className="table-row">
            <div className="table-cell"><strong>.card-header</strong></div>
            <div className="table-cell">Encabezado de la tarjeta.</div>
            <div className="table-cell">
              <code>{`<div class="card-header">Encabezado</div>`}</code>
            </div>
            <div className="table-cell">
              <div className="card" style={{ width: '18rem' }}>
                <div className="card-header">Encabezado</div>
                <div className="card-body">Contenido de la tarjeta</div>
              </div>
            </div>
          </div>

          <div className="table-row">
            <div className="table-cell"><strong>.card-body</strong></div>
            <div className="table-cell">Cuerpo de la tarjeta donde va el contenido principal.</div>
            <div className="table-cell">
              <code>{`<div class="card-body">Contenido aquí</div>`}</code>
            </div>
            <div className="table-cell">
              <div className="card" style={{ width: '18rem' }}>
                <div className="card-body">Contenido aquí</div>
              </div>
            </div>
          </div>

          <div className="table-row">
            <div className="table-cell"><strong>.card-footer</strong></div>
            <div className="table-cell">Pie de la tarjeta.</div>
            <div className="table-cell">
              <code>{`<div class="card-footer">Pie de la tarjeta</div>`}</code>
            </div>
            <div className="table-cell">
              <div className="card" style={{ width: '18rem' }}>
                <div className="card-footer">Pie de la tarjeta</div>
              </div>
            </div>
          </div>

          <div className="table-row">
            <div className="table-cell"><strong>.card-title</strong></div>
            <div className="table-cell">Título de la tarjeta.</div>
            <div className="table-cell">
              <code>{`<h5 class="card-title">Título de la Tarjeta</h5>`}</code>
            </div>
            <div className="table-cell">
              <div className="card" style={{ width: '18rem' }}>
                <div className="card-body">
                  <h5 className="card-title">Título de la Tarjeta</h5>
                </div>
              </div>
            </div>
          </div>

          <div className="table-row">
            <div className="table-cell"><strong>.card-text</strong></div>
            <div className="table-cell">Texto adicional de la tarjeta.</div>
            <div className="table-cell">
              <code>{`<p class="card-text">Texto de la tarjeta</p>`}</code>
            </div>
            <div className="table-cell">
              <div className="card" style={{ width: '18rem' }}>
                <div className="card-body">
                  <p className="card-text">Texto de la tarjeta</p>
                </div>
              </div>
            </div>
          </div>

          <div className="table-row">
            <div className="table-cell"><strong>.card-img-top</strong></div>
            <div className="table-cell">Imagen en la parte superior de la tarjeta.</div>
            <div className="table-cell">
              <code>{`<img src="imagen.jpg" class="card-img-top" alt="Imagen de tarjeta">`}</code>
            </div>
            <div className="table-cell">
              <div className="card" style={{ width: '18rem' }}>
                <img src="https://via.placeholder.com/150" className="card-img-top" alt="Imagen de tarjeta" />
                <div className="card-body">Contenido de la tarjeta</div>
              </div>
            </div>
          </div>

          <div className="table-row">
            <div className="table-cell"><strong>.card-img-bottom</strong></div>
            <div className="table-cell">Imagen en la parte inferior de la tarjeta.</div>
            <div className="table-cell">
              <code>{`<img src="imagen.jpg" class="card-img-bottom" alt="Imagen de tarjeta">`}</code>
            </div>
            <div className="table-cell">
              <div className="card" style={{ width: '18rem' }}>
                <div className="card-body">Contenido de la tarjeta</div>
                <img src="https://via.placeholder.com/150" className="card-img-bottom" alt="Imagen de tarjeta" />
              </div>
            </div>
          </div>

          <div className="table-row">
            <div className="table-cell"><strong>.card-img-overlay</strong></div>
            <div className="table-cell">Imagen superpuesta dentro de la tarjeta.</div>
            <div className="table-cell">
              <code>{`<div class="card-img-overlay">Contenido superpuesto</div>`}</code>
            </div>
            <div className="table-cell">
              <div className="card" style={{ width: '18rem', position: 'relative' }}>
                <img src="https://via.placeholder.com/150" className="card-img-top" alt="Imagen de tarjeta" />
                <div className="card-img-overlay">Contenido superpuesto</div>
              </div>
            </div>
          </div>
        </div>

        <h2>2. Ejemplo Completo de Uso</h2>
        <CopyButton>
          {`import React from 'react';

function App() {
  return (
    <>
      <h3>Ejemplo de Tarjetas</h3>
      <div className="card" style={{ width: '18rem' }}>
        <img src="https://via.placeholder.com/150" className="card-img-top" alt="Imagen de tarjeta" />
        <div className="card-body">
          <h5 className="card-title">Título de la Tarjeta</h5>
          <p className="card-text">Texto de la tarjeta</p>
        </div>
        <div className="card-footer">Pie de la tarjeta</div>
      </div>
    </>
  );
}`}
        </CopyButton>
        

        <h3>Notas Adicionales</h3>
        <p>Asegúrate de ajustar las propiedades según sea necesario y personaliza los estilos para que se integren con tu diseño general.</p>
      
      </div>
    </div>

  )
}

export default Cards