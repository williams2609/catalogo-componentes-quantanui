import React from 'react'
import './estilosClases/bg-gradient.css'
import CopyButton from '../componentes/CopyButton'
import './estilosClases/bg-gradient.css'
function Animaciones() {
  return (
    <div className="doc">
    <div className="doc-header">
      <h1>Utilidad de Animaciones</h1>
      <p>
        Las clases de animación permiten aplicar efectos visuales a los elementos para mejorar la experiencia del usuario. 
        Esto incluye transiciones, movimientos, y otros efectos dinámicos.
      </p>

      <h2>1. Ejemplos de Clases de Animación</h2>
      <p>
        A continuación se muestra una tabla con ejemplos de uso de las clases de animación:
      </p>

      <div className="fondo-table">
        <div className="table-row">
          <div className="table-cell"><strong>Clase</strong></div>
          <div className="table-cell">Descripción</div>
          <div className="table-cell">Código</div>
          <div className="table-cell">Ejemplo</div>
        </div>

        <div className="table-row">
          <div className="table-cell"><strong>.fade</strong></div>
          <div className="table-cell">Desvanecimiento al entrar</div>
          <div className="table-cell">
            <code>{`<div class="fade">Contenido que se desvanece</div>`}</code>
          </div>
          <div className="table-cell">
            <div className="fade">Contenido que se desvanece</div>
          </div>
        </div>

        <div className="table-row">
          <div className="table-cell"><strong>.slide</strong></div>
          <div className="table-cell">Deslizamiento al entrar</div>
          <div className="table-cell">
            <code>{`<div class="slide">Contenido que se desliza</div>`}</code>
          </div>
          <div className="table-cell">
            <div className="slide-in">Contenido que se desliza</div>
          </div>
        </div>

        <div className="table-row">
          <div className="table-cell"><strong>.shake</strong></div>
          <div className="table-cell">Efecto de sacudida</div>
          <div className="table-cell">
            <code>{`<div class="shake">Contenido que se sacude</div>`}</code>
          </div>
          <div className="table-cell">
            <div className="shake">Contenido que se sacude</div>
          </div>
        </div>

        <div className="table-row">
          <div className="table-cell"><strong>.bounce</strong></div>
          <div className="table-cell">Efecto de rebote al entrar</div>
          <div className="table-cell">
            <code>{`<div class="bounce">¡Rebote!</div>`}</code>
          </div>
          <div className="table-cell">
            <div className="bounce-in">¡Rebote!</div>
          </div>
        </div>

        <div className="table-row">
          <div className="table-cell"><strong>.zoom</strong></div>
          <div className="table-cell">Efecto de zoom al entrar</div>
          <div className="table-cell">
            <code>{`<div class="zoom">¡Zoom!</div>`}</code>
          </div>
          <div className="table-cell">
            <div className="zoom-in">¡Zoom!</div>
          </div>
        </div>

        <div className="table-row">
          <div className="table-cell"><strong>.rotate</strong></div>
          <div className="table-cell">Efecto de rotación</div>
          <div className="table-cell">
            <code>{`<div class="rotate">¡Rotar!</div>`}</code>
          </div>
          <div className="table-cell">
            <div className="rotate">¡Rotar!</div>
          </div>
        </div>

        <div className="table-row">
          <div className="table-cell"><strong>.swing</strong></div>
          <div className="table-cell">Efecto de balanceo</div>
          <div className="table-cell">
            <code>{`<div class="swing">¡Balanceo!</div>`}</code>
          </div>
          <div className="table-cell">
            <div className="swing">¡Balanceo!</div>
          </div>
        </div>

        <div className="table-row">
          <div className="table-cell"><strong>.tada</strong></div>
          <div className="table-cell">Efecto de sorpresa</div>
          <div className="table-cell">
            <code>{`<div class="tada">¡Sorpresa!</div>`}</code>
          </div>
          <div className="table-cell">
            <div className="tada">¡Sorpresa!</div>
          </div>
        </div>

        <div className="table-row">
          <div className="table-cell"><strong>.pulse</strong></div>
          <div className="table-cell">Efecto de latido</div>
          <div className="table-cell">
            <code>{`<div class="pulse">¡Latido!</div>`}</code>
          </div>
          <div className="table-cell">
            <div className="pulse">¡Latido!</div>
          </div>
        </div>
      </div></div></div>
  )
}

export default Animaciones