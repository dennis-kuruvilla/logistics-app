import {  
  Link
} from "react-router-dom"

import logo from "../Assets/truck1.png"
import 'bootstrap/dist/css/bootstrap.min.css'; //importing react-bootstrap in this component because it seems to mess up the classical bootstrap in other components
import {Navbar,Container,Nav,NavDropdown} from "react-bootstrap"
import "../Styles/navbar.css"

const MainNavbar = () => {

  const LinkStyle={textDecoration: 'none',color: 'black' }

    return(
   
        <Navbar  expand="lg" style={{backgroundColor: " #d1e0e0"}}>
  <Container id="navbar">
  <Navbar.Brand  className="NavbarTitle mx-auto">
    <Link to="/" style={LinkStyle}>
        <img
          alt=""
          src={logo}
          width="90"
          height="50"
          className="d-inline-block align-top"
        />{''}
      <h1>EZ-Chain</h1>
      </Link>
      </Navbar.Brand>
    <Navbar.Toggle aria-controls="basic-navbar-nav" />
    <Navbar.Collapse id="basic-navbar-nav">
      <Nav className="me-auto">
        <Nav.Link as={Link} to="/">Home</Nav.Link>
        <Nav.Link as={Link} to="/Products">Product Management</Nav.Link>
        <Nav.Link as={Link} to="/Shipments">Shipments</Nav.Link>
        <NavDropdown title="Dropdown" id="basic-nav-dropdown">
          <NavDropdown.Item to="#action/3.1">Action</NavDropdown.Item>
          <NavDropdown.Item to="#action/3.2">Another action</NavDropdown.Item>
          
        </NavDropdown>
      </Nav>
    </Navbar.Collapse>
  </Container>
</Navbar>


    )
}

export default MainNavbar