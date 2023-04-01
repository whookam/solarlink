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
              <Nav.Link eventKey="1" href="/">Home</Nav.Link>
            </Nav.Item>
            <Nav.Item>
              <Nav.Link eventKey="2" href="/about-us">About us</Nav.Link>
            </Nav.Item>
            <NavDropdown title="Solar Power Generation" id="solorGenDropdown">
              <NavDropdown.Item eventKey="3.1" href="/solar-power-generation-2">
                Solar Power Generation
              </NavDropdown.Item>
              <NavDropdown.Divider />
              <NavDropdown.Item eventKey="3.1" href="/on-grid-off-grid-and-hybrid-solar-power-systems">
                On Grid -Off Grid and Hybrid solar Power Systems
              </NavDropdown.Item>
            </NavDropdown>
            <Nav.Item>
              <Nav.Link eventKey="9" href="/contact">Contact 2</Nav.Link>
            </Nav.Item>    
          </Nav>
        </Container> 
      </Navbar> 
      <Outlet />
      <footer>
        <div class="column">
            <h3>SOLARLINK</h3>
            <p>P.O. Box 8053</p>
            <p>Swakopmund</p>
            <p>Namibia</p>
            <p>Phone: +264 (81) 2720508</p>
        </div>
        <div class="column">
            <p class="copyright">Copyright &copy; 2023</p>
        </div>
      </footer>
    </div>
  );
}

export default Layout;