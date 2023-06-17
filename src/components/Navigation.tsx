import React from 'react';
import { Navbar, Nav } from 'react-bootstrap';

const Navigation: React.FC = () => {
  const containerStyles: React.CSSProperties = {
    display: 'flex',
    justifyContent: 'center',
  };

  const navStyles: React.CSSProperties = {
    fontSize: '30px',
    padding: '30px',
  };

  const linkStyles: React.CSSProperties = {
    fontSize: '30px',
    color: '#333',
    textDecoration: 'none',
    marginRight: '10px',
    border: '1px solid #333',
    padding: '10px 20px',
    borderRadius: '5px',
  };

  return (
    <div style={containerStyles}>
      <Navbar bg="light" expand="lg" style={navStyles}>
        <Navbar.Toggle aria-controls="basic-navbar-nav" />
        <Navbar.Collapse id="basic-navbar-nav">
          <Nav className="ml-auto">
            <Nav.Link href="#inicio" style={linkStyles}>
              Inicio
            </Nav.Link>
            <Nav.Link href="#acerca-de" style={linkStyles}>
              Acerca de
            </Nav.Link>
            <Nav.Link href="#galeria" style={linkStyles}>
              Galería
            </Nav.Link>
            <Nav.Link href="#contacto" style={linkStyles}>
              Contacto
            </Nav.Link>
          </Nav>
        </Navbar.Collapse>
      </Navbar>
    </div>
  );
};

export default Navigation;
