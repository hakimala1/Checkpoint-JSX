import {Container, Nav, Navbar} from 'react-bootstrap'
function Entete (){

    return(
        <Navbar bg="dark" variant="dark">
        <Container>
        <Navbar.Brand href="#home">Checkpoint JSX</Navbar.Brand>
        <Nav className="me-auto">
          <Nav.Link href="#home">Home</Nav.Link>
          <Nav.Link href="#about">About</Nav.Link>
          <Nav.Link href="#contact">Contact</Nav.Link>
        </Nav>
        </Container>
      </Navbar>
    );
}

export default Entete;