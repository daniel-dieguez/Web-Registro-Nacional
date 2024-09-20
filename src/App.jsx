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
      <Routes>
        <Route exact path='/inicio' element={<Inicio />} />

        <Route 
          path="/*" 
          element={
            <div style={{ display: 'flex' }}>
              <Navigation />
              <div style={{ marginLeft: '250px', width: '100%' }}>
                <Routes>
                  <Route exact path='/regiones' element={<Regiones />} />
                  <Route exact path='/supervisores' element={<Supervisores />} />
                  <Route exact path='/vendedores' element={<Vendedores />} />
                  <Route exact path='/ventas' element={<Ventas />} />
                  <Route exact path='/contratos' element={<Contratos />} />
                  <Route exact path='/despidos' element={<Despidos />} />
                </Routes>
              </div>
            </div>
          } 
        />
      </Routes>
    </Router>
  )
}
