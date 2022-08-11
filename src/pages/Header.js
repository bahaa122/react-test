import Container from "react-bootstrap/Container";
import Nav from "react-bootstrap/Nav";
import Navbar from "react-bootstrap/Navbar";

function Header() {
  return (
    <>
      <Navbar bg="primary" variant="dark">
        <Container>
          <Navbar.Brand href="#home">Bahaa Mansour</Navbar.Brand>
          <Nav className="me-auto"></Nav>
        </Container>
      </Navbar>
    </>
  );
}

export default Header;
