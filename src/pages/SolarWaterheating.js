import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import homeImage from '../images/homeSolar.jpg';

function SolarWaterheating() {
  return (
    <article>
      <Container>
        <Row>
          <Col sm={12}>
            <h1>Solar - Waterheating</h1>
          </Col>
        </Row>
        <Row>
          <Col sm={12} md={8}>
            <h2>Solar-Geysers for domestic and commercial purposes</h2>
            <p>Solar Water Heating has been used for hundreds if not thousands of years to heat water. With advances in technology solar water heating systems have become more and more efficient, with Evacuated Tube Solar Water Heatings offering efficiencies of well over 90%. That means that more than 90% of the sun’s energy landing on a surface is converted into heat which can be used to heat water. All units are manufactured in andodised aluminium and stainless steel.</p>
            <p>There are different types and models available. Follow our pages to see the options.</p>
            <p>We also offer solutions to heat up your swimming pool. Heat Pump technology uses Solar Energy. Unlike conventional electric or fossil fuel fired water heaters, heat pumps take heat from the surrounding air and transfer it to the water.</p>
          </Col>
          <Col sm={12} md={4}>
            <img alt='solar panel on roof' src={homeImage} />
          </Col>
        </Row>
      </Container>
    </article>
  );
}

export default SolarWaterheating;
