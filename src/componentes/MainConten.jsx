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
import ElementSize from '../ClasesDeUtilidades/ElementSize';
import BorderRadius from '../ClasesDeUtilidades/BorderRadius';
import BoxShadow from '../ClasesDeUtilidades/BoxShadow';
import Estados from '../ClasesDeUtilidades/Estados';
import Visibilidad from '../ClasesDeUtilidades/Visibilidad';
import Animaciones from '../ClasesDeUtilidades/Animaciones';
import Boton from '../ClasesDeUtilidades/Boton';
import Cards from '../ClasesDeUtilidades/Cards';
import Alert from '../ClasesDeUtilidades/Alert';
import Tooltops from '../ClasesDeUtilidades/Tooltops';
import FormControl from '../ClasesDeUtilidades/FormControl';
import ValidacionForm from '../ClasesDeUtilidades/ValidacionForm';
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
        <Route path='/doc/clases/elementSize' element={<ElementSize />} />
        <Route path='/doc/clases/borderRadius' element={<BorderRadius />} />
        <Route path='/doc/clases/boxShadow' element={<BoxShadow />} />
        <Route path='/doc/clases/estados' element={<Estados />} />
        <Route path='/doc/clases/visibilidad' element={<Visibilidad />} />
        <Route path='/doc/clases/animaciones' element={<Animaciones />} />
        <Route path='/doc/clases/botones' element={<Boton />} />
        <Route path='/doc/clases/cards' element={<Cards />} />
        <Route path='/doc/clases/alert' element={<Alert />} />
        <Route path='/doc/clases/tooltips' element={<Tooltops />} />
        <Route path='/doc/clases/form' element={<FormControl />} />
        <Route path='/doc/clases/validacionForm' element={<ValidacionForm />} />



        
      </Routes>
    </div>
  );
}
    

export default MainConten