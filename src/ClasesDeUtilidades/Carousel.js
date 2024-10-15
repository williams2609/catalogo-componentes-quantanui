import React from 'react'
import CopyButton from '../componentes/CopyButton'

function Carousel() {
  return (
    <div className="doc">
      <div className="doc-header">
        <h1>Utilidad de Carruseles</h1>
        <p>
          Los carruseles son componentes que permiten mostrar múltiples elementos, 
          como imágenes o contenido, en un espacio reducido. Se utilizan para 
          presentar información de manera atractiva y dinámica.
        </p>

        <h2>1. Ejemplo de Clases de Carrusel</h2>
        <p>
          A continuación se muestra un ejemplo de cómo utilizar las clases de carrusel:
        </p>

        <div className="fondo-table">
          <div className="table-row">
            <div className="table-cell"><strong>Clase</strong></div>
            <div className="table-cell">Descripción</div>
            <div className="table-cell">Código</div>
            <div className="table-cell">Ejemplo</div>
          </div>

          <div className="table-row">
            <div className="table-cell"><strong>.carousel</strong></div>
            <div className="table-cell">Clase base para el carrusel.</div>
            <div className="table-cell">
              <code>{`<div class="carousel">Contenido del carrusel</div>`}</code>
            </div>
            <div className="table-cell">
              <div className="carousel" style={{ width: '300px', overflow: 'hidden' }}>
                <div className="carousel-item active">
                  <img src="https://via.placeholder.com/300" alt="Slide 1" />
                </div>
                <div className="carousel-item">
                  <img src="https://via.placeholder.com/300/ff0000" alt="Slide 2" />
                </div>
                <div className="carousel-item">
                  <img src="https://via.placeholder.com/300/00ff00" alt="Slide 3" />
                </div>
              </div>
            </div>
          </div>

          <div className="table-row">
            <div className="table-cell"><strong>.carousel-item</strong></div>
            <div className="table-cell">Clase para cada elemento dentro del carrusel.</div>
            <div className="table-cell">
              <code>{`<div class="carousel-item">Contenido</div>`}</code>
            </div>
            <div className="table-cell">
              <div className="carousel-item" style={{ width: '300px' }}>
                <img src="https://via.placeholder.com/300/0000ff" alt="Slide 4" />
              </div>
            </div>
          </div>

          <div className="table-row">
            <div className="table-cell"><strong>.carousel-control-prev</strong></div>
            <div className="table-cell">Clase para el botón de navegación anterior.</div>
            <div className="table-cell">
              <code>{`<a class="carousel-control-prev" href="#carousel" role="button">Prev</a>`}</code>
            </div>
            <div className="table-cell">
              <a className="carousel-control-prev" href="#carousel" role="button" style={{ display: 'block' }}>
                Anterior
              </a>
            </div>
          </div>

          <div className="table-row">
            <div className="table-cell"><strong>.carousel-control-next</strong></div>
            <div className="table-cell">Clase para el botón de navegación siguiente.</div>
            <div className="table-cell">
              <code>{`<a class="carousel-control-next" href="#carousel" role="button">Next</a>`}</code>
            </div>
            <div className="table-cell">
              <a className="carousel-control-next" href="#carousel" role="button" style={{ display: 'block' }}>
                Siguiente
              </a>
            </div>
          </div>
        </div>

        <h2>2. Ejemplo Completo de Uso</h2>
        <CopyButton>
          {`import React from 'react';

function CarouselExample() {
  return (
    <div id="carouselExample" className="carousel slide" data-ride="carousel">
      <div className="carousel-inner">
        <div className="carousel-item active">
          <img src="https://via.placeholder.com/600x300" className="d-block w-100" alt="Slide 1" />
        </div>
        <div className="carousel-item">
          <img src="https://via.placeholder.com/600x300/ff0000" className="d-block w-100" alt="Slide 2" />
        </div>
        <div className="carousel-item">
          <img src="https://via.placeholder.com/600x300/00ff00" className="d-block w-100" alt="Slide 3" />
        </div>
      </div>
      <a className="carousel-control-prev" href="#carouselExample" role="button" data-slide="prev">
        <span aria-hidden="true">&lt;</span>
        <span className="sr-only">Previous</span>
      </a>
      <a className="carousel-control-next" href="#carouselExample" role="button" data-slide="next">
        <span aria-hidden="true">&gt;</span>
        <span className="sr-only">Next</span>
      </a>
    </div>
  );
}`}
        </CopyButton>

        <h3>Notas Adicionales</h3>
        <p>
          Asegúrate de que las imágenes utilizadas sean responsivas y se ajusten al tamaño del contenedor. 
          Los carruseles también pueden incluir contenido adicional, como texto y botones, para mejorar la interacción del usuario.
        </p>
      </div>
    </div>
  )
}

export default Carousel