
import PropTypes from 'prop-types';
import Container from 'react-bootstrap/Container';
import Navbar from 'react-bootstrap/Navbar';
import Nav from 'react-bootstrap/Nav';

export default function Header({ title }) {
  return (
    <Navbar expand="lg" className="custom-navbar">
      <Container>
        <Navbar.Brand href="/" className="brand-logo">
          <span className="brand-icon">✓</span>
          {title}
        </Navbar.Brand>

        <Navbar.Toggle aria-controls="todo-navbar" />

        <Navbar.Collapse id="todo-navbar">
          <Nav className="ms-auto align-items-lg-center">
            <Nav.Link href="/" className="nav-item-custom">
              Home
            </Nav.Link>
            <Nav.Link href="#tasks" className="nav-item-custom">
              My Tasks
            </Nav.Link>
            <Nav.Link href="#about" className="nav-item-custom">
              About
            </Nav.Link>
          </Nav>
        </Navbar.Collapse>
      </Container>
    </Navbar>
  );
}

Header.propTypes = {
  title: PropTypes.string.isRequired,
};

