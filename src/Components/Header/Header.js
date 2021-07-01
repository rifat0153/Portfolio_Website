import React from 'react'
import { Button, Col, Container, Nav, Navbar, NavDropdown, Row } from 'react-bootstrap'

import './styles.css'

export default function Header() {
    return (
        <>
            <Navbar className='color-nav' collapseOnSelect sticky="top" expand="lg"    >
                <Container >
                    <Navbar.Brand lg href="#home">React Portfolio</Navbar.Brand>
                    <Navbar.Toggle aria-controls="responsive-navbar-nav" />
                    <Navbar.Collapse id="responsive-navbar-nav" >

                        <Nav className='me-auto'>

                        </Nav>

                        <Nav className="justify-content-end"  >
                            <Nav.Item style={{ marginRight: 100 }} >
                                <Nav.Link href="/home">Home</Nav.Link>
                            </Nav.Item>
                            <Nav.Item style={{ marginRight: 100 }} >
                                <Nav.Link eventKey="link-1">About</Nav.Link>
                            </Nav.Item>
                            <Nav.Item style={{ marginRight: 100 }} >
                                <Nav.Link eventKey="link-2">Contact</Nav.Link>
                            </Nav.Item>
                        </Nav>

                    </Navbar.Collapse>

                </Container>
            </Navbar>
        </>
    )
}
