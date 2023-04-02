import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import sunniva from '../images/sunniva.jpg';
import geyser from '../images/geyser.jpg';

function Specials() {
  return (
    <article>

      <Container>
        <Row>
          <h1>Specials</h1>
        </Row>
        <Row>
          <Col sm={12} md={2}>
            <img alt="sunniva" src={sunniva} />
          </Col>
          <Col sm={12} md={10}>
            <p>Sunniva 5Kva Pure Sine Wave Inverter with A/C and Solar Charger</p>
            <p>N$9200.00 incl vat</p>
          </Col>
        </Row>
        <Row>
          <Col sm={12} md={3}>
            <img alt="geyser" src={geyser} />
          </Col>
          <Col sm={12} md={9}>
            <p>Solo all in one solar geyser</p>
            <p>N$7750.00 incl vatgeyser</p>
          </Col>
        </Row>
      </Container>
    </article>
  );
}

export default Specials;
