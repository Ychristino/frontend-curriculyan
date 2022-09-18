// REACT IMPORTS
import React from 'react';

//MODULES IMPORTS

// BOOTSTRAP IMPORTS
import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import NavDropdown from 'react-bootstrap/NavDropdown';
import { Row } from 'react-bootstrap';

//@mui
import GitHub from '@mui/icons-material/GitHub';
import WhatsApp from '@mui/icons-material/WhatsApp';
import LinkedIn from '@mui/icons-material/LinkedIn';

// CSS IMPORTS

function Menu(){

    return(
        <Row className='mb-5'>
            <Navbar collapseOnSelect bg="dark" variant="dark" md={11}>
                <Container>
                    <Navbar.Brand href="/">Yan Christino</Navbar.Brand>
                    <Navbar.Toggle aria-controls="responsive-navbar-nav" />
                    <Navbar.Collapse id="responsive-navbar-nav">
                        <Nav className="me-auto">
                            <Nav.Link href="/curriculo">Currículo</Nav.Link>
                            <Nav.Link href="/projetos">Projetos</Nav.Link>
                        </Nav>
                        
                        <Nav>
                                <a href='https://github.com/Ychristino' target='_blank'>
                                    <GitHub />/ychristino
                                </a>

                                <a href='https://www.linkedin.com/in/yan-christino-6b370820a/' target='_blank'>
                                    <LinkedIn />LinkedIn
                                </a>

                                <a href='https://wa.me/5551982672790' target='_blank'>
                                    <WhatsApp />WhatsApp
                                </a>
                        </Nav>
                    </Navbar.Collapse>
                </Container>
        </Navbar>
    </Row>
  )
}
export default Menu;