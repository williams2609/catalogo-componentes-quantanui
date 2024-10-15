import React from 'react'
import CopyButton from '../componentes/CopyButton'

function ImagenesyVideos() {
  return (
    <div className="doc">
      <div className="doc-header">
        <h1>Utilidad de Imágenes y Videos</h1>
        <p>
          Las imágenes y videos son elementos fundamentales en el diseño web. 
          Permiten mejorar la comunicación visual y atraer la atención del usuario. 
          Utilizando clases de utilidad, puedes asegurarte de que tus medios se adaptan correctamente a diferentes tamaños de pantalla.
        </p>

        <h2>1. Ejemplo de Clases de Imágenes</h2>
        <p>
          A continuación se muestran ejemplos de cómo utilizar las clases de imagen:
        </p>

        <div className="fondo-table">
          <div className="table-row">
            <div className="table-cell"><strong>Clase</strong></div>
            <div className="table-cell">Descripción</div>
            <div className="table-cell">Código</div>
            <div className="table-cell">Ejemplo</div>
          </div>

          <div className="table-row">
            <div className="table-cell"><strong>.img-fluid</strong></div>
            <div className="table-cell">Clase para hacer que una imagen sea responsiva.</div>
            <div className="table-cell">
              <code>{`<img src="imagen.jpg" className="img-fluid" alt="Descripción" />`}</code>
            </div>
            <div className="table-cell">
              <img src="https://via.placeholder.com/800x400" className="img-fluid" alt="Ejemplo de imagen responsiva" />
            </div>
          </div>

          <div className="table-row">
            <div className="table-cell"><strong>.img-thumbnail</strong></div>
            <div className="table-cell">Clase para aplicar un estilo de miniatura a la imagen.</div>
            <div className="table-cell">
              <code>{`<img src="imagen.jpg" className="img-thumbnail" alt="Descripción" />`}</code>
            </div>
            <div className="table-cell">
              <img src="https://via.placeholder.com/800x400" className="img-thumbnail" alt="Ejemplo de imagen en miniatura" />
            </div>
          </div>
        </div>

        <h2>2. Ejemplo de Clases de Videos</h2>
        <p>
          A continuación se muestra un ejemplo de cómo utilizar las clases para videos responsivos:
        </p>

        <div className="fondo-table">
          <div className="table-row">
            <div className="table-cell"><strong>Clase</strong></div>
            <div className="table-cell">Descripción</div>
            <div className="table-cell">Código</div>
            <div className="table-cell">Ejemplo</div>
          </div>

          <div className="table-row">
            <div className="table-cell"><strong>.embed-responsive</strong></div>
            <div className="table-cell">Clase base para hacer videos responsivos.</div>
            <div className="table-cell">
              <code>{`<div className="embed-responsive embed-responsive-16by9">`}</code>
            </div>
            <div className="table-cell">
              <div className="embed-responsive embed-responsive-16by9" style={{ height: '200px' }}>
                <iframe 
                  className="embed-responsive-item" 
                  src="https://www.youtube.com/embed/dQw4w9WgXcQ" 
                  allowFullScreen 
                  title="Video de ejemplo" 
                ></iframe>
              </div>
            </div>
          </div>

          <div className="table-row">
            <div className="table-cell"><strong>.embed-responsive-16by9</strong></div>
            <div className="table-cell">Clase para videos con aspecto de 16:9.</div>
            <div className="table-cell">
              <code>{`<div className="embed-responsive embed-responsive-16by9"><iframe ... /></div>`}</code>
            </div>
            <div className="table-cell">
              <div className="embed-responsive embed-responsive-16by9" style={{ height: '200px' }}>
                <iframe 
                  className="embed-responsive-item" 
                  src="https://www.youtube.com/embed/dQw4w9WgXcQ" 
                  allowFullScreen 
                  title="Video de ejemplo"
                ></iframe>
              </div>
            </div>
          </div>
        </div>

        <h2>3. Ejemplo Completo de Uso</h2>
        <CopyButton>
          {`import React from 'react';

function MediaExample() {
  return (
    <div>
      <h2>Imágenes</h2>
      <img src="https://via.placeholder.com/800x400" className="img-fluid" alt="Imagen responsiva" />
      <img src="https://via.placeholder.com/800x400" className="img-thumbnail" alt="Imagen en miniatura" />

      <h2>Videos</h2>
      <div className="embed-responsive embed-responsive-16by9" style={{ height: '200px' }}>
        <iframe 
          classNam
          e="embed-responsive-item" 
          src="https://www.youtube.com/embed/dQw4w9WgXcQ" 
          allowFullScreen 
          title="Video de ejemplo"
        ></iframe>
      </div>
    </div>
  );
}`}
        </CopyButton>

        <h3>Notas Adicionales</h3>
        <p>
          Asegúrate de optimizar las imágenes y videos para una carga más rápida y una mejor experiencia del usuario. 
          También es recomendable utilizar textos alternativos en las imágenes para mejorar la accesibilidad.
        </p>
      </div>
    </div>
  )
}

export default ImagenesyVideos