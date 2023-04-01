import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import homeImage from '../images/home.jpg';

function Home() {
  return (
    <article>
    <Container>
      <Row>
        <Col sm={8}>
          <h1>Harness the enerfy of the sun for your consumption</h1>
          <p>We offer a wide range of solar products at unbeatable prices. Check out all products and contact us – We do installation of all our products.</p>
          <p>You’ll find details info of our Solar-Hot-Water, Solar-Electric and Pool heating products.</p>
          <p>Get a quote now and be energy independent</p>
        </Col>
        <Col sm={4}>
          <img alt="Solar panels on roof" src={homeImage} />
        </Col>
      </Row>
      <Row>
        <Col>
          <h2 className="red">WE NOW OFFER A LEASE OPTION ON SOLAR PV INSTALLATIONS. IF YOUR ELECTRICITY CONSUMPTION IS MORE 5,000 UNITS PER MONTH, CALL US -YOU WILL SAVE</h2>
          <p>PV INSTALLERS  CONTACT US @  <a href="mailto:chris@solar-namibia.com">chris@solar-namibia.com</a></p>
          <p>for great wholesale prices on all your requirements.</p>
          <p>incl. panels and  mountings,  inverters (on and offgrid ) batteries, solar cable, connectors  charge controllers and LED light bulbs and tubes. We can beat any price on Victron Energy products</p>
        </Col>
      </Row>
    </Container>
    </article>
  );
}

export default Home;
