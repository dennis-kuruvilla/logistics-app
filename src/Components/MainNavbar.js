
import logo from "../Assets/truck1.png"
import "../Styles/navbar.css"
import 'bootstrap/dist/css/bootstrap.min.css'; //importing react-bootstrap in this component because it seems to mess up the classical bootstrap in other components
import {Navbar,Container,Nav,NavDropdown} from "react-bootstrap"

const MainNavbar = () => {

    return(
   
        <Navbar  expand="lg" style={{backgroundColor: " #d1e0e0"}}>
  <Container>
  <Navbar.Brand href="/" className="NavbarTitle mx-auto">
        <img
          alt=""
          src={logo}
          width="90"
          height="50"
          className="d-inline-block align-top"
        />{''}
      <h1>EZ-Chain</h1>
      </Navbar.Brand>
    <Navbar.Toggle aria-controls="basic-navbar-nav" />
    <Navbar.Collapse id="basic-navbar-nav">
      <Nav className="me-auto">
        <Nav.Link href="/">Home</Nav.Link>
        <Nav.Link href="/Products">Product Management</Nav.Link>
        <Nav.Link href="/Shipments">Shipments</Nav.Link>
        <NavDropdown title="Dropdown" id="basic-nav-dropdown">
          <NavDropdown.Item href="#action/3.1">Action</NavDropdown.Item>
          <NavDropdown.Item href="#action/3.2">Another action</NavDropdown.Item>
          
        </NavDropdown>
      </Nav>
    </Navbar.Collapse>
  </Container>
</Navbar>


    )
}

export default MainNavbar