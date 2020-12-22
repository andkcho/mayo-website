import React from 'react';
import { Nav, Navbar, NavDropdown, Form, FormControl, Button } from 'react-bootstrap';
import styled from 'styled-components';

// const Styles = styled.div`
// .navbar {
//     background-color: #222
// }

// .navbar-brand, .navbar-nav .nav-link {
//     color: #bbb

//     &:hover {
//         color:white;
//     } 
// }
// `;

export const NavigationBar = () => (
    
<Navbar bg="light" expand="lg">
  <Navbar.Brand href="/">Mayo Website</Navbar.Brand>
  <Navbar.Toggle aria-controls="basic-navbar-nav" />
  <Navbar.Collapse id="basic-navbar-nav">
    <Nav className="mr-auto">
      <Nav.Link href="/">Home</Nav.Link>
      <Nav.Link href="/contact">Contact</Nav.Link>
      <NavDropdown title="More" id="basic-nav-dropdown">
        <NavDropdown.Item href="/about">About</NavDropdown.Item>
        <NavDropdown.Item href="/anotheraction">Another action</NavDropdown.Item>
        <NavDropdown.Item href="something">Something</NavDropdown.Item>
        <NavDropdown.Divider />
        <NavDropdown.Item href="#action/3.4">Separated link</NavDropdown.Item>
      </NavDropdown>
    </Nav>
    <Form inline>
      <FormControl type="text" placeholder="Search" className="mr-sm-2" />
      <Button variant="outline-success">Search</Button>
    </Form>
  </Navbar.Collapse>
</Navbar>
    
)