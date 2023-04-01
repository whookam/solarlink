import Alert from 'react-bootstrap/Alert';
import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import ApSystems from '../images/apsystems.jpg';
import SolarPanelsOnHouse from '../images/solarPanelsOnHouse.png';
import SetUp from '../images/APsystems-YC1000-4panels-web.jpg';
import SamilSolarRiver from '../images/SR-5200TL-D.jpg';
import Replus1 from '../images/Replus1500TL01.jpg';
import Replus2 from '../images/Replus1500TL02.jpg';
import Replus3 from '../images/Replus1500TL03.jpg';

function GridTieInverters() {
  return (
    <article>
      <h1>Grid tie Inverters</h1>
      <h2>Micro Inverters</h2>
      <p>We are now also offering micro inverters for grid tied solar PV systems .They have various advantages against stand alone string inverters for certain applications</p>
      <p>A micro inverter is a device that ,in contrast to a string inverter that is connected to multiple solar panels( up to 25 in a 3 phase system), it connects to up to1 to 4 panels only. The inverter is attached directly to the panel mountings. The AC power is fed directly from the inverters to the electrical distribution board</p>
      <h3>ADVANTAGES OVER STRING INVERTERS</h3>
      <p>Small amounts of <a target="_blank" rel="noreferrer" href="https://en.wikipedia.org/wiki/Photovoltaic_system#Shading_and_dirt">shading, debris</a>  on any one solar module, or even a complete module failure, do not disproportionately reduce the output of the entire array.</p>
      <p>Panels can be installed facing different directions without reducing the output of the entire array</p>
      <p>Each microinverter harvests optimum power by performing <a target="_blank" rel="noreferrer" href="https://en.wikipedia.org/wiki/Maximum_power_point_tracking">maximum power point tracking</a> for its connected module</p>
      <p>Reduced DC voltage is an added safety feature;</p>
      <p>No noise disturbance from interior mounted inverter</p>
      <p>Up to 25 years warranty is available</p>
      <p>Extra panels and micro inverters can be easily added later to increase power output</p>

      <h2>The APsystems Microinverters</h2>
      <h2>SINGLE PHASE 220V</h2>
      <Alert variant='light'>
        <p className='strong'>
          The APsystems YC500i with EnergyMaxTM is a grid-tied microinverter with intelligent networking and monitoring systems to ensure maximum efficiency. Highly dependable and cost effective, the YC500i with EnergyMaxTM is optimized to accommodate today’s high output PV modules effectively with up to 548W output and dual MPPT. An integrated ground allows for rapid installation for installers who prefer trunk cable architecture. Half the inverters and half the installation time means real cost savings for residential and commercial customers.
        </p>
        <ul className='strong'>
          <li>High output microinverter with integrated ground</li>
          <li>Single unit connects two solar modules</li>
          <li>Peak output power 548W</li>
          <li>Individual MPPT for each module</li>
          <li>PLC communication & free monitoring</li>
          <li>Ideal for todays high output PV modules</li>
        </ul>
        <img className='imageFrame' alt="AP systems" src={ApSystems} />
        <p className='strong'><a target="_blank" rel="noreferrer" href='https://usa.apsystems.com/resources/library/'>Download datasheet</a></p>
        <img className='imageFrame' alt="AP systems" src={SolarPanelsOnHouse} />
      </Alert>

      <h2>THREE PHASE 380V</h2>
      <p>The world’s first true 3-PHASE 4-panel microinverter!  APsystems YC1000-3</p>
      <p>The YC1000 is the industry’s ﬁrst true 3-phase (phase-balanced & phase-monitored) solar microinverter, handling 277Y/480V grid voltages with 900 watts maximum output, ZigBee communication and an integrated ground. Up to 11 units (44 modules total, 60- or 72-cell) can be linked in a single 15A circuit.</p>
      <p>This groundbreaking technology is only available from APsystems.</p>
      <ul>
        <li>900w AC output</li>
        <li>3 phase output (phase-balanced & phase-monitored)</li>
        <li>277Y / 480V</li>
        <li>ZigBee</li>
        <li>11 units / string (up to 44 PV modules)</li>
        <li>Weight: 8.8 lbs. (4kg)</li>
        <li>10 and 25 year warranties available</li>
      </ul>
      <p className='strong'><a target="_blank" rel="noreferrer" href='https://usa.apsystems.com/resources/library/'>Download datasheet</a></p>
      <img className='imageFrame' alt="AP systems" src={SetUp} />

      <h2>STRING INVERTERS</h2>

      <h3>SAMIL</h3>
      <p>Samil Power develops and manufactures grid-tied PV inverters using leading-edge technology.  Samil Power has presence in over ten Countries and offers inverters certified for over 20 Countries. With two R&D Centres and state of the art manufacturing facilities, Samil Power has been growing steadily and has gained worldwide reputation for reliable high quality products that are safe and efficient for grid-tied solar applications. Samil Power inverters are suitable for domestic, commercial and utility scale PV power systems.</p>
      <h3>SINGLE PHASE 220V</h3>
      <Container>
        <Row>
          <Col sm={4}>
            <img className='imageFrame' alt='samil solar River' src={SamilSolarRiver} />
          </Col>
          <Col sm={8}>
            <h4>Samil Solar River 5200TL-D – 5kW Dual MPPT</h4>
            <p>Part No: SR-5200TL-D</p>
            <ul>
              <li>Rating: 5,000W</li>
              <li>Phases: 1</li>
            </ul>
            <p>Dual MPPT</p>
            <ul>
              <li>IP65 rating for outdoor and indoor mounting</li>
            </ul>
            <p>Standard Interface of Ethernet and RS485 for more flexible configuration and system monitoring</p>
            <p>Multi-lingual 3.5” TFT LCD display</p>
            <p>Easy key pad operation</p>
            <p>Maximum efficiency of 97.6%</p>
          </Col>
        </Row>
      </Container>
      <h2>Renesola</h2>
      <Container>
        <Row>
          <Col sm={6}>
            <p>ReneSola Replus serial inverters take reliability, efficiency, and ease of installation to a whole new level. Replus inverters are perfect for system integrators and end users who require high performance PV inverters for small and medium size solar PV project in industrial, commercial and residential applications. Replus inverters are available in sizes of 1.5 kW to 20 kW, and optimized for cost-efficiency in megawatt size power plants. Transformerless design, high efficiency (Max.97.6%, Euro.97%)Replus1500TL02 Multi MPPT Tracker High Maximum Power Point Tracking (MPPT) accuracy (&gt;99.9%) Wide DC input range (120-590Vdc), compatible with different module technologies Easy wiring, installation, and operation IP 65 design, suitable for indoor and outdoor installation 5 years standard warranty (Optional 10~25 years warranty available)</p>
          </Col>
          <Col sm={6}>
            <img alt='Replus' className='imageFrame fullWidth' src={Replus1} />
            <img alt='Replus' className='imageFrame fullWidth' src={Replus2} />
            <img alt='Replus' className='imageFrame fullWidth' src={Replus3} />
          </Col>
        </Row>
      </Container>
    </article>
  )
}

export default GridTieInverters;
