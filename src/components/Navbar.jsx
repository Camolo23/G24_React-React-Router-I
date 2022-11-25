import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import NavbarBootstrap from 'react-bootstrap/Navbar';
import { Link } from "react-router-dom"



function Navbar() {
    return (
        <NavbarBootstrap bg="danger" variant="dark" expand="lg">
            <Container>
                <NavbarBootstrap.Toggle aria-controls="basic-navbar-nav" />
                <NavbarBootstrap.Collapse id="basic-navbar-nav">
                    <Nav className="me-auto">
                        <Link to="/" className='text-white ms-5 text-decoration-none'>
                            🏠 Home
                        </Link>
                        <Link to="/contacto" className='text-white ms-5 text-decoration-none'>
                            📒 Contacto
                        </Link>
                    </Nav>
                </NavbarBootstrap.Collapse>
                <NavbarBootstrap.Brand href="#home">🎂 Happy Cake</NavbarBootstrap.Brand>
            </Container>
        </NavbarBootstrap>
    );
}

export default Navbar;