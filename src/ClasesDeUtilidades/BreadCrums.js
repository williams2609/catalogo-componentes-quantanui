import React from 'react'
import CopyButton from '../componentes/CopyButton'

function BreadCrums() {
  return (
    <div className="doc">
    <div className="doc-header">
      <h1>Utilidad de Breadcrumbs</h1>
      <p>
        Los breadcrumbs (migas de pan) son un componente de navegación que 
        permite a los usuarios entender su ubicación en una jerarquía dentro de 
        una interfaz. Facilitan la navegación y mejoran la usabilidad del sitio web.
      </p>

      <h2>1. Ejemplo de Clases de Breadcrumbs</h2>
      <p>
        A continuación se muestran ejemplos de cómo utilizar las clases de breadcrumbs:
      </p>

      <div className="fondo-table">
        <div className="table-row">
          <div className="table-cell"><strong>Clase</strong></div>
          <div className="table-cell">Descripción</div>
          <div className="table-cell">Código</div>
          <div className="table-cell">Ejemplo</div>
        </div>

        <div className="table-row">
          <div className="table-cell"><strong>.breadcrumb</strong></div>
          <div className="table-cell">Clase base para el contenedor de breadcrumbs.</div>
          <div className="table-cell">
            <code>{`<nav aria-label="breadcrumb"><ol className="breadcrumb">...</ol></nav>`}</code>
          </div>
          <div className="table-cell">
            <nav aria-label="breadcrumb">
              <ol className="breadcrumb">
                <li className="breadcrumb-item"><a href="#">Inicio</a></li>
                <li className="breadcrumb-item"><a href="#">Biblioteca</a></li>
                <li className="breadcrumb-item active" aria-current="page">Datos</li>
              </ol>
            </nav>
          </div>
        </div>

        <div className="table-row">
          <div className="table-cell"><strong>.breadcrumb-item</strong></div>
          <div className="table-cell">Clase para cada elemento de breadcrumb.</div>
          <div className="table-cell">
            <code>{`<li className="breadcrumb-item"><a href="#">Elemento</a></li>`}</code>
          </div>
          <div className="table-cell">
            <nav aria-label="breadcrumb">
              <ol className="breadcrumb">
                <li className="breadcrumb-item"><a href="#">Inicio</a></li>
                <li className="breadcrumb-item active" aria-current="page">Elemento Activo</li>
              </ol>
            </nav>
          </div>
        </div>

        <div className="table-row">
          <div className="table-cell"><strong>.active</strong></div>
          <div className="table-cell">Clase para el elemento activo (sin enlace).</div>
          <div className="table-cell">
            <code>{`<li className="breadcrumb-item active" aria-current="page">Elemento Activo</li>`}</code>
          </div>
          <div className="table-cell">
            <nav aria-label="breadcrumb">
              <ol className="breadcrumb">
                <li className="breadcrumb-item"><a href="#">Inicio</a></li>
                <li className="breadcrumb-item active" aria-current="page">Elemento Activo</li>
              </ol>
            </nav>
          </div>
        </div>
      </div>

      <h2>2. Ejemplo Completo de Uso</h2>
      <CopyButton>
        {`import React from 'react';

function BreadcrumbsExample() {
return (
  <nav aria-label="breadcrumb">
    <ol className="breadcrumb">
      <li className="breadcrumb-item"><a href="#">Inicio</a></li>
      <li className="breadcrumb-item"><a href="#">Biblioteca</a></li>
      <li className="breadcrumb-item active" aria-current="page">Datos</li>
    </ol>
  </nav>
);
}`}
      </CopyButton>

      <h3>Notas Adicionales</h3>
      <p>
        Asegúrate de utilizar el atributo `aria-current="page"` en el elemento activo para mejorar la accesibilidad. 
        Los breadcrumbs son una excelente manera de ayudar a los usuarios a navegar en sitios con estructuras complejas.
      </p>
    </div>
  </div>
  )
}

export default BreadCrums