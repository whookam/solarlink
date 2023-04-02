import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import EvacuatedImage from '../images/hotwater03.jpg';
import CollectorImage from '../images/hotwater04.jpg';

function EvacuatedTubeSystem() {
  return (
    <article>
      <Container>
        <Row>
          <h1>Evacuated Tube Systems</h1>
        </Row>
        <Row>
          <Col sm={12} md={6}>
            <h2>Option 1 –Split pressurized unit with evacuated tube collector</h2>
            <img alt="evacuated solar panel" src={EvacuatedImage} />
          </Col>
          <Col sm={12} md={6}>
            <h3>We supply and install:</h3>
            <ul>
              <li>1 X Evacuated tube collector sized according to geyesr capacity</li>
              <li>1 X 150L, 200L OR 300L Direct or Indirect SOLAR GEYSER</li>
              <li>Alternatively use your existing geyser</li>
              <li>Fitted with electrical element</li>
              <li>Solar powered pump</li>
              <li>Solar P/V panel to power and control the pump</li>
              <li>All connection Fittings</li>
            </ul>

            <h3>How it works:</h3>
            <p>This system consists of a collector and storage tank, which are separated. Usually the tank is inside and the collector on the roof. The heated water circulates between the collector and the tank by a solar powered pump.</p>
          </Col>
        </Row>
        <Row>
          <Col sm={12} md={2}>
          <img alt="evacuated tube collector" src={CollectorImage} />
          </Col>
          <Col sm={12} md={10}>
            <h2>Option 2 – Close coupled system with evacuated tube collector</h2>
            <h3>We supply and install:</h3>
            <ul>
              <li>1 X Evacuated tube collector sized according to geyesr capacity</li>
              <li>1 X 150L, 200L OR 300L Direct or Indirect SOLAR GEYSER</li>
              <li>Fitted with electrical element</li>
              <li>All connection fittings</li>
            </ul>
            <h3>How it works:</h3>
            <p>This system consists of a collector and storage tank, which are close coupled. The tank  and the collector are situated on the roof. The heated water circulates between the collector and the tank by thermosyphoning</p>
          </Col>
        </Row>
      </Container>
    </article>
  )
};

export default EvacuatedTubeSystem;
