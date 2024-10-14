import React from 'react'
import CopyButton from '../componentes/CopyButton'

function Colaboracion() {
  return (
    <div>
      <div className='doc'>
        <div className='doc-header'>
          <h1>Colaboración</h1>
          <p>
            Nos encantaría que contribuyeras a mejorar nuestra biblioteca de componentes. 
            A continuación, te explicamos cómo puedes hacerlo.
          </p>

          <h2>1. Reportar Problemas</h2>
          <p>
            Si encuentras un error o tienes una sugerencia, por favor, abre un problema en 
            nuestro repositorio de GitHub. Asegúrate de proporcionar la mayor cantidad de 
            detalles posible, como los pasos para reproducir el error.
          </p>
          <CopyButton>
            {`Visita nuestro repositorio: https://github.com/williams2609/catalogo-componentes-quantanui`}
          </CopyButton>
          <p>Colaborar Con La Libreria:</p>
          <CopyButton>
            {`Visita nuestro repositorio: https://github.com/williams2609/libreria-quantunui`}
          </CopyButton>

          <h2>2. Solicitudes de Características</h2>
          <p>
            Si tienes ideas para nuevas características que te gustaría ver, no dudes en 
            compartirlas. Puedes abrir una solicitud de características en el mismo lugar 
            donde reportas problemas.
          </p>

          <h2>3. Contribuir con Código</h2>
          <p>
            Si deseas contribuir con código, sigue estos pasos:
          </p>
          <ol>
            <li>
              <strong>Haz un Fork:</strong> Clona el repositorio a tu propia cuenta de GitHub.
            </li>
            <li>
              <strong>Crea una Rama:</strong> Crea una nueva rama para tu funcionalidad o corrección.
              <CopyButton>
                {`git checkout -b nombre-de-tu-rama`}
              </CopyButton>
            </li>
            <li>
              <strong>Realiza tus Cambios:</strong> Haz los cambios que deseas y prueba tus 
              nuevas funcionalidades.
            </li>
            <li>
              <strong>Envía un Pull Request:</strong> Una vez que estés listo, envía un pull request 
              a la rama principal del repositorio.
            </li>
          </ol>

          <h2>4. Estilo de Código</h2>
          <p>
            Asegúrate de seguir nuestras convenciones de estilo de código al contribuir. 
            Esto incluye el uso de indentaciones, nomenclaturas de variables y estructura de carpetas.
          </p>
          <CopyButton>
            {`Consulta nuestras guías de estilo en el repositorio.`}
          </CopyButton>

          <h2>5. Documentación</h2>
          <p>
            La documentación es clave. Si agregas nuevos componentes o funcionalidades, 
            asegúrate de actualizar la documentación correspondiente para que los demás puedan 
            entender cómo utilizarlos.
          </p>

          <h2>Gracias por Contribuir!</h2>
          <p>
            Apreciamos cualquier ayuda para mejorar nuestra biblioteca. 
            Tu colaboración puede hacer una gran diferencia.
          </p>
        </div>
      </div>
    </div>
  )
}

export default Colaboracion