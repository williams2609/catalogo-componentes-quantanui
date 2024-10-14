import React from 'react'
import CopyButton from '../componentes/CopyButton'

function Personalizar() {
  return (
    <div>
        <div className='doc'>
            <div className='doc-header'>
                <h1>Personalizacion de Estilos</h1>
                <p>Puedes personalizar los estilos de los componentes utilizando 
                  variables CSS y clases adicionales. A continuación se presentan 
                  algunos ejemplos</p>

                  <p>Si deseas cambiar el color primario de tu aplicación, puedes definir
                     una variable en tu archivo CSS principal:</p>
                
                <CopyButton>
                  {`.css
     :root {
    --color-primario: #3498db; /* Color azul */
    --color-secundario: #2ecc71; /* Color verde */
}`}
                </CopyButton>
                <p>Luego, puedes usar estas variables en tus componentes:</p>
                <CopyButton>
                  {`.btn-primary {
    background-color: var(--color-primario);
    border-color: var(--color-primario);
    }

    .btn-secondary {
    background-color: var(--color-secundario);
    border-color: var(--color-secundario);}
                      `}
                </CopyButton>
                <p>Además, puedes agregar clases específicas para 
                  personalizar aún más los componentes. Por ejemplo:</p>
                  <CopyButton>
                   {`<button class="btn btn-primary custom-class">Botón Personalizado</button>              `}
                  <p>En tu CSS:</p>
                  {`.custom-class {
    font-size: 18px;
    padding: 10px 20px;
    border-radius: 5px;
}`}
                  </CopyButton>
            </div>

        </div>
    </div>
  )
}

export default Personalizar