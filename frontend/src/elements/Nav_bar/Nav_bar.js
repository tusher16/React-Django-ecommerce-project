import React from 'react'
import { Navbar, Nav, Container, NavDropdown } from 'react-bootstrap';

import Logo from '../../elements/Logo/Logo';


function Nav_bar() {
    return(
        
        <Navbar collapseOnSelect expand="lg" bg="light" variant="light"  fixed="top">
                <Container>

                    <Navbar.Brand href="/"><Logo /></Navbar.Brand>
                    <Navbar.Toggle aria-controls="responsive-navbar-nav" />
                    <Navbar.Collapse id="responsive-navbar-nav">
                        
                        <Nav className="me-auto">
                        <Nav.Link href="/home">Home</Nav.Link>
                        <Nav.Link href="/shop">Shop</Nav.Link>

                        <NavDropdown title="Products" id="collasible-nav-dropdown">
                            <NavDropdown.Item href="#action/3.1">Action</NavDropdown.Item>
                            <NavDropdown.Item href="#action/3.2">Another action</NavDropdown.Item>
                            <NavDropdown.Item href="#action/3.3">Something</NavDropdown.Item>
                            <NavDropdown.Divider />
                            <NavDropdown.Item href="#action/3.4">Separated link</NavDropdown.Item>
                        </NavDropdown>
                        </Nav>

                        <Nav >
                            <Nav.Link href="/cart"><i className="fas fa-user"></i>Cart</Nav.Link>
                            <Nav.Link href="/login"><i className="fa-github-square fa-brands"></i>Login</Nav.Link>
                        </Nav>

                    </Navbar.Collapse>

                </Container>
         </Navbar>
    )
}

export default Nav_bar;