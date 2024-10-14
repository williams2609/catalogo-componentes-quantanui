import { BrowserRouter} from 'react-router-dom';
import './App.css';
import BarraNavegacion from './componentes/BarraNavegacion';
import MainConten from './componentes/MainConten';



function App() {
  
  return (
    <div className="App">
      <BrowserRouter>
      <BarraNavegacion/>
      <MainConten/>
     </BrowserRouter>
    </div>
  );
}

export default App;
