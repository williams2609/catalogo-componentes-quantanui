import React from 'react'


function Whyuse() {
  return (
    <div className='doc'>
    <section className="doc-header">
    <h2>¿Por qué usar Moduluxe?</h2>
    <p>Moduluxe es una biblioteca de componentes diseñada para facilitar la creación de aplicaciones modernas y responsivas. Aquí hay algunas razones por las que deberías considerar su uso:</p>
    <ul>
      <li><strong>Componentes Reutilizables:</strong> Moduluxe ofrece una variedad de componentes preconstruidos que puedes reutilizar en diferentes partes de tu aplicación, lo que ahorra tiempo y esfuerzo.</li>
      <li><strong>Estilos Personalizables:</strong> Todos los componentes vienen con opciones de personalización, permitiéndote ajustar su apariencia para que se alineen con la estética de tu marca.</li>
      <li><strong>Soporte para Accesibilidad:</strong> Los componentes de Moduluxe están diseñados teniendo en cuenta la accesibilidad, asegurando que tu aplicación sea usable para todos.</li>
      <li><strong>Documentación Completa:</strong> La documentación de Moduluxe es clara y detallada, lo que facilita el aprendizaje y la implementación de sus componentes.</li>
      <li><strong>Gran Comunidad:</strong> Al ser una librería popular, cuenta con una comunidad activa que puede ayudarte con preguntas y problemas que puedas encontrar.</li>
    </ul>
    
    <h3>Ejemplo de Uso</h3>
    <p>A continuación, se muestra un ejemplo de cómo utilizar el componente de botón de Moduluxe, que incluye opciones de personalización:</p>
    <pre>
      <code>
  {`import { Boton } from 'moduluxe';
  
  function MiComponente() {
    return (
      <div>
        <button onClick={() => alert('¡Botón presionado!')} color="primary">haz click aqui</<button>
      </div>
    );
  }`}
      </code>
    </pre>
  
    <h3>Integración Sencilla</h3>
    <p>Integrar Moduluxe en tu proyecto es muy sencillo. Simplemente instálalo usando npm o yarn y empieza a utilizar los componentes en cuestión de minutos:</p>
    <pre>
      <code>
  {`npm i moduluxe`}
      </code>
    </pre>
    <p>O si prefieres usar Yarn:</p>
    <pre>
      <code>
  {`yarn add moduluxe`}
      </code>
    </pre>
    
    <h3>Conclusión</h3>
    <p>En resumen, Moduluxe es una excelente opción para desarrolladores que buscan una librería de componentes moderna, accesible y fácil de usar. Con sus componentes reutilizables y personalizables, puede ayudarte a crear aplicaciones atractivas y funcionales rápidamente.</p>
  </section>
  </div>
  )
}

export default Whyuse