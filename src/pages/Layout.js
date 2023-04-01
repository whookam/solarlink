import { Outlet } from "react-router-dom";
import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import NavDropdown from 'react-bootstrap/NavDropdown';

function Layout() {
  return (
    <div id="wrapper">
      <Navbar bg="light" variant="light">
        <Container>
          <Nav activeKey="1">
            <Nav.Item>
              <Nav.Link eventKey="1" href="/solarlink">Home</Nav.Link>
            </Nav.Item>
            <Nav.Item>
              <Nav.Link eventKey="2" href="#/about-us">About us</Nav.Link>
            </Nav.Item>
            <NavDropdown title="Solar Power Generation" id="solorGenDropdown">
              <NavDropdown.Item eventKey="3.1" href="#/solar-power-generation-2">
                Solar Power Generation
              </NavDropdown.Item>
              <NavDropdown.Divider />
              <NavDropdown.Item eventKey="3.2" href="#/on-grid-off-grid-and-hybrid-solar-power-systems">
                On Grid -Off Grid and Hybrid solar Power Systems
              </NavDropdown.Item>
            </NavDropdown>
            <Nav.Item>
              <Nav.Link eventKey="9" href="#/contact">Contact</Nav.Link>
            </Nav.Item>    
          </Nav>
        </Container> 
      </Navbar> 
      <Outlet />
      <footer>
        <div className="column">
            <h3>SOLARLINK</h3>
            <p>
              P.O. Box 8053<br />
              Swakopmund<br />
              Namibia<br/>
              Phone: +264 (81) 2720508
            </p>
        </div>
        <div className="column">
            <p className="copyright">Copyright &copy; 2023</p>
        </div>
      </footer>
    </div>
  );
}

export default Layout;
