import React from 'react'
import './estilosClases/bg-gradient.css'
function BackgroundGd() {
  return (
    <div className="doc">
    <div className="doc-header">
      <h1>Utilidad de Gradientes de Fondo (`bg-gradient`)</h1>
      <p>
        La utilidad <strong>bg-gradient</strong> permite aplicar gradientes de fondo a los componentes
        de tu librería de estilos. Admite tanto combinaciones predefinidas de colores como colores completamente
        personalizados mediante clases o estilos en línea.
      </p>

      <h2>1. Clases de Colores Predefinidos</h2>
      <p>
        A continuación se muestra una lista de clases predefinidas que aplican colores específicos
        al inicio del gradiente:
      </p>

      {/* Tabla con recuadros para cada clase de color predefinido */}
      <div className="color-table">
        <div className="table-row">
          <div className="table-cell"><strong>Clase</strong></div>
          <div className="table-cell">Descripción</div>
          <div className="table-cell">Color Asociado</div>
        </div>
        <div className="table-row">
          <div className="table-cell bg-color-red"><strong>.bg-color-red</strong></div>
          <div className="table-cell">Color rojo como inicio</div>
          <div className="table-cell">#ff5733</div>
        </div>
        <div className="table-row">
          <div className="table-cell bg-color-orange"><strong>.bg-color-orange</strong></div>
          <div className="table-cell">Color naranja como inicio</div>
          <div className="table-cell">#ff8c00</div>
        </div>
        <div className="table-row">
          <div className="table-cell bg-color-yellow"><strong>.bg-color-yellow</strong></div>
          <div className="table-cell">Color amarillo como inicio</div>
          <div className="table-cell">#f1c40f</div>
        </div>
        <div className="table-row">
          <div className="table-cell bg-color-green"><strong>.bg-color-green</strong></div>
          <div className="table-cell">Color verde como inicio</div>
          <div className="table-cell">#2ecc71</div>
        </div>
        <div className="table-row">
          <div className="table-cell bg-color-blue"><strong>.bg-color-blue</strong></div>
          <div className="table-cell">Color azul como inicio</div>
          <div className="table-cell">#3498db</div>
        </div>
        <div className="table-row">
          <div className="table-cell bg-color-purple"><strong>.bg-color-purple</strong></div>
          <div className="table-cell">Color púrpura como inicio</div>
          <div className="table-cell">#9b59b6</div>
        </div>
        <div className="table-row">
          <div className="table-cell bg-color-pink"><strong>.bg-color-pink</strong></div>
          <div className="table-cell">Color rosa como inicio</div>
          <div className="table-cell">#ff79c6</div>
        </div>
        <div className="table-row">
          <div className="table-cell bg-color-grey"><strong>.bg-color-grey</strong></div>
          <div className="table-cell">Color gris como inicio</div>
          <div className="table-cell">#7f8c8d</div>
        </div>
      </div>

      <h2>2. Clases de Gradientes Predefinidos</h2>
      <p>
        A continuación se muestra una lista de gradientes predefinidos que puedes aplicar:
      </p>

      {/* Tabla con recuadros para cada clase de gradiente predefinido */}
      <div className="color-table">
        <div className="table-row">
          <div className="table-cell"><strong>Clase</strong></div>
          <div className="table-cell">Descripción</div>
          <div className="table-cell">Gradiente</div>
        </div>
        <div className="table-row">
          <div className="table-cell bg-gradient-red-orange"><strong>.bg-gradient-red-orange</strong></div>
          <div className="table-cell">Gradiente de rojo a naranja</div>
          <div className="table-cell">#ff5733 → #ff8c00</div>
        </div>
        <div className="table-row">
          <div className="table-cell bg-gradient-blue-green"><strong>.bg-gradient-blue-green</strong></div>
          <div className="table-cell">Gradiente de azul a verde</div>
          <div className="table-cell">#3498db → #2ecc71</div>
        </div>
        <div className="table-row">
          <div className="table-cell bg-gradient-purple-pink"><strong>.bg-gradient-purple-pink</strong></div>
          <div className="table-cell">Gradiente de púrpura a rosa</div>
          <div className="table-cell">#9b59b6 → #ff79c6</div>
        </div>
        <div className="table-row">
          <div className="table-cell bg-gradient-yellow-blue"><strong>.bg-gradient-yellow-blue</strong></div>
          <div className="table-cell">Gradiente de amarillo a azul</div>
          <div className="table-cell">#f1c40f → #3498db</div>
        </div>
        <div className="table-row">
          <div className="table-cell bg-gradient-teal-grey"><strong>.bg-gradient-teal-grey</strong></div>
          <div className="table-cell">Gradiente de verde aguamarina a gris</div>
          <div className="table-cell">#1abc9c → #7f8c8d</div>
        </div>
      </div>

      <h2>2. Ejemplos de Gradientes Predefinidos</h2>
       <p> Puedes usar las clases de gradientes predefinidos combinando los colores 
        mencionados anteriormente. Aquí algunos ejemplos: </p> 
        <div className="code-block"> 
            <pre>{`<div class="bg-gradient bg-gradient-red-orange"> 
    Gradiente de rojo a naranja </div> <div class="bg-gradient 
    bg-gradient-blue-green bg-gradient-135"> Gradiente de azul a verde en 135 
    grados </div>`}</pre> 
            </div> 
            <h2>3. Colores Personalizados (Estilos en Línea)</h2>
             <p> Para aplicar colores completamente personalizados, puedes usar 
                variables CSS con el atributo <strong>style</strong>: 
                </p> 
                <div className="code-block"> 
                    <pre>{`<div class="bg-gradient" 
    style="--color-start: #ff00ff; --color-end: #00ffff;">
    Gradiente personalizado de magenta a cian </div>`}</pre> </div>
    </div>
  </div>

  )
}

export default BackgroundGd