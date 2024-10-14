import React from 'react'
import { Route, Routes, useLocation } from 'react-router-dom';
import Home from '../paginas/Home';
import Documentacion from '../paginas/documentacion'
import Whyuse from '../paginas/Whyuse';
import SideBar from './SideBar';
import  Navbar  from './SeccionComponentes/BarraNav';
import Personalizar from '../paginas/Personalizar';
import Colaboracion from '../paginas/Colaboracion';
import BackgroundGd from '../ClasesDeUtilidades/BackgroundGd';
import BgColor from '../ClasesDeUtilidades/BgColor';
import Flexbox from '../ClasesDeUtilidades/Flexbox';
import Tablas from '../ClasesDeUtilidades/Tablas';
import Responsive from '../ClasesDeUtilidades/Responsive';
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
        <Route path='/doc/documentacion/personalizacion' element={<Personalizar />} />
        <Route path='/doc/Colaboracion/Colaborar' element={<Colaboracion />} />
        <Route path='/doc/clases/backgroundGd' element={<BackgroundGd />} />
        <Route path='/doc/clases/bgColor' element={<BgColor />} />
        <Route path='/doc/clases/flexBox' element={<Flexbox />} />
        <Route path='/doc/clases/tablas' element={<Tablas />} />
        <Route path='/doc/clases/tablas' element={<Tablas />} />
        <Route path='/doc/clases/responsive' element={<Responsive />} />

        
      </Routes>
    </div>
  );
}
    

export default MainConten