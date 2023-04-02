import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import FlatPanel from '../images/flatpanel.jpg';

function FlatPlate() {
  return (
    <article>
      <Container>
        <Row>
          <h1>Flat Plate Systems - For Inland Areas</h1>
          <h2>Close coupled pressurised unit with FLAT PLATE COLLECTOR</h2>
        </Row>
        <Row>
          <Col sm={12} md={3}>
            <img alt='flat Panel' src={FlatPanel} />
          </Col>
          <Col sm={12} md={9}>
            <h3>We supply and install:</h3>
            <ul>
              <li>1 OR 2 FLAT PLATE COLLECTORS</li>
              <li>1 X 150L, 200L or 300L indirect Solar Geyser</li>
              <li>POLPROPYLENE GLYCOL HEATING FLUID</li>
              <li>Fitted with electrical element</li>
              <li>Electronic controller with temp. display (optional extra)</li>
              <li>400 kpa pressurised system</li>
              <li>MOUNTING FRAME</li>
            </ul>
            <p>This system combines a collector and storage tank into a close coupled unit. The heated water circulate between the collector and tank by thermosyphoning. The tank has 45 mm insulation and comes complete with electrical element and frame for flat or pitched roof mounting. The complete unit is mounted outside on your roof so there is no danger of water damage to the interior of the house if the tank should leak. Advantages:</p>
            <ul>
              <li>Indirect systems for hard water areas</li>
              <li>Water heated indirectly , will not overheat</li>
            </ul>
          </Col>
        </Row>
      </Container>
    </article>
  );
}

export default FlatPlate;
