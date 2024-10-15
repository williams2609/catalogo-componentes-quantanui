import React from 'react'

import CopyButton from '../componentes/CopyButton';

function Tablas() {
  return (
    <div className='doc'>
    <section className="doc-header">
      <h1>Uso de Componentes de Listas y Tablas</h1>
      <p>A continuación, se muestra varios componentes de listas y tablas en tu aplicación:</p>

      <h3>Ejemplo de Lista</h3>
      <ul className="list-decimal">
        <li>Elemento de Lista 1</li>
        <li>Elemento de Lista 2</li>
        <li>Elemento de Lista 3</li>
      </ul>

      <h3>Ejemplo de Tabla</h3>
      <div className='w-100 d-flex align-items-center justify-content-center'>
      <table className="table bg-white rounded-5 p-3 w-50">
        <thead>
          <tr>
            <th>Nombre</th>
            <th>Edad</th>
            <th>Ciudad</th>
          </tr>
        </thead>
        <tbody>
          <tr>
            <td>Juan</td>
            <td>25</td>
            <td>Madrid</td>
          </tr>
          <tr>
            <td>María</td>
            <td>30</td>
            <td>Barcelona</td>
          </tr>
        </tbody>
      </table>
      </div>

      <h3>Ejemplo de Uso</h3>
      <CopyButton>
        {`import React from 'react';

function App() {
  return (
      <>
          <h3>Ejemplo de Lista</h3>
          <ul className="list-decimal">
              <li>Elemento de Lista 1</li>
              <li>Elemento de Lista 2</li>
              <li>Elemento de Lista 3</li>
          </ul>

          <h3>Ejemplo de Tabla</h3>
          <table className="table">
              <thead>
                  <tr>
                      <th>Nombre</th>
                      <th>Edad</th>
                      <th>Ciudad</th>
                  </tr>
              </thead>
              <tbody>
                  <tr>
                      <td>Juan</td>
                      <td>25</td>
                      <td>Madrid</td>
                  </tr>
                  <tr>
                      <td>María</td>
                      <td>30</td>
                      <td>Barcelona</td>
                  </tr>
              </tbody>
          </table>
      </>
  );
}`}
      </CopyButton>

      <div className="navbar-demo">
        {/* Puedes agregar un demo adicional aquí si es necesario */}
      </div>

      <h3>Notas Adicionales</h3>
      <p>Asegúrate de ajustar las propiedades según sea necesario y personaliza los estilos para que se integren con tu diseño general.</p>
    </section>
  </div>
  )
}

export default Tablas