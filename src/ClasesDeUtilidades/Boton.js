import React from 'react'
import CopyButton from '../componentes/CopyButton'

function Boton() {
  return (
    <div className="doc">
    <div className="doc-header">
      <h1>Utilidad de Botones</h1>
      <p>
        Las clases de botón permiten crear botones estilizados con diferentes colores, tamaños y efectos. Esto mejora la experiencia del usuario al interactuar con la interfaz de tu aplicación.
      </p>

      <h2>1. Ejemplos de Clases de Botón</h2>
      <p>
        A continuación se muestra una tabla con ejemplos de uso de las clases de botón:
      </p>

      <div className="fondo-table">
        <div className="table-row">
          <div className="table-cell"><strong>Clase</strong></div>
          <div className="table-cell">Descripción</div>
          <div className="table-cell">Código</div>
          <div className="table-cell">Ejemplo</div>
        </div>

        <div className="table-row">
          <div className="table-cell"><strong>.btn</strong></div>
          <div className="table-cell">Clase base para todos los botones.</div>
          <div className="table-cell">
            <code>{`<button class="btn">Botón</button>`}</code>
          </div>
          <div className="table-cell">
            <button className="btn">Botón</button>
          </div>
        </div>

        <div className="table-row">
          <div className="table-cell"><strong>.btn-primary</strong></div>
          <div className="table-cell">Botón con estilo primario.</div>
          <div className="table-cell">
            <code>{`<button class="btn btn-primary">Botón Primario</button>`}</code>
          </div>
          <div className="table-cell">
            <button className="btn btn-primary">Botón Primario</button>
          </div>
        </div>

        <div className="table-row">
          <div className="table-cell"><strong>.btn-secondary</strong></div>
          <div className="table-cell">Botón con estilo secundario.</div>
          <div className="table-cell">
            <code>{`<button class="btn btn-secondary">Botón Secundario</button>`}</code>
          </div>
          <div className="table-cell">
            <button className="btn btn-secondary">Botón Secundario</button>
          </div>
        </div>

        <div className="table-row">
          <div className="table-cell"><strong>.btn-success</strong></div>
          <div className="table-cell">Botón con estilo de éxito.</div>
          <div className="table-cell">
            <code>{`<button class="btn btn-success">Botón de Éxito</button>`}</code>
          </div>
          <div className="table-cell">
            <button className="btn btn-success">Botón de Éxito</button>
          </div>
        </div>

        <div className="table-row">
          <div className="table-cell"><strong>.btn-danger</strong></div>
          <div className="table-cell">Botón con estilo de peligro.</div>
          <div className="table-cell">
            <code>{`<button class="btn btn-danger">Botón de Peligro</button>`}</code>
          </div>
          <div className="table-cell">
            <button className="btn btn-danger">Botón de Peligro</button>
          </div>
        </div>

        <div className="table-row">
          <div className="table-cell"><strong>.btn-outline-primary</strong></div>
          <div className="table-cell">Botón con borde primario.</div>
          <div className="table-cell">
            <code>{`<button class="btn btn-outline-primary">Botón Primario Outline</button>`}</code>
          </div>
          <div className="table-cell">
            <button className="btn btn-outline-primary">Botón Primario Outline</button>
          </div>
        </div>

        <div className="table-row">
          <div className="table-cell"><strong>.btn-lg</strong></div>
          <div className="table-cell">Botón grande.</div>
          <div className="table-cell">
            <code>{`<button class="btn btn-lg">Botón Grande</button>`}</code>
          </div>
          <div className="table-cell">
            <button className="btn btn-lg">Botón Grande</button>
          </div>
        </div>

        <div className="table-row">
          <div className="table-cell"><strong>.btn-sm</strong></div>
          <div className="table-cell">Botón pequeño.</div>
          <div className="table-cell">
            <code>{`<button class="btn btn-sm">Botón Pequeño</button>`}</code>
          </div>
          <div className="table-cell">
            <button className="btn btn-sm">Botón Pequeño</button>
          </div>
        </div>

        <div className="table-row">
          <div className="table-cell"><strong>.btn-block</strong></div>
          <div className="table-cell">Botón que ocupa el 100% del ancho.</div>
          <div className="table-cell">
            <code>{`<button class="btn btn-block">Botón Bloque</button>`}</code>
          </div>
          <div className="table-cell">
            <button className="btn btn-block">Botón Bloque</button>
          </div>
        </div>

        <div className="table-row">
          <div className="table-cell"><strong>.btn-fade</strong></div>
          <div className="table-cell">Efecto de desvanecimiento al pasar el ratón.</div>
          <div className="table-cell">
            <code>{`<button class="btn btn-fade">Botón con Fade</button>`}</code>
          </div>
          <div className="table-cell">
            <button className="btn btn-fade">Botón con Fade</button>
          </div>
        </div>

        <div className="table-row">
          <div className="table-cell"><strong>.btn-bounce</strong></div>
          <div className="table-cell">Efecto de rebote al hacer clic.</div>
          <div className="table-cell">
            <code>{`<button class="btn btn-bounce">Botón con Bounce</button>`}</code>
          </div>
          <div className="table-cell">
            <button className="btn btn-bounce">Botón con Bounce</button>
          </div>
        </div>
      </div>

      <h2>2. Ejemplo Completo de Uso</h2>
      <CopyButton>
        {`import React from 'react';

function App() {
return (
  <>
    <h3>Ejemplo de Botones</h3>
    <button className="btn">Botón</button>
    <button className="btn btn-primary">Botón Primario</button>
    <button className="btn btn-secondary">Botón Secundario</button>
    <button className="btn btn-success">Botón de Éxito</button>
    <button className="btn btn-danger">Botón de Peligro</button>
    <button className="btn btn-outline-primary">Botón Primario Outline</button>
    <button className="btn btn-lg">Botón Grande</button>
    <button className="btn btn-sm">Botón Pequeño</button>
    <button className="btn btn-block">Botón Bloque</button>
    <button className="btn btn-fade">Botón con Fade</button>
    <button className="btn btn-bounce">Botón con Bounce</button>
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

export default Boton