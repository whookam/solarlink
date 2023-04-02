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
              <NavDropdown.Item eventKey="3.3" href="#/solar-pv-panels">
                Solar PV Panels
              </NavDropdown.Item>
              <NavDropdown.Item eventKey="3.4" href="#/solar-inverter">
                Off Grid Inverter/Charger
              </NavDropdown.Item>
              <NavDropdown.Item eventKey="3.4" href="#/grid-tie-inverters">
                Grid tie Inverters
              </NavDropdown.Item>
              <NavDropdown.Item eventKey="3.5" href="#/hybrid-inverters">
                Hybrid Inverters
              </NavDropdown.Item>
              <NavDropdown.Item eventKey="3.6" href="#/solar-pv-mountings">
                Solar PV Mountings
              </NavDropdown.Item>
              <NavDropdown.Item eventKey="3.7" href="#/solar-charge-controllers">
                Solar PV Charge Controllers
              </NavDropdown.Item>
              <NavDropdown.Item eventKey="3.8" href="#/solar-batteries">
                Solar Batteries
              </NavDropdown.Item>
            </NavDropdown>
            <NavDropdown title="Solar - Waterheating" id="solarWaterDropdown">
              <NavDropdown.Item eventKey="4.1" href="#/solar-waterheating">Solar - Waterheating</NavDropdown.Item>
              <NavDropdown.Divider />
              <NavDropdown.Item eventKey="4.2" href="#/heatpumps">Pool Heatpumps</NavDropdown.Item>
              <NavDropdown.Item eventKey="4.3" href="#/how-heat-pipes-works">How Heat Pipes Works</NavDropdown.Item>
              <NavDropdown.Item eventKey="4.4" href="#/evacuated-tube-systems">Evacuated Tube Systems</NavDropdown.Item>
              <NavDropdown.Item eventKey="4.5" href="#/flat-plate">Flat Place Systems</NavDropdown.Item>
              <NavDropdown.Item eventKey="4.6" href="#/batch-solar-heater">SOLO Batch Solar heater</NavDropdown.Item>
            </NavDropdown>
            <Nav.Item>
              <Nav.Link eventKey="5" href="#/gasmate-gas-geysers">Kwikot Gasmate Gas Geysers</Nav.Link>
            </Nav.Item>    
            <Nav.Item>
              <Nav.Link eventKey="6" href="#/price-list-february-2017">Price List-Kwikot</Nav.Link>
            </Nav.Item>    
            <Nav.Item>
              <Nav.Link eventKey="7" href="#/solar-pv-power-price-list">Solar PV Power Price List</Nav.Link>
            </Nav.Item>    
            <Nav.Item>
              <Nav.Link eventKey="8" href="#/specials">Specials</Nav.Link>
            </Nav.Item>    
            <Nav.Item>
              <Nav.Link eventKey="9" href="#/contact">Contact</Nav.Link>
            </Nav.Item>    
            <Nav.Item>
              <Nav.Link eventKey="10" href="#/references">References</Nav.Link>
            </Nav.Item>    
            <Nav.Item>
              <Nav.Link eventKey="11" href="#/projects">Projects</Nav.Link>
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
