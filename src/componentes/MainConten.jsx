import React from 'react'
import { Route, Routes, useLocation } from 'react-router-dom';
import Home from '../paginas/Home';
import Documentacion from '../paginas/documentacion'
import Whyuse from '../paginas/Whyuse';
import SideBar from './SideBar';
import  Navbar  from './BarraNav';
function MainConten() {
    const location = useLocation();

    // Verificar si la ruta actual es de documentación
    const isDocumentationRoute = location.pathname.startsWith('/doc');

  return (
        <div>
      {isDocumentationRoute && <SideBar />} {/* Mostrar el Sidebar solo en rutas de documentación */}
      <Routes>
        <Route path='/' element={<Home />} />
        <Route path='/doc/documentacion/how-to-use' element={<Documentacion />} />
        <Route path='/doc/documentacion/why-use' element={<Whyuse />} />
        <Route path='/doc/componentes/navbar' element={<Navbar />} />
      </Routes>
    </div>
  );
}
    

export default MainConten