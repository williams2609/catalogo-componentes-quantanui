import React from 'react'
import CopyButton from '../componentes/CopyButton'

function Accodion() {
  return (
    <div className="doc">
      <div className="doc-header">
        <h1>Utilidad de Acordeones</h1>
        <p>
          Los acordeones son componentes que permiten mostrar y ocultar contenido de forma 
          colapsable. Son útiles para organizar información en un espacio reducido y mejorar 
          la experiencia del usuario al navegar en interfaces complejas.
        </p>

        <h2>1. Ejemplo de Clases de Acordeones</h2>
        <p>
          A continuación se muestra un ejemplo de cómo utilizar las clases de acordeón:
        </p>

        <div className="fondo-table">
          <div className="table-row">
            <div className="table-cell"><strong>Clase</strong></div>
            <div className="table-cell">Descripción</div>
            <div className="table-cell">Código</div>
            <div className="table-cell">Ejemplo</div>
          </div>

          <div className="table-row">
            <div className="table-cell"><strong>.accordion</strong></div>
            <div className="table-cell">Clase base para el acordeón.</div>
            <div className="table-cell">
              <code>{`<div class="accordion">Contenido del acordeón</div>`}</code>
            </div>
            <div className="table-cell">
              <div className="accordion" style={{ width: '100%' }}>
                <div className="accordion-item">
                  <h2 className="accordion-header">
                    <button className="accordion-button" type="button" data-bs-toggle="collapse" data-bs-target="#collapseOne">
                      Item 1
                    </button>
                  </h2>
                  <div id="collapseOne" className="accordion-collapse collapse show">
                    <div className="accordion-body">
                      Contenido del primer ítem del acordeón.
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>

          <div className="table-row">
            <div className="table-cell"><strong>.accordion-item</strong></div>
            <div className="table-cell">Clase para cada elemento dentro del acordeón.</div>
            <div className="table-cell">
              <code>{`<div class="accordion-item">Contenido</div>`}</code>
            </div>
            <div className="table-cell">
              <div className="accordion-item">
                <h2 className="accordion-header">
                  <button className="accordion-button" type="button" data-bs-toggle="collapse" data-bs-target="#collapseTwo">
                    Item 2
                  </button>
                </h2>
                <div id="collapseTwo" className="accordion-collapse collapse">
                  <div className="accordion-body">
                    Contenido del segundo ítem del acordeón.
                  </div>
                </div>
              </div>
            </div>
          </div>

          <div className="table-row">
            <div className="table-cell"><strong>.accordion-header</strong></div>
            <div className="table-cell">Clase para el encabezado de cada ítem del acordeón.</div>
            <div className="table-cell">
              <code>{`<h2 class="accordion-header">Encabezado</h2>`}</code>
            </div>
            <div className="table-cell">
              <h2 className="accordion-header">
                <button className="accordion-button" type="button" data-bs-toggle="collapse" data-bs-target="#collapseThree">
                  Item 3
                </button>
              </h2>
            </div>
          </div>

          <div className="table-row">
            <div className="table-cell"><strong>.accordion-body</strong></div>
            <div className="table-cell">Clase para el cuerpo de cada ítem del acordeón.</div>
            <div className="table-cell">
              <code>{`<div class="accordion-body">Contenido</div>`}</code>
            </div>
            <div className="table-cell">
              <div className="accordion-body">
                Contenido del cuerpo del acordeón.
              </div>
            </div>
          </div>
        </div>

        <h2>2. Ejemplo Completo de Uso</h2>
        <CopyButton>
          {`import React from 'react';

function AccordionExample() {
  return (
    <div className="accordion" id="accordionExample">
      <div className="accordion-item">
        <h2 className="accordion-header">
          <button className="accordion-button" type="button" data-bs-toggle="collapse" data-bs-target="#collapseOne">
            Primer ítem
          </button>
        </h2>
        <div id="collapseOne" className="accordion-collapse collapse show">
          <div className="accordion-body">
            Contenido del primer ítem del acordeón.
          </div>
        </div>
      </div>
      <div className="accordion-item">
        <h2 className="accordion-header">
          <button className="accordion-button" type="button" data-bs-toggle="collapse" data-bs-target="#collapseTwo">
            Segundo ítem
          </button>
        </h2>
        <div id="collapseTwo" className="accordion-collapse collapse">
          <div className="accordion-body">
            Contenido del segundo ítem del acordeón.
          </div>
        </div>
      </div>
      <div className="accordion-item">
        <h2 className="accordion-header">
          <button className="accordion-button" type="button" data-bs-toggle="collapse" data-bs-target="#collapseThree">
            Tercer ítem
          </button>
        </h2>
        <div id="collapseThree" className="accordion-collapse collapse">
          <div className="accordion-body">
            Contenido del tercer ítem del acordeón.
          </div>
        </div>
      </div>
    </div>
  );
}`}
        </CopyButton>

        <h3>Notas Adicionales</h3>
        <p>
          Asegúrate de que cada acordeón tenga un identificador único para que la funcionalidad de colapso funcione correctamente. 
          Puedes personalizar los estilos según tus necesidades para mejorar la experiencia del usuario.
        </p>
      </div>
    </div>
  )
}

export default Accodion