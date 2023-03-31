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
              <Nav.Link eventKey="9" href="/contact">Contact</Nav.Link>
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

{/* <li>
              <Link to="/solar-power-generation">Solar Power Generation</Link>
            </li>
            <li>
              <Link to="/solar-waterheating">Solar - Waterheating</Link>
            </li>
            <li>
              <Link to="/kwikot-gasmate-gas-geysers">Kwikot Gasmate Gas Geysers</Link>
            </li>
            <li>
              <Link to="/price-list-kwikot">Price List-Kwikot</Link>
            </li>
            <li>
              <Link to="/price-list-solar-power">Price List-Solar Power</Link>
            </li>
            <li>
              <Link to="/specials">Specials</Link>
            </li>
            <li>
              <Link to="/contact">Contact</Link>
            </li>
            <li>
              <Link to="/references">References</Link>
            </li>
            <li>
              <Link to="/projects">Projects</Link>
            </li> */}