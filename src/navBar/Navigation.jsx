import React from 'react'
import { Navbar, Container, Nav, NavDropdown } from 'react-bootstrap';
import { NavLink } from 'react-router-dom';

export default function Navigation() {
  return (
    <div>
         <Navbar bg="dark" variant="dark" expand="lg">
        <Container>
          <Navbar.Brand as={NavLink} to="/inicio">Inicio</Navbar.Brand>
          <Navbar.Toggle aria-controls="basic-navbar-nav" />
          <Navbar.Collapse id="basic-navbar-nav">
            <Nav className="me-auto">
              <Nav.Link as={NavLink} to='/regiones'>Regiones</Nav.Link>
            </Nav>
            <Nav>
              <Nav.Link as={NavLink} to="/supervisores">supervisores</Nav.Link>
              <Nav.Link as={NavLink} to="/vendedores">Vendedores</Nav.Link>
              <Nav.Link as={NavLink} to="/ventas">Ventas</Nav.Link>
              <Nav.Link as={NavLink} to="/contratos">Contratos</Nav.Link>
              <Nav.Link as={NavLink} to="/despidos">Despidos</Nav.Link>
            </Nav>

          </Navbar.Collapse>
        </Container>
      </Navbar>

    </div>
  )
}
