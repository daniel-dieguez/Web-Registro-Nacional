import React from 'react'
import { Nav } from 'react-bootstrap';
import { NavLink } from 'react-router-dom';
import Style from '../style/sildebar.module.css'

export default function Navigation() {
  return (
    <div className={Style.sidebar}>
         
        
            <Nav className="flex-column">
              <Nav.Link as={NavLink} to='/inicio'>Inicio</Nav.Link>
              <Nav.Link as={NavLink} to='/regiones'>Regiones</Nav.Link>
              <Nav.Link as={NavLink} to="/supervisores">supervisores</Nav.Link>
              <Nav.Link as={NavLink} to="/vendedores">Vendedores</Nav.Link>
              <Nav.Link as={NavLink} to="/ventas">Ventas</Nav.Link>
              <Nav.Link as={NavLink} to="/contratos">Contratos</Nav.Link>
              <Nav.Link as={NavLink} to="/despidos">Despidos</Nav.Link>
            </Nav>
  
      

    </div>
  )
}
