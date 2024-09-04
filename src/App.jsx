import React from 'react'
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import Navigation from './navBar/Navigation';
import Inicio from './pages/Inicio';
import Regiones from './pages/Regiones';
import Supervisores from './pages/Supervisores';
import Vendedores from './pages/Vendedores';
import Ventas from './pages/ventas';
import Contratos from './pages/Contratos';
import Despidos from './pages/Despidos';



export default function App() {
  return (
    <Router>
      <div>
      <Navigation></Navigation>
      </div>
      <Routes>
      <Route excat path='/inicio' element={<Inicio/>}></Route>
      <Route excat path='/regiones' element={<Regiones/>}></Route>
      <Route excat path='/supervisores' element={<Supervisores/>}></Route>
      <Route excat path='/vendedores' element={<Vendedores/>}></Route>
      <Route excat path='/ventas' element={<Ventas/>}></Route>
      <Route excat path='/contratos' element={<Contratos/>}></Route>
      <Route excat path='/despidos' element={<Despidos/>}></Route>
      </Routes>
    </Router>
    
  )
}
