import React from 'react'
import Nav from 'react-bootstrap/Nav';
import  Navbar  from 'react-bootstrap/Navbar';
import  NavDropdown  from 'react-bootstrap/NavDropdown';
import Container from 'react-bootstrap/Container';

const Header = () => {
  return (
    <Navbar collapseOnSelect expand="lg" bg="dark" variant="dark">
  <Container>
  <Navbar.Brand href="#home">Plants 'N' Stuff</Navbar.Brand>
  <Navbar.Toggle aria-controls="responsive-navbar-nav" />
  <Navbar.Collapse id="responsive-navbar-nav">
    <Nav className="me-auto">
      <NavDropdown title="Plants" id="collasible-nav-dropdown" bg="dark">
        <NavDropdown.Item href="#action/3.1">Ferns</NavDropdown.Item>
        <NavDropdown.Item href="#action/3.2">Pothos</NavDropdown.Item>
        <NavDropdown.Item href="#action/3.3">Succulents</NavDropdown.Item>
        <NavDropdown.Divider />
      </NavDropdown>
      <Nav.Link href="#pricing">Pricing</Nav.Link>
    </Nav>
    <Nav>
      <Nav.Link href="#deets">More Care</Nav.Link> 
    </Nav>
  </Navbar.Collapse>
  </Container>
</Navbar>
  )
}

export default Header