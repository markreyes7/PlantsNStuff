import React from 'react'
import Nav from 'react-bootstrap/Nav';
import  Navbar  from 'react-bootstrap/Navbar';
import  NavDropdown  from 'react-bootstrap/NavDropdown';
import { Link, Outlet} from 'react-router-dom';
import Container from 'react-bootstrap/Container';

const Header = () => {
  return (
    <Navbar collapseOnSelect expand="lg" bg="dark" variant="dark">
  <Container>
  <Navbar.Brand >
       <Link to="/">PlantsNStuff</Link>
  </Navbar.Brand>
  <Navbar.Toggle aria-controls="responsive-navbar-nav" />
  <Navbar.Collapse id="responsive-navbar-nav">
    <Nav componentclass="span" className="me-auto">
      <NavDropdown componentclass="span" title="Plants" id="collasible-nav-dropdown" bg="dark">
        <NavDropdown.Item href='/ferns'>
            Ferns
        </NavDropdown.Item>
        <NavDropdown.Item href='/succulents'>
            Succulents
        </NavDropdown.Item>
        <NavDropdown.Item href='/pothos'>
            Pothos
        </NavDropdown.Item>
        <NavDropdown.Divider />
      </NavDropdown>
      <Nav.Link href="#pricing">Pricing</Nav.Link>
    </Nav>
    <Nav>
      <Nav.Link href="#deets">More Care</Nav.Link> 
    </Nav>
  </Navbar.Collapse>
  </Container>
  <Outlet />
</Navbar>

  )
}

export default Header