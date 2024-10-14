import { useRef, useState } from "react";

const CopyButton = ({ children }) => {
  const codeRef = useRef()
    const [copied, setCopied] = useState(false);
  
   
  const handleCopy = async () => {
    try {
      await navigator.clipboard.writeText(codeRef.current.textContent);
      setCopied(true);
      setTimeout(() => setCopied(false), 2000); // Restablecer el estado después de 2 segundos
    } catch (err) {
      console.error('Error al copiar el texto: ', err);
      alert('No se pudo copiar el texto');
    }
  };
  
    return (
      <div className="code-container">
      <div className="contenedor-c" onClick={handleCopy}>
        <i className={copied ? `bi bi-clipboard-check`: "bi bi-clipboard"}></i>
      </div>
      <pre ref={codeRef}>
        <code>{children}</code>
      </pre>
    
    </div>
    );
  };
  
  export default CopyButton;