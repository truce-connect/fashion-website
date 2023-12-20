 import { BsPersonCircle } from "react-icons/bs";
import { RiShoppingBag3Fill } from "react-icons/ri";
import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import NavDropdown from 'react-bootstrap/NavDropdown';
import logo from '../../image/logo.jpg';
import  "./Nav.css"

function BasicExample() {
  return (
    <Navbar expand="lg" className="bg-body-tertiary">
      <Container>
        <Navbar.Brand href="#home"><img src={logo}  className='logo-img' alt=""></img>
        <p className='logo-name'>TRUCE ROYAL</p>
        </Navbar.Brand>
        
        <Navbar.Toggle aria-controls="basic-navbar-nav" />
        <Navbar.Collapse id="basic-navbar-nav">
          <Nav className="me-auto navi" id= "home">
            <Nav.Link id="home" href="#home" className="home">Home</Nav.Link>
            <NavDropdown className="home" title="Store" id="basic-nav-dropdown  home" >
              <NavDropdown.Item href="#action/3.1">Action</NavDropdown.Item>
              <NavDropdown.Item href="#action/3.2">
                Another action
              </NavDropdown.Item>
              <NavDropdown.Item href="#action/3.3">Something</NavDropdown.Item>
              <NavDropdown.Divider />
              <NavDropdown.Item href="#action/3.4">
                Separated link
              </NavDropdown.Item>
            </NavDropdown>
            <Nav.Link id="home" href="#link" className="home">About </Nav.Link>
            <Nav.Link id="home" href="#link" className="home">Blog </Nav.Link>
            <Nav.Link id="home" href="#link"className="home" >Point of sale  </Nav.Link>
            <Nav.Link href="#link" className="home"><BsPersonCircle className="person"/></Nav.Link>
            <Nav.Link href="#link"className="home">login</Nav.Link>
            <Nav.Link className="" href="#link"><RiShoppingBag3Fill  className="shop-bag"/></Nav.Link>
           
          </Nav>
        </Navbar.Collapse>
      </Container>
    </Navbar>
  );
}

export default BasicExample;