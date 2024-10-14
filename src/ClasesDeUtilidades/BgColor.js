import React from 'react'

function BgColor() {
  return (
    <div className="doc">
      <div className="doc-header">
        <h1>Utilidad de Colores de Fondo (`bg-color`)</h1>
        <p>
          La utilidad <strong>bg-color</strong> permite aplicar colores de fondo a los componentes
          de tu librería de estilos. Admite tanto combinaciones predefinidas de colores como colores completamente
          personalizados mediante clases o estilos en línea.
        </p>

        <h2>1. Clases de Colores Predefinidos</h2>
        <p>
          A continuación se muestra una lista de clases predefinidas que aplican colores específicos:
        </p>

        {/* Tabla con recuadros para cada clase de color predefinido */}
        <div className="color-table">
          <div className="table-row">
            <div className="table-cell"><strong>Clase</strong></div>
            <div className="table-cell">Descripción</div>
            <div className="table-cell">Color Asociado</div>
          </div>
          <div className="table-row">
            <div className="table-cell bg-primary"><strong>.bg-primary</strong></div>
            <div className="table-cell">Color primario</div>
            <div className="table-cell">var(--primary-color)</div>
          </div>
          <div className="table-row">
            <div className="table-cell bg-secondary"><strong>.bg-secondary</strong></div>
            <div className="table-cell">Color secundario</div>
            <div className="table-cell">var(--secondary-color)</div>
          </div>
          <div className="table-row">
            <div className="table-cell bg-success"><strong>.bg-success</strong></div>
            <div className="table-cell">Color éxito</div>
            <div className="table-cell">var(--success-color)</div>
          </div>
          <div className="table-row">
            <div className="table-cell bg-danger"><strong>.bg-danger</strong></div>
            <div className="table-cell">Color peligro</div>
            <div className="table-cell">var(--danger-color)</div>
          </div>
          <div className="table-row">
            <div className="table-cell bg-warning"><strong>.bg-warning</strong></div>
            <div className="table-cell">Color advertencia</div>
            <div className="table-cell">#ffc107</div>
          </div>
          <div className="table-row">
            <div className="table-cell bg-info"><strong>.bg-info</strong></div>
            <div className="table-cell">Color info</div>
            <div className="table-cell">var(--info-color)</div>
          </div>
          <div className="table-row">
            <div className="table-cell bg-light"><strong>.bg-light</strong></div>
            <div className="table-cell">Color claro</div>
            <div className="table-cell">#f8f9fa</div>
          </div>
          <div className="table-row">
            <div className="table-cell bg-dark"><strong>.bg-dark</strong></div>
            <div className="table-cell">Color oscuro</div>
            <div className="table-cell">#343a40</div>
          </div>
          <div className="table-row">
            <div className="table-cell bg-white"><strong>.bg-white</strong></div>
            <div className="table-cell">Color blanco</div>
            <div className="table-cell">#ffffff</div>
          </div>
          <div className="table-row">
            <div className="table-cell bg-transparent"><strong>.bg-transparent</strong></div>
            <div className="table-cell">Transparente</div>
            <div className="table-cell">transparent</div>
          </div>
          {/* Agrega más colores aquí si lo deseas */}
          <div className="table-row">
            <div className="table-cell bg-red"><strong>.bg-red</strong></div>
            <div className="table-cell">Rojo</div>
            <div className="table-cell">#ff0000</div>
          </div>
          <div className="table-row">
            <div className="table-cell bg-blue"><strong>.bg-blue</strong></div>
            <div className="table-cell">Azul</div>
            <div className="table-cell">#0000ff</div>
          </div>
          <div className="table-row">
            <div className="table-cell bg-green"><strong>.bg-green</strong></div>
            <div className="table-cell">Verde</div>
            <div className="table-cell">#008000</div>
          </div>
          <div className="table-row">
            <div className="table-cell bg-yellow"><strong>.bg-yellow</strong></div>
            <div className="table-cell">Amarillo</div>
            <div className="table-cell">#ffff00</div>
          </div>
          {/* Continúa agregando las demás clases como desees */}
        </div>

        <h2>2. Ejemplos de Colores Predefinidos</h2>
        <p>
          Puedes usar las clases de colores predefinidos combinando los colores
          mencionados anteriormente. Aquí algunos ejemplos:
        </p>
        <div className="code-block">
          <pre>{`<div class="bg-color bg-primary"> 
    Fondo primario 
</div>
<div class="bg-color bg-success"> 
    Fondo de éxito 
</div>`}</pre>
        </div>
        
        <h2>3. Colores Personalizados (Estilos en Línea)</h2>
        <p>
          Para aplicar colores completamente personalizados, puedes usar
          variables CSS con el atributo <strong>style</strong>:
        </p>
        <div className="code-block">
          <pre>{`<div 
    style="background-color: #ff00ff;">
    Fondo personalizado de magenta 
</div>`}</pre>
        </div>
      </div>
    </div>
  )
}

export default BgColor